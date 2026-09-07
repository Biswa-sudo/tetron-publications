<?php
namespace App\Controllers;

use App\Core\Controller;
use App\Core\Request;
use App\Core\Response;

final class ArticleController extends Controller
{
    public function index(): never
    {
        $page=max(1,Request::int('page',1)); $limit=min(100,max(1,Request::int('limit',20))); $offset=($page-1)*$limit;
        $where=['1=1']; $p=[];
        foreach (['status','article_type','journal_id','volume_id','issue_id'] as $f) {
            if (isset($_GET[$f]) && $_GET[$f] !== '') { $where[]="a.`$f`=?"; $p[]=$_GET[$f]; }
        }
        if (!empty($_GET['q'])) { $where[]="MATCH(a.title,a.abstract) AGAINST(? IN BOOLEAN MODE)"; $p[]=$_GET['q'].'*'; }
        $w=implode(' AND ',$where);
        $count=$this->db->prepare("SELECT COUNT(*) c FROM articles a WHERE $w"); $count->execute($p); $total=(int)$count->fetch()['c'];
        $sql="SELECT a.*, j.name journal_name, v.volume_number, i.issue_number
              FROM articles a
              LEFT JOIN journals j ON j.id=a.journal_id
              LEFT JOIN volumes v ON v.id=a.volume_id
              LEFT JOIN issues i ON i.id=a.issue_id
              WHERE $w ORDER BY a.id DESC LIMIT $limit OFFSET $offset";
        $s=$this->db->prepare($sql); $s->execute($p);
        Response::json(['items'=>$s->fetchAll(),'pagination'=>['page'=>$page,'limit'=>$limit,'total'=>$total,'pages'=>(int)ceil($total/$limit)]]);
    }

    public function show(array $p): never
    {
        $s=$this->db->prepare("SELECT a.*,j.name journal_name,v.volume_number,v.name volume_name,i.issue_number,i.name issue_name
            FROM articles a LEFT JOIN journals j ON j.id=a.journal_id LEFT JOIN volumes v ON v.id=a.volume_id LEFT JOIN issues i ON i.id=a.issue_id WHERE a.id=?");
        $s->execute([$p['id']]); $a=$s->fetch();
        if(!$a) Response::error('Article not found.',404);

        $x=$this->db->prepare("SELECT * FROM article_authors WHERE article_id=? ORDER BY author_order"); $x->execute([$p['id']]); $a['authors']=$x->fetchAll();
        $x=$this->db->prepare("SELECT * FROM article_metadata WHERE article_id=?"); $x->execute([$p['id']]); $a['metadata']=$x->fetch() ?: null;
        $x=$this->db->prepare("SELECT aj.*,j.name journal_name FROM article_journals aj JOIN journals j ON j.id=aj.journal_id WHERE aj.article_id=?"); $x->execute([$p['id']]); $a['journals']=$x->fetchAll();
        $x=$this->db->prepare("SELECT * FROM files WHERE article_id=? ORDER BY uploaded_at DESC"); $x->execute([$p['id']]); $a['files']=$x->fetchAll();
        Response::json($a);
    }

    public function create(): never
    {
        $d=Request::body(); $this->validateRequired($d,['title','article_type']);
        $fields=['title','abstract','article_type','pages','status','journal_id','volume_id','issue_id','publish_date','issue_date','publication_date','corresponding_author','corresponding_email','doi','version_of_record','cite_this_article','published_by','version_number','submitted_by','published_version'];
        $d=array_intersect_key($d,array_flip($fields));
        $d['submitted_by']=$d['submitted_by'] ?? ($GLOBALS['auth_user']['sub'] ?? null);
        if(isset($d['published_version']) && is_array($d['published_version'])) $d['published_version']=json_encode($d['published_version']);
        $cols=array_keys($d); $sql="INSERT INTO articles (`".implode('`,`',$cols)."`) VALUES (".implode(',',array_fill(0,count($cols),'?')).")";
        $s=$this->db->prepare($sql); $s->execute(array_values($d)); $id=(int)$this->db->lastInsertId();

        $this->saveChildren($id,$d);
        $this->audit('create','articles',$id,null,$this->table('articles',(string)$id));
        Response::created(['id'=>$id]+($this->table('articles',(string)$id) ?: []));
    }

    public function update(array $p): never
    {
        $old=$this->table('articles',$p['id']); if(!$old) Response::error('Article not found.',404);
        $d=Request::body();
        $fields=['title','abstract','article_type','pages','status','journal_id','volume_id','issue_id','publish_date','issue_date','publication_date','corresponding_author','corresponding_email','doi','version_of_record','cite_this_article','published_by','version_number','published_version'];
        $data=array_intersect_key($d,array_flip($fields));
        if(isset($data['published_version']) && is_array($data['published_version'])) $data['published_version']=json_encode($data['published_version']);
        if($data){$sets=[];$pms=[];foreach($data as $k=>$v){$sets[]="`$k`=?";$pms[]=$v;}$pms[]=$p['id'];$this->db->prepare("UPDATE articles SET ".implode(',',$sets)." WHERE id=?")->execute($pms);}
        $this->saveChildren((int)$p['id'],$d);
        $new=$this->table('articles',$p['id']); $this->audit('update','articles',(int)$p['id'],$old,$new); Response::json($new);
    }

    private function saveChildren(int $id,array $d): void
    {
        if(array_key_exists('authors',$d) && is_array($d['authors'])){
            $this->db->prepare("DELETE FROM article_authors WHERE article_id=?")->execute([$id]);
            $s=$this->db->prepare("INSERT INTO article_authors(article_id,user_id,name,email,affiliation,institution,country,is_corresponding,author_order) VALUES (?,?,?,?,?,?,?,?,?)");
            foreach($d['authors'] as $i=>$a) $s->execute([$id,$a['user_id']??null,$a['name']??'',$a['email']??null,$a['affiliation']??null,$a['institution']??null,$a['country']??null,!empty($a['is_corresponding'])?1:0,$a['author_order']??($i+1)]);
        }
        if(array_key_exists('metadata',$d) && is_array($d['metadata'])){
            $m=$d['metadata']; $this->db->prepare("INSERT INTO article_metadata(article_id,references_text,funding_info,publisher_note,rights_and_permissions,share_this_article,additional_information) VALUES (?,?,?,?,?,?,?)
                ON DUPLICATE KEY UPDATE references_text=VALUES(references_text),funding_info=VALUES(funding_info),publisher_note=VALUES(publisher_note),rights_and_permissions=VALUES(rights_and_permissions),share_this_article=VALUES(share_this_article),additional_information=VALUES(additional_information)")
                ->execute([$id,$m['references_text']??null,$m['funding_info']??null,$m['publisher_note']??null,$m['rights_and_permissions']??null,$m['share_this_article']??null,isset($m['additional_information'])?json_encode($m['additional_information']):null]);
        }
        if(array_key_exists('journal_ids',$d) && is_array($d['journal_ids'])){
            $this->db->prepare("DELETE FROM article_journals WHERE article_id=?")->execute([$id]);
            $s=$this->db->prepare("INSERT IGNORE INTO article_journals(article_id,journal_id,is_recent_publication) VALUES (?,?,?)");
            foreach($d['journal_ids'] as $j) $s->execute([$id,(int)$j,0]);
        }
    }

    public function delete(array $p): never
    {
        $old=$this->table('articles',$p['id']); if(!$old) Response::error('Article not found.',404);
        $this->db->prepare("DELETE FROM articles WHERE id=?")->execute([$p['id']]);
        $this->audit('delete','articles',(int)$p['id'],$old,null); Response::json(['deleted'=>true]);
    }

    public function publish(array $p): never
    {
        $old=$this->table('articles',$p['id']); if(!$old) Response::error('Article not found.',404);
        $d=Request::body(); $doi=$d['doi']??$old['doi']; $date=$d['publication_date']??date('Y-m-d');
        $this->db->prepare("UPDATE articles SET status='published',publication_date=?,publish_date=?,doi=?,published_by=? WHERE id=?")
            ->execute([$date,$date,$doi,$GLOBALS['auth_user']['sub']??null,$p['id']]);
        $new=$this->table('articles',$p['id']); $this->audit('publish','articles',(int)$p['id'],$old,$new); Response::json($new);
    }
}
