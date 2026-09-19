<?php
// Simple PHP API for editors
require __DIR__ . '/../bootstrap.php';

$config = require __DIR__ . '/../config.php';
$debug = $config['app']['debug'] ?? false;

$pdo = get_pdo();

$action = $_REQUEST['action'] ?? 'list';

try {
    if ($action === 'list') {
        $stmt = $pdo->query('SELECT id, name, role, scale, affiliation, email, country, institution, journal, created_at, updated_at FROM editors ORDER BY id DESC');
        $rows = $stmt->fetchAll();
        echo json_encode(['success' => true, 'data' => $rows]);
        exit;
    }

    if ($action === 'create' || $action === 'update') {
        // Accept JSON body or form-encoded
        $input = json_decode(file_get_contents('php://input'), true);
        if (!is_array($input)) $input = $_POST;

        $name = trim($input['name'] ?? '');
        $role = trim($input['role'] ?? '');
        $scale = trim($input['scale'] ?? '');
        $affiliation = trim($input['affiliation'] ?? '');
        $email = trim($input['email'] ?? '');
        $country = trim($input['country'] ?? '');
        $institution = trim($input['institution'] ?? '');
        $journal = trim($input['journal'] ?? '');

        $errors = [];
        if ($name === '') $errors[] = 'name is required';
        if ($role === '') $errors[] = 'role is required';
        if ($scale === '') $errors[] = 'scale is required';
        if ($affiliation === '') $errors[] = 'affiliation is required';
        if ($email === '') $errors[] = 'email is required';
        if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'email must be valid';
        if ($country === '') $errors[] = 'country is required';
        if ($institution === '') $errors[] = 'institution is required';
        if ($journal === '') $errors[] = 'journal is required';

        if ($errors) {
            http_response_code(400);
            echo json_encode(['success' => false, 'errors' => $errors]);
            exit;
        }

        if ($action === 'create') {
            try {
                $stmt = $pdo->prepare('INSERT INTO editors (name, role, scale, affiliation, email, country, institution, journal) VALUES (:name, :role, :scale, :affiliation, :email, :country, :institution, :journal)');
                $stmt->execute([
                    ':name' => $name,
                    ':role' => $role,
                    ':scale' => $scale,
                    ':affiliation' => $affiliation,
                    ':email' => $email,
                    ':country' => $country,
                    ':institution' => $institution,
                    ':journal' => $journal,
                ]);
                $id = (int)$pdo->lastInsertId();
                echo json_encode(['success' => true, 'id' => $id]);
                exit;
            } catch (Exception $e) {
                // handle duplicate email gracefully
                $msg = $e->getMessage();
                http_response_code(500);
                $payload = ['success' => false, 'error' => 'server_error'];
                if ($debug) $payload['details'] = $msg;
                if (strpos($msg, 'Duplicate') !== false || strpos($msg, 'duplicate') !== false) {
                    http_response_code(400);
                    $payload = ['success' => false, 'error' => 'duplicate_email'];
                }
                echo json_encode($payload);
                exit;
            }
        }

        // update
        $id = isset($_REQUEST['id']) ? (int)$_REQUEST['id'] : (int)($input['id'] ?? 0);
        if (!$id) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'missing id for update']);
            exit;
        }

        try {
            $stmt = $pdo->prepare('UPDATE editors SET name = :name, role = :role, scale = :scale, affiliation = :affiliation, email = :email, country = :country, institution = :institution, journal = :journal WHERE id = :id');
            $stmt->execute([
                ':name' => $name,
                ':role' => $role,
                ':scale' => $scale,
                ':affiliation' => $affiliation,
                ':email' => $email,
                ':country' => $country,
                ':institution' => $institution,
                ':journal' => $journal,
                ':id' => $id,
            ]);
            echo json_encode(['success' => true, 'updated' => (int)$stmt->rowCount()]);
            exit;
        } catch (Exception $e) {
            $msg = $e->getMessage();
            http_response_code(500);
            $payload = ['success' => false, 'error' => 'server_error'];
            if ($debug) $payload['details'] = $msg;
            if (strpos($msg, 'Duplicate') !== false || strpos($msg, 'duplicate') !== false) {
                http_response_code(400);
                $payload = ['success' => false, 'error' => 'duplicate_email'];
            }
            echo json_encode($payload);
            exit;
        }
    }

    if ($action === 'delete') {
        $id = isset($_REQUEST['id']) ? (int)$_REQUEST['id'] : 0;
        if (!$id) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'missing id']);
            exit;
        }
        $stmt = $pdo->prepare('DELETE FROM editors WHERE id = :id');
        $stmt->execute([':id' => $id]);
        echo json_encode(['success' => true, 'deleted' => (int)$stmt->rowCount()]);
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
