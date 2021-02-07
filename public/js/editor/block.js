// Панель "НАСТРОЙКА СЕКЦИИ"
function topNavBlock(elem) {
    
    let block = elem.previousSibling;
    let idBlock = block.id;

    // Отображение панели убравления "СЕКЦИЯ"
    headerNav.innerHTML = '<div class="notEdit allTopNav">'+
        '<div class="notEdit">'+
            '<span onclick="appendImg(\''+idBlock+'\');" class="notEdit elementTopNav">Добавить изображение</span>'+
            '<span onclick="appendBlock(\''+idBlock+'\', \'block2\');" class="notEdit elementTopNav">Добавить видео</span>'+
            '<span onclick="deletedBlock(\''+idBlock+'\');" class="notEdit elementTopNav">Удалить блок</span>'+
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
        '<div class="notEdit">'+
            '<span onclick="appendFormula(\''+idBlock+'\');" class="notEdit elementTopNav">Добавить формулу</span>'+
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

// Добавление формулы
function appendFormula(idBlock) {
    let focusElem = document.querySelector('#'+idBlock);

    if(focusElem) {
        let fl = document.createElement('math');

        let flRes = prompt('Введите формулу без тегов <math>');
        fl.innerHTML = flRes;

        focusElem.appendChild(fl);
    } else {
        return false;
    }   
}

// Добавление изображения по ссылке
function appendImg(idBlock) {
    let focusElem = document.querySelector('#'+idBlock);

    if(focusElem) {
        let newImg = document.createElement('img');

        let urlLink = prompt('Введите ссылку на картинку');
        newImg.src = urlLink;

        focusElem.appendChild(newImg);
    } else {
        return false;
    }   
}

// Создание кнопки удаления блока
function createBtnDel() {
    let newDel = document.createElement('img');
    
    newDel.classList.add('del');
    newDel.classList.add('notEdit');
    newDel.src = 'public/img/delete.svg';
    newDel.setAttribute('onclick', 'deletedSectionBtn(this);');
    
    return newDel;
}

function appendBlock(idBlock, classBlock) {
    let focusElem = document.querySelector('#'+idBlock);

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

function deletedBlock(idBlock) {
    let focusElem = document.querySelector('#'+idBlock);
    focusElem.remove();
}