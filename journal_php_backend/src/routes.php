<?php
use App\Core\Auth;
use App\Controllers\AuthController;
use App\Controllers\CrudController;
use App\Controllers\ArticleController;
use App\Controllers\FileController;
use App\Controllers\ShareController;
use App\Controllers\NotificationController;
use App\Controllers\PreferencesController;
use App\Controllers\SubmissionController;

$auth = Auth::requireAuth();
$admin = Auth::requireRole(['admin']);
$editorial = Auth::requireRole(['admin','editor']);
$staff = Auth::requireRole(['admin','editor','reviewer']);

$authC = new AuthController();
$articleC = new ArticleController();
$fileC = new FileController();
$shareC = new ShareController();
$notificationC = new NotificationController();
$prefsC = new PreferencesController();
$submissionC = new SubmissionController();

$router->get('/api/health', fn() => \App\Core\Response::json(['status'=>'ok','time'=>gmdate('c')]));
$router->post('/api/auth/register', [$authC,'register']);
$router->post('/api/auth/login', [$authC,'login']);
$router->get('/api/auth/me', [$authC,'me'], [$auth]);

$router->get('/api/articles', [$articleC,'index']);
$router->get('/api/articles/{id}', [$articleC,'show']);
$router->post('/api/articles', [$articleC,'create'], [$auth]);
$router->put('/api/articles/{id}', [$articleC,'update'], [$auth]);
$router->patch('/api/articles/{id}', [$articleC,'update'], [$auth]);
$router->delete('/api/articles/{id}', [$articleC,'delete'], [$editorial]);
$router->post('/api/articles/{id}/publish', [$articleC,'publish'], [$editorial]);

$crud = [
    'users' => new CrudController('users',['name','email','university','role','status','email_verified','last_login'],['name','email']),
    'editors' => new CrudController('editors',['user_id','name','email','role','scale','affiliation','country','institution','specialties','status'],['name','email','role','scale','affiliation','country','institution']),
    'journals' => new CrudController('journals',['name','issn','publisher','description','website','is_active'],['name']),
    'volumes' => new CrudController('volumes',['journal_id','volume_number','name','description','from_date','to_date','status'],['journal_id','volume_number','name','from_date','to_date']),
    'issues' => new CrudController('issues',['volume_id','issue_number','name','description','issue_date','publication_date','status'],['volume_id','issue_number','name','issue_date']),
    'article_authors' => new CrudController('article_authors',['article_id','user_id','name','email','affiliation','institution','country','is_corresponding','author_order'],['article_id','name','author_order']),
    'article_journals' => new CrudController('article_journals',['article_id','journal_id','is_recent_publication'],['article_id','journal_id']),
    'article_metadata' => new CrudController('article_metadata',['article_id','references_text','funding_info','publisher_note','rights_and_permissions','share_this_article','additional_information'],['article_id']),
];

foreach($crud as $name=>$c){
    $router->get("/api/$name",[$c,'index'],[$auth]);
    $router->get("/api/$name/{id}",[$c,'show'],[$auth]);
    $router->post("/api/$name",[$c,'create'],[$editorial]);
    $router->put("/api/$name/{id}",[$c,'update'],[$editorial]);
    $router->delete("/api/$name/{id}",[$c,'delete'],[$admin]);
}

$router->get('/api/submissions',[$submissionC,'index'],[$auth]);
$router->post('/api/submissions',[$submissionC,'create'],[$auth]);
$router->patch('/api/submissions/{id}',[$submissionC,'update'],[$staff]);

$router->post('/api/files',[$fileC,'upload'],[$auth]);
$router->delete('/api/files/{id}',[$fileC,'delete'],[$auth]);

$router->post('/api/articles/{id}/share-links',[$shareC,'create'],[$auth]);
$router->get('/api/share/{token}',[$shareC,'resolve']);

$router->get('/api/notifications',[$notificationC,'index'],[$auth]);
$router->patch('/api/notifications/{id}/read',[$notificationC,'read'],[$auth]);

$router->get('/api/preferences',[$prefsC,'show'],[$auth]);
$router->put('/api/preferences',[$prefsC,'save'],[$auth]);
