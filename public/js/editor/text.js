let leftNavText = document.querySelector('#leftNavText'); // Кнопка вызова панели "ТЕКСТ"
// Обработчик вызова панели "ТЕКСТ"
leftNavText.addEventListener('click', () => {
	// Отключение страндартного поведения при клике, чтоб не сбрасывать фокус
	leftNavText.addEventListener('mousedown', e => e.preventDefault());
	// Отображение панели убравления "ТЕКСТ"
    headerNav.innerHTML = '<div>'+
        'Text'+
        '<button onclick="appendText();" class="notEdit">Текст</button>'+
        '<button onclick="deletedText();" class="notEdit">Удалить Текст</button>'+
    '</div>';
});

// Добавление новго параграфа
function appendText() {
    let focusElem = window.getSelection(); // Проверка фокуса
    let rand = 'a'+URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, "");  // Создание рандомного ID
    let newText = document.createElement('p'); // Тег текста
    newText.classList.add('newText'); // Класс текста
    newText.setAttribute('id', 'a'+rand); // Добавление ID
    newText.innerText = 'Добавить содержание'; // Отображаемый текст

    // Если секция
	if(focusElem.anchorNode.className == 'editor') {
		document.querySelector('#'+focusElem.anchorNode.id).appendChild(newText);
	}

    // Если блок
    if(focusElem.anchorNode.className == 'newBlock') {
    	document.querySelector('#'+focusElem.anchorNode.id).appendChild(newText);
    }
}

// Удаление параграфа
function deletedText() {
    let focusElem = window.getSelection();
    if(!checkClass(focusElem.baseNode.firstElementChild.className, 'editor') && !checkClass(focusElem.baseNode.firstElementChild.className, 'newBlock')) {
        document.querySelector('#'+focusElem.baseNode.firstElementChild.id).remove();
    } else {
        return false;
    }
}