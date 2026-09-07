<?php
namespace App\Controllers;

use App\Core\Controller;
use App\Core\Request;
use App\Core\Response;

final class SubmissionController extends Controller
{
    public function index(): never
    {
        $u=$GLOBALS['auth_user'];
        $where=[];$p=[];
        if(($u['role']??'')==='author'){ $where[]='s.user_id=?';$p[]=$u['sub']; }
        if(isset($_GET['status'])){$where[]='s.status=?';$p[]=$_GET['status'];}
        $w=$where?' WHERE '.implode(' AND ',$where):'';
        $s=$this->db->prepare("SELECT s.*,a.title,j.name journal_name,u.name user_name FROM submissions s JOIN articles a ON a.id=s.article_id JOIN journals j ON j.id=s.journal_id JOIN users u ON u.id=s.user_id $w ORDER BY s.submitted_date DESC");
        $s->execute($p); Response::json($s->fetchAll());
    }

    public function create(): never
    {
        $d=Request::body(); $this->validateRequired($d,['article_id','journal_id']);
        $u=$GLOBALS['auth_user']['sub'];
        $s=$this->db->prepare("INSERT INTO submissions(article_id,user_id,journal_id,submitted_file_path,file_name,file_size,status) VALUES (?,?,?,?,?,?,?)");
        $s->execute([(int)$d['article_id'],$u,(int)$d['journal_id'],$d['submitted_file_path']??null,$d['file_name']??null,$d['file_size']??null,'pending']);
        $id=(int)$this->db->lastInsertId();
        $this->db->prepare("UPDATE articles SET status='submitted' WHERE id=? AND submitted_by=?")->execute([$d['article_id'],$u]);
        Response::created($this->table('submissions',(string)$id));
    }

    public function update(array $p): never
    {
        $old=$this->table('submissions',$p['id']); if(!$old) Response::error('Submission not found.',404);
        $d=Request::body(); $status=$d['status']??$old['status']; $comments=$d['reviewer_comments']??$old['reviewer_comments'];
        $reviewedBy=$GLOBALS['auth_user']['sub'];
        $this->db->prepare("UPDATE submissions SET status=?,reviewer_comments=?,reviewed_by=?,reviewed_date=NOW() WHERE id=?")
            ->execute([$status,$comments,$reviewedBy,$p['id']]);
        $new=$this->table('submissions',$p['id']);
        $type=$status==='accepted'?'acceptance':($status==='rejected'?'rejection':'review');
        $this->notify((int)$old['user_id'],$type,'Submission updated',"Your submission #{$p['id']} status is now {$status}.");
        $this->audit('update','submissions',(int)$p['id'],$old,$new);
        Response::json($new);
    }
}
