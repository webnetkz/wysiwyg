for (let dnd of document.querySelectorAll('.dnd')) {
    let daddy = dnd.parentNode;

    let one  = daddy.querySelector('.a1');
    let two  = daddy.querySelector('.a2');
    let three  = daddy.querySelector('.a3');
    let four  = daddy.querySelector('.a4');

dnd.ondragover = enableDrop;

function enableDrop(event) {
    event.preventDefault();
    dnd.style.border = '1px dashed red';
}

one.ondragstart = drag;
two.ondragstart = drag;
three.ondragstart = drag;
four.ondragstart = drag;
function drag(event) {
    event.dataTransfer.setData('id', event.target.id);
}

dnd.ondrop = drop;


function drop(event) {
    let itemId = event.dataTransfer.getData('id');
    let item = document.querySelector('#'+itemId);
    event.target.append(item);


    if(item.getAttribute('ans') == dnd.getAttribute('res')) {
        dnd.parentNode.innerHTML = '<h3>Вы ответили верно</h3>';
    } else {
        dnd.parentNode.innerHTML = '<button onclick="location.reload();" class="btn">Попробуй еще раз</button>';
    }
}
}