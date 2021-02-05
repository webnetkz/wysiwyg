let leftNavBlock = document.querySelector('#leftNavBlock'); // Кнопка вызова панели "БЛОК"
// Обработчик вызова панели "БЛОК"
leftNavBlock.addEventListener('click', () => {
	// Отключение страндартного поведения при клике, чтоб не сбрасывать фокус
	leftNavBlock.addEventListener('mousedown', e => e.preventDefault());
	// Отображение панели убравления "БЛОК"
    headerNav.innerHTML = '<div class="notEdit allTopNav">'+
        '<div class="notEdit">'+
            '<span onclick="appendBlock();" class="notEdit elementTopNav">Добавить блок</span>'+
            '<span onclick="appendBlock();" class="notEdit elementTopNav">Добавить блок 2/3</span>'+
            '<span onclick="appendBlock();" class="notEdit elementTopNav">Добавить блок 1/3</span>'+
        '</div>'+
        '<div class="notEdit">'+
            '<span onclick="checkClass();" class="notEdit elementTopNav">Клонка 1 из 3</span>'+
            '<span onclick="checkClass();" class="notEdit elementTopNav">Клонка 2 из 3</span>'+
            '<span onclick="checkClass();" class="notEdit elementTopNav">Добавить секцию 1-1-1</span>'+
        '</div>'+
    '</div>';
});

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
        setingsBlock.setAttribute('onclick', 'topNavSection(this);');
        
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