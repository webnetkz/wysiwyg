<?php


    @session_start();
    require_once '../db/db.php';

    if(isset($_POST['signin'])) {
            
            require_once '../../config/db.php';

            $login = trim($_POST['login']);
            $login = htmlentities($login);

            $pass = trim($_POST['pass']);
            $pass = htmlentities($pass);
            
            $sqlLogin = 'SELECT * FROM users WHERE login = "'.$login.'"';
            $resLogin = $pdo->query($sqlLogin);
            $resLogin = $resLogin->fetch(PDO::FETCH_ASSOC);

            if($resLogin) {
                
                if($resLogin['pass'] == $pass) {
                    $_SESSION['login'] = $login;
                    header('Location: ../../../panel');

                } else { header('Location: ../../../index?message=Пароль не верный'); }

            } else { header('Location: ../../../index?message=Пользователь с этим логином не зарегистрирован'); }

    } else { header('Location: ../../../index?message=Данные не отправлены'); }