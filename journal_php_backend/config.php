<?php
// Central configuration loader for journal_php_backend
// Returns an array of configuration values. Safe to include via: $config = require __DIR__ . '/config.php';

if (!function_exists('load_env_file')) {
    function load_env_file(string $path): array
    {
        if (!file_exists($path)) return [];
        $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        $data = [];
        foreach ($lines as $line) {
            $line = trim($line);
            if ($line === '' || strpos($line, '#') === 0) continue;
            if (strpos($line, '=') === false) continue;
            list($k, $v) = explode('=', $line, 2);
            $k = trim($k);
            $v = trim($v);
            $v = trim($v, "\"'");
            $data[$k] = $v;
        }
        return $data;
    }
}

$env = load_env_file(__DIR__ . '/.env');

// Helper to read env with default
if (!function_exists('env')) {
    function env(string $key, $default = null)
    {
        global $env;
        return array_key_exists($key, $env) ? $env[$key] : $default;
    }
}

$config = [
    'app' => [
        'env' => env('APP_ENV', 'production'),
        'debug' => filter_var(env('APP_DEBUG', 'false'), FILTER_VALIDATE_BOOLEAN),
        'url' => env('APP_URL', ''),
        'timezone' => env('TIMEZONE', 'UTC'),
    ],
    'db' => [
        'host' => env('DB_HOST', '127.0.0.1'),
        'port' => env('DB_PORT', '3306'),
        'database' => env('DB_NAME', ''),
        'username' => env('DB_USER', ''),
        'password' => env('DB_PASS', ''),
        'charset' => env('DB_CHARSET', 'utf8mb4'),
    ],
    'cors' => [
        // comma-separated list in .env (or * to allow all)
        'origins' => array_map('trim', explode(',', env('CORS_ORIGINS', '*'))),
    ],
    'pagination' => [
        'per_page' => (int)env('PAGINATION_PER_PAGE', 20),
    ],
    'paths' => [
        'uploads' => realpath(__DIR__ . '/../storage/uploads') ?: __DIR__ . '/../storage/uploads',
    ],
];

return $config;
