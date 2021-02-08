function message(mes, typeMes) {
    let message = mes;
    let type = typeMes;

    let modal = document.createElement('div');
    modal.classList.add('modalEr');

    if(type == 1) {
        modal.style.background = 'red';   
    } else {
        modal.style.background = 'green'; 
    }

    modal.innerText = message;
    document.body.appendChild(modal);

    modal.addEventListener('click', () => {
        modal.remove();
    });

    setInterval(() => {
        modal.remove();
    }, 7000);
}

