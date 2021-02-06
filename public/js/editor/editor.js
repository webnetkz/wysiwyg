window.onkeydown = function(event) {
    // if(event.keyCode == 13){
    //     if(event.preventDefault) event.preventDefault();

    //     var ke = new KeyboardEvent("keydown", {key: "w", keyCode: 87, ctrlKey: true, cancelable: true, bubbles: true});
    //     document.dispatchEvent(ke);
    // }
}

// Отключение страндартного поведения при клике, чтоб не сбрасывать фокус
// setInterval(() => {
//     let allNotEdit = document.querySelectorAll('.notEdit');
//     for(let i = 0; i < allNotEdit.length; i++) {
//         allNotEdit[i].addEventListener('mousedown', e => e.preventDefault());
//     }
// }, 1500);
    
setInterval(() => {
    let focusElem = window.getSelection();
 
    if(focusElem.anchorNode && focusElem.anchorNode.nodeName == "#text") {
        console.log(focusElem);
    }
}, 500);




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
