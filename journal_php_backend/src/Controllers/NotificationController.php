<?php
namespace App\Controllers;

use App\Core\Controller;
use App\Core\Request;
use App\Core\Response;

final class NotificationController extends Controller
{
    public function index(): never
    {
        $u=$GLOBALS['auth_user']['sub'];
        $s=$this->db->prepare("SELECT * FROM notifications WHERE user_id=? ORDER BY created_at DESC LIMIT 100"); $s->execute([$u]);
        Response::json($s->fetchAll());
    }
    public function read(array $p): never
    {
        $u=$GLOBALS['auth_user']['sub'];
        $s=$this->db->prepare("UPDATE notifications SET is_read=1 WHERE id=? AND user_id=?"); $s->execute([$p['id'],$u]);
        Response::json(['updated'=>true]);
    }
}
