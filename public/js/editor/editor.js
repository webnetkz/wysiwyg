window.onkeydown = function(event) {
    // if(event.keyCode == 13){
    //     if(event.preventDefault) event.preventDefault();

    //     var ke = new KeyboardEvent("keydown", {key: "w", keyCode: 87, ctrlKey: true, cancelable: true, bubbles: true});
    //     document.dispatchEvent(ke);
    // }
}

function changeClass(NameClass) {
    let focusElem = window.getSelection();
    
    if(checkClass(focusElem.focusNode.parentNode.className, NameClass)) {
        focusElem.focusNode.parentNode.className = deleteClass(focusElem.focusNode.parentNode.className, NameClass);
    } else {
        focusElem.focusNode.parentNode.className += ' '+NameClass;
    }
}

function checkClass(ClassList, ElemClass) {
    let arrClasses = ClassList.split(' ');
    for(let i = 0; i < arrClasses.length; i++) {
        if(arrClasses[i] == ElemClass) {
            return true;
        }
    }
    return false;
}

function deleteClass(ClassList, ElemClass) {
    let arrClasses = ClassList.split(' ');
    for(let i = 0; i < arrClasses.length; i++) {
        if(arrClasses[i] == ElemClass) {
            delete arrClasses[i];
            strClasses = arrClasses.join(' ');
            return strClasses;
        }
    }
}

function showPalitra(elem) {
	if(elem.nextSibling.nextSibling.style.display == 'block') {
	   	elem.nextSibling.nextSibling.style.display = 'none';
		return false;
	} else {
		elem.nextSibling.nextSibling.style.display = 'block';
	
		elem.nextSibling.nextSibling.addEventListener('click', () => {
			elem.nextSibling.nextSibling.style.display = 'none';
			return false;
		});
	}
	
	return false;
}

function showList(elem) {
	if(elem.nextSibling.nextSibling.style.display == 'block') {
	   	elem.nextSibling.nextSibling.style.display = 'none';
		return false;
	} else {
		elem.nextSibling.nextSibling.style.display = 'block';
	
		elem.nextSibling.nextSibling.addEventListener('click', () => {
			elem.nextSibling.nextSibling.style.display = 'none';
			return false;
		});
	}
	
	return false;
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
