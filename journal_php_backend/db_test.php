<?php
// Simple DB connectivity tester for journal_php_backend
require __DIR__ . '/bootstrap.php';

try {
    $pdo = get_pdo();
    // quick check: ensure we can run a simple select
    $stmt = $pdo->query('SELECT 1 AS ok');
    $res = $stmt->fetch();
    echo json_encode(['success' => true, 'db_ok' => (int)$res['ok']]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
