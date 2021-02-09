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


