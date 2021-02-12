<?php

    if(isset($_POST['contentBook'])) {

        $data = urldecode($_POST['contentBook']);

        $f = fopen('./book.html', 'w');
        @fwrite($f, $data);
        fclose($f);
        echo 'save';
    } else {
        return false;
    }