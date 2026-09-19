<?php
// Bootstrap helper to initialize common environment settings for journal_php_backend
// Usage: require __DIR__ . '/bootstrap.php';

$config = require __DIR__ . '/config.php';

// Set timezone
date_default_timezone_set($config['app']['timezone'] ?? 'UTC');

// Basic JSON header for API responses (can be overridden)
if (php_sapi_name() !== 'cli') {
    header('Content-Type: application/json; charset=utf-8');
}

// CORS handling (development-friendly)
if (isset($_SERVER['HTTP_ORIGIN'])) {
    $origin = $_SERVER['HTTP_ORIGIN'];
    $allowed = $config['cors']['origins'] ?? ['*'];
    if (in_array('*', $allowed) || in_array($origin, $allowed)) {
        header('Access-Control-Allow-Origin: ' . $origin);
        header('Access-Control-Allow-Credentials: true');
    }
}
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // short-circuit for preflight
    http_response_code(204);
    exit;
}

// PDO factory
if (!function_exists('get_pdo')) {
    function get_pdo()
    {
        static $pdo = null;
        if ($pdo) return $pdo;
        $config = require __DIR__ . '/config.php';
        $db = $config['db'];
        $dsn = sprintf('mysql:host=%s;port=%s;dbname=%s;charset=%s', $db['host'], $db['port'], $db['database'], $db['charset']);
        try {
            $pdo = new PDO($dsn, $db['username'], $db['password'], [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['success' => false, 'error' => 'Database connection failed', 'details' => $e->getMessage()]);
            exit;
        }
        return $pdo;
    }
}
