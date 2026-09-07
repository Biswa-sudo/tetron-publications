<?php
namespace App\Core;

final class Response
{
    public static function json(mixed $data, int $status = 200): never
    {
        http_response_code($status);
        echo json_encode(['success' => true, 'data' => $data], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        exit;
    }

    public static function error(string $message, int $status = 400, array $details = []): never
    {
        http_response_code($status);
        echo json_encode(['success' => false, 'message' => $message, 'details' => $details], JSON_UNESCAPED_UNICODE);
        exit;
    }

    public static function created(mixed $data): never { self::json($data, 201); }
}
