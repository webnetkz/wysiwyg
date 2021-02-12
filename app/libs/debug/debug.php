<?php

// Включаем отображение ошибок
ini_set('display_errors', 1);
ini_set('error_reporting', E_ALL);
ini_set('display_startup_errors', 1);
// Включаем отчеты об ошибках
error_reporting(E_ALL);

// Функция для дебага
function x($data) {
    echo '<pre>';
    var_dump($data);
    echo '</pre>';
    exit;
}
