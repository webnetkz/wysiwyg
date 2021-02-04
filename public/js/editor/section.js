let leftNavSection = document.querySelector('#leftNavSection'); // Кнопка вызова панели "СЕКЦИЯ"
// Обработчик вызова панели "СЕКЦИЯ"
leftNavSection.addEventListener('click', () => {
	// Отключение страндартного поведения при клике, чтоб не сбрасывать фокус
	leftNavSection.addEventListener('mousedown', e => e.preventDefault());
	// Отображение панели убравления "СЕКЦИЯ"
    headerNav.innerHTML = '<div class="notEdit allTopNav">'+
        '<div class="notEdit">'+
            '<span onclick="appendSection();" class="notEdit elementTopNav">Добавить секцию</span>'+
        '</div>'+
        '<div class="notEdit">'+
            '<span onclick="appendSection2();" class="notEdit elementTopNav">Добавить секцию 2-1</span>'+
            '<span onclick="appendSection3();" class="notEdit elementTopNav">Добавить секцию 1-2</span>'+
            '<span onclick="appendSection4();" class="notEdit elementTopNav">Добавить секцию 1-1-1</span>'+
        '</div>'+
        '<div class="notEdit">'+
            '<span onclick="changeClassSection("bg");" class="notEdit elementTopNav">Фон красный</span>'+
            '<span onclick="appendSection3();" class="notEdit elementTopNav">Добавить секцию 1-2</span>'+
            '<span onclick="appendSection4();" class="notEdit elementTopNav">Добавить секцию 1-1-1</span>'+
        '</div>'+
    '</div>';
});

// Создание кнопки удаления секции
function createSectionNav() {
    let newSectionNav = document.createElement('div');
    newSectionNav.classList.add('sectionNav');
    
    let newDel = document.createElement('img');

    newDel.classList.add('elementSectionNav');
    newDel.classList.add('notEdit');
    newDel.src = 'public/img/delete.svg';
    newDel.setAttribute('onclick', 'deletedSectionBtn(this);');

    let newSect = document.createElement('img');

    newSect.classList.add('elementSectionNav');
    newSect.classList.add('notEdit');
    newSect.src = 'public/img/delete.svg';
    newSect.setAttribute('onclick', 'deletedSectionBtn(this);');

    let newSetings = document.createElement('img');

    newSetings.classList.add('elementSectionNav');
    newSetings.classList.add('notEdit');
    newSetings.src = 'public/img/setings.svg';
    newSetings.setAttribute('onclick', 'deletedSectionBtn(this);');
    
    newSectionNav.appendChild(newDel);
    newSectionNav.appendChild(newSect);
    newSectionNav.appendChild(newSetings);
    return newSectionNav;
}

// Добавление новой секции
function appendSection() {
    const newSection = document.createElement('div');
    let rand = URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, "")
    newSection.classList.add('newEditor');
    newSection.setAttribute('id', 'a'+rand);
    newSection.setAttribute('contenteditable', 'true');

    let newSectionNav = createSectionNav();

    document.querySelector('#contentBook').appendChild(newSection);
    document.querySelector('#contentBook').appendChild(newSectionNav);
}
// Блоки для секций
    let block2 = document.createElement('div');
    rand = URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, "")
    block2.classList.add('block2');
    block2.setAttribute('id', 'a'+rand);

    let block3 = document.createElement('div');
    rand = URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, "")
    block3.classList.add('block3');
    block3.setAttribute('id', 'a'+rand);
// Добавление секции 2-1
function appendSection2() {
    const newSection = document.createElement('div');
    let rand = URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, "")
    newSection.classList.add('newEditor2');
    newSection.setAttribute('id', 'a'+rand);
    newSection.setAttribute('contenteditable', 'true');

    newSection.appendChild(block2);
    newSection.appendChild(block3);

    let newSectionNav = createSectionNav();

    document.querySelector('#contentBook').appendChild(newSection);
    document.querySelector('#contentBook').appendChild(newSectionNav);
}
// Добавление секции 1-2
function appendSection3() {
    const newSection = document.createElement('div');
    let rand = URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, "")
    newSection.classList.add('newEditor2');
    newSection.setAttribute('id', 'a'+rand);
    newSection.setAttribute('contenteditable', 'true');

    newSection.appendChild(block3);
    newSection.appendChild(block2);

    let newSectionNav = createSectionNav();

    document.querySelector('#contentBook').appendChild(newSection);
    document.querySelector('#contentBook').appendChild(newSectionNav);
}
// Добавление секции 1-1-1
function appendSection4() {
    const newSection = document.createElement('div');
    let rand = URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, "")
    newSection.classList.add('newEditor2');
    newSection.setAttribute('id', 'a'+rand);
    newSection.setAttribute('contenteditable', 'true');

    let block4 = block3;
    let block5 = block3;

    newSection.appendChild(block3);
    newSection.appendChild(block4);
    newSection.appendChild(block5);


    let newSectionNav = createSectionNav();

    document.querySelector('#contentBook').appendChild(newSection);
    document.querySelector('#contentBook').appendChild(newSectionNav);
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


function changeClassSection(NameClass) {
    let focusElem = window.getSelection();
    console.log(focusElem);
    console.log(focusElem.focusNode.parentNode.className);
    console.log(focusElem);
    // if(checkClass(focusElem.focusNode.parentNode.className, NameClass)) {
    //     focusElem.focusNode.parentNode.className = deleteClass(focusElem.focusNode.parentNode.className, NameClass);
    // } else {
    //     focusElem.focusNode.parentNode.className += ' '+NameClass;
    // }
}