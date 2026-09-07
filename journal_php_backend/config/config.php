<?php
declare(strict_types=1);

return [
    'app' => [
        'name' => getenv('APP_NAME') ?: 'Journal Publication API',
        'env' => getenv('APP_ENV') ?: 'development',
        'base_url' => rtrim(getenv('APP_URL') ?: 'http://localhost/journal-api', '/'),
        'jwt_secret' => getenv('JWT_SECRET') ?: 'CHANGE_THIS_TO_A_LONG_RANDOM_SECRET',
        'jwt_ttl' => (int)(getenv('JWT_TTL') ?: 86400),
        'upload_dir' => __DIR__ . '/../storage/uploads',
        'max_upload_bytes' => (int)(getenv('MAX_UPLOAD_BYTES') ?: 20971520),
    ],
    'db' => [
        'host' => getenv('DB_HOST') ?: '127.0.0.1',
        'port' => getenv('DB_PORT') ?: '3306',
        'name' => getenv('DB_NAME') ?: 'journal_db',
        'user' => getenv('DB_USER') ?: 'root',
        'pass' => getenv('DB_PASS') ?: '',
        'charset' => 'utf8mb4',
    ],
    'cors' => [
        'origins' => array_values(array_filter(array_map('trim', explode(',', getenv('CORS_ORIGINS') ?: '*')))),
    ],
];
