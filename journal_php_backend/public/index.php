<?php
declare(strict_types=1);

require_once __DIR__ . '/../src/bootstrap.php';

use App\Core\Router;

$router = new Router();
require __DIR__ . '/../src/routes.php';

try {
    $router->dispatch($_SERVER['REQUEST_METHOD'], parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH) ?: '/');
} catch (Throwable $e) {
    \App\Core\Response::error(
        $e->getMessage(),
        500,
        (($_ENV['APP_ENV'] ?? 'development') === 'development') ? ['trace' => $e->getTraceAsString()] : []
    );
}
