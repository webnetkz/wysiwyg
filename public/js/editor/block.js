// Панель "НАСТРОЙКА СЕКЦИИ"
function topNavBlock(elem) {
    
    let block = elem.previousSibling;
    let idBlock = block.id;

    // Отображение панели убравления "СЕКЦИЯ"
    headerNav.innerHTML = '<div class="notEdit allTopNav">'+
        '<div class="notEdit">'+
            '<div>'+
                '<img src="public/img/formula.svg" onclick="appendFormula(\''+idBlock+'\');" class="notEdit elementTopNavImg">'+
            '</div>'+
            '<div>'+
                '<img src="public/img/delete.svg" onclick="deletedBlock(\''+idBlock+'\');" class="notEdit elementTopNavImg">'+
            '</div>'+
            '<div>'+
                '<img src="public/img/photo.svg" onclick="appendImg(\''+idBlock+'\');" class="notEdit elementTopNavImg">'+
                '<img src="public/img/video.svg" onclick="appendVideo(\''+idBlock+'\');" class="notEdit elementTopNavImg">'+
            '</div>'+
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

// Добавление видео по ссылке
function appendVideo(idBlock) {
    let focusElem = document.querySelector('#'+idBlock);

    if(focusElem) {
        let newVideo = document.createElement('video');
        newVideo.setAttribute('controls', '');

        let urlLink = prompt('Введите ссылку на видео');

        let newSource = document.createElement('source');
        newSource.src = urlLink;
        newVideo.appendChild(newSource);

        focusElem.appendChild(newVideo);
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
    focusElem.nextSibling.remove();
    focusElem.remove();
}