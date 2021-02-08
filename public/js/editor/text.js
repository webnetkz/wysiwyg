window.addEventListener('click', () => {
    let focusElem = window.getSelection();

    if(focusElem.anchorNode && focusElem.anchorNode.nodeName == "#text") {
        headerNav.innerHTML = '<div class="notEdit allTopNavText">'+
            '<div class="notEdit">'+
            	'<span class="notEdit elementTopNavH">Цвет текста</span>'+
                '<div class="colorPicker">'+
                    '<div onclick="changeColorText(\'white\');" style="background: white"></div>'+
                    '<div onclick="changeColorText(\'red\');" style="background: red"></div>'+
                    '<div onclick="changeColorText(\'blue\');" style="background: blue"></div>'+
                    '<div onclick="changeColorText(\'black\');" style="background: black"></div>'+
                '</div>'+
                '<div class="colorPicker">'+
                    '<div onclick="changeColorText(\'yellow\');" style="background: yellow"></div>'+
                    '<div onclick="changeColorText(\'green\');" style="background: green"></div>'+
                    '<div onclick="changeColorText(\'pink\');" style="background: pink"></div>'+
                    '<div onclick="changeColorText(\'orange\');" style="background: orange"></div>'+
                '</div>'+
            '</div>'+
            '<div class="notEdit">'+
            	'<span class="notEdit elementTopNavH">Цвет фона</span>'+
                '<div class="colorPicker">'+
                    '<div onclick="changeBgColorText(\'white\');" style="background: white"></div>'+
                    '<div onclick="changeBgColorText(\'red\');" style="background: red"></div>'+
                    '<div onclick="changeBgColorText(\'blue\');" style="background: blue"></div>'+
                    '<div onclick="changeBgColorText(\'black\');" style="background: black"></div>'+
                '</div>'+
                '<div class="colorPicker">'+
                    '<div onclick="changeBgColorText(\'yellow\');" style="background: yellow"></div>'+
                    '<div onclick="changeBgColorText(\'green\');" style="background: green"></div>'+
                    '<div onclick="changeBgColorText(\'pink\');" style="background: pink"></div>'+
                    '<div onclick="changeBgColorText(\'orange\');" style="background: orange"></div>'+
                '</div>'+
            '</div>'+
             '<div class="notEdit">'+
                '<div>'+
                    '<img src="public/img/link.svg" onclick="appendLinkText();" title="Создать ссылку" class="notEdit elementTopNavImg">'+
                    '<img src="public/img/centerT.svg" onclick="textAlignCenter();" class="notEdit elementTopNavImg">'+
                    '<img src="public/img/crosshair.svg" onclick="textTitle();" class="notEdit elementTopNavImg">'+
                '</div>'+
                '<div>'+
                    '<img src="public/img/leftT.svg" onclick="textAlignLeft();" class="notEdit elementTopNavImg">'+
                    '<img src="public/img/rightT.svg" onclick="textAlignRight();" class="notEdit elementTopNavImg">'+
                '</div>'+
            '</div>'+
        '</div>';
    }


});
    
function changeColorText(color) {
    let range = window.getSelection().getRangeAt(0);
    let newNode = document.createElement("span");
    newNode.style.color = color;

    range.surroundContents(newNode);
    document.getSelection().removeAllRanges();
    return false;
}

function changeBgColorText(color) {
    let range = window.getSelection().getRangeAt(0);
    let newNode = document.createElement("span");
    newNode.style.background = color;

    range.surroundContents(newNode);
    document.getSelection().removeAllRanges();
    return false;
}

function appendLinkText() {
    let range = window.getSelection().getRangeAt(0);
    let newNode = document.createElement("a");
  	let linkAnswer = prompt('Введите ссылку');
  	if(linkAnswer) {
  		newNode.href = linkAnswer;

	    range.surroundContents(newNode);
	    document.getSelection().removeAllRanges();
	    return false;
  	}
  	return false;
}

function textAlignCenter() {
    let range = window.getSelection().getRangeAt(0);
    let newNode = document.createElement("p");
    newNode.style.textAlign = 'center';
    range.surroundContents(newNode);
	document.getSelection().removeAllRanges();
  	return false;
}
function textAlignLeft() {
    let range = window.getSelection().getRangeAt(0);
    let newNode = document.createElement("p");
    newNode.style.textAlign = 'left';
    range.surroundContents(newNode);
	document.getSelection().removeAllRanges();
  	return false;
}
function textAlignRight() {
    let range = window.getSelection().getRangeAt(0);
    let newNode = document.createElement("p");
    newNode.style.textAlign = 'right';
    range.surroundContents(newNode);
	document.getSelection().removeAllRanges();
  	return false;
}
function textTitle() {
    let range = window.getSelection().getRangeAt(0);
    let newNode = document.createElement("span");
    let titleText = prompt('Введите подсказку');
    if(titleText) {
        newNode.title = titleText;

      range.surroundContents(newNode);
      document.getSelection().removeAllRanges();
      return false;
    }

  	return false;
}