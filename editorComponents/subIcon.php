<style>
    .subIconPanel {
        font-family: sans-serif;
        position: fixed;
        right: -500px;
        width: 400px;
        top: 60px;
        bottom: 0;
        height: 90vh;
        background: white;
        box-shadow: 0 0 20px rgba(0,0,0,0.4);
        padding: 10px;
        padding-top: 20px;
        z-index: 99999999999999999999999999999999999999999999999999999999999;
    }
    .miniImg {
        width: 100px;
        height: 100px;
        margin: 10px;
        cursor: pointer;
    }
    .subIconForMenu {
        height: 100px;
        width: 100px;
        display: block;
        margin: 10px;
    }
    .subIconForMenu:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
</style>
<div class="subIconPanel">
    <button class="btn" onclick="document.querySelector('.subIconPanel').style.right = '-500px'">Закрыть</button>
    <br><br>
    <hr>
        <div>
            <br>
                <?php
                    $path = './books/'.$_GET['book'].'/subIcons/';
                    @mkdir($path, 0777);
                    $subIcons = scandir($path);
                    $subIcons = array_slice($subIcons, 2);

                    foreach($subIcons as $img) {
                        echo '<img src="./books/'.$_GET['book'].'/subIcons/'.$img.'" class="subIconForMenu" onclick="newSubIconForBlock(this)">';
                    }
                ?>
                <br>
                <hr>
            <br>
            <button class="btn" onclick="appendSubIcon();">Загрузить новую плашку</button>
                <form action="app/uploads/uploadSubIcon" style="display: none;"  method="POST" enctype="multipart/form-data">
                    <input type="file" onchange="this.form.submit();" id="addNewSubIcon" name="newFile" style="display: none";>
                    <input type="text" name="book" style="display: none;" value="<?=$_GET['book'];?>">
                    <input type="text" name="part" style="display: none;" value="<?=$_GET['part'];?>">
                </form>
            <button class="btn" onclick="delSubIcon();">Удалить плашку</button>
        </div>

        <script>
            function newSubIconForBlock(el) {
                let block = document.querySelector('#'+getIdBlock());
                let img = el;
                let styles = document.createElement('style');
                let className = 'a'+el.src.substr(35, 5);
                styles.innerHTML = '.'+className+'{background: url("'+el.src+'"); background-repeat: no-repeat; background-position: 0 0; padding-left: 133px; min-height: 100px;}';
                block.appendChild(styles);

                block.classList.add(className);
                return className;
            }

            function delSubIcon() {
                let block = document.querySelector('#'+getIdBlock());
                block.className = 'blockFull'; 
            }
        </script>
</div>