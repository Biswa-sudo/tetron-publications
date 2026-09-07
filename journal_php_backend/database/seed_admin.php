<?php
// Run: php database/seed_admin.php "Admin User" "admin@example.com" "StrongPassword123!"
declare(strict_types=1);
require __DIR__ . '/../src/bootstrap.php';
use App\Core\Database;

if ($argc < 4) { fwrite(STDERR, "Usage: php database/seed_admin.php NAME EMAIL PASSWORD\n"); exit(1); }
[$_, $name, $email, $password] = $argv;
$db=Database::connection();
$s=$db->prepare("INSERT INTO users(name,email,password_hash,role,status,email_verified) VALUES(?,?,?,?,?,?)");
$s->execute([$name,strtolower($email),password_hash($password,PASSWORD_DEFAULT),'admin','active',1]);
echo "Admin created with ID ".$db->lastInsertId().PHP_EOL;
