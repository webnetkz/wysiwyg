<?php

    @session_start();

    ini_set("max_execution_time", 300);
    require_once '../libs/db/db.php';

    $book = $_POST['book'];
    $part = $_POST['part'];
    $block = $_POST['block'];

    $path = "../../books/".$book."/subicons/";
    @mkdir($path, 0777);

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
    $uploaddir = $path;
    $uploadfile = $uploaddir . basename($file);

    if (move_uploaded_file($_FILES['newFile']['tmp_name'], $uploadfile)) {

            $code = '<script>
                let blockImg = document.querySelector("#'.$block.'");
                let blockImgId = "#"+blockImg.id;

                let idImg = URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, "");

                if(blockImg) {
                    let newImg = document.createElement("img");
                    blockImg.style.verticalAligh = "middle";
                    newImg.src = "books/'.$book.'/'.$file.'";
                    newImg.id = idImg;
                    newImg.setAttribute("contentenable", false);
                    newImg.style.position = "relative";
                    newImg.style.zIndex = "99999999999999";
                    newImg.style.width = "90px";
                    newImg.style.height = "90px";
                    newImg.style.borderRadius = "120px";
                    newImg.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5);";

                    blockImg.appendChild(newImg);
                }
                
            </script>';

            $code = base64_encode($code);

			header('Location: ../../editor?book='.$book.'&codeSubIcon='.$code.'&part='.$part.'#'.$block);
 
    } else {
		exit('Не загрузился файл! Сообщите администратору!');
	}