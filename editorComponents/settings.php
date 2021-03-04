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
            <button class="btn" onclick="darkTheme();">Темный стиль</button>
        </div>
</div>