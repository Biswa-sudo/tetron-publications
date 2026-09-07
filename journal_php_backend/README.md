# Journal Publication System — PHP REST Backend

A framework-free PHP 8.1+ REST API for the supplied MySQL journal publication schema.

## Features

- JWT bearer authentication without third-party packages
- Registration, login, current-user endpoint
- Role-based access: `admin`, `editor`, `author`, `reviewer`
- Articles with authors, metadata and journal relationships
- Journals → volumes → issues hierarchy
- Submission workflow and reviewer status updates
- File uploads with categories
- Shareable article links with expiry/click tracking
- Notifications
- User preferences
- Audit logging for key mutations
- Pagination and article full-text search
- CORS support
- PDO prepared statements
- `.env.example` configuration

## Requirements

- PHP 8.1+
- MySQL 8.x / MariaDB with JSON support
- Apache with mod_rewrite, or another web server configured to route requests to `public/index.php`
- PHP extensions: `pdo_mysql`, `json`, `fileinfo`, `mbstring`

## Installation

1. Create the database and import your existing SQL schema.
2. Copy `.env.example` to `.env`.
3. Configure `DB_*`, `JWT_SECRET`, `APP_URL`, and `CORS_ORIGINS`.
4. Point the web server document root at the `public/` directory.
5. Ensure `storage/uploads` is writable by PHP.
6. Create an administrator:

   `php database/seed_admin.php "Admin User" "admin@example.com" "StrongPassword123!"`

## API base

If deployed at `http://localhost/journal-api`, the API base is:

`http://localhost/journal-api/api`

Send:

`Authorization: Bearer YOUR_TOKEN`

for protected endpoints.

## Authentication

### Register
POST `/auth/register`

```json
{
  "name": "Dr. Jane Doe",
  "email": "jane@example.com",
  "password": "StrongPassword123!",
  "university": "Example University"
}
```

### Login
POST `/auth/login`

```json
{
  "email": "admin@example.com",
  "password": "StrongPassword123!"
}
```

Response contains `token` and `user`.

## Main endpoints

### Auth
- POST `/api/auth/register`
- POST `/api/auth/login`
- GET `/api/auth/me`

### Articles
- GET `/api/articles`
- GET `/api/articles/{id}`
- POST `/api/articles`
- PUT/PATCH `/api/articles/{id}`
- DELETE `/api/articles/{id}`
- POST `/api/articles/{id}/publish`

Article create/update accepts nested fields:

```json
{
  "title": "Example article",
  "article_type": "Research Article",
  "abstract": "Abstract...",
  "journal_id": 1,
  "volume_id": 1,
  "issue_id": 1,
  "authors": [
    {
      "name": "Jane Doe",
      "email": "jane@example.com",
      "affiliation": "Example University",
      "institution": "Example University",
      "country": "India",
      "is_corresponding": true,
      "author_order": 1
    }
  ],
  "metadata": {
    "references_text": "References...",
    "funding_info": "Funding...",
    "publisher_note": "Publisher note...",
    "rights_and_permissions": "Rights...",
    "share_this_article": "Share..."
  },
  "journal_ids": [1]
}
```

### Journals / Volumes / Issues
CRUD:
- `/api/journals`
- `/api/volumes`
- `/api/issues`

List endpoints accept `page`, `limit`, and matching table-field filters.

### Users / Editors
CRUD:
- `/api/users`
- `/api/editors`

User listing should normally be restricted further at the production deployment level. The included RBAC allows editorial staff to manage normal records and admins to delete them.

### Submissions
- GET `/api/submissions`
- POST `/api/submissions`
- PATCH `/api/submissions/{id}`

Authors see their own submissions. Editors/admins/reviewers can update status.

### Files
Multipart POST `/api/files` with:
- `file`
- optional `article_id`
- optional `submission_id`
- optional `file_category`

Allowed categories:
`manuscript`, `zip_archive`, `figure`, `table`, `supplementary`, `cover_letter`, `response_letter`

### Share links
- POST `/api/articles/{id}/share-links`
- GET `/api/share/{token}`

### Notifications
- GET `/api/notifications`
- PATCH `/api/notifications/{id}/read`

### Preferences
- GET `/api/preferences`
- PUT `/api/preferences`

## Example React fetch

```js
const res = await fetch(`${API_URL}/api/articles?page=1&limit=20&status=published`, {
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"
  }
});

const json = await res.json();
```

## Important production hardening

This package is intentionally dependency-free so it can be uploaded to ordinary PHP hosting. Before production:

- Replace the default JWT secret with a long random secret.
- Set `APP_ENV=production`.
- Serve only through HTTPS.
- Restrict `CORS_ORIGINS` to your actual frontend domain(s).
- Put `storage/` outside the public web root if possible, or deny direct script execution.
- Add server-side MIME/extension allowlists appropriate to your journal.
- Add rate limiting for login and public share endpoints.
- Add email verification and password reset flows if required.
- Consider moving JWT/session revocation to a server-side token store if immediate logout/revocation is required.
- Review authorization rules against your editorial workflow before launch.

## Important schema note

The backend uses the schema supplied by the user as-is. It does not silently modify the schema. The schema contains both direct article journal/volume/issue foreign keys and the `article_journals` relation table; both are supported.

## Response format

Successful:
```json
{
  "success": true,
  "data": {}
}
```

Error:
```json
{
  "success": false,
  "message": "Error message",
  "details": {}
}
```
