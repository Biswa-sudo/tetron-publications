<?php
require __DIR__ . '/../bootstrap.php';

$config = require __DIR__ . '/../config.php';
$debug = $config['app']['debug'] ?? false;
$pdo = get_pdo();

$action = $_REQUEST['action'] ?? 'list';

try {
    if ($action === 'list') {
        $stmt = $pdo->query('SELECT id, name, from_date, to_date FROM volumes ORDER BY id DESC');
        $rows = $stmt->fetchAll();

        foreach ($rows as &$row) {
            $row['fromDate'] = $row['from_date'] ? substr($row['from_date'], 0, 7) : null;
            $row['toDate'] = $row['to_date'] ? substr($row['to_date'], 0, 7) : null;
            unset($row['from_date'], $row['to_date']);
        }

        echo json_encode(['success' => true, 'data' => $rows]);
        exit;
    }

    if ($action === 'create' || $action === 'update') {
        $input = json_decode(file_get_contents('php://input'), true);
        if (!is_array($input)) {
            $input = $_POST;
        }

        $name = trim($input['name'] ?? '');
        $fromDate = $input['fromDate'] ?? ($input['from_date'] ?? '');
        $toDate = $input['toDate'] ?? ($input['to_date'] ?? '');

        $errors = [];
        if ($name === '') {
            $errors[] = 'name is required';
        }
        if (!preg_match('/^\d{4}-\d{2}$/', $fromDate)) {
            $errors[] = 'fromDate must be YYYY-MM';
        }
        if (!preg_match('/^\d{4}-\d{2}$/', $toDate)) {
            $errors[] = 'toDate must be YYYY-MM';
        }
        if ($fromDate && $toDate && $fromDate > $toDate) {
            $errors[] = 'toDate must be after fromDate';
        }

        if ($errors) {
            http_response_code(400);
            echo json_encode(['success' => false, 'errors' => $errors]);
            exit;
        }

        $fromDateSql = $fromDate . '-01';
        $toDateSql = $toDate . '-01';

        if ($action === 'create') {
            $stmt = $pdo->prepare('INSERT INTO volumes (name, from_date, to_date) VALUES (:name, :from_date, :to_date)');
            $stmt->execute([
                ':name' => $name,
                ':from_date' => $fromDateSql,
                ':to_date' => $toDateSql,
            ]);

            echo json_encode([
                'success' => true,
                'id' => (int)$pdo->lastInsertId(),
            ]);
            exit;
        }

        $id = isset($_REQUEST['id']) ? (int)$_REQUEST['id'] : (int)($input['id'] ?? 0);
        if (!$id) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'missing id for update']);
            exit;
        }

        $stmt = $pdo->prepare('UPDATE volumes SET name = :name, from_date = :from_date, to_date = :to_date WHERE id = :id');
        $stmt->execute([
            ':name' => $name,
            ':from_date' => $fromDateSql,
            ':to_date' => $toDateSql,
            ':id' => $id,
        ]);

        echo json_encode(['success' => true, 'updated' => (int)$stmt->rowCount()]);
        exit;
    }

    if ($action === 'delete') {
        $id = isset($_REQUEST['id']) ? (int)$_REQUEST['id'] : 0;
        if (!$id) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'missing id']);
            exit;
        }

        $stmt = $pdo->prepare('DELETE FROM volumes WHERE id = :id');
        $stmt->execute([':id' => $id]);
        echo json_encode(['success' => true, 'deleted' => (int)$stmt->rowCount()]);
        exit;
    }

    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'unknown action']);
} catch (Exception $e) {
    http_response_code(500);
    $payload = ['success' => false, 'error' => 'server_error'];
    if ($debug) {
        $payload['details'] = $e->getMessage();
    }
    echo json_encode($payload);
}
