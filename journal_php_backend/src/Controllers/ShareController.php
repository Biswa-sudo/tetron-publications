<?php
namespace App\Controllers;

use App\Core\Controller;
use App\Core\Response;
use App\Core\Request;

final class ShareController extends Controller
{
    public function create(array $p): never
    {
        $article=$this->table('articles',$p['id']); if(!$article) Response::error('Article not found.',404);
        $d=Request::body(); $token=bin2hex(random_bytes(32));
        $expires=$d['expires_at']??null;
        $s=$this->db->prepare("INSERT INTO sharable_links(article_id,share_token,created_by,expires_at) VALUES (?,?,?,?)");
        $s->execute([$p['id'],$token,$GLOBALS['auth_user']['sub']??null,$expires]);
        Response::created(['token'=>$token,'url'=>$GLOBALS['config']['app']['base_url'].'/share/'.$token,'expires_at'=>$expires]);
    }

    public function resolve(array $p): never
    {
        $s=$this->db->prepare("SELECT sl.*,a.title,a.abstract,a.article_type,a.status,a.journal_id,a.volume_id,a.issue_id,a.publish_date,a.publication_date,a.doi
            FROM sharable_links sl JOIN articles a ON a.id=sl.article_id WHERE sl.share_token=? AND sl.is_active=1");
        $s->execute([$p['token']]); $row=$s->fetch();
        if(!$row) Response::error('Share link not found or inactive.',404);
        if($row['expires_at'] && strtotime($row['expires_at'])<time()) Response::error('Share link expired.',410);
        $this->db->prepare("UPDATE sharable_links SET clicks=clicks+1 WHERE id=?")->execute([$row['id']]);
        Response::json($row);
    }
}
