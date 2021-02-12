<?php

    require_once 'app/libs/debug/debug.php';

?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Редакто учебников</title>
        <link rel="stylesheet" href="public/styles/styles.css">
    </head>
    <body>
        <div class="fullScreen">
            <form action="app/libs/signin/signin" class="signin" method="POST">
                <h2>Авторизация</h2>
                <input type="text" class="inp" placeholder="Логин" name="login">
                <input type="password" class="inp" placeholder="Пароль" name="pass">
                <button class="btn" name="signin">Войти</button>
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