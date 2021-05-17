<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Ретакрирование содержимого</title>
        <link rel="stylesheet" href="public/styles/editor/editor.css">
    </head>
    <body>

    <?php
        @session_start();
        require_once 'app/libs/db/db.php';
        require_once 'editorComponents/settings.php';
        require_once 'editorComponents/tests.php';
        require_once 'editorComponents/subIcon.php';
    ?>
        <header>
            <div class="notEdit allTopNav">
				
			
            </div>
        </header>
        <div class="sectionNavOne">
            <img src="public/img/plus.svg" class="elementSectionNav notEdit" onclick="appendSection();">
        </div>
        <?php
            $res = $pdo->query('SELECT banner FROM parts_'.$_GET['book'].' WHERE part ="'.$_GET['part'].'"');
            $res = $res->fetch(PDO::FETCH_ASSOC);
            if($res['banner']) {
                $banner = $res['banner'];
            }
        ?>
        <div class="mainBanner" style="background: url('/books/<?=$_GET['book']?>/banners/<?=$banner?>')">
            <h1 class="h1Main">
                <?=$_GET['part'];?>
            </h1>
        </div>
        <div id="contentBook">
            <?php
                $getContentSQL = 'SELECT content FROM book_'.$_GET['book'].' WHERE part = "'.$_GET['part'].'"';
                $res = $pdo->query($getContentSQL);
                $res = $res->fetch(PDO::FETCH_ASSOC);

                if($_GET['part'] == 'Глосарий') {
                    $res = urldecode($res['content']);
                    echo '<style>* {font-family: sans-serif} b {font-size: 1.3rem;} hr {margin: 1rem;}</style>';
                    echo '<div class="editor" style="padding: 20px;">'.$res.'</div>';
                } else {
                    echo urldecode($res['content']);
                }
            ?>
        </div>


        <div class="leftNav">
             <span class="leftNavItem activeLeftNav">
                <img src="public/img/leftNav/text.svg" class="leftNavItemImg" id="leftNavText">
            </span>
            <span class="leftNavItem">
                <img src="public/img/leftNav/home.svg" class="leftNavItemImg" onclick="location.href = 'navigation?book=<?=$_GET['book']?>'">
            </span>
            <span class="leftNavItem">
                <img src="public/img/leftNav/settings.svg"  onclick="document.querySelector('.settingsPanel').style.right = '0px'" class="leftNavItemImg" id="leftNavSettings"></img>
            </span>
            <span class="leftNavItem" onclick="saveContent();">
                <img src="public/img/leftNav/save.svg" class="leftNavItemImg" id="leftNavSave">
            </span>
        </div>
        <script src="public/js/editor/messages.js"></script>
        <script src="./public/js/editor/leftNav.js"></script>
        <script src="public/js/editor/editor.js"></script>
        
        <script src="public/js/editor/section.js"></script>
        <script src="public/js/editor/block.js"></script>
        <script src="public/js/editor/text.js"></script>

        <script src="public/js/editor/save.js"></script>


        <?php

            if(isset($_GET['codeImg']) && !empty($_GET['codeImg'])) {
                $code = base64_decode($_GET['codeImg']);
                echo $code;
                echo '<script> location.href = "/editor?book='.$_GET['book'].'&part='.$_GET['part'].'#'.$_GET['block'].'";</script>';
            }

            if(isset($_GET['codeSubIcon']) && !empty($_GET['codeSubIcon'])) {
                $code = base64_decode($_GET['codeSubIcon']);
                echo $code;
                echo '<script> location.href = "/editor?book='.$_GET['book'].'&part='.$_GET['part'].'#'.$_GET['block'].'";</script>';
            }

            if(isset($_GET['codeVideo']) && !empty($_GET['codeVideo'])) {
                $code = base64_decode($_GET['codeVideo']);
                echo $code;
                echo '<script> location.href = "/editor?book='.$_GET['book'].'&part='.$_GET['part'].'#'.$_GET['block'].'";</script>';
            }

            if(isset($_GET['codeAudio']) && !empty($_GET['codeAudio'])) {
                $code = base64_decode($_GET['codeAudio']);
                echo $code;
                echo '<script> location.href = "/editor?book='.$_GET['book'].'&part='.$_GET['part'].'#'.$_GET['block'].'";</script>';
            }

        ?>


        <script id="appendFl" src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
        <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    </body>
</html>

