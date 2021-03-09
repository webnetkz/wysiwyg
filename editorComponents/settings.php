<style>
    .settingsPanel {
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
<div class="settingsPanel">
    <button class="btn" onclick="document.querySelector('.settingsPanel').style.right = '-500px'">Закрыть</button>
    <br><br>
    <hr>
        <div>
            <br>
            <button class="btn" onclick="appendBanner();">Изображение баннера</button>
            <form action="app/uploads/uploadBanner" style="display: none;"  method="POST" enctype="multipart/form-data">
                    <input type="file" onchange="this.form.submit();" id="addBanner" name="newFile" style="display: none";>
                    <input type="text" name="book" style="display: none;" value="<?=$_GET['book'];?>">
                    <input type="text" name="part" style="display: none;" value="<?=$_GET['part'];?>">
                </form>


            <button class="btn" onclick="darkTheme();">Темный стиль</button>
        </div>
</div>