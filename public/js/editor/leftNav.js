const headerNav = document.querySelector('header');


let leftNavSettings = document.querySelector('#leftNavSettings');
let leftNavHome = document.querySelector('#leftNavHome');


leftNavHome.addEventListener('click', () => {
    headerNav.innerHTML = '<button onclick="xxx();" class="notEdit">Блок</button><button onclick="changeClass(\'red\');" class="notEdit">red</button><button onclick="changeClass(\'blue\');" class="notEdit">blue</button><button onclick="changeClass(\'FS4\');" class="notEdit">FS4</button><button onclick="changeClass(\'border\');" class="notEdit">border</button><button onclick="changeClass(\'bg\');" class="notEdit">bg</button><button onclick="changeClass(\'bg2\');" class="notEdit">bg2</button>';
});


leftNavSettings.addEventListener('click', () => {
    headerNav.innerHTML = '<button onclick="xxx();" class="notEdit">Блок</button><button onclick="changeClass(\'red\');" class="notEdit">red</button><button onclick="changeClass(\'blue\');" class="notEdit">blue</button><button onclick="changeClass(\'FS4\');" class="notEdit">FS4</button><button onclick="changeClass(\'border\');" class="notEdit">border</button><button onclick="changeClass(\'bg\');" class="notEdit">bg</button><button onclick="changeClass(\'bg2\');" class="notEdit">bg2</button>';
});


