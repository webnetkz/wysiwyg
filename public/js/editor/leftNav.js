const headerNav = document.querySelector('header');

let leftNavSection = document.querySelector('#leftNavSection');
let leftNavBlock = document.querySelector('#leftNavBlock');

let leftNavSettings = document.querySelector('#leftNavSettings');

leftNavSection.addEventListener('click', () => {
    headerNav.innerHTML = '<div>'+
        'Section'+
        '<button onclick="appendSection();" class="notEdit">Секция</button>'+
        '<button onclick="appendSection2();" class="notEdit">Секция 2-1</button>'+
        '<button onclick="deletedSection();" class="notEdit">Удалить секцию</button>'+
    '</div>';
});

leftNavBlock.addEventListener('click', () => {
    headerNav.innerHTML = '<div>'+
        'Block'+
        '<button onclick="appendBlock();" class="notEdit">Брок</button>'+
        '<button onclick="deletedBlock();" class="notEdit">Удалить блок</button>'+
    '</div>';
});



leftNavSettings.addEventListener('click', () => {
    headerNav.innerHTML = '<button onclick="xxx();" class="notEdit">Блок</button><button onclick="changeClass(\'red\');" class="notEdit">red</button><button onclick="changeClass(\'blue\');" class="notEdit">blue</button><button onclick="changeClass(\'FS4\');" class="notEdit">FS4</button><button onclick="changeClass(\'border\');" class="notEdit">border</button><button onclick="changeClass(\'bg\');" class="notEdit">bg</button><button onclick="changeClass(\'bg2\');" class="notEdit">bg2</button>';
});


