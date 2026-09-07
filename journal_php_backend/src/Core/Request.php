<?php
namespace App\Core;

final class Request
{
    public static function body(): array
    {
        $raw = file_get_contents('php://input') ?: '';
        if ($raw === '') return [];
        $data = json_decode($raw, true);
        if (!is_array($data)) Response::error('Request body must be valid JSON.', 422);
        return $data;
    }

    public static function bearerToken(): ?string
    {
        $header = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
        if (preg_match('/Bearer\s+(.+)/i', $header, $m)) return trim($m[1]);
        return null;
    }

    public static function query(string $key, mixed $default = null): mixed
    {
        return $_GET[$key] ?? $default;
    }

    public static function int(string $key, ?int $default = null): ?int
    {
        return isset($_GET[$key]) ? (int)$_GET[$key] : $default;
    }
}
