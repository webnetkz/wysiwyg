<?php

    if(isset($_POST['contentBook'])) {

        $data = urldecode($_POST['contentBook']);

        $f = fopen('./book.html', 'w');
        @fwrite($f, $data);
        fclose($f);
        header('Location: index.php?mes=good');
    } else {
        return false;
    }