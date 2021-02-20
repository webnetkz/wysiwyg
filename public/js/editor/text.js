window.addEventListener('click', () => {
    let focusElem = window.getSelection();
    /*if(focusElem.anchorNode && focusElem.anchorNode.nodeName == "#text") {}*/
});
    
function changeColorText(color) {
	if(typeof window.getSelection() != "undefined" && window.getSelection().anchorNode != null) {
		let range = window.getSelection().getRangeAt(0);
		let newNode = document.createElement("span");
		newNode.style.color = color;

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
function changeFontLine(line) {
    if(typeof window.getSelection() != "undefined" && window.getSelection().anchorNode != null) {
        let range = window.getSelection().getRangeAt(0);
        let newNode = document.createElement("span");
        newNode.style.textDecoration = line;

        range.surroundContents(newNode);
        document.getSelection().removeAllRanges();
        return false;
    } else {
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

function appendLinkText() {
    if(typeof window.getSelection() != "undefined" && window.getSelection().anchorNode != null) {
        let range = window.getSelection().getRangeAt(0);
        let newNode = document.createElement("a");
        let linkAnswer = prompt('Введите ссылку');
        if(linkAnswer) {
            newNode.href = linkAnswer;

            range.surroundContents(newNode);
            //document.getSelection().removeAllRanges();
            return false;
        }
        return false;
    } else {
		return false;
	}
}

function textAlignCenter() {
    if(typeof window.getSelection() != "undefined" && window.getSelection().anchorNode != null) {
        let range = window.getSelection().getRangeAt(0);
        let newNode = document.createElement("p");
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
        let newNode = document.createElement("p");
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
        let newNode = document.createElement("p");
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
            newNode.title = titleText;

        range.surroundContents(newNode);
        //document.getSelection().removeAllRanges();
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