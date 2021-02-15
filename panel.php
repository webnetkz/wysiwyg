<?php

    @session_start();

    require_once 'app/libs/debug/debug.php';
    require_once 'app/libs/db/db.php';

    if(isset($_SESSION['login'])) {
        $login = $_SESSION['login'];
    } else {
        header('Location: index');
    }


    $sqlGetAllBooks = 'SELECT * FROM books';
    $allBooks = $pdo->query($sqlGetAllBooks);
    $allBooks = $allBooks->fetchall(PDO::FETCH_ASSOC);
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Панель учебников</title>
        <link rel="stylesheet" href="public/styles/styles.css">
    </head>
    <body>

        <div class="createNewBookModal">
            <h3>Создать учебник</h3>
            <hr>
                <form action="app/createBook/createBook" method="POST" enctype="multipart/form-data">
                    <select name="level" id="level" class="inp" required onchange="OGN(this)">
                        <option value="" disabled selected>Класс</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                    </select>

                    <script>
                        // Функция добовляющия новые предметы в список если класс 10 или 11
                        function OGN(el) {
                            if(el.value == 10 || el.value == 11) {
                                let subject = document.querySelector('#subject');
                                subject.innerHTML += '<option value="Алгебра ОГН">Алгебра ОГН</option><option value="Әдебиеттік оқ ОГН">Әдебиеттік оқу ОГН</option><option value="Бастауыш ОГН">Бастауыш ОГН</option><option value="Биология ОГН">Биология ОГН</option><option value="География ОГН">География ОГН</option><option value="Геометрия ОГН">Геометрия ОГН</option><option value="Дүниежүзі тарихы ОГН">Дүниежүзі тарихы ОГН</option><option value="Дүниетану ОГН">Дүниетану ОГН</option><option value="Жаратылыстану ОГН">Жаратылыстану ОГН</option><option value="Информатика ОГН">Информатика ОГН</option><option value="Көркем еңбек ОГН">Көркем еңбек ОГН</option><option value="Қазақ әдебиеті ОГН">Қазақ әдебиеті ОГН</option><option value="Қазақ тілі ОГН">Қазақ тілі ОГН</option><option value="Қазақстан тарихы ОГН">Қазақстан тарихы ОГН</option><option value="Математика ОГН">Математика ОГН</option><option value="Музыка ОГН">Музыка ОГН</option><option value="Сауат ашу ОГН">Сауат ашу ОГН</option><option value="Физика ОГН">Физика ОГН</option><option value="Познание мира ОГН">Познание мира ОГН</option><option value="Русская литература ОГН">Русская литература ОГН</option><option value="Художественный труд ОГН">Художественный труд ОГН</option><option value="Химия ОГН">Химия ОГН</option><option value="История Казахстана ОГН">История Казахстана ОГН</option><option value="Алгебра ЕМН">Алгебра ЕМН</option><option value="Әдебиеттік оқ ЕМН">Әдебиеттік оқу ЕМН</option><option value="Бастауыш ЕМН">Бастауыш ЕМН</option><option value="Биология ЕМН">Биология ЕМН</option><option value="География ЕМН">География ЕМН</option><option value="Геометрия ЕМН">Геометрия ЕМН</option><option value="Дүниежүзі тарихы ЕМН">Дүниежүзі тарихы ЕМН</option><option value="Дүниетану ЕМН">Дүниетану ЕМН</option><option value="Жаратылыстану ЕМН">Жаратылыстану ЕМН</option><option value="Информатика ЕМН">Информатика ЕМН</option><option value="Көркем еңбек ЕМН">Көркем еңбек ЕМН</option><option value="Қазақ әдебиеті ЕМН">Қазақ әдебиеті ЕМН</option><option value="Қазақ тілі ЕМН">Қазақ тілі ЕМН</option><option value="Қазақстан тарихы ЕМН">Қазақстан тарихы ЕМН</option><option value="Математика ЕМН">Математика ЕМН</option><option value="Музыка ЕМН">Музыка ЕМН</option><option value="Сауат ашу ЕМН">Сауат ашу ЕМН</option><option value="Физика ЕМН">Физика ЕМН</option><option value="Познание мира ЕМН">Познание мира ЕМН</option><option value="Русская литература ЕМН">Русская литература ЕМН</option><option value="Художественный труд ЕМН">Художественный труд ЕМН</option><option value="Химия ЕМН">Химия ЕМН</option><option value="История Казахстана ЕМН">История Казахстана ЕМН</option>';
                            }
                        }
                    </script>
                    <select name="subject" id="subject" class="inp" required>
                        <option value="" disabled selected>Предмет</option>
                        <option value="Алгебра ОГН">Алгебра</option>
                        <option value="Әдебиеттік оқ ОГН">Әдебиеттік оқу</option>
                        <option value="Бастауыш ОГН">Бастауыш</option>
                        <option value="Биология ОГН">Биология</option>
                        <option value="География ОГН">География</option>
                        <option value="Геометрия ОГН">Геометрия</option>
                        <option value="Дүниежүзі тарихы ОГН">Дүниежүзі тарихы</option>
                        <option value="Дүниетану ОГН">Дүниетану</option>
                        <option value="Жаратылыстану ОГН">Жаратылыстану</option>
                        <option value="Информатика ОГН">Информатика</option>
                        <option value="Көркем еңбек ОГН">Көркем еңбек</option>
                        <option value="Қазақ әдебиеті ОГН">Қазақ әдебиеті</option>
                        <option value="Қазақ тілі ОГН">Қазақ тілі</option>
                        <option value="Қазақстан тарихы ОГН">Қазақстан тарихы</option>
                        <option value="Математика ОГН">Математика</option>
                        <option value="Музыка ОГН">Музыка</option>
                        <option value="Сауат ашу ОГН">Сауат ашу</option>
                        <option value="Физика ОГН">Физика</option>
                        <option value="Познание мира ОГН">Познание мира</option>
                        <option value="Русская литература ОГН">Русская литература</option>
                        <option value="Художественный труд ОГН">Художественный труд</option>
                        <option value="Химия ОГН">Химия</option>
                        <option value="История Казахстана ОГН">История Казахстана</option>
                    </select>
                    <select name="lang" id="lang" class="inp" required>
                        <option value="" disabled selected>Язык</option>
                        <option value="kaz">Казахский</option>
                        <option value="rus">Русский</option>
                    </select>
                    <select name="pack" id="pack" class="inp" required>
                        <option value="" disabled selected>Пакет</option>
                        <option value="t1">Для учителя</option>
                        <option value="t2">Для ученика</option>
                    </select>
                    <p>Обложка</p>
                    <input type="file" class="inp" name="titleImg" required>
                <hr>
                <button class="btnMini" type="submit">Создать</button>
                <button class="btnMiniRed" onclick="document.querySelector('.createNewBookModal').style.top = '-110%';">Отмена</button>
            </form>
        </div>

        <header>
            <div class="login">
                <img src="public/img/user.svg">
                <span>
                    <?=$login?>
                </span>
            </div>
        </header>

            <div class="content">
                <div class="addBook" onclick="document.querySelector('.createNewBookModal').style.top = '70px';">
                    <img src="public/img/plusBlue.svg">
                </div>

                <?php
                    foreach($allBooks as $k => $v) {
                        if($v['id'] != 1) {
                            echo '<div class="bookPanel" style="background: url(\'books/'.$v['id'].'/'.$v['titleImg'].'\'); background-size: cover; background-position: center center;" onclick="location.href = \'navigation?book='.$v['id'].'\';"></div>';
                        }
                    }
                ?>
            </div>    

        <script src="public/js/editor/messages.js"></script>
    </body>
</html>

<?php

if(isset($_GET['message'])) {
    echo '<script>message("'.$_GET['message'].'", 0)</script>';
    unset($_GET['message']);
}

?>