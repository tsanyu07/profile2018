-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- 主機: 127.0.0.1:3306
-- 產生時間： 2017-10-23 02:39:08
-- 伺服器版本: 5.7.19
-- PHP 版本： 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `pettrust`
--

-- --------------------------------------------------------

--
-- 資料表結構 `banner`
--

DROP TABLE IF EXISTS `banner`;
CREATE TABLE IF NOT EXISTS `banner` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `url` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `file` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `sort` int(11) NOT NULL DEFAULT '0',
  `showup_switch` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `create_time` datetime NOT NULL DEFAULT '0000-01-01 00:00:00',
  `modify_time` datetime NOT NULL DEFAULT '0000-01-01 00:00:00',
  `del` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `del` (`del`),
  KEY `showup_switch` (`showup_switch`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `product_class_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `introduction` text COLLATE utf8_unicode_ci NOT NULL,
  `certification` text COLLATE utf8_unicode_ci NOT NULL,
  `feature` text COLLATE utf8_unicode_ci NOT NULL,
  `specification` text COLLATE utf8_unicode_ci NOT NULL,
  `accessory` text COLLATE utf8_unicode_ci NOT NULL,
  `name_tw` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `introduction_tw` text COLLATE utf8_unicode_ci NOT NULL,
  `certification_tw` text COLLATE utf8_unicode_ci NOT NULL,
  `feature_tw` text COLLATE utf8_unicode_ci NOT NULL,
  `specification_tw` text COLLATE utf8_unicode_ci NOT NULL,
  `accessory_tw` text COLLATE utf8_unicode_ci NOT NULL,
  `name_jp` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `introduction_jp` text COLLATE utf8_unicode_ci NOT NULL,
  `certification_jp` text COLLATE utf8_unicode_ci NOT NULL,
  `feature_jp` text COLLATE utf8_unicode_ci NOT NULL,
  `specification_jp` text COLLATE utf8_unicode_ci NOT NULL,
  `accessory_jp` text COLLATE utf8_unicode_ci NOT NULL,
  `pic1` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `pic2` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `pic3` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `sort` int(11) NOT NULL DEFAULT '0',
  `showup_switch` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `hot_switch` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `create_time` datetime NOT NULL DEFAULT '0000-01-01 00:00:00',
  `modify_time` datetime NOT NULL DEFAULT '0000-01-01 00:00:00',
  `del` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `del` (`del`),
  KEY `showup_switch` (`showup_switch`),
  KEY `product_class_id` (`product_class_id`),
  KEY `hot_switch` (`hot_switch`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `product_class`
--

DROP TABLE IF EXISTS `product_class`;
CREATE TABLE IF NOT EXISTS `product_class` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name_tw` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name_jp` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `sort` int(11) NOT NULL DEFAULT '0',
  `showup_switch` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `create_time` datetime NOT NULL DEFAULT '0000-01-01 00:00:00',
  `modify_time` datetime NOT NULL DEFAULT '0000-01-01 00:00:00',
  `del` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `del` (`del`),
  KEY `showup_switch` (`showup_switch`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `product_download`
--

DROP TABLE IF EXISTS `product_download`;
CREATE TABLE IF NOT EXISTS `product_download` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `product_id` int(10) UNSIGNED NOT NULL,
  `type` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name_tw` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name_jp` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `file` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `file_tw` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `file_jp` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `sort` int(11) NOT NULL DEFAULT '0',
  `showup_switch` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `create_time` datetime NOT NULL DEFAULT '0000-01-01 00:00:00',
  `modify_time` datetime NOT NULL DEFAULT '0000-01-01 00:00:00',
  `del` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `del` (`del`),
  KEY `showup_switch` (`showup_switch`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `technology`
--

DROP TABLE IF EXISTS `technology`;
CREATE TABLE IF NOT EXISTS `technology` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `contents` longtext COLLATE utf8_unicode_ci NOT NULL,
  `name_tw` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `contents_tw` longtext COLLATE utf8_unicode_ci NOT NULL,
  `name_jp` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `contents_jp` longtext COLLATE utf8_unicode_ci NOT NULL,
  `sort` int(11) NOT NULL DEFAULT '0',
  `showup_switch` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `create_time` datetime NOT NULL DEFAULT '0000-01-01 00:00:00',
  `modify_time` datetime NOT NULL DEFAULT '0000-01-01 00:00:00',
  `del` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `del` (`del`),
  KEY `showup_switch` (`showup_switch`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `account` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `passwd` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `create_time` datetime NOT NULL DEFAULT '0000-01-01 00:00:00',
  `modify_time` datetime NOT NULL DEFAULT '0000-01-01 00:00:00',
  `del` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `account` (`account`),
  KEY `del` (`del`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 資料表的匯出資料 `user`
--

INSERT INTO `user` (`id`, `account`, `passwd`, `name`, `create_time`, `modify_time`, `del`) VALUES
(1, 'admin@example.com', '12345678', '管理者', '0000-01-01 00:00:00', '0000-01-01 00:00:00', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
