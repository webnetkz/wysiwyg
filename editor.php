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
    require_once 'editorComponents/settings.php';
    require_once 'editorComponents/tests.php';
    ?>
        <header>
            <div class="notEdit allTopNav">
				
			
            </div>
        </header>
        <div class="sectionNavOne">
            <img src="public/img/plus.svg" class="elementSectionNav notEdit" onclick="appendSection();">
        </div>
        <div class="mainBanner">
            <h1 class="h1Main">
                <?=$_GET['part'];?>
            </h1>
        </div>
        <div id="contentBook">
            <?php
                require_once 'app/libs/db/db.php';
                $getContentSQL = 'SELECT content FROM book_'.$_GET['book'].' WHERE part = "'.$_GET['part'].'"';
                $res = $pdo->query($getContentSQL);
                $res = $res->fetch(PDO::FETCH_ASSOC);
                echo urldecode($res['content']);
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

        if(isset($_SESSION['img'])) {
            echo '<script>
                let blockImg = document.querySelector("#'.$_SESSION['block'].'");
                let blockImgId = "#"+blockImg.id;

                let idImg = URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, "");

                if(blockImg) {
                    let newImg = document.createElement("img");
                    newImg.src = "books/'.$_GET['book'].'/'.$_SESSION['img'].'";
                    newImg.id = idImg;

                    let delImg = document.createElement("img");
                    delImg.classList.add("setingsBlock");
                    delImg.classList.add("notEdit");
                    delImg.src = "public/img/delete.svg";
                    delImg.setAttribute("onclick", \'this.previousSibling.remove(); this.remove();\');

                    blockImg.appendChild(newImg);
                    blockImg.appendChild(delImg);

                    saveContent();
                }
                
            </script>';

            unset($_SESSION['block']);
            unset($_SESSION['img']);
        }

        if(isset($_SESSION['video'])) {
            echo '<script>
                let blockVideo = document.querySelector("#'.$_SESSION['block'].'");
                
                if(blockVideo) {
                    let blockVideoId = "#"+blockVideo.id;
                    let newVideo = document.createElement("video");
                    newVideo.setAttribute("controls", "");

                    let newSource = document.createElement("source");
                    newSource.src = "books/'.$_GET['book'].'/'.$_SESSION['video'].'";
                    newVideo.appendChild(newSource);

                    blockVideo.appendChild(newVideo);

                    saveContent();
                }
                
            </script>';

            unset($_SESSION['block']);
            unset($_SESSION['video']);
        }

        if(isset($_SESSION['audio'])) {
            echo '<script>
                let blockAudio = document.querySelector("#'.$_SESSION['block'].'");
                
                if(blockAudio) {
                    let blockAudioId = "#"+blockAudio.id;
                    let newAudio = document.createElement("audio");
                    newAudio.setAttribute("controls", "");

                    //let newSource = document.createElement("source");
                    newAudio.src = "books/'.$_GET['book'].'/'.$_SESSION['audio'].'";
                    //newAudio.appendChild(newSource);

                    blockAudio.appendChild(newAudio);

                    saveContent();
                }
                
            </script>';

            unset($_SESSION['block']);
            unset($_SESSION['audio']);
        }

        if(isset($_SESSION['banner'])) {
            echo '<script>
                let blockBanner = document.querySelector(".mainBanner");

                let oldBanner = document.querySelector("#bannerSct");
                if(oldBanner) {oldBanner.remove();}

                if(blockBanner) {
                    blockBanner.style.background = "url(books/'.$_GET['book'].'/'.$_SESSION['banner'].')";

                    let newBannerScript = document.createElement("script");
                    newBannerScript.id = "bannerSct";
                    newBannerScript.innerText = "let banner = document.querySelector(\".mainBanner\"); banner.style.background = \"url(\'books/'.$_GET['book'].'/'.$_SESSION['banner'].'\')\"; banner.style.backgroundRepeat = \'no-repeat\'; banner.style.backgroundPosition = \'center center\'; banner.style.backgroundSize = \'cover\';"

                    document.body.appendChild(newBannerScript);
                    saveContent();

                }
                
            </script>';

            unset($_SESSION['banner']);
        }

        ?>


        <script id="appendFl" src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
        <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    </body>
</html>

