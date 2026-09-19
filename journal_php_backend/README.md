Journal PHP Backend
===================

Purpose
-------
Lightweight PHP backend for managing `volumes`, `issues`, and `articles` used by the tetrons project.

Quick start
-----------
1. Copy `.env.example` to `.env` inside `journal_php_backend/` and update DB credentials.
2. Ensure your database contains the required tables (`volumes`, `issues`, `articles`).
3. Serve with PHP built-in server for development:

```bash
cd journal_php_backend
php -S 127.0.0.1:8001 -t public
```

Files
-----
- `api/issues.php` – simple API for listing/creating/updating/deleting issues and listing volumes.
- `config.php` – central configuration loader (reads `.env`).
- `bootstrap.php` – initialization helper (sets timezone, CORS, `get_pdo()`).

Usage notes
-----------
- API scripts should `require __DIR__ . '/../bootstrap.php'` (path relative to file) to gain access to `get_pdo()` and standardized headers.
- Dates in the front-end use `YYYY-MM` (month picker). The backend stores `DATE` values as the first day of the month (append `-01`).

Want more?
-----------
I can add a small router, move API files into `public/`, or generate SQL migration files for the DB tables. Tell me which you prefer.
