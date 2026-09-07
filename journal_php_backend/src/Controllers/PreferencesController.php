<?php
namespace App\Controllers;

use App\Core\Controller;
use App\Core\Request;
use App\Core\Response;

final class PreferencesController extends Controller
{
    public function show(): never
    {
        $u=$GLOBALS['auth_user']['sub']; $s=$this->db->prepare("SELECT * FROM user_preferences WHERE user_id=?"); $s->execute([$u]);
        $r=$s->fetch(); if($r && isset($r['preferences'])) $r['preferences']=json_decode($r['preferences'],true);
        Response::json($r ?: ['user_id'=>$u,'preferences'=>new \stdClass()]);
    }
    public function save(): never
    {
        $u=$GLOBALS['auth_user']['sub']; $d=Request::body();
        $prefs=$d['preferences']??$d;
        $json=json_encode($prefs);
        $this->db->prepare("INSERT INTO user_preferences(user_id,preferences) VALUES (?,?) ON DUPLICATE KEY UPDATE preferences=VALUES(preferences)")
            ->execute([$u,$json]);
        Response::json(['user_id'=>$u,'preferences'=>$prefs]);
    }
}
