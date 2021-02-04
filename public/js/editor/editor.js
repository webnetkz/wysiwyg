function changeClass(NameClass) {
    let focusElem = window.getSelection();
    
    if(checkClass(focusElem.focusNode.parentNode.className, NameClass)) {
        focusElem.focusNode.parentNode.className = deleteClass(focusElem.focusNode.parentNode.className, NameClass);
    } else {
        focusElem.focusNode.parentNode.className += ' '+NameClass;
    }
}




function appendSection() {
    const newSection = document.createElement('div');
    let rand = URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, "")
    newSection.classList.add('newEditor');
    newSection.setAttribute('id', 'a'+rand);
    newSection.setAttribute('contenteditable', 'true');

    document.querySelector('#contentBook').appendChild(newSection);
}

function appendSection2() {
    const newSection = document.createElement('div');
    let rand = URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, "")
    newSection.classList.add('newEditor2');
    newSection.setAttribute('id', 'a'+rand);
    newSection.setAttribute('contenteditable', 'true');


    let block2 = document.createElement('div');
    rand = URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, "")
    block2.classList.add('block2');
    block2.setAttribute('id', 'a'+rand);

    let block3 = document.createElement('div');
    rand = URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, "")
    block3.classList.add('block3');
    block3.setAttribute('id', 'a'+rand);


    newSection.appendChild(block2);
    newSection.appendChild(block3);


    document.querySelector('#contentBook').appendChild(newSection);
}

function appendBlock() {
    let focusElem = window.getSelection();

    if(focusElem) {
        let rand = URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, "")
        let newBlock = document.createElement('div');
        newBlock.classList.add('newBlock');
        newBlock.setAttribute('id', 'a'+rand);

        document.querySelector('#'+focusElem.anchorNode.id).appendChild(newBlock);
    } else {
        return false;
    }


}

function deletedBlock() {
    let focusElem = window.getSelection();
    if(!checkClass(focusElem.anchorNode.firstElementChild.className, 'editor')) {
        document.querySelector('#'+focusElem.anchorNode.firstElementChild.id).remove();
    } else {
        return false;
    }
}

function deletedSection() {
    let focusElem = window.getSelection();
    document.querySelector('#'+focusElem.anchorNode.id).remove();
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
