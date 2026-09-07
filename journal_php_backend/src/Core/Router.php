<?php
namespace App\Core;

final class Router
{
    private array $routes = [];

    public function get(string $path, callable $handler, array $middleware = []): void { $this->add('GET', $path, $handler, $middleware); }
    public function post(string $path, callable $handler, array $middleware = []): void { $this->add('POST', $path, $handler, $middleware); }
    public function put(string $path, callable $handler, array $middleware = []): void { $this->add('PUT', $path, $handler, $middleware); }
    public function patch(string $path, callable $handler, array $middleware = []): void { $this->add('PATCH', $path, $handler, $middleware); }
    public function delete(string $path, callable $handler, array $middleware = []): void { $this->add('DELETE', $path, $handler, $middleware); }

    private function add(string $method, string $path, callable $handler, array $middleware): void
    {
        $pattern = preg_replace('#\{([a-zA-Z_][a-zA-Z0-9_]*)\}#', '(?P<$1>[^/]+)', $path);
        $this->routes[] = compact('method','path','handler','middleware','pattern');
    }

    public function dispatch(string $method, string $uri): never
    {
        foreach ($this->routes as $r) {
            if ($r['method'] !== $method) continue;
            if (!preg_match('#^' . $r['pattern'] . '/?$#', $uri, $m)) continue;

            $params = [];
            foreach ($m as $k => $v) if (!is_int($k)) $params[$k] = $v;

            foreach ($r['middleware'] as $mw) $mw();
            ($r['handler'])($params);
            exit;
        }
        Response::error('Route not found.', 404);
    }
}
