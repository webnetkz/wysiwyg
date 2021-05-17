<?php

    @session_start();

    ini_set("max_execution_time", 300);
    require_once '../libs/db/db.php';

    $book = $_POST['book'];
    $part = $_POST['part'];
    $block = $_POST['block'];

    function gen_token() {
        $token = sprintf(
            '%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
            mt_rand(0, 0xffff),
            mt_rand(0, 0xffff),
            mt_rand(0, 0xffff),
            mt_rand(0, 0x0fff) | 0x4000,
            mt_rand(0, 0x3fff) | 0x8000,
            mt_rand(0, 0xffff),
            mt_rand(0, 0xffff),
            mt_rand(0, 0xffff)
        );
     
        return $token;
    }

    
    $nameFile = 'aaa'.gen_token();
    // Загрузка обложки
    $typeFile = substr($_FILES['newFile']['name'], strrpos($_FILES['newFile']['name'], '.') + 1);
    $file = $nameFile.'.'.$typeFile;
    $uploaddir = '../../books/'.$book.'/';
    $uploadfile = $uploaddir . basename($file);

    if (move_uploaded_file($_FILES['newFile']['tmp_name'], $uploadfile)) {

            $code = '<script>
                let blockImg = document.querySelector("#'.$block.'");
                let blockImgId = "#'.$block.'"

                let idImg = URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, "");

                if(blockImg) {
                    let newImg = document.createElement("img");
                    newImg.src = "books/'.$book.'/'.$file.'";
                    newImg.id = idImg;

                    let delImg = document.createElement("img");
                    delImg.classList.add("setingsBlock");
                    delImg.classList.add("notEdit");
                    delImg.src = "public/img/delete.svg";
                    delImg.setAttribute("onclick", \'this.previousSibling.remove(); this.remove();\');

                    blockImg.appendChild(newImg);
                    blockImg.appendChild(delImg);
                    saveContent();

                }
                
            </script>';

            $code = base64_encode($code);

			header('Location: ../../editor?book='.$book.'&codeImg='.$code.'&part='.$part.'#'.$block);
 
    } else {
		exit('Не загрузился файл! Сообщите администратору!');
	}