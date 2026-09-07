# Endpoint Quick Reference

| Method | Endpoint | Auth | Purpose |
|---|---|---|---|
| POST | `/api/auth/register` | No | Register author |
| POST | `/api/auth/login` | No | Login |
| GET | `/api/auth/me` | Yes | Current user |
| GET | `/api/articles` | No | Article listing/search |
| GET | `/api/articles/{id}` | No | Article detail |
| POST | `/api/articles` | Yes | Create article |
| PUT | `/api/articles/{id}` | Yes | Update article |
| DELETE | `/api/articles/{id}` | Editor/Admin | Delete article |
| POST | `/api/articles/{id}/publish` | Editor/Admin | Publish |
| CRUD | `/api/journals` | Auth/editorial | Journals |
| CRUD | `/api/volumes` | Auth/editorial | Volumes |
| CRUD | `/api/issues` | Auth/editorial | Issues |
| CRUD | `/api/users` | Auth/editorial | Users |
| CRUD | `/api/editors` | Auth/editorial | Editors |
| CRUD | `/api/article_authors` | Auth/editorial | Author records |
| CRUD | `/api/article_journals` | Auth/editorial | Article/journal links |
| CRUD | `/api/article_metadata` | Auth/editorial | Metadata |
| GET/POST/PATCH | `/api/submissions` | Yes | Submission workflow |
| POST | `/api/files` | Yes | Upload |
| DELETE | `/api/files/{id}` | Yes | Delete file |
| POST | `/api/articles/{id}/share-links` | Yes | Create share URL |
| GET | `/api/share/{token}` | No | Resolve share URL |
| GET | `/api/notifications` | Yes | Notifications |
| PATCH | `/api/notifications/{id}/read` | Yes | Mark read |
| GET/PUT | `/api/preferences` | Yes | Preferences |
| GET | `/api/health` | No | Health check |
