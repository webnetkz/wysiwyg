-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Апр 18 2021 г., 14:11
-- Версия сервера: 10.3.22-MariaDB
-- Версия PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `wysiwyg`
--

-- --------------------------------------------------------

--
-- Структура таблицы `books`
--

CREATE TABLE `books` (
  `id` int(11) UNSIGNED NOT NULL,
  `level` int(2) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `lang` varchar(5) DEFAULT NULL,
  `pack` varchar(5) DEFAULT NULL,
  `titleImg` varchar(255) DEFAULT NULL,
  `status` int(2) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `books`
--

INSERT INTO `books` (`id`, `level`, `subject`, `lang`, `pack`, `titleImg`, `status`) VALUES
(1, 1, '1', '1', '1', '1', 0),
(2, 10, 'Химия ОГН', 'kaz', 't2', 'indexImg.webp', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `book_2`
--

CREATE TABLE `book_2` (
  `id` int(11) NOT NULL,
  `part` varchar(255) NOT NULL,
  `content` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `book_2`
--

INSERT INTO `book_2` (`id`, `part`, `content`) VALUES
(1, 'Первый параграф', '%3Cdiv%3E%3Cdiv%20class%3D%22editor%22%20id%3D%22a7c85b58cf3104517a8cc031217f23149%22%3E%3C%2Fdiv%3E%3Cdiv%20class%3D%22sectionNav%22%3E%3Cimg%20class%3D%22elementSectionNav%20notEdit%20trush%22%20src%3D%22public%2Fimg%2Fdelete.svg%22%20onclick%3D%22deletedSectionBtn(this)%3B%22%3E%3Cimg%20class%3D%22elementSectionNav%20notEdit%22%20src%3D%22public%2Fimg%2Fsettings.svg%22%20onclick%3D%22topNavSection(this)%3B%22%3E%3Cimg%20class%3D%22elementSectionNav%20notEdit%22%20src%3D%22public%2Fimg%2Fplus.svg%22%20onclick%3D%22appendBlock(this.previousSibling.previousSibling.parentNode.previousSibling.id)%3B%22%3E%3C%2Fdiv%3E%3C%2Fdiv%3E');

-- --------------------------------------------------------

--
-- Структура таблицы `parts_2`
--

CREATE TABLE `parts_2` (
  `id` int(11) NOT NULL,
  `part` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `parts_2`
--

INSERT INTO `parts_2` (`id`, `part`) VALUES
(1, 'Первый параграф');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(12) UNSIGNED NOT NULL,
  `login` varchar(255) DEFAULT NULL,
  `pass` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `login`, `pass`) VALUES
(1, 'Mektep', '123');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `book_2`
--
ALTER TABLE `book_2`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `parts_2`
--
ALTER TABLE `parts_2`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `book_2`
--
ALTER TABLE `book_2`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `parts_2`
--
ALTER TABLE `parts_2`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(12) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
