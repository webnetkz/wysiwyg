<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>My own Editor</title>
        <link rel="stylesheet" href="public/styles/editor/editor.css">
    </head>
    <body>
        <div class="leftNav">
            <span class="leftNavItem activeLeftNav">
                <img src="public/img/leftNav/home.svg" class="leftNavItemImg" id="leftNavHome">
            </span>
            <span class="leftNavItem">
                <img src="public/img/leftNav/settings.svg" class="leftNavItemImg" id="leftNavSettings">
            </span>
            <span class="leftNavItem" onclick="saveContent();">
                <img src="public/img/leftNav/save.svg" class="leftNavItemImg" id="leftNavSave">
            </span>
        </div>
        <header>
            <div class="notEdit allTopNav">
                <!-- <div class="notEdit">
                    <span onclick="appendSection();" class="notEdit elementTopNav">Добавить секцию</span>
                        
                </div> -->
            </div>
        </header>
        <div class="sectionNavOne">
            <img src="public/img/plus.svg" class="elementSectionNav notEdit" onclick="appendSection();">
        </div>
        <div id="contentBook">
            <?php
                echo file_get_contents('./book.html');
            ?>
        </div>

        <script src="./public/js/editor/leftNav.js"></script>
        <script src="public/js/editor/editor.js"></script>
        
        <script src="public/js/editor/section.js"></script>
        <script src="public/js/editor/block.js"></script>
        <script src="public/js/editor/text.js"></script>

        <script src="public/js/editor/save.js"></script>

        <script id="appendFl" src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
        <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    </body>
</html>

