<?php
namespace App\Core;

final class Auth
{
    public static function token(int $userId, string $role): string
    {
        $header = self::b64(json_encode(['alg'=>'HS256','typ'=>'JWT']));
        $payload = self::b64(json_encode([
            'sub' => $userId,
            'role' => $role,
            'iat' => time(),
            'exp' => time() + $GLOBALS['config']['app']['jwt_ttl'],
        ]));
        $sig = self::b64(hash_hmac('sha256', "$header.$payload", $GLOBALS['config']['app']['jwt_secret'], true));
        return "$header.$payload.$sig";
    }

    public static function user(): array
    {
        $token = Request::bearerToken();
        if (!$token) Response::error('Authentication required.', 401);

        $parts = explode('.', $token);
        if (count($parts) !== 3) Response::error('Invalid token.', 401);

        [$h,$p,$s] = $parts;
        $expected = self::b64(hash_hmac('sha256', "$h.$p", $GLOBALS['config']['app']['jwt_secret'], true));
        if (!hash_equals($expected, $s)) Response::error('Invalid token.', 401);

        $payload = json_decode(self::unb64($p), true);
        if (!is_array($payload) || empty($payload['sub']) || ($payload['exp'] ?? 0) < time()) {
            Response::error('Token expired or invalid.', 401);
        }
        return $payload;
    }

    public static function requireRole(array|string $roles): callable
    {
        $roles = (array)$roles;
        return function () use ($roles) {
            $u = self::user();
            if (!in_array($u['role'] ?? '', $roles, true)) Response::error('Forbidden.', 403);
            $GLOBALS['auth_user'] = $u;
        };
    }

    public static function requireAuth(): callable
    {
        return function () {
            $GLOBALS['auth_user'] = self::user();
        };
    }

    private static function b64(string $v): string { return rtrim(strtr(base64_encode($v), '+/', '-_'), '='); }
    private static function unb64(string $v): string { return base64_decode(strtr($v, '-_', '+/')) ?: ''; }
}
