<?php
// Simple PHP API for issues and volumes
require __DIR__ . '/../bootstrap.php';

$config = require __DIR__ . '/../config.php';
$debug = $config['app']['debug'] ?? false;

$pdo = get_pdo();

$action = $_REQUEST['action'] ?? 'list';

try {
    if ($action === 'list') {
        $stmt = $pdo->query(
            "SELECT i.id, i.name, i.issue_date, i.volume_id, v.name AS volume_name
             FROM issues i
             LEFT JOIN volumes v ON i.volume_id = v.id
             ORDER BY i.issue_date DESC"
        );
        $rows = $stmt->fetchAll();
        // convert issue_date (YYYY-MM-DD) to YYYY-MM for client
        foreach ($rows as &$r) {
            $r['date'] = substr($r['issue_date'], 0, 7);
            unset($r['issue_date']);
        }
        echo json_encode(['success' => true, 'data' => $rows]);
        exit;
    }

    if ($action === 'volumes') {
        $stmt = $pdo->query("SELECT id, name, from_date, to_date FROM volumes ORDER BY id DESC");
        $vols = $stmt->fetchAll();
        // convert dates to YYYY-MM
        foreach ($vols as &$v) {
            $v['fromDate'] = $v['from_date'] ? substr($v['from_date'], 0, 7) : null;
            $v['toDate'] = $v['to_date'] ? substr($v['to_date'], 0, 7) : null;
            unset($v['from_date'], $v['to_date']);
        }
        echo json_encode(['success' => true, 'data' => $vols]);
        exit;
    }

    if ($action === 'create' || $action === 'update') {
        // Accept JSON body or form-encoded
        $input = json_decode(file_get_contents('php://input'), true);
        if (!is_array($input)) $input = $_POST;

        $name = trim($input['name'] ?? '');
        $volumeId = isset($input['volume_id']) ? (int)$input['volume_id'] : (isset($input['volumeId']) ? (int)$input['volumeId'] : 0);
        $date = $input['date'] ?? ($input['issue_date'] ?? ''); // expect YYYY-MM

        // Basic validation
        $errors = [];
        if ($name === '') $errors[] = 'name is required';
        if (!$volumeId) $errors[] = 'volume_id is required';
        if (!preg_match('/^\d{4}-\d{2}$/', $date)) $errors[] = 'date must be YYYY-MM';

        if ($errors) {
            http_response_code(400);
            echo json_encode(['success' => false, 'errors' => $errors]);
            exit;
        }

        // store as first day of month
        $issueDate = $date . '-01';

        if ($action === 'create') {
            $stmt = $pdo->prepare('INSERT INTO issues (name, volume_id, issue_date) VALUES (:name, :volume_id, :issue_date)');
            $stmt->execute([':name' => $name, ':volume_id' => $volumeId, ':issue_date' => $issueDate]);
            $id = $pdo->lastInsertId();
            echo json_encode(['success' => true, 'id' => (int)$id]);
            exit;
        }

        // update
        $id = isset($_REQUEST['id']) ? (int)$_REQUEST['id'] : (int)($input['id'] ?? 0);
        if (!$id) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'missing id for update']);
            exit;
        }
        $stmt = $pdo->prepare('UPDATE issues SET name = :name, volume_id = :volume_id, issue_date = :issue_date WHERE id = :id');
        $stmt->execute([':name' => $name, ':volume_id' => $volumeId, ':issue_date' => $issueDate, ':id' => $id]);
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
        $stmt = $pdo->prepare('DELETE FROM issues WHERE id = :id');
        $stmt->execute([':id' => $id]);
        echo json_encode(['success' => true, 'deleted' => (int)$stmt->rowCount()]);
        exit;
    }

    // unknown action
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'unknown action']);
} catch (Exception $e) {
    http_response_code(500);
    $payload = ['success' => false, 'error' => 'server_error'];
    if ($debug) $payload['details'] = $e->getMessage();
    echo json_encode($payload);
}

// End of file
