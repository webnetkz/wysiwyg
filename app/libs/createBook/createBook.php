<?php


    ini_set("max_execution_time", 300);
    require_once '../db/db.php';

    // Получение номера книги
    $sqlLast = 'SELECT id FROM books ORDER BY id DESC';
    $lastId = $pdo->query($sqlLast);
    $lastId = $lastId->fetch(PDO::FETCH_ASSOC);
    $book = ++$lastId['id'];

    // Данные для книги
    $level = trim($_POST['level']);
    $subject = trim($_POST['subject']);
    $lang = trim($_POST['lang']);
    $pack = trim($_POST['pack']);
    
    // Создание директории для книги
    @mkdir('../../../books/'.$book, 0777, true);

    // Загрузка обложки
    $file = 'index_'.$_FILES['titleImg']['name'];
    $uploaddir = '../../../books/'.$book.'/';
    $uploadfile = $uploaddir . basename($file);

    if (move_uploaded_file($_FILES['titleImg']['tmp_name'], $uploadfile)) {

			// Создание таблицы глав
			$sqlCreateParts = 'CREATE TABLE IF NOT EXISTS parts_'.$book.'(id INT NOT NULL AUTO_INCREMENT, part VARCHAR (255) NOT NULL, type VARCHAR (255) NOT NULL, PRIMARY KEY (ID) )';
			$pdo->query($sqlCreateParts);

			// Создание таблицы контента
			$sqlCreateBook = 'CREATE TABLE IF NOT EXISTS book_'.$book.'(id INT NOT NULL AUTO_INCREMENT, part VARCHAR (255) NOT NULL, content LONGTEXT NOT NULL, PRIMARY KEY (ID) )';
			$pdo->query($sqlCreateBook);

			// // Создание таблицы тестов
			// $sqlCreateTest = 'CREATE TABLE IF NOT EXISTS tests_'.$book.'(id INT NOT NULL AUTO_INCREMENT, part VARCHAR (255) NOT NULL, content LONGTEXT NOT NULL, PRIMARY KEY (ID) )';
			// $pdo->query($sqlCreateTest);

			// Добавление данных в бд
			$sql = 'INSERT INTO books(`level`, `subject`, `lang`, `pack`, `titleImg`, `status`) VALUES("'.$level.'", "'.$subject.'", "'.$lang.'", "'.$pack.'", "'.$file.'",  0)';  
			$res = $pdo->query($sql);

			// Редирект на страницу редактирования учебника
			if($res) {
                echo '<script>location.href = "../../../panel"</script>';
			} else {
			    exit('Не загрузилась заставка! Сообщите администратору!');
		    }
 
    } else {
		exit('Не загрузилась обложку! Сообщите администратору!');
	}