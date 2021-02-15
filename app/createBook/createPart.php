<?php

    require_once '../libs/db/db.php';

    // Получение номера книги
    $book = trim($_POST['book']);

    if( isset($_POST['part']) ) {
        $part = trim($_POST['part']);

        // Добавление записи название и типа новой навигации
        $appendSql = 'INSERT INTO parts_'.$book.'(`part`) VALUES ("'.$part.'")';
        $res = $pdo->query($appendSql);


        $appendPart = 'INSERT INTO book_'.$book.'(`part`, content) VALUES ("'.$part.'", " ")';
        $res = $pdo->query($appendPart);

        if($res) {
            echo '<script>location.href = "../../navigation?book='.$book.'"</script>';
        }
    }
    