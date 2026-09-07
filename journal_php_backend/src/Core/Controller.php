<?php
namespace App\Core;

use PDO;

abstract class Controller
{
    protected PDO $db;
    public function __construct() { $this->db = Database::connection(); }

    protected function validateRequired(array $data, array $fields): void
    {
        foreach ($fields as $field) {
            if (!isset($data[$field]) || $data[$field] === '') {
                Response::error("Field '{$field}' is required.", 422);
            }
        }
    }

    protected function table(string $table, string $id, string $pk = 'id'): ?array
    {
        $stmt = $this->db->prepare("SELECT * FROM `$table` WHERE `$pk` = ?");
        $stmt->execute([$id]);
        $row = $stmt->fetch();
        return $row ?: null;
    }

    protected function audit(string $action, string $entity, int $id, ?array $old, ?array $new): void
    {
        $u = $GLOBALS['auth_user']['sub'] ?? null;
        $stmt = $this->db->prepare("INSERT INTO audit_log
            (user_id,action,entity_type,entity_id,old_values,new_values,ip_address,user_agent)
            VALUES (?,?,?,?,?,?,?,?)");
        $stmt->execute([
            $u, $action, $entity, $id,
            $old ? json_encode($old) : null,
            $new ? json_encode($new) : null,
            $_SERVER['REMOTE_ADDR'] ?? null,
            $_SERVER['HTTP_USER_AGENT'] ?? null
        ]);
    }

    protected function notify(int $userId, string $type, string $title, string $message, ?string $link = null): void
    {
        $stmt = $this->db->prepare("INSERT INTO notifications (user_id,type,title,message,link) VALUES (?,?,?,?,?)");
        $stmt->execute([$userId,$type,$title,$message,$link]);
    }
}
