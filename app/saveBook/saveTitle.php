<?php

    $book = $_POST['book'];
    $part = 'Глосарий';

    
    if(isset($_POST['range'])) {
        
        //$data = urldecode($_POST['contentBook']);
        require_once '../libs/db/db.php';
        $range = $_POST['range'];
        $content = $_POST['content'];
        $data = '<b>'.$range.'</b> — '.$content .'<hr>';
        
        $res = $pdo->query('SELECT content FROM book_'.$book.' WHERE part = "Глосарий"');
        $res = $res->fetch(PDO::FETCH_ASSOC);
        $data = $res['content'] .''.$data;

        $sqlSave = 'UPDATE book_'.$book.' SET content = "'.$data.'" WHERE part = "Глосарий"';
        $save = $pdo->query($sqlSave);
       
    } else {
        echo 'Обратитесь к администратору!';
    }