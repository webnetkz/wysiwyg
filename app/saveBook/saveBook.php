<?php

    $book = $_GET['book'];
    $part = $_GET['part'];

    if(isset($_POST['contentBook'])) {

        //$data = urldecode($_POST['contentBook']);
        require_once '../libs/db/db.php';
        $data = $_POST['contentBook'];
        
        $sqlSave = 'UPDATE book_'.$_GET['book'].' SET content = "'.$data.'" WHERE part = "'.$part.'"';
        $save = $pdo->query($sqlSave);
        
        if($save) {
            echo 'Сохранено';
        } else {
            echo 'Обратитесь к администратору!';
        }
       
    } else {
        echo 'Обратитесь к администратору!';
    }