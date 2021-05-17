<?php

    ini_set("max_execution_time", 300);
    require_once '../libs/db/db.php';

    
    $book = $_POST['book'];
    $part = $_POST['part'];
    $block = $_POST['block'];
    
    $path = "../../books/".$book."/banners/";
    @mkdir($path, 0777);
    
    function gen_token() {
        $token = sprintf(
            '%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
            mt_rand(0, 0xffff),
            mt_rand(0, 0xffff),
            mt_rand(0, 0xffff),
            mt_rand(0, 0x0fff) | 0x4000,
            mt_rand(0, 0x3fff) | 0x8000,
            mt_rand(0, 0xffff),
            mt_rand(0, 0xffff),
            mt_rand(0, 0xffff)
        );
     
        return $token;
    }

    
    $nameFile = 'aaaBanner'.gen_token();
    // Загрузка обложки
    $typeFile = substr($_FILES['newFile']['name'], strrpos($_FILES['newFile']['name'], '.') + 1);
    $file = $nameFile.'.'.$typeFile;
    $uploaddir = $path;
    $uploadfile = $uploaddir . basename($file);

    if (move_uploaded_file($_FILES['newFile']['tmp_name'], $uploadfile)) {

            $sql = 'UPDATE parts_'.$book.' SET banner = "'.$file.'" WHERE part = "'.$part.'"';
            $pdo->query($sql);
			header('Location: ../../editor?book='.$book.'&part='.$part.'#'.$block);
 
    } else {
		exit('Не загрузился файл! Сообщите администратору!');
	}