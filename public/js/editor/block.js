// Панель "НАСТРОЙКА СЕКЦИИ"
function topNavBlock(elem) {
    
    let block = elem.previousSibling;
    let idBlock = block.id;

    // Отображение панели убравления "СЕКЦИЯ"
    headerNav.innerHTML = '<div class="notEdit allTopNav">'+
        '<div class="notEdit">'+
            '<span onclick="appendBlock(\''+idBlock+'\', \'block0\');" class="notEdit elementTopNav">Добавить изображение</span>'+
            '<span onclick="appendBlock(\''+idBlock+'\', \'block2\');" class="notEdit elementTopNav">Добавить видео</span>'+
            '<span onclick="appendBlock(\''+idBlock+'\', \'block3\');" class="notEdit elementTopNav">Добавить таблицу</span>'+
        '</div>'+
        '<div class="notEdit">'+
            '<select class="inp" onchange="changeBgBlock(this.value, \''+idBlock+'\')">'+
                '<option selected value="none">Фоновый цвет</option>'+
                '<option value="red">Красный</option>'+
                '<option value="blue">Синий</option>'+
                '<option value="black">Черный</option>'+
                '<option value="white">Белый</option>'+
            '</select>'+
            '<select class="inp" onchange="changeBorderBlock(this.value, \''+idBlock+'\')">'+
                '<option selected value="none">Цвет рамки</option>'+
                '<option value="red">Красный</option>'+
                '<option value="blue">Синий</option>'+
                '<option value="black">Черный</option>'+
                '<option value="white">Белый</option>'+
            '</select>'+
            '<select class="inp" onchange="changeShadowBlock(this.value, \''+idBlock+'\')">'+
                '<option selected value="none;">Цвет тени</option>'+
                '<option value="red">Красный</option>'+
                '<option value="blue">Синий</option>'+
                '<option value="black">Черный</option>'+
                '<option value="white">Белый</option>'+
            '</select>'+
        '</div>'+
    '</div>';
}

// Стили блока
function changeBgBlock(nameStyle, idElem) {
    let focusElem = document.querySelector('#'+idElem);
    focusElem.style.background = nameStyle
}
function changeBorderBlock(nameStyle, idElem) {
    let focusElem = document.querySelector('#'+idElem);
    focusElem.style.border = '1px solid '+nameStyle+'';
}
function changeShadowBlock(nameStyle, idElem) {
    let focusElem = document.querySelector('#'+idElem);
    focusElem.style.boxShadow = '0px 0px 10px '+nameStyle+'';
}

// Создание кнопки удаления секции
function createBtnDel() {
    let newDel = document.createElement('img');
    
    newDel.classList.add('del');
    newDel.classList.add('notEdit');
    newDel.src = 'public/img/delete.svg';
    newDel.setAttribute('onclick', 'deletedSectionBtn(this);');
    
    return newDel;
}

function appendBlock(idSect, classBlock) {
    let focusElem = document.querySelector('#'+idSect);

    let block = classBlock;

    if(focusElem) {
        let rand = URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, "")
        let block0 = document.createElement('div');
        block0.classList.add(classBlock);
        block0.setAttribute('id', 'a'+rand);

        let setingsBlock = document.createElement('img');
        setingsBlock.classList.add('setingsBlock');
        setingsBlock.classList.add('notEdit');
        setingsBlock.src = 'public/img/settings.svg';
        setingsBlock.setAttribute('onclick', 'topNavBlock(this);');
        
        focusElem.appendChild(block0);
        focusElem.appendChild(setingsBlock);

    } else {
        return false;
    }   
}

function deletedBlock() {
    let focusElem = window.getSelection();
    if(!checkClass(focusElem.anchorNode.firstElementChild.className, 'editor')) {
        document.querySelector('#'+focusElem.anchorNode.firstElementChild.id).remove();
    } else {
        return false;
    }
}