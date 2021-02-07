<?php
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

    if(isset($_POST['contentBook'])) {

        $data = urldecode($_POST['contentBook']);

        $f = fopen('./book.html', 'w');
        @fwrite($f, $data);
        fclose($f);
        header('Location: index.php');
    }