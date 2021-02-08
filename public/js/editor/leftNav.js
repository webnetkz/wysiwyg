const headerNav = document.querySelector('header');


let leftNavSettings = document.querySelector('#leftNavSettings');
let leftNavHome = document.querySelector('#leftNavHome');



leftNavHome.addEventListener('click', () => {
    headerNav.innerHTML = '<div class="notEdit allTopNav">'+
        '<div class="notEdit">'+
            '<span onclick="appendSection();" class="notEdit elementTopNav">Добавить секцию</span>'+
        '</div>'+
    '</div>';	
});

leftNavSettings.addEventListener('click', () => {

    if(document.querySelector('.darkMod')) {
        document.querySelector('.darkMod').remove();
    } else {
        let darkStyles = document.createElement('style');
        darkStyles.innerText = ':root {filter: invert(100%)}';
        darkStyles.classList.add('darkMod');
        document.body.appendChild(darkStyles)
    }
        
    
    // headerNav.innerHTML = '<div class="notEdit allTopNav">'+
    //     '<div class="notEdit">'+
    //         '<span onclick="appendBlock();" class="notEdit elementTopNav">Добавить блок</span>'+
    //         '<span onclick="deletedBlock();" class="notEdit elementTopNav">Удалить блок</span>'+
    //     '</div>'+
    //     '<div>'+
    // 		'<button onclick="xxx();" class="notEdit">Блок</button><button onclick="changeClass(\'red\');" class="notEdit">red</button><button onclick="changeClass(\'blue\');" class="notEdit">blue</button><button onclick="changeClass(\'FS4\');" class="notEdit">FS4</button><button onclick="changeClass(\'border\');" class="notEdit">border</button><button onclick="changeClass(\'bg\');" class="notEdit">bg</button><button onclick="changeClass(\'bg2\');" class="notEdit">bg2</button>';
    // 	'</div>'+
    // '</div>';	
});


