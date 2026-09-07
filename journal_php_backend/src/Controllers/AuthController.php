<?php
namespace App\Controllers;

use App\Core\Controller;
use App\Core\Request;
use App\Core\Response;
use App\Core\Auth;

final class AuthController extends Controller
{
    public function register(): never
    {
        $d = Request::body();
        $this->validateRequired($d, ['name','email','password']);
        if (!filter_var($d['email'], FILTER_VALIDATE_EMAIL)) Response::error('Invalid email.', 422);
        if (strlen($d['password']) < 8) Response::error('Password must be at least 8 characters.', 422);

        $exists = $this->db->prepare("SELECT id FROM users WHERE email=?");
        $exists->execute([$d['email']]);
        if ($exists->fetch()) Response::error('Email already registered.', 409);

        $stmt = $this->db->prepare("INSERT INTO users (name,email,password_hash,university,role,status) VALUES (?,?,?,?,?,?)");
        $stmt->execute([
            trim($d['name']), strtolower(trim($d['email'])), password_hash($d['password'], PASSWORD_DEFAULT),
            $d['university'] ?? null, 'author', 'pending'
        ]);
        $id = (int)$this->db->lastInsertId();
        Response::created(['id'=>$id,'status'=>'pending','message'=>'Registration successful. An administrator may need to activate your account.']);
    }

    public function login(): never
    {
        $d = Request::body();
        $this->validateRequired($d, ['email','password']);

        $stmt = $this->db->prepare("SELECT * FROM users WHERE email=? LIMIT 1");
        $stmt->execute([strtolower(trim($d['email']))]);
        $user = $stmt->fetch();

        if (!$user || !password_verify($d['password'], $user['password_hash'])) {
            Response::error('Invalid email or password.', 401);
        }
        if ($user['status'] !== 'active') Response::error('Account is not active.', 403);

        $this->db->prepare("UPDATE users SET last_login=NOW() WHERE id=?")->execute([$user['id']]);
        unset($user['password_hash']);
        Response::json(['user'=>$user,'token'=>Auth::token((int)$user['id'], $user['role'])]);
    }

    public function me(): never
    {
        $claims = Auth::user();
        $stmt = $this->db->prepare("SELECT id,name,email,university,role,status,email_verified,created_at,updated_at,last_login FROM users WHERE id=?");
        $stmt->execute([$claims['sub']]);
        $u = $stmt->fetch();
        if (!$u) Response::error('User not found.', 404);
        Response::json($u);
    }
}
