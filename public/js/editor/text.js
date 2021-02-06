window.addEventListener('click', () => {
    let focusElem = window.getSelection();

    if(focusElem.anchorNode && focusElem.anchorNode.nodeName == "#text") {
        headerNav.innerHTML = '<div class="notEdit allTopNav">'+
            '<div class="notEdit">'+
            	'<p>Цвет текта</p>'+
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
