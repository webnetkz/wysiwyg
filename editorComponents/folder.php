<style>
    .folderPanel {
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
    }
    .miniImg {
        width: 100px;
        height: 100px;
        margin: 10px;
        cursor: pointer;
    }
</style>
<div class="folderPanel">
    <button class="btn" onclick="document.querySelector('.folderPanel').style.right = '-500px'">Закрыть</button>
    <br><br>
    <hr>
        <div class="allFiles" style="overflow-x: hidden; height: 85%;overflow-y: scroll;">
            <?php
                $dir = "books/".$_GET['book']."/";   //задаём имя директории
                if(is_dir($dir)) {   //проверяем наличие директории
                     $files = scandir($dir);    //сканируем (получаем массив файлов)
                     array_shift($files); // удаляем из массива '.'
                     array_shift($files); // удаляем из массива '..'
                
                     //for($i=0; $i<sizeof($files); $i++) echo '-файл: <a href="'.$dir.$files[$i].'" title="открыть/скачать файл или страницу">'.$files[$i].'</a>;<br>';  
                
                     for($i=0; $i<sizeof($files); $i++) echo '<img class="miniImg" src="https://'.$_SERVER['SERVER_NAME']."/books/".$_GET['book']."/".$files[$i].'">';  //выводим все файлы
                } 
            ?>
        </div>
    <form action="app/uploads/upload" style="position: absolute; bottom: 20px; width: 100%;"  method="POST" enctype="multipart/form-data">
        <hr>
        <br>
        <input type="file" class="btn" name="newFile">
        <input type="text" name="book" style="display: none;" value="<?=$_GET['book']?>">
        <input type="text" name="part" style="display: none;" value="<?=$_GET['part']?>">
        <button class="btn" type="submit">Загрузить</button>
    </form>
</div>