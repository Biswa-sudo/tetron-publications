<?php
namespace App\Controllers;

use App\Core\Controller;
use App\Core\Request;
use App\Core\Response;

class CrudController extends Controller
{
    public function __construct(private string $table, private array $fields, private array $required = [], private array $order = ['id DESC'])
    {
        parent::__construct();
    }

    public function index(): never
    {
        $page = max(1, Request::int('page', 1));
        $limit = min(100, max(1, Request::int('limit', 20)));
        $offset = ($page - 1) * $limit;
        $allowed = $this->fields;
        $where = [];
        $params = [];

        foreach ($_GET as $key => $value) {
            if (in_array($key, $allowed, true) && $value !== '') {
                $where[] = "`$key` = ?";
                $params[] = $value;
            }
        }
        $whereSql = $where ? ' WHERE ' . implode(' AND ', $where) : '';
        $orderSql = implode(', ', $this->order);

        $count = $this->db->prepare("SELECT COUNT(*) c FROM `{$this->table}`$whereSql");
        $count->execute($params);
        $total = (int)$count->fetch()['c'];

        $sql = "SELECT * FROM `{$this->table}`$whereSql ORDER BY $orderSql LIMIT $limit OFFSET $offset";
        $stmt = $this->db->prepare($sql);
        $stmt->execute($params);

        Response::json(['items'=>$stmt->fetchAll(),'pagination'=>[
            'page'=>$page,'limit'=>$limit,'total'=>$total,'pages'=>(int)ceil($total/$limit)
        ]]);
    }

    public function show(array $p): never
    {
        $row = $this->table($this->table, $p['id']);
        if (!$row) Response::error('Record not found.', 404);
        Response::json($row);
    }

    public function create(): never
    {
        $data = Request::body();
        $this->validateRequired($data, $this->required);
        $data = array_intersect_key($data, array_flip($this->fields));
        if (!$data) Response::error('No valid fields supplied.', 422);

        $columns = array_keys($data);
        $sql = "INSERT INTO `{$this->table}` (`" . implode('`,`', $columns) . "`) VALUES (" . implode(',', array_fill(0,count($columns),'?')) . ")";
        $stmt = $this->db->prepare($sql);
        $stmt->execute(array_values($data));
        $id = (int)$this->db->lastInsertId();
        $new = $this->table($this->table, (string)$id);
        $this->audit('create', $this->table, $id, null, $new);
        Response::created($new);
    }

    public function update(array $p): never
    {
        $old = $this->table($this->table, $p['id']);
        if (!$old) Response::error('Record not found.', 404);

        $data = array_intersect_key(Request::body(), array_flip($this->fields));
        unset($data['id']);
        if (!$data) Response::error('No valid fields supplied.', 422);

        $sets = [];
        $params = [];
        foreach ($data as $k=>$v) { $sets[] = "`$k` = ?"; $params[] = $v; }
        $params[] = $p['id'];

        $stmt = $this->db->prepare("UPDATE `{$this->table}` SET " . implode(',', $sets) . " WHERE id = ?");
        $stmt->execute($params);
        $new = $this->table($this->table, $p['id']);
        $this->audit('update', $this->table, (int)$p['id'], $old, $new);
        Response::json($new);
    }

    public function delete(array $p): never
    {
        $old = $this->table($this->table, $p['id']);
        if (!$old) Response::error('Record not found.', 404);
        $stmt = $this->db->prepare("DELETE FROM `{$this->table}` WHERE id = ?");
        $stmt->execute([$p['id']]);
        $this->audit('delete', $this->table, (int)$p['id'], $old, null);
        Response::json(['deleted'=>true]);
    }
}
