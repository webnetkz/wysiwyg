let params = (new URL(document.location)).searchParams;
let book = params.get("book");
let part = params.get("part");

window.addEventListener('click', () => {
    let focusElem = window.getSelection();
    if((focusElem.anchorNode && focusElem.anchorNode.nodeName == "#text") && (window.getSelection().getRangeAt(0).commonAncestorContainer.parentElement.localName == 'td')) {
        
        let range = window.getSelection().getRangeAt(0);

        function topNavTable() {
    
            // Отображение панели убравления "Таблицей"
            headerNav.innerHTML = '<div class="notEdit allTopNav">'+
                                        '<div class="notEdit">'+
                                            '<div>'+
                                                '<img src="public/img/delete.svg" onclick="deletedCell();" class="notEdit elementTopNavImg">'+
                                            '</div>'+
                                            '<div>'+
                                                '<img src="public/img/column.svg" onclick="colsCell();" class="notEdit elementTopNavImg">'+
                                            '</div>'+
                                            '<div>'+
                                                '<img src="public/img/row.svg" onclick="rowsCell();" class="notEdit elementTopNavImg">'+
                                            '</div>'+
                                            '<div>'+
                                                '<img src="public/img/plus.svg" onclick="appendCell();" class="notEdit elementTopNavImg">'+
                                            '</div>'+
                                    '</div>';
                                        
                                        
        }
        topNavTable();
        //range.commonAncestorContainer.parentNode.setAttribute('colspan', '3');
    }
});
function deletedCell() {
    let range = window.getSelection().getRangeAt(0);
    range.commonAncestorContainer.parentNode.remove();
}
function colsCell() {
    let range = window.getSelection().getRangeAt(0);
    let ans = prompt('Введите колличество колонок которое будет занимать ячейка');
    range.commonAncestorContainer.parentNode.setAttribute('colspan', ans);
}
function rowsCell() {
    let range = window.getSelection().getRangeAt(0);
    let ans = prompt('Введите колличество строк которое будет занимать ячейка');
    range.commonAncestorContainer.parentNode.setAttribute('rowspan', ans);
}
function appendCell() {
    let range = window.getSelection().getRangeAt(0);
    let newCell = document.createElement('td');
    newCell.innerText = 'Новая ячейка';
    range.commonAncestorContainer.parentNode.parentNode.appendChild(newCell);
}

function changeColorText(color) {
	if(typeof window.getSelection() != "undefined" && window.getSelection().anchorNode != null) {
		let range = window.getSelection().getRangeAt(0);
		let newNode = document.createElement("span");
		newNode.style.color = color;

		range.surroundContents(newNode);
		//document.getSelection().removeAllRanges();


        // function highlight(range) {
        //     var inputText = document.getElementById("inputText");
        //     var innerHTML = inputText.innerHTML;
        //     var index = innerHTML.indexOf(text);
        //     if (index >= 0) { 
        //      innerHTML = innerHTML.substring(0,index) + "<span style='color:"+color+"'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
        //      inputText.innerHTML = innerHTML;
        //     }
        //   }

		return false;
	} else {
		return false;
	}
}


function lockText() {
    if(typeof window.getSelection() != "undefined" && window.getSelection().anchorNode != null) {
        let range = window.getSelection().getRangeAt(0);
        let newNode = document.createElement("span");
		newNode.classList.add('lockText');

        range.surroundContents(newNode);
        //document.getSelection().removeAllRanges();
        return false;
    } else {
		return false;
	}
}

function changeBgColorText(color) {
    if(typeof window.getSelection() != "undefined" && window.getSelection().anchorNode != null) {
        let range = window.getSelection().getRangeAt(0);
        let newNode = document.createElement("span");
        newNode.style.background = color;

        range.surroundContents(newNode);
        //document.getSelection().removeAllRanges();
        return false;
    } else {
		return false;
	}
}
function changeFontSize(size) {
    if(typeof window.getSelection() != "undefined" && window.getSelection().anchorNode != null) {
        let range = window.getSelection().getRangeAt(0);
        let newNode = document.createElement("span");
        newNode.style.fontSize = size;

        range.surroundContents(newNode);
        //document.getSelection().removeAllRanges();
        return false;
    } else {
		return false;
	}
}
function changeFontLine(lineStyle) {
    if(typeof window.getSelection() != "undefined" && window.getSelection().anchorNode != null) {
        let range = window.getSelection().getRangeAt(0);
        let newNode = document.createElement("span");
        if(lineStyle == 'obst') {
            newNode.classList.add('obst');
            range.surroundContents(newNode);
            return false;
        }
        newNode.classList.add('lineColor');
        newNode.classList.add(lineStyle);

        range.surroundContents(newNode);
        //document.getSelection().removeAllRanges();
        return false;
    } else {
		return false;
	}
}

function changeFontMorf(style) {
    if(typeof window.getSelection() != "undefined" && window.getSelection().anchorNode != null) {
        let range = window.getSelection().getRangeAt(0);
        let newNode = document.createElement("span");

        newNode.classList.add(style);

        range.surroundContents(newNode);
        //document.getSelection().removeAllRanges();
        return false;
    } else {
		return false;
	}
}


function appendMorf(style) {
    if(typeof window.getSelection() != "undefined" && window.getSelection().anchorNode != null) {
        let range = window.getSelection().getRangeAt(0);
        let newNode = document.createElement("span");
            console.log(range);
            alert();
        newNode.setAttribute('data-morfana-markup', 'ko:'+range.startOffset+'-'+range.endOffset);

        range.surroundContents(newNode);
        //document.getSelection().removeAllRanges();
        return false;
    } else {
		return false;
	}
}

// Добавление формулы
function appendFormulaCarret() {
    if(typeof window.getSelection() != "undefined" && window.getSelection().anchorNode != null) {
    
        let range = window.getSelection().getRangeAt(0);
        let myValue = prompt('Введите формулу без тегов "<math> </math>"');
        if(myValue == null) {
            return false;
        }
        let span = document.createElement('math');
        span.setAttribute('contenteditable', 'false');
        span.classList.add('formula');
        span.innerHTML = myValue;
    
        range.insertNode(span);
        return false;
    }
}

function changeMarginText(size) {
    if(typeof window.getSelection() != "undefined" && window.getSelection().anchorNode != null) {
        let range = window.getSelection().getRangeAt(0);
        let newNode = document.createElement("span");
        newNode.style.margin = size;

        range.surroundContents(newNode);
        //document.getSelection().removeAllRanges();
        return false;
    } else {
		return false;
	}
}
function sup() {
    if(typeof window.getSelection() != "undefined" && window.getSelection().anchorNode != null) {
        let range = window.getSelection().getRangeAt(0);
        let newNode = document.createElement("sup");
        range.surroundContents(newNode);
        //document.getSelection().removeAllRanges();
        return false;
    } else {
		return false;
	}
}
function clearText() {
    if(typeof window.getSelection() != "undefined" && window.getSelection().anchorNode != null) {
        range = window.getSelection().getRangeAt(0);
        range.commonAncestorContainer.innerHTML = range.toString();

        return false;
    } else {
		return false;
	}
}
function sub() {
    if(typeof window.getSelection() != "undefined" && window.getSelection().anchorNode != null) {
        let range = window.getSelection().getRangeAt(0);
        let newNode = document.createElement("sub");
        range.surroundContents(newNode);
        //document.getSelection().removeAllRanges();
        return false;
    } else {
		return false;
	}
}

function textAlignCenter() {
    if(typeof window.getSelection() != "undefined" && window.getSelection().anchorNode != null) {
        let range = window.getSelection().getRangeAt(0);
        let newNode = document.createElement("span");
        newNode.style.display = 'block';
        newNode.style.textAlign = 'center';
        range.surroundContents(newNode);
        //document.getSelection().removeAllRanges();
        return false;
    } else {
		return false;
	}
}

function textAlignCenter() {
    if(typeof window.getSelection() != "undefined" && window.getSelection().anchorNode != null) {
        let range = window.getSelection().getRangeAt(0);
        let newNode = document.createElement("span");
        newNode.style.display = 'block';
        newNode.style.textAlign = 'center';
        range.surroundContents(newNode);
        //document.getSelection().removeAllRanges();
        return false;
    } else {
		return false;
	}
}
function textAlignLeft() {
    if(typeof window.getSelection() != "undefined" && window.getSelection().anchorNode != null) {
        let range = window.getSelection().getRangeAt(0);
        let newNode = document.createElement("span");
        newNode.style.display = 'block';
        newNode.style.textAlign = 'left';
        range.surroundContents(newNode);
        //document.getSelection().removeAllRanges();
        return false;
    } else {
		return false;
	}
}
function textAlignRight() {
    if(typeof window.getSelection() != "undefined" && window.getSelection().anchorNode != null) {
        let range = window.getSelection().getRangeAt(0);
        let newNode = document.createElement("span");
        newNode.style.display = 'block';
        newNode.style.textAlign = 'right';
        range.surroundContents(newNode);
        //document.getSelection().removeAllRanges();
        return false;
    } else {
		return false;
	}
}
function textTitle() {
    if(typeof window.getSelection() != "undefined" && window.getSelection().anchorNode != null) {
        let range = window.getSelection().getRangeAt(0);
        let newNode = document.createElement("span");
        let titleText = prompt('Введите подсказку');
        if(titleText) {

            appendNewTitle(range, titleText, '/app/saveBook/saveTitle', book, part);

            newNode.title = titleText;
            range.surroundContents(newNode);
            return false;
        }

        return false;
    } else {
		return false;
	}
}
function bold() {
    if(typeof window.getSelection() != "undefined" && window.getSelection().anchorNode != null) {
        let range = window.getSelection().getRangeAt(0);
        let newNode = document.createElement("b");
        
        range.surroundContents(newNode);
        //document.getSelection().removeAllRanges();
        return false;
    } else {
		return false;
	}
}
function italic() {
    if(typeof window.getSelection() != "undefined" && window.getSelection().anchorNode != null) {
        let range = window.getSelection().getRangeAt(0);
        let newNode = document.createElement("span");
        newNode.style.fontStyle = 'italic';
        
        range.surroundContents(newNode);
        //document.getSelection().removeAllRanges();
        return false;
    } else {
		return false;
	}
}
function normal() {
    if(typeof window.getSelection() != "undefined" && window.getSelection().anchorNode != null) {
        let range = window.getSelection().getRangeAt(0);
        let newNode = document.createElement("span");
        newNode.style.fontWeight = '100';
        newNode.style.fontStyle = 'normal';
        
        range.surroundContents(newNode);
        //document.getSelection().removeAllRanges();
        return false;
    } else {
		return false;
	}
}
function appendAnchor() {
    if(typeof window.getSelection() != "undefined" && window.getSelection().anchorNode != null) {
        let range = window.getSelection().getRangeAt(0);
        let newNode = document.createElement("span");
        let newId = prompt('Введите якорь (на латинице, значение должно быть уникальным');
        if(newId) {
            newNode.id = newId;

            range.surroundContents(newNode);
            //document.getSelection().removeAllRanges();
            return false;
        }

        return false;
    } else {
		return false;
	}
}

function appendLinkText() {
    if(typeof window.getSelection() != "undefined" && window.getSelection().anchorNode != null) {
        let range = window.getSelection().getRangeAt(0);
        let newNode = document.createElement("a");
        let result = prompt('Введите ссылку');
        newNode.href = result;
        range.surroundContents(newNode);
        return false;
    } else {
		return false;
	}
}
