window.addEventListener('click', () => {
    let focusElem = window.getSelection();

    if(focusElem.anchorNode && focusElem.anchorNode.nodeName == "#text") {
        headerNav.innerHTML = '<div class="notEdit allTopNav">'+
            '<div class="notEdit">'+
            	'<span class="notEdit elementTopNav">Цвет текста</span>'+
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
            	'<span onclick="appendLinkText();" class="notEdit elementTopNav">Ссылка</span>'+
            '</div>'+
        '</div>';
    }


});
    
function changeColorText(color) {
    let range = window.getSelection().getRangeAt(0);
    let newNode = document.createElement("span");
    newNode.style.color = color;

    range.surroundContents(newNode);
    return false;
}

function appendLinkText() {
    let range = window.getSelection().getRangeAt(0);
    let newNode = document.createElement("a");
  	let linkAnswer = prompt('Введите ссылку');
  	newNode.href = linkAnswer;

    range.surroundContents(newNode);
    document.getSelection().removeAllRanges();
    return false;
}
