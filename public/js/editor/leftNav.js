const headerNav = document.querySelector('header');


let leftNavSettings = document.querySelector('#leftNavSettings');
let leftNavHome = document.querySelector('#leftNavHome');



leftNavHome.addEventListener('click', () => {
    headerNav.innerHTML = '<div class="notEdit allTopNav">'+
        '<div class="notEdit">'+
        	'<span onclick="xs();" class="notEdit elementTopNav">Красный цвет</span>'+
            '<span onclick="appendSection2();" class="notEdit elementTopNav">Добавить секцию 2-1</span>'+
            '<span onclick="appendSection3();" class="notEdit elementTopNav">Добавить секцию 1-2</span>'+
            '<span onclick="appendSection4();" class="notEdit elementTopNav">Добавить секцию 1-1-1</span>'+
        '</div>'+
    '</div>';	
});


leftNavSettings.addEventListener('click', () => {
    headerNav.innerHTML = '<div class="notEdit allTopNav">'+
        '<div class="notEdit">'+
            '<span onclick="appendBlock();" class="notEdit elementTopNav">Добавить блок</span>'+
            '<span onclick="deletedBlock();" class="notEdit elementTopNav">Удалить блок</span>'+
        '</div>'+
        '<div>'+
    		'<button onclick="xxx();" class="notEdit">Блок</button><button onclick="changeClass(\'red\');" class="notEdit">red</button><button onclick="changeClass(\'blue\');" class="notEdit">blue</button><button onclick="changeClass(\'FS4\');" class="notEdit">FS4</button><button onclick="changeClass(\'border\');" class="notEdit">border</button><button onclick="changeClass(\'bg\');" class="notEdit">bg</button><button onclick="changeClass(\'bg2\');" class="notEdit">bg2</button>';
    	'</div>'+
    '</div>';	
});


