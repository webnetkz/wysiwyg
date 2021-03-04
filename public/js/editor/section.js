// Панель "НАСТРОЙКА СЕКЦИИ"
function topNavSection(elem) {
        let sect = elem.parentNode.previousSibling;
        let idSect = elem.parentNode.previousSibling.id;

        // Отображение панели убравления "СЕКЦИЯ"
        headerNav.innerHTML = '<div class="notEdit allTopNav">'+
            						'<div class="notEdit">'+

                                        '<div>'+
                                        '<img src="public/img/palitra.svg" onclick="showPalitra(this);" class="notEdit elementTopNavImg">'+
                                        '<div class="colorPickerPalitra" style="display: none;">'+
                                            '<div class="colorPicker">'+
                                                '<div onclick="changeBgSect(\'black\', \''+idSect+'\');" style="background: black"></div>'+
                                                '<div onclick="changeBgSect(\'white\', \''+idSect+'\');" style="background: white"></div>'+
                                                '<div onclick="changeBgSect(\'red\', \''+idSect+'\');" style="background: red"></div>'+
                                                '<div onclick="changeBgSect(\'IndianRed\', \''+idSect+'\');" style="background: IndianRed"></div>'+
                                                '<div onclick="changeBgSect(\'DarkRed\', \''+idSect+'\');" style="background: DarkRed"></div>'+
                                            '</div>'+
                                            '<div class="colorPicker">'+
                                                '<div onclick="changeBgSect(\'green\', \''+idSect+'\');" style="background: green"></div>'+
                                                '<div onclick="changeBgSect(\'GreenYellow\', \''+idSect+'\');" style="background: GreenYellow"></div>'+
                                                '<div onclick="changeBgSect(\'LimeGreen\', \''+idSect+'\');" style="background: LimeGreen"></div>'+
                                                '<div onclick="changeBgSect(\'SpringGreen\', \''+idSect+'\');" style="background: SpringGreen"></div>'+
                                                '<div onclick="changeBgSect(\'LightSeaGreen\', \''+idSect+'\');" style="background: LightSeaGreen"></div>'+
                                            '</div>'+
                                            '<div class="colorPicker">'+
                                                '<div onclick="changeBgSect(\'MediumSeaGreen\', \''+idSect+'\');" style="background: MediumSeaGreen"></div>'+
                                                '<div onclick="changeBgSect(\'DarkGreen\', \''+idSect+'\');" style="background: DarkGreen"></div>'+
                                                '<div onclick="changeBgSect(\'Olive\', \''+idSect+'\');" style="background: Olive"></div>'+
                                                '<div onclick="changeBgSect(\'LightSeaGreen\', \''+idSect+'\');" style="background: LightSeaGreen"></div>'+
                                                '<div onclick="changeBgSect(\'Teal\', \''+idSect+'\');" style="background: Teal"></div>'+
                                            '</div>'+
                                            '<div class="colorPicker">'+
                                                '<div onclick="changeBgSect(\'Pink\', \''+idSect+'\');" style="background: Pink"></div>'+
                                                '<div onclick="changeBgSect(\'HotPink\', \''+idSect+'\');" style="background: HotPink"></div>'+
                                                '<div onclick="changeBgSect(\'MediumVioletRed\', \''+idSect+'\');" style="background: MediumVioletRed"></div>'+
                                                '<div onclick="changeBgSect(\'LightSalmon\', \''+idSect+'\');" style="background: LightSalmon"></div>'+
                                                '<div onclick="changeBgSect(\'OrangeRed\', \''+idSect+'\');" style="background: OrangeRed"></div>'+
                                            '</div>'+
                                            '<div class="colorPicker">'+
                                                '<div onclick="changeBgSect(\'Gold\', \''+idSect+'\');" style="background: Gold"></div>'+
                                                '<div onclick="changeBgSect(\'Yellow\', \''+idSect+'\');" style="background: Yellow"></div>'+
                                                '<div onclick="changeBgSect(\'Aqua\', \''+idSect+'\');" style="background: Aqua"></div>'+
                                                '<div onclick="changeBgSect(\'DarkTurquoise\', \''+idSect+'\');" style="background: DarkTurquoise"></div>'+
                                                '<div onclick="changeBgSect(\'SteelBlue\', \''+idSect+'\');" style="background: SteelBlue"></div>'+
                                            '</div>'+
                                            '<div class="colorPicker">'+
                                                '<div onclick="changeBgSect(\'Blue\', \''+idSect+'\');" style="background: Blue"></div>'+
                                                '<div onclick="changeBgSect(\'DarkBlue\', \''+idSect+'\');" style="background: DarkBlue"></div>'+
                                                '<div onclick="changeBgSect(\'Violet\', \''+idSect+'\');" style="background: Violet"></div>'+
                                                '<div onclick="changeBgSect(\'Magenta\', \''+idSect+'\');" style="background: Magenta"></div>'+
                                                '<div onclick="changeBgSect(\'Indigo\', \''+idSect+'\');" style="background: Indigo"></div>'+
                                            '</div>'+
                                            '<div class="colorPicker">'+
                                                '<div onclick="changeBgSect(\'Snow\', \''+idSect+'\');" style="background: Snow"></div>'+
                                                '<div onclick="changeBgSect(\'AntiqueWhite\', \''+idSect+'\');" style="background: AntiqueWhite"></div>'+
                                                '<div onclick="changeBgSect(\'Gray\', \''+idSect+'\');" style="background: Gray"></div>'+
                                                '<div onclick="changeBgSect(\'SlateGray\', \''+idSect+'\');" style="background: SlateGray"></div>'+
                                                '<div onclick="changeBgSect(\'Brown\', \''+idSect+'\');" style="background: Brown"></div>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>	'+
		
	
                                                    
                            
                                    '<div>'+
                                        '<img src="public/img/borderRadius.svg" onclick="showList(this);" class="notEdit elementTopNavImg">'+
                                        '<div class="showList" style="display: none">'+
                                            '<div onclick="changeBorderRadiusBlock(\'1px\', \''+idSect+'\');">1 пиксель</div>'+
                                            '<div onclick="changeBorderRadiusBlock(\'2px\', \''+idSect+'\');">2 пикселя</div>'+
                                            '<div onclick="changeBorderRadiusBlock(\'3px\', \''+idSect+'\');">3 пикселя</div>'+
                                            '<div onclick="changeBorderRadiusBlock(\'4px\', \''+idSect+'\');">4 пикселя</div>'+
                                            '<div onclick="changeBorderRadiusBlock(\'5px\', \''+idSect+'\');">5 пикселей</div>'+
                                            '<div onclick="changeBorderRadiusBlock(\'10px\', \''+idSect+'\');">10 пикселей</div>'+
                                            '<div onclick="changeBorderRadiusBlock(\'20px\', \''+idSect+'\');">20 пикселей</div>'+

                                        '</div>'+
                                    '</div>'+
                                    

                                    '<div>'+
                                        '<img src="public/img/shadow.svg" onclick="showList(this);" class="notEdit elementTopNavImg">'+
                                        '<div class="showList" style="display: none">'+
                                            '<div onclick="changeShadowBox(\'0 0 0px white\', \''+idSect+'\');">Убрать тень</div>'+
                                            '<div onclick="changeShadowBox(\'0 0 10px black\', \''+idSect+'\');">Стиль тени 1</div>'+
                                            '<div onclick="changeShadowBox(\'0 0 30px black\', \''+idSect+'\');">Стиль тени 2</div>'+
                                            '<div onclick="changeShadowBox(\'10px 10px 10px black\', \''+idSect+'\');">Стиль тени 3</div>'+
                                            '<div onclick="changeShadowBox(\'-10px -10px 10px black\', \''+idSect+'\');">Стиль тени 4</div>'+
                                            '<div onclick="changeShadowBox(\'10px 10px 30px black\', \''+idSect+'\');">Стиль тени 5</div>'+
                                            '<div onclick="changeShadowBox(\'-10px -10px 30px black\', \''+idSect+'\');">Стиль тени 6</div>'+
                                            '<div onclick="changeShadowBox(\'0 0 20px rgba(0,0,0, 0.4)\', \''+idSect+'\');">Стиль тени 7</div>'+
                                        '</div>'+
                                    '</div>'+

						'</div>';
                                    
                                    
}

// Стили секции
function changeBgSect(nameStyle, idElem) {
    let focusElem = document.querySelector('#'+idElem);
    focusElem.style.background = nameStyle
}



function changeBorderColorSect(nameStyle, idElem) {
    let focusElem = document.querySelector('#'+idElem);
    focusElem.style.borderColor = nameStyle
}
function changeBorderWidthSect(nameStyle, idElem) {
    let focusElem = document.querySelector('#'+idElem);
    focusElem.style.borderWidth = nameStyle
}
function changeBorderRadiusSect(nameStyle, idElem) {
    let focusElem = document.querySelector('#'+idElem);
    focusElem.style.borderRadius = nameStyle
}

// Добавление новой секции
function appendSection() {
    let shellSect = document.createElement('div'); // Оболочка секции
    let newSection = document.createElement('div'); // Создание секции
    let rand = URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, ""); // Создание рандомного ID
    newSection.classList.add('editor'); // Добавление класса области редактирования
    newSection.setAttribute('id', 'a'+rand); // Добавление ID


    let newSectionNav = createSectionNav(); // Создание навигации для секции

    shellSect.appendChild(newSection); // Добавлении Секции
    shellSect.appendChild(newSectionNav); // Добавление навигации для секции
    document.querySelector('#contentBook').appendChild(shellSect); // Добавление всей секции с навигацией и оболочкой
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

    let newBlock = document.createElement('img');

    newBlock.classList.add('elementSectionNav');
    newBlock.classList.add('notEdit');
    newBlock.src = 'public/img/plus.svg';
    newBlock.setAttribute('onclick', 'appendBlock(this.previousSibling.previousSibling.parentNode.previousSibling.id);');
    
    newSectionNav.appendChild(newDel);
    newSectionNav.appendChild(newSetings);
    newSectionNav.appendChild(newBlock);
    return newSectionNav;
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

