<?php
// Simple PHP API for journals
require __DIR__ . '/../bootstrap.php';

$config = require __DIR__ . '/../config.php';
$debug = $config['app']['debug'] ?? false;

$pdo = get_pdo();

$action = $_REQUEST['action'] ?? 'list';

try {
    if ($action === 'list') {
        $stmt = $pdo->query('SELECT id, name FROM journal ORDER BY id DESC');
        $rows = $stmt->fetchAll();
        echo json_encode(['success' => true, 'data' => $rows]);
        exit;
    }

    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'unknown action']);
} catch (Exception $e) {
    http_response_code(500);
    $payload = ['success' => false, 'error' => 'server_error'];
    if ($debug) $payload['details'] = $e->getMessage();
    echo json_encode($payload);
}

// End of file
