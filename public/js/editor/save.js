function saveContent() {
    let contentBook = document.querySelectorAll('#contentBook > div');
    let newContent;
    // Получаем все навигации секций
    // let allSectionNav = contentBook.querySelectorAll('.sectionNav');
    // for(let i = 0; i < allSectionNav.length; i++) {
    //     allSectionNav[i].remove();
    // }
    for(let i = 0; i < contentBook.length; i++) {
        if(contentBook[i].outerHTML) {
            newContent += contentBook[i].outerHTML;
        }
    }


    newContent = newContent.slice(9, newContent.length);
    newContent = encodeURIComponent(newContent);
    
    // Отправка дыннх на сервер и получение ответа
    // location.href = 'save.php?contentBook='+newContent+'';
    request(newContent, 'save.php');
}

function request(userData, serverFile) {

    userData = encodeURIComponent(userData);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', serverFile);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            let res = xhr.responseText;
        }
    }

    xhr.send('contentBook=' + userData);
}