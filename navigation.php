<?php

    @session_start();

    if(isset($_GET['book'])) {
        $book = $_GET['book'];
    } else {
        header('Location: panel');
    }

    require_once 'app/libs/debug/debug.php';
    require_once 'app/libs/db/db.php';

    if(isset($_SESSION['login'])) {
        $login = $_SESSION['login'];
    } else {
        header('Location: index');
    }


    $sqlGetBook = 'SELECT * FROM books WHERE id='.$book;
    $allBook = $pdo->query($sqlGetBook);
    $allBook = $allBook->fetch(PDO::FETCH_ASSOC);

    $sqlGetParts = 'SELECT * FROM parts_'.$book;
    $allParts = $pdo->query($sqlGetParts);
    $allParts = $allParts->fetchAll(PDO::FETCH_ASSOC);
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Панель учебников</title>
        <link rel="stylesheet" href="public/styles/styles.css">
    </head>
    <body>
        <header>
            <div class="login">
                <img src="public/img/user.svg">
                <span>
                    <?=$login?>
                </span>
            </div>
            <button class="btnMini" style="width: 10%" onclick="location.href = 'panel'">Назад</button>
        </header>

            
                <div class="showContent">
                <h3>Навигация по учебнику "<?=$allBook['subject']?>"</h3>
                <hr>
                    <form action="app/createBook/createPart" method="POST">
                        <br>
                            <?php 
                            
                                echo '<ol class="navPart">';
                                    foreach($allParts as $k => $v) {
                                        echo '<li onclick="location.href = \'editor?book='.$book.'&part='.$v['part'].'\'"> ' .$v['part'].'</li>';
                                    }
                                echo '</ol>';
                            
                            ?>
                        <br>
                        <hr>
                    <div class="addPart">
                        <input type="text" class="inpHalf" placeholder="Введите название главы" name="part">
                        <input type="text" value="<?=$book?>" style="display: none;" name="book">
                        <button type="submit" class="btnMini" name="createPart">Создать</button>
                    </div>
                    </form>
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