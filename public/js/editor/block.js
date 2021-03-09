// Панель "НАСТРОЙКА СЕКЦИИ"
function topNavBlock(elem) {
    
    let block = elem.previousSibling;
    let idBlock = block.id;

    let params = (new URL(document.location)).searchParams;
    let book = params.get("book");
    let part = params.get("part");


    // Отображение панели убравления "СЕКЦИЯ"
    headerNav.innerHTML = '<div class="notEdit allTopNav">'+
        '<div class="notEdit">'+
            '<div>'+
                '<img src="public/img/delete.svg" onclick="deletedBlock(\''+idBlock+'\');" class="notEdit elementTopNavImg">'+
            '</div>'+
            '<div>'+
                '<img src="public/img/table.svg" onclick="appendTable(\''+idBlock+'\');" class="notEdit elementTopNavImg">'+
            '</div>'+
            '<div>'+
                '<img src="public/img/formula.svg" onclick="appendFormula(\''+idBlock+'\');" class="notEdit elementTopNavImg">'+
            '</div>'+
            '<div>'+
                '<img src="public/img/photo.svg" onclick="appendImg(\''+idBlock+'\');" class="notEdit elementTopNavImg">'+
                '<form action="app/uploads/uploadImg" style="display: none;"  method="POST" enctype="multipart/form-data">'+
                    '<input type="file" onchange="this.form.submit();" id="addNewImg" name="newFile" style="display: none";>'+
                    '<input type="text" name="book" style="display: none;" value="'+book+'">'+
                    '<input type="text" name="part" style="display: none;" value="'+part+'">'+
                    '<input type="text" name="block" style="display: none;" value="'+idBlock+'">'+
                '</form>'+
            '</div>'+
			'<div>'+
                '<img src="public/img/video.svg" onclick="appendVideo();" class="notEdit elementTopNavImg">'+
                '<form action="app/uploads/uploadVideo" style="display: none;"  method="POST" enctype="multipart/form-data">'+
                    '<input type="file" onchange="this.form.submit();" id="addNewVideo" name="newFile" style="display: none";>'+
                    '<input type="text" name="book" style="display: none;" value="'+book+'">'+
                    '<input type="text" name="part" style="display: none;" value="'+part+'">'+
                    '<input type="text" name="block" style="display: none;" value="'+idBlock+'">'+
                '</form>'+
            '</div>'+
            '<div>'+
                '<img src="public/img/audio.svg" onclick="appendAudio();" class="notEdit elementTopNavImg">'+
                '<form action="app/uploads/uploadAudio" style="display: none;"  method="POST" enctype="multipart/form-data">'+
                    '<input type="file" onchange="this.form.submit();" id="addNewVideo" name="newFile" style="display: none";>'+
                    '<input type="text" name="book" style="display: none;" value="'+book+'">'+
                    '<input type="text" name="part" style="display: none;" value="'+part+'">'+
                    '<input type="text" name="block" style="display: none;" value="'+idBlock+'">'+
                '</form>'+
            '</div>'+
		
		
		        '<div>'+
                    '<img src="public/img/borderColor.svg" onclick="showPalitra(this);" class="notEdit elementTopNavImg">'+
                    '<div class="colorPickerPalitra" style="display: none;">'+
                        '<div class="colorPicker">'+
                            '<div onclick="changeBorderColorBlock(\'black\', \''+idBlock+'\');" style="background: black"></div>'+
                            '<div onclick="changeBorderColorBlock(\'white\', \''+idBlock+'\');" style="background: white"></div>'+
                            '<div onclick="changeBorderColorBlock(\'red\', \''+idBlock+'\');" style="background: red"></div>'+
                            '<div onclick="changeBorderColorBlock(\'IndianRed\', \''+idBlock+'\');" style="background: IndianRed"></div>'+
                            '<div onclick="changeBorderColorBlock(\'DarkRed\', \''+idBlock+'\');" style="background: DarkRed"></div>'+
                        '</div>'+
                        '<div class="colorPicker">'+
                            '<div onclick="changeBorderColorBlock(\'green\', \''+idBlock+'\');" style="background: green"></div>'+
                            '<div onclick="changeBorderColorBlock(\'GreenYellow\', \''+idBlock+'\');" style="background: GreenYellow"></div>'+
                            '<div onclick="changeBorderColorBlock(\'LimeGreen\', \''+idBlock+'\');" style="background: LimeGreen"></div>'+
                            '<div onclick="changeBorderColorBlock(\'SpringGreen\', \''+idBlock+'\');" style="background: SpringGreen"></div>'+
                            '<div onclick="changeBorderColorBlock(\'LightSeaGreen\', \''+idBlock+'\');" style="background: LightSeaGreen"></div>'+
                        '</div>'+
                        '<div class="colorPicker">'+
                            '<div onclick="changeBorderColorBlock(\'MediumSeaGreen\', \''+idBlock+'\');" style="background: MediumSeaGreen"></div>'+
                            '<div onclick="changeBorderColorBlock(\'DarkGreen\', \''+idBlock+'\');" style="background: DarkGreen"></div>'+
                            '<div onclick="changeBorderColorBlock(\'Olive\', \''+idBlock+'\');" style="background: Olive"></div>'+
                            '<div onclick="changeBorderColorBlock(\'LightSeaGreen\', \''+idBlock+'\');" style="background: LightSeaGreen"></div>'+
                            '<div onclick="changeBorderColorBlock(\'Teal\', \''+idBlock+'\');" style="background: Teal"></div>'+
                        '</div>'+
                        '<div class="colorPicker">'+
                            '<div onclick="changeBorderColorBlock(\'Pink\', \''+idBlock+'\');" style="background: Pink"></div>'+
                            '<div onclick="changeBorderColorBlock(\'HotPink\', \''+idBlock+'\');" style="background: HotPink"></div>'+
                            '<div onclick="changeBorderColorBlock(\'MediumVioletRed\', \''+idBlock+'\');" style="background: MediumVioletRed"></div>'+
                            '<div onclick="changeBorderColorBlock(\'LightSalmon\', \''+idBlock+'\');" style="background: LightSalmon"></div>'+
                            '<div onclick="changeBorderColorBlock(\'OrangeRed\', \''+idBlock+'\');" style="background: OrangeRed"></div>'+
                        '</div>'+
                        '<div class="colorPicker">'+
                            '<div onclick="changeBorderColorBlock(\'Gold\', \''+idBlock+'\');" style="background: Gold"></div>'+
                            '<div onclick="changeBorderColorBlock(\'Yellow\', \''+idBlock+'\');" style="background: Yellow"></div>'+
                            '<div onclick="changeBorderColorBlock(\'Aqua\', \''+idBlock+'\');" style="background: Aqua"></div>'+
                            '<div onclick="changeBorderColorBlock(\'DarkTurquoise\', \''+idBlock+'\');" style="background: DarkTurquoise"></div>'+
                            '<div onclick="changeBorderColorBlock(\'SteelBlue\', \''+idBlock+'\');" style="background: SteelBlue"></div>'+
                        '</div>'+
                        '<div class="colorPicker">'+
                            '<div onclick="changeBorderColorBlock(\'Blue\', \''+idBlock+'\');" style="background: Blue"></div>'+
                            '<div onclick="changeBorderColorBlock(\'DarkBlue\', \''+idBlock+'\');" style="background: DarkBlue"></div>'+
                            '<div onclick="changeBorderColorBlock(\'Violet\', \''+idBlock+'\');" style="background: Violet"></div>'+
                            '<div onclick="changeBorderColorBlock(\'Magenta\', \''+idBlock+'\');" style="background: Magenta"></div>'+
                            '<div onclick="changeBorderColorBlock(\'Indigo\', \''+idBlock+'\');" style="background: Indigo"></div>'+
                        '</div>'+
                        '<div class="colorPicker">'+
                            '<div onclick="changeBorderColorBlock(\'Snow\', \''+idBlock+'\');" style="background: Snow"></div>'+
                            '<div onclick="changeBorderColorBlock(\'AntiqueWhite\', \''+idBlock+'\');" style="background: AntiqueWhite"></div>'+
                            '<div onclick="changeBorderColorBlock(\'Gray\', \''+idBlock+'\');" style="background: Gray"></div>'+
                            '<div onclick="changeBorderColorBlock(\'SlateGray\', \''+idBlock+'\');" style="background: SlateGray"></div>'+
                            '<div onclick="changeBorderColorBlock(\'Brown\', \''+idBlock+'\');" style="background: Brown"></div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
        
		
		
		        '<div>'+
                    '<img src="public/img/palitra.svg" onclick="showPalitra(this);" class="notEdit elementTopNavImg">'+
                    '<div class="colorPickerPalitra" style="display: none;">'+
                        '<div class="colorPicker">'+
                            '<div onclick="changeBgColorBlock(\'black\', \''+idBlock+'\');" style="background: black"></div>'+
                            '<div onclick="changeBgColorBlock(\'white\', \''+idBlock+'\');" style="background: white"></div>'+
                            '<div onclick="changeBgColorBlock(\'red\', \''+idBlock+'\');" style="background: red"></div>'+
                            '<div onclick="changeBgColorBlock(\'IndianRed\', \''+idBlock+'\');" style="background: IndianRed"></div>'+
                            '<div onclick="changeBgColorBlock(\'DarkRed\', \''+idBlock+'\');" style="background: DarkRed"></div>'+
                        '</div>'+
                        '<div class="colorPicker">'+
                            '<div onclick="changeBgColorBlock(\'green\', \''+idBlock+'\');" style="background: green"></div>'+
                            '<div onclick="changeBgColorBlock(\'GreenYellow\', \''+idBlock+'\');" style="background: GreenYellow"></div>'+
                            '<div onclick="changeBgColorBlock(\'LimeGreen\', \''+idBlock+'\');" style="background: LimeGreen"></div>'+
                            '<div onclick="changeBgColorBlock(\'SpringGreen\', \''+idBlock+'\');" style="background: SpringGreen"></div>'+
                            '<div onclick="changeBgColorBlock(\'LightSeaGreen\', \''+idBlock+'\');" style="background: LightSeaGreen"></div>'+
                        '</div>'+
                        '<div class="colorPicker">'+
                            '<div onclick="changeBgColorBlock(\'MediumSeaGreen\', \''+idBlock+'\');" style="background: MediumSeaGreen"></div>'+
                            '<div onclick="changeBgColorBlock(\'DarkGreen\', \''+idBlock+'\');" style="background: DarkGreen"></div>'+
                            '<div onclick="changeBgColorBlock(\'Olive\', \''+idBlock+'\');" style="background: Olive"></div>'+
                            '<div onclick="changeBgColorBlock(\'LightSeaGreen\', \''+idBlock+'\');" style="background: LightSeaGreen"></div>'+
                            '<div onclick="changeBgColorBlock(\'Teal\', \''+idBlock+'\');" style="background: Teal"></div>'+
                        '</div>'+
                        '<div class="colorPicker">'+
                            '<div onclick="changeBgColorBlock(\'Pink\', \''+idBlock+'\');" style="background: Pink"></div>'+
                            '<div onclick="changeBgColorBlock(\'HotPink\', \''+idBlock+'\');" style="background: HotPink"></div>'+
                            '<div onclick="changeBgColorBlock(\'MediumVioletRed\', \''+idBlock+'\');" style="background: MediumVioletRed"></div>'+
                            '<div onclick="changeBgColorBlock(\'LightSalmon\', \''+idBlock+'\');" style="background: LightSalmon"></div>'+
                            '<div onclick="changeBgColorBlock(\'OrangeRed\', \''+idBlock+'\');" style="background: OrangeRed"></div>'+
                        '</div>'+
                        '<div class="colorPicker">'+
                            '<div onclick="changeBgColorBlock(\'Gold\', \''+idBlock+'\');" style="background: Gold"></div>'+
                            '<div onclick="changeBgColorBlock(\'Yellow\', \''+idBlock+'\');" style="background: Yellow"></div>'+
                            '<div onclick="changeBgColorBlock(\'Aqua\', \''+idBlock+'\');" style="background: Aqua"></div>'+
                            '<div onclick="changeBgColorBlock(\'DarkTurquoise\', \''+idBlock+'\');" style="background: DarkTurquoise"></div>'+
                            '<div onclick="changeBgColorBlock(\'SteelBlue\', \''+idBlock+'\');" style="background: SteelBlue"></div>'+
                        '</div>'+
                        '<div class="colorPicker">'+
                            '<div onclick="changeBgColorBlock(\'Blue\', \''+idBlock+'\');" style="background: Blue"></div>'+
                            '<div onclick="changeBgColorBlock(\'DarkBlue\', \''+idBlock+'\');" style="background: DarkBlue"></div>'+
                            '<div onclick="changeBgColorBlock(\'Violet\', \''+idBlock+'\');" style="background: Violet"></div>'+
                            '<div onclick="changeBgColorBlock(\'Magenta\', \''+idBlock+'\');" style="background: Magenta"></div>'+
                            '<div onclick="changeBgColorBlock(\'Indigo\', \''+idBlock+'\');" style="background: Indigo"></div>'+
                        '</div>'+
                        '<div class="colorPicker">'+
                            '<div onclick="changeBgColorBlock(\'Snow\', \''+idBlock+'\');" style="background: Snow"></div>'+
                            '<div onclick="changeBgColorBlock(\'AntiqueWhite\', \''+idBlock+'\');" style="background: AntiqueWhite"></div>'+
                            '<div onclick="changeBgColorBlock(\'Gray\', \''+idBlock+'\');" style="background: Gray"></div>'+
                            '<div onclick="changeBgColorBlock(\'SlateGray\', \''+idBlock+'\');" style="background: SlateGray"></div>'+
                            '<div onclick="changeBgColorBlock(\'Brown\', \''+idBlock+'\');" style="background: Brown"></div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
        
		
        
			    '<div>'+
                    '<img src="public/img/border.svg" onclick="showList(this);" class="notEdit elementTopNavImg">'+
                    '<div class="showList" style="display: none">'+
                        '<div onclick="changeBorderWidthBlock(\'1px\', \''+idBlock+'\');">1 пиксель</div>'+
                        '<div onclick="changeBorderWidthBlock(\'2px\', \''+idBlock+'\');">2 пикселя</div>'+
                        '<div onclick="changeBorderWidthBlock(\'3px\', \''+idBlock+'\');">3 пикселя</div>'+
                        '<div onclick="changeBorderWidthBlock(\'4px\', \''+idBlock+'\');">4 пикселя</div>'+
                        '<div onclick="changeBorderWidthBlock(\'5px\', \''+idBlock+'\');">5 пикселей</div>'+
                        '<div onclick="changeBorderWidthBlock(\'10px\', \''+idBlock+'\');">10 пикселей</div>'+
                        '<div onclick="changeBorderWidthBlock(\'20px\', \''+idBlock+'\');">20 пикселей</div>'+

                    '</div>'+
		        '</div>'+
				
		
		        '<div>'+
                    '<img src="public/img/borderRadius.svg" onclick="showList(this);" class="notEdit elementTopNavImg">'+
                    '<div class="showList" style="display: none">'+
                        '<div onclick="changeBorderRadiusBlock(\'1px\', \''+idBlock+'\');">1 пиксель</div>'+
                        '<div onclick="changeBorderRadiusBlock(\'2px\', \''+idBlock+'\');">2 пикселя</div>'+
                        '<div onclick="changeBorderRadiusBlock(\'3px\', \''+idBlock+'\');">3 пикселя</div>'+
                        '<div onclick="changeBorderRadiusBlock(\'4px\', \''+idBlock+'\');">4 пикселя</div>'+
                        '<div onclick="changeBorderRadiusBlock(\'5px\', \''+idBlock+'\');">5 пикселей</div>'+
                        '<div onclick="changeBorderRadiusBlock(\'10px\', \''+idBlock+'\');">10 пикселей</div>'+
                        '<div onclick="changeBorderRadiusBlock(\'20px\', \''+idBlock+'\');">20 пикселей</div>'+

                    '</div>'+
				'</div>'+
				

				'<div>'+
                    '<img src="public/img/shadow.svg" onclick="showList(this);" class="notEdit elementTopNavImg">'+
                    '<div class="showList" style="display: none">'+
                        '<div onclick="changeShadowBox(\'0 0 0px white\', \''+idBlock+'\');">Убрать тень</div>'+
                        '<div onclick="changeShadowBox(\'0 0 10px black\', \''+idBlock+'\');">Стиль тени 1</div>'+
                        '<div onclick="changeShadowBox(\'0 0 30px black\', \''+idBlock+'\');">Стиль тени 2</div>'+
                        '<div onclick="changeShadowBox(\'10px 10px 10px black\', \''+idBlock+'\');">Стиль тени 3</div>'+
                        '<div onclick="changeShadowBox(\'-10px -10px 10px black\', \''+idBlock+'\');">Стиль тени 4</div>'+
                        '<div onclick="changeShadowBox(\'10px 10px 30px black\', \''+idBlock+'\');">Стиль тени 5</div>'+
                        '<div onclick="changeShadowBox(\'-10px -10px 30px black\', \''+idBlock+'\');">Стиль тени 6</div>'+
                        '<div onclick="changeShadowBox(\'0 0 20px rgba(0,0,0, 0.4)\', \''+idBlock+'\');">Стиль тени 7</div>'+
                    '</div>'+
				'</div>'+
                '<div>'+
                '<img src="public/img/settings.svg" onclick="showList(this);" class="notEdit elementTopNavImg">'+
                '<div class="showList" style="display: none">'+
                    '<div onclick="positionBlockUp(\''+idBlock+'\');">Поднять</div>'+
                    '<div onclick="positionBlockDown(\''+idBlock+'\');">Спустить</div>'+
                    '<div onclick="widthBlock(\'block1\', \''+idBlock+'\');">50%</div>'+
                    '<div onclick="widthBlock(\'block2\', \''+idBlock+'\');">66%</div>'+
                    '<div onclick="widthBlock(\'block3\', \''+idBlock+'\');">33%</div>'+
                    '<div onclick="widthBlock(\'blockFull\', \''+idBlock+'\');">100%</div>'+
                '</div>'+
                '</div>'+	
                '<div>'+
                    '<img src="public/img/scroll.svg" onclick="sliderBlock(\''+idBlock+'\');" class="notEdit elementTopNavImg">'+
                '</div>'+
                '<div>'+
                    '<img src="public/img/ul.svg" onclick="appendUlBlock(\''+idBlock+'\');" class="notEdit elementTopNavImg">'+
                '</div>'+
                '<div>'+
                    '<img src="public/img/ol.svg" onclick="appendOlBlock(\''+idBlock+'\');" class="notEdit elementTopNavImg">'+
                '</div>'+
    '</div>';
}

function appendUlBlock(block) {
    let blockB = document.querySelector('#'+block);
    blockB.innerHTML += '<ul style="padding-left: 20px;"><li>1</li><li>2</li><li>3</li></ul>';
}
function appendOlBlock(block) {
    let blockB = document.querySelector('#'+block);
    blockB.innerHTML += '<ol style="padding-left: 20px;"><li>1</li><li>2</li><li>3</li></ol>';
}

function widthBlock(classB, block) {
    let blockB = document.querySelector('#'+block);
    blockB.classList.remove(blockB.classList[0]);
    blockB.classList.add(classB);
}
function sliderBlock(block) {
    let blockB = document.querySelector('#'+block);
    blockB.classList.add('sliderBlock');
}

function positionBlockUp(idB) {
    
    let block = document.querySelector('#'+idB);
    let blockSet = block.nextSibling;
    let section = block.parentNode;

    if(block.previousSibling) {
        if(block.previousSibling.previousSibling) {
            let blockUpSet = block.previousSibling;
            let blockUp = block.previousSibling.previousSibling;

            section.insertBefore(blockSet, blockUp);
            section.insertBefore(block, blockSet);

            return false;
        }
    } else {
        return false;
    }
}
function positionBlockDown(idB) {
    
    let block = document.querySelector('#'+idB);
    let blockSet = block.nextSibling;
    let section = block.parentNode;

    if(block.nextSibling.nextSibling) {
        if(block.nextSibling.nextSibling) {
            
            let blockDown = block.nextSibling.nextSibling;
            let blockDownSet = block.nextSibling.nextSibling.nextSibling;

            section.insertBefore(blockDownSet, block);
            section.insertBefore(blockDown, blockDownSet);

            return false;
        }
    } else {
        return false;
    }
}

// Стили блока
function changeBgColorBlock(nameStyle, idElem) {
    let focusElem = document.querySelector('#'+idElem);
    focusElem.style.background = nameStyle
}
function changeBorderColorBlock(nameStyle, idElem) {
    let focusElem = document.querySelector('#'+idElem);
    focusElem.style.borderColor = nameStyle
}
function changeBorderWidthBlock(nameStyle, idElem) {
    let focusElem = document.querySelector('#'+idElem);
    focusElem.style.borderWidth = nameStyle
}
function changeBorderRadiusBlock(nameStyle, idElem) {
    let focusElem = document.querySelector('#'+idElem);
    focusElem.style.borderRadius = nameStyle
}
function changeShadowBox(nameStyle, idElem) {
    let focusElem = document.querySelector('#'+idElem);
    focusElem.style.boxShadow = nameStyle
}



// function changeBorderBlock(nameStyle, idElem) {
//     let focusElem = document.querySelector('#'+idElem);
//     focusElem.style.border = '1px solid '+nameStyle+'';
// }


// Добавление изображения по ссылке
function appendTable(idBlock) {
    let focusElem = document.querySelector('#'+idBlock);

    if(focusElem) {
        let newTable = document.createElement('table');

        let rows = prompt('Кол-во строк?');
        let columns = prompt('Кол-во колонок?');

        //newTable.setAttribute('cellspacing', 1);

        function tableCreate(rows, columns) {
          
            // create elements <table> and a <tbody>
            var tbl = document.createElement("table");
            var tblBody = document.createElement("tbody");
          
            // cells creation
            for (var j = 0; j <= rows; j++) {
              // table row creation
              var row = document.createElement("tr");
          
              for (var i = 0; i < columns; i++) {
                // create element <td> and text node 
                //Make text node the contents of <td> element
                // put <td> at end of the table row
                var cell = document.createElement("td");
                var cellText = document.createTextNode("строка " + j + ", колонка " + i);
          
                cell.appendChild(cellText);
                row.appendChild(cell);
              }
          
              //row added to end of table body
              tblBody.appendChild(row);
            }
          
            // append the <tbody> inside the <table>
            tbl.appendChild(tblBody);
            // put <table> in the <body>
            focusElem.appendChild(tbl);
          }



          tableCreate(rows, columns);
    } else {
        return false;
    }   
}


// Добавление изображения 
function appendImg() {
    saveContent();
    let addNewImg = document.querySelector('#addNewImg');
    addNewImg.click();   
}

function appendVideo() {
    saveContent();
    let addNewVideo = document.querySelector('#addNewVideo');
    addNewVideo.click();   
}

function appendAudio() {
    saveContent();
    let addNewAudio = document.querySelector('#addNewVideo');
    addNewAudio.click();   
}

// Добавление видео по ссылке
// function appendVideo(idBlock) {
//     let focusElem = document.querySelector('#'+idBlock);

//     if(focusElem) {
//         let newVideo = document.createElement('video');
//         newVideo.setAttribute('controls', '');

//         let urlLink = prompt('Введите ссылку на видео');

//         let newSource = document.createElement('source');
//         newSource.src = urlLink;
//         newVideo.appendChild(newSource);

//         focusElem.appendChild(newVideo);
//     } else {
//         return false;
//     }   
// }

// Создание кнопки удаления блока
function createBtnDel() {
    let newDel = document.createElement('img');
    
    newDel.classList.add('del');
    newDel.classList.add('notEdit');
    newDel.src = 'public/img/delete.svg';
    newDel.setAttribute('onclick', 'deletedSectionBtn(this);');
	
    return newDel;
}

function appendBlock(idSection) {
    let focusElem = document.querySelector('#'+idSection);

    if(focusElem) {
        let rand = URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, "")
        let block0 = document.createElement('div');
        block0.classList.add('blockFull');
        block0.setAttribute('id', 'a'+rand);
        block0.setAttribute('contenteditable', 'true'); // Возможность редактировать контент

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

// Добавление формулы
function appendFormula(idBlock) {
    let mainBlock = document.querySelector('#'+idBlock);
    let myValue = prompt('Введите формулу без тегов "<math> </math>"');
    if(myValue == null) {
        return false;
    }

    mainBlock.innerHTML += '<span  contenteditable="false" class="formula"><math>'+myValue+'</math><span>';
    return false;
}


function insertAtCaret(obj){
    let myValue = prompt('Введите формулу без тегов "<math> </math>"');
    if(myValue == null) {
        return false;
    }
    myValue = '<div><span class="formula" contenteditable="false"><math contenteditable="false">'+myValue+'</math></span>';
  
    if (document.selection) { 
        obj.focus();
        sel = document.selection.createRange();
        sel.text = myValue;
        obj.focus();
    } else if (window.getSelection) {
        console.log(window.getSelection());
        console.log(window.getSelection().anchorOffset);
        alert();
        caret = window.getSelection().anchorOffset; // тут позиция каретки
        txt = obj.innerHTML;
        txt = txt.substring(0, caret) + myValue + txt.substring(caret);
        obj.innerHTML = txt;
    } else {
        obj.innerhtml += myValue;
        obj.focus();
    };
};