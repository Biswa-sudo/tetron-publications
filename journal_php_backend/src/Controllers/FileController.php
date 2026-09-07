<?php
namespace App\Controllers;

use App\Core\Controller;
use App\Core\Response;
use App\Core\Request;

final class FileController extends Controller
{
    public function upload(): never
    {
        if (empty($_FILES['file'])) Response::error('No file uploaded.',422);
        $f=$_FILES['file'];
        if($f['error']!==UPLOAD_ERR_OK) Response::error('File upload failed.',422);
        if($f['size']>$GLOBALS['config']['app']['max_upload_bytes']) Response::error('File is too large.',413);

        $articleId=isset($_POST['article_id'])?(int)$_POST['article_id']:null;
        $submissionId=isset($_POST['submission_id'])?(int)$_POST['submission_id']:null;
        $category=$_POST['file_category']??'manuscript';
        $allowed=['manuscript','zip_archive','figure','table','supplementary','cover_letter','response_letter'];
        if(!in_array($category,$allowed,true)) Response::error('Invalid file category.',422);

        $ext=strtolower(pathinfo($f['name'],PATHINFO_EXTENSION));
        $safe=bin2hex(random_bytes(16)).($ext?'.'.$ext:'');
        $dir=$GLOBALS['config']['app']['upload_dir'].'/'.date('Y/m');
        if(!is_dir($dir)) mkdir($dir,0775,true);
        $path=$dir.'/'.$safe;
        if(!move_uploaded_file($f['tmp_name'],$path)) Response::error('Could not save uploaded file.',500);

        $relative='storage/uploads/'.date('Y/m').'/'.$safe;
        $s=$this->db->prepare("INSERT INTO files(submission_id,article_id,file_name,file_path,file_type,file_size,file_category,uploaded_by) VALUES (?,?,?,?,?,?,?,?)");
        $s->execute([$submissionId,$articleId,$f['name'],$relative,$f['type']??null,$f['size'],$category,$GLOBALS['auth_user']['sub']??null]);
        $id=(int)$this->db->lastInsertId();
        Response::created($this->table('files',(string)$id));
    }

    public function delete(array $p): never
    {
        $row=$this->table('files',$p['id']); if(!$row) Response::error('File not found.',404);
        $absolute=__DIR__.'/../../'.$row['file_path'];
        if(is_file($absolute)) @unlink($absolute);
        $this->db->prepare("DELETE FROM files WHERE id=?")->execute([$p['id']]);
        Response::json(['deleted'=>true]);
    }
}
