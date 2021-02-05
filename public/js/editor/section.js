// Панель "НАСТРОЙКА СЕКЦИИ"
function topNavSection(elem) {
        // Отключение страндартного поведения при клике, чтоб не сбрасывать фокус
        elem.addEventListener('mousedown', e => e.preventDefault());

        let sect = elem.parentNode.previousSibling;
        let idSect = elem.parentNode.previousSibling.id;

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
                '<select class="inp" onchange="changeBgSect(this.value, \''+idSect+'\')">'+
                    '<option selected value="none">Фоновый цвет</option>'+
                    '<option value="red">Красный</option>'+
                    '<option value="blue">Синий</option>'+
                    '<option value="black">Черный</option>'+
                    '<option value="white">Белый</option>'+
                '</select>'+
                '<select class="inp" onchange="changeBorderSect(this.value, \''+idSect+'\')">'+
                    '<option selected value="none">Цвет рамки</option>'+
                    '<option value="red">Красный</option>'+
                    '<option value="blue">Синий</option>'+
                    '<option value="black">Черный</option>'+
                    '<option value="white">Белый</option>'+
                '</select>'+
                '<select class="inp" onchange="changeShadowSect(this.value, \''+idSect+'\')">'+
                    '<option selected value="none;">Цвет тени</option>'+
                    '<option value="red">Красный</option>'+
                    '<option value="blue">Синий</option>'+
                    '<option value="black">Черный</option>'+
                    '<option value="white">Белый</option>'+
                '</select>'+
            '</div>'+
        '</div>';
}


function changeBgSect(nameStyle, idElem) {
    let focusElem = document.querySelector('#'+idElem);
    focusElem.style.background = nameStyle
}
function changeBorderSect(nameStyle, idElem) {
    let focusElem = document.querySelector('#'+idElem);
    focusElem.style.border = '1px solid '+nameStyle+'';
}
function changeShadowSect(nameStyle, idElem) {
    let focusElem = document.querySelector('#'+idElem);
    focusElem.style.boxShadow = '0px 0px 10px '+nameStyle+'';
}
// Добавление новой секции
function appendSection() {
    let newSection = document.createElement('div'); // Создание секции
    let rand = URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, ""); // Создание рандомного ID
    newSection.classList.add('editor'); // Добавление класса области редактирования
    newSection.setAttribute('id', 'a'+rand); // Добавление ID
    newSection.setAttribute('contenteditable', 'true'); // Возможность редактировать контент

    let newSectionNav = createSectionNav(); // Создание навигации для секции

    document.querySelector('#contentBook').appendChild(newSection); // Добавлении Секции
    document.querySelector('#contentBook').appendChild(newSectionNav); // Добавление навигации для секции
}

// Создание навигации для секции
function createSectionNav() {
    let newSectionNav = document.createElement('div'); // Создание навигации
    newSectionNav.classList.add('sectionNav'); // Добавление класса навигации
    
    let newDel = document.createElement('img'); // Создание кнопки удаление секции

    newDel.classList.add('elementSectionNav'); // Добавление классов элементу
    newDel.classList.add('notEdit');
    newDel.classList.add('trush');
    newDel.src = 'public/img/delete.svg';
    newDel.setAttribute('onclick', 'deletedSectionBtn(this);');


    let newSetings = document.createElement('img');

    newSetings.classList.add('elementSectionNav');
    newSetings.classList.add('notEdit');
    newSetings.src = 'public/img/settings.svg';
    newSetings.setAttribute('onclick', 'topNavSection(this);');
    
    newSectionNav.appendChild(newDel);
    newSectionNav.appendChild(newSetings);
    return newSectionNav;
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
    if(elem.parentNode.previousSibling) {
        elem.parentNode.previousSibling.remove();
        elem.parentNode.remove();
    } else {
        return false;
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