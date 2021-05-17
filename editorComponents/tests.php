<style>
    .testsPanel {
        font-family: sans-serif;
        position: fixed;
        right: -500px;
        width: 400px;
        top: 60px;
        bottom: 0;
        height: 90vh;
        background: white;
        box-shadow: 0 0 20px rgba(0,0,0,0.4);
        padding: 10px;
        padding-top: 20px;
        z-index: 99999999999999999999999999999999999999999999999999999999999;
    }
    .miniImg {
        width: 100px;
        height: 100px;
        margin: 10px;
        cursor: pointer;
    }
</style>
<div class="testsPanel">
    <button class="btn" onclick="document.querySelector('.testsPanel').style.right = '-500px'">Закрыть</button>
    <br><br>
    <hr>
        <div>
            <br>
            <button class="btn" onclick="newTestOne()">Тест с вариантами ответов (один ответ)</button>
            <br>
            <br>
            <button class="btn" onclick="newTestTwo()">Тест с вариантами ответов (несколько ответов)</button>
            <br>
            <br>
            <button class="btn" onclick="newTestThree()">Тест c перетягиванием</button>
        </div>
</div>
<script>
    function newTest(idBlock) {
        let testPanel = document.querySelector('.testsPanel');
        testPanel.setAttribute('test', idBlock);
    }
    function getIdBlock() {
        let idBlock = document.querySelector('.testsPanel');
        let res = idBlock.getAttribute('test');
        document.querySelector('.testsPanel').style.right = '-500px'
        return res;
    }

    function newTestOne() {
        let block = document.querySelector('#'+getIdBlock());

        let question = prompt('Введите вопрос');
        if(question != '') {
            let ans1 = prompt('Первый вариант ответа');
            if(ans1 != '') {
                let ans2 = prompt('Второй вариант ответа');
                if(ans2 != '') {
                    let ans3 = prompt('Третий вариант ответа');
                    if(ans3 != '') {
                        let ans4 = prompt('Четвертый вариант ответа');
                        if(ans4 != '') {
                            let res = prompt('Верный ответ (Введите цифру ответа)');
                            if(res != '') {
                                let rand = URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, "");
                                let testOne = '<div style="text-align: center; font-family: sans-serif;" id="a'+rand+'">'+
                                    '<h3>'+question+'</h3>'+
                                    '<p style="text-align: left; margin-left: 20px;"><input type="radio" class="a'+rand+'" style="margin-right: 6px;" name="TestOne">'+ans1+'</p>'+
                                    '<p style="text-align: left; margin-left: 20px;"><input type="radio" class="a'+rand+'" style="margin-right: 6px;" name="TestOne">'+ans2+'</p>'+
                                    '<p style="text-align: left; margin-left: 20px;"><input type="radio" class="a'+rand+'" style="margin-right: 6px;" name="TestOne">'+ans3+'</p>'+
                                    '<p style="text-align: left; margin-left: 20px;"><input type="radio" class="a'+rand+'" style="margin-right: 6px;" name="TestOne">'+ans4+'</p>'+
                                    '<br>'+
                                    '<hr>'+
                                    '<br>'+
                                    '<button class="btn" onclick="checkTestOne(\''+rand+'\', \''+question+'\', \''+ans1+'\', \''+ans2+'\', \''+ans3+'\', \''+ans4+'\', \''+res+'\');">Проверить</button>'+
                
                                '</div>';

                                block.innerHTML = testOne;

                            } else {
                                let res = prompt('Верный ответ (Введите цифру ответа)');
                            }
                        } else {
                            let ans4 = prompt('Четвертый вариант ответа');
                        }
                    } else {
                        let ans3 = prompt('Третий вариант ответа');
                    }
                } else {
                    let ans2 = prompt('Второй вариант ответа');
                }
            } else {
                let ans1 = prompt('Первый вариант ответа');
            }
        } else {
            let question = prompt('Введите вопрос');
        }
    }

    function checkTestOne(rand, question, ans1, ans2, ans3, ans4, res) {
        let allTestOne = document.querySelectorAll('.a'+rand);
        let block = document.querySelector('#a'+rand);

        if(allTestOne[0].checked === true && res == 1) {
            block.innerHTML = '<h3>Вы ответили верно</h3>';
            return false;
        }

        if(allTestOne[1].checked === true && res == 2) {
            block.innerHTML = '<h3>Вы ответили верно</h3>';
            return false;
        }

        if(allTestOne[2].checked === true && res == 3) {
            block.innerHTML = '<h3>Вы ответили верно</h3>';
            return false;
        }

        if(allTestOne[3].checked === true && res == 4) {
            block.innerHTML = '<h3>Вы ответили верно</h3>';
            return false;
        }

        block.innerHTML = '<button onclick="location.reload();" class="btn">Попробуй еще раз</button>';
    }

    // Test Two
    function newTestTwo() {
        let block = document.querySelector('#'+getIdBlock());

        let question = prompt('Введите вопрос');
        if(question != '') {
            let ans1 = prompt('Первый вариант ответа');
            if(ans1 != '') {
                let ans2 = prompt('Второй вариант ответа');
                if(ans2 != '') {
                    let ans3 = prompt('Третий вариант ответа');
                    if(ans3 != '') {
                        let ans4 = prompt('Четвертый вариант ответа');
                        if(ans4 != '') {
                            let res = prompt('Первый верный ответ (Введите цифру ответа)');
                            let res2 = prompt('Второй верный ответ (Введите цифру ответа)');
                            if(res != '') {
                                let rand = URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, "");
                                let testTwo = '<div style="text-align: center; font-family: sans-serif;" id="a'+rand+'">'+
                                    '<h3>'+question+'</h3>'+
                                    '<p style="text-align: left; margin-left: 20px;"><input type="checkbox" class="a'+rand+'" style="margin-right: 6px;" name="TestOne">'+ans1+'</p>'+
                                    '<p style="text-align: left; margin-left: 20px;"><input type="checkbox" class="a'+rand+'" style="margin-right: 6px;" name="TestOne">'+ans2+'</p>'+
                                    '<p style="text-align: left; margin-left: 20px;"><input type="checkbox" class="a'+rand+'" style="margin-right: 6px;" name="TestOne">'+ans3+'</p>'+
                                    '<p style="text-align: left; margin-left: 20px;"><input type="checkbox" class="a'+rand+'" style="margin-right: 6px;" name="TestOne">'+ans4+'</p>'+
                                    '<br>'+
                                    '<hr>'+
                                    '<br>'+
                                    '<button class="btn" onclick="checkTestTwo(\''+rand+'\', \''+question+'\', \''+ans1+'\', \''+ans2+'\', \''+ans3+'\', \''+ans4+'\', \''+res+'\', \''+res2+'\');">Проверить</button>'+
                
                                '</div>';

                                block.innerHTML = testTwo;

                            } else {
                                let res = prompt('Первый верный ответ (Введите цифру ответа)');
                                let res2 = prompt('Второй верный ответ (Введите цифру ответа)');
                            }
                        } else {
                            let ans4 = prompt('Четвертый вариант ответа');
                        }
                    } else {
                        let ans3 = prompt('Третий вариант ответа');
                    }
                } else {
                    let ans2 = prompt('Второй вариант ответа');
                }
            } else {
                let ans1 = prompt('Первый вариант ответа');
            }
        } else {
            let question = prompt('Введите вопрос');
        }
    }

    function checkTestTwo(rand, question, ans1, ans2, ans3, ans4, res, res2) {
        let allTestOne = document.querySelectorAll('.a'+rand);
        let block = document.querySelector('#a'+rand);
        let good = 0;

        if(allTestOne[0].checked === true && (res == 1 || res2 == 1)) {
            // block.innerHTML = '<h3>Вы ответили верно</h3>';
            good = ++good;
        }

        if(allTestOne[1].checked === true && (res == 2 || res2 == 2)) {
            // block.innerHTML = '<h3>Вы ответили верно</h3>';
            good = ++good;
        }

        if(allTestOne[2].checked === true && (res == 3 || res2 == 3)) {
            // block.innerHTML = '<h3>Вы ответили верно</h3>';
            good = ++good;
        }

        if(allTestOne[3].checked === true && (res == 4 || res2 == 4)) {
            // block.innerHTML = '<h3>Вы ответили верно</h3>';
            good = ++good;
        }

        if(good >= 2) {
            block.innerHTML = '<h3>Вы ответили верно</h3>';
            return false;
        }

        block.innerHTML = '<button onclick="location.reload();" class="btn">Попробуй еще раз</button>';
    }



    function newTestThree() {
        let block = document.querySelector('#'+getIdBlock());

        let question = prompt('Введите вопрос');
        if(question != '') {
            let ans1 = prompt('Первый вариант ответа');
            if(ans1 != '') {
                let ans2 = prompt('Второй вариант ответа');
                if(ans2 != '') {
                    let ans3 = prompt('Третий вариант ответа');
                    if(ans3 != '') {
                        let ans4 = prompt('Четвертый вариант ответа');
                        if(ans4 != '') {
                            let res = prompt('Верный ответ (Введите цифру ответа)');
                            if(res != '') {
                                let rand = URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, "");
                                let testThree = '<div contenteditable="false" style="height: 220px; text-align: center; font-family: sans-serif;" id="a'+rand+'">'+
                                    '<h3>'+question+'</h3>'+
                                    '<p contenteditable="false" style="text-align: left; margin-left: 20px;"><button ans="1" contenteditable="false" class="btn a1" id="one'+rand+'" draggable="true">'+ans1+'</button></p><br>'+
                                    '<p contenteditable="false" style="text-align: left; margin-left: 20px;"><button ans="2" contenteditable="false" class="btn a2" id="two'+rand+'" draggable="true">'+ans2+'</button></p><br>'+
                                    '<p contenteditable="false" style="text-align: left; margin-left: 20px;"><button ans="3" contenteditable="false" class="btn a3" id="three'+rand+'" draggable="true">'+ans3+'</button></p><br>'+
                                    '<p contenteditable="false" style="text-align: left; margin-left: 20px;"><button ans="4" contenteditable="false" class="btn a4" id="four'+rand+'" draggable="true">'+ans4+'</button></p><br>'+
                                    '<div class="dnd" res="'+res+'"> </div>'+               
                                '</div>';

                                let sct = document.createElement('script');
                                sct.setAttribute('src', '/public/js/editor/dnd.js');

                                block.innerHTML = testThree;
                                block.appendChild(sct);

                            } else {
                                let res = prompt('Верный ответ (Введите цифру ответа)');
                            }
                        } else {
                            let ans4 = prompt('Четвертый вариант ответа');
                        }
                    } else {
                        let ans3 = prompt('Третий вариант ответа');
                    }
                } else {
                    let ans2 = prompt('Второй вариант ответа');
                }
            } else {
                let ans1 = prompt('Первый вариант ответа');
            }
        } else {
            let question = prompt('Введите вопрос');
        }
    }
</script>