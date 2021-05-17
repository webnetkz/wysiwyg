<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Ретакрирование содержимого</title>
        <link rel="stylesheet" href="public/styles/editor/editor.css">
        <style>
            .elementSectionNav, .setingsBlock  {
                display: none;
            }
            .blockResFull {
                width: 98.8%;
                border: inherit;
                display: inline-block;
                padding: 10px;
                vertical-align: top;
                margin: 5px;
                background-position: 5px 5px!important;
            }
            .blockFull:hover {
                border: 0;
            }
            .blockRes1 {
                width: 48.9%;
                border: solid rgba(0, 0, 0, 0);
                display: inline-block;
                padding: 10px;
                vertical-align: top;
                margin: 5px;
                background-position: 5px 5px!important;
            }
            .block1:hover {
                border: 0;
            }
            .blockRes2 {
                width: 65.6%;
                border: solid rgba(0, 0, 0, 0);
                display: inline-block;
                padding: 10px;
                vertical-align: top;
                margin: 5px;
                background-position: 5px 5px!important;
            }
            .block2:hover {
                border: 0;
            }
            .blockRes3 {
                width: calc(33.2% - 9px);
                border: solid rgba(0, 0, 0, 0);
                display: inline-block;
                padding: 10px;
                vertical-align: top;
                margin: 5px;
                background-position: 5px 5px!important;
            }
            .block3:hover {
                border: 0;
            }
        </style>
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
                <button style="padding: 4px; margin-left: 10px;" onclick="location.href = 'completeBook?book=<?=$_GET['book']?>'">Назад</button>
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

        <script src="public/js/editor/editor.js"></script>
        
        <script src="public/js/editor/section.js"></script>
        <script src="public/js/editor/block.js"></script>
        <script src="public/js/editor/text.js"></script>

                <script>
                    for( let x of document.querySelectorAll('.block1')) {
                        x.classList.remove('block1');
                        x.classList.add('blockRes1');
                    }

                    for( let x of document.querySelectorAll('.block2')) {
                        x.classList.remove('block2');
                        x.classList.add('blockRes2');
                    }

                    for( let x of document.querySelectorAll('.block3')) {
                        x.classList.remove('block3');
                        x.classList.add('blockRes3');
                    }

                    for( let x of document.querySelectorAll('.blockFull')) {
                        x.classList.remove('blockFull');
                        x.classList.add('blockResFull');
                    }
                </script>

        <script id="appendFl" src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
        <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    </body>
</html>

