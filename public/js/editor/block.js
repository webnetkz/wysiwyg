let leftNavBlock = document.querySelector('#leftNavBlock'); // Кнопка вызова панели "БЛОК"
// Обработчик вызова панели "БЛОК"
leftNavBlock.addEventListener('click', () => {
	// Отключение страндартного поведения при клике, чтоб не сбрасывать фокус
	leftNavBlock.addEventListener('mousedown', e => e.preventDefault());
	// Отображение панели убравления "БЛОК"
    headerNav.innerHTML = '<div class="notEdit allTopNav">'+
        '<div class="notEdit">'+
            '<span onclick="appendBlock();" class="notEdit elementTopNav">Добавить блок</span>'+
            '<span onclick="deletedBlock();" class="notEdit elementTopNav">Удалить блок</span>'+
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

// Добавление новой секции
function appendSection() {
    const newSection = document.createElement('div');
    let rand = URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, "")
    newSection.classList.add('newEditor');
    newSection.setAttribute('id', 'a'+rand);
    newSection.setAttribute('contenteditable', 'true');

    let newDel = createBtnDel();

    document.querySelector('#contentBook').appendChild(newSection);
    document.querySelector('#contentBook').appendChild(newDel);
}
// Добавление секции 2-1
function appendSection2() {
    const newSection = document.createElement('div');
    let rand = URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, "")
    newSection.classList.add('newEditor2');
    newSection.setAttribute('id', 'a'+rand);
    newSection.setAttribute('contenteditable', 'true');


    let block2 = document.createElement('div');
    rand = URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, "")
    block2.classList.add('block2');
    block2.setAttribute('id', 'a'+rand);

    let block3 = document.createElement('div');
    rand = URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, "")
    block3.classList.add('block3');
    block3.setAttribute('id', 'a'+rand);


    newSection.appendChild(block2);
    newSection.appendChild(block3);


    let newDel = createBtnDel();

    document.querySelector('#contentBook').appendChild(newSection);
    document.querySelector('#contentBook').appendChild(newDel);
}
// Добавление секции 1-2
function appendSection3() {
    const newSection = document.createElement('div');
    let rand = URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, "")
    newSection.classList.add('newEditor2');
    newSection.setAttribute('id', 'a'+rand);
    newSection.setAttribute('contenteditable', 'true');


    let block2 = document.createElement('div');
    rand = URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, "")
    block2.classList.add('block2');
    block2.setAttribute('id', 'a'+rand);

    let block3 = document.createElement('div');
    rand = URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, "")
    block3.classList.add('block3');
    block3.setAttribute('id', 'a'+rand);


    newSection.appendChild(block3);
    newSection.appendChild(block2);


    let newDel = createBtnDel();

    document.querySelector('#contentBook').appendChild(newSection);
    document.querySelector('#contentBook').appendChild(newDel);
}
// Добавление секции 1-1-1
function appendSection4() {
    const newSection = document.createElement('div');
    let rand = URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, "")
    newSection.classList.add('newEditor2');
    newSection.setAttribute('id', 'a'+rand);
    newSection.setAttribute('contenteditable', 'true');

    let block3 = document.createElement('div');
    rand = URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, "")
    block3.classList.add('block3');
    block3.setAttribute('id', 'a'+rand);

    let block4 = document.createElement('div');
    rand = URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, "")
    block4.classList.add('block3');
    block4.setAttribute('id', 'a'+rand);

    let block5 = document.createElement('div');
    rand = URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, "")
    block5.classList.add('block3');
    block5.setAttribute('id', 'a'+rand);

    newSection.appendChild(block3);
    newSection.appendChild(block4);
    newSection.appendChild(block5);


    let newDel = createBtnDel();

    document.querySelector('#contentBook').appendChild(newSection);
    document.querySelector('#contentBook').appendChild(newDel);
}
// Удаление сеции
function deletedSection() {
    let focusElem = window.getSelection();
    document.querySelector('#'+focusElem.anchorNode.id).remove();
}
// Удаление сеции через иконку
function deletedSectionBtn(elem) {
    if(elem.previousSibling.previousSibling.id) {
        var res = document.querySelector('#'+elem.previousSibling.previousSibling.id);
    }
    if(res) {
        res.remove();
        elem.remove();
    } else {
        let res = document.querySelector('#'+elem.previousSibling.id);
        res.remove();
        elem.remove();
    }
}


function appendBlock() {
    let focusElem = window.getSelection();

    if(focusElem) {
        let rand = URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, "")
        let newBlock = document.createElement('div');
        newBlock.classList.add('newBlock');
        newBlock.setAttribute('id', 'a'+rand);

        document.querySelector('#'+focusElem.anchorNode.id).appendChild(newBlock);
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