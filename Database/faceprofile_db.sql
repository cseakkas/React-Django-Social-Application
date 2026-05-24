-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 24, 2026 at 05:39 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `faceprofile_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add content type', 4, 'add_contenttype'),
(14, 'Can change content type', 4, 'change_contenttype'),
(15, 'Can delete content type', 4, 'delete_contenttype'),
(16, 'Can view content type', 4, 'view_contenttype'),
(17, 'Can add session', 5, 'add_session'),
(18, 'Can change session', 5, 'change_session'),
(19, 'Can delete session', 5, 'delete_session'),
(20, 'Can view session', 5, 'view_session'),
(21, 'Can add blacklisted token', 6, 'add_blacklistedtoken'),
(22, 'Can change blacklisted token', 6, 'change_blacklistedtoken'),
(23, 'Can delete blacklisted token', 6, 'delete_blacklistedtoken'),
(24, 'Can view blacklisted token', 6, 'view_blacklistedtoken'),
(25, 'Can add outstanding token', 7, 'add_outstandingtoken'),
(26, 'Can change outstanding token', 7, 'change_outstandingtoken'),
(27, 'Can delete outstanding token', 7, 'delete_outstandingtoken'),
(28, 'Can view outstanding token', 7, 'view_outstandingtoken'),
(29, 'Can add user', 8, 'add_user'),
(30, 'Can change user', 8, 'change_user'),
(31, 'Can delete user', 8, 'delete_user'),
(32, 'Can view user', 8, 'view_user'),
(33, 'Can add post', 9, 'add_post'),
(34, 'Can change post', 9, 'change_post'),
(35, 'Can delete post', 9, 'delete_post'),
(36, 'Can view post', 9, 'view_post'),
(37, 'Can add post image', 10, 'add_postimage'),
(38, 'Can change post image', 10, 'change_postimage'),
(39, 'Can delete post image', 10, 'delete_postimage'),
(40, 'Can view post image', 10, 'view_postimage'),
(41, 'Can add post comments', 11, 'add_postcomments'),
(42, 'Can change post comments', 11, 'change_postcomments'),
(43, 'Can delete post comments', 11, 'delete_postcomments'),
(44, 'Can view post comments', 11, 'view_postcomments'),
(45, 'Can add post likes', 12, 'add_postlikes'),
(46, 'Can change post likes', 12, 'change_postlikes'),
(47, 'Can delete post likes', 12, 'delete_postlikes'),
(48, 'Can view post likes', 12, 'view_postlikes');

-- --------------------------------------------------------

--
-- Table structure for table `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(4, 'contenttypes', 'contenttype'),
(5, 'sessions', 'session'),
(8, 'social_auth', 'user'),
(9, 'social_feeds', 'post'),
(11, 'social_feeds', 'postcomments'),
(10, 'social_feeds', 'postimage'),
(12, 'social_feeds', 'postlikes'),
(6, 'token_blacklist', 'blacklistedtoken'),
(7, 'token_blacklist', 'outstandingtoken');

-- --------------------------------------------------------

--
-- Table structure for table `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2026-05-24 06:39:32.264611'),
(2, 'contenttypes', '0002_remove_content_type_name', '2026-05-24 06:39:32.324614'),
(3, 'auth', '0001_initial', '2026-05-24 06:39:32.542612'),
(4, 'auth', '0002_alter_permission_name_max_length', '2026-05-24 06:39:32.596613'),
(5, 'auth', '0003_alter_user_email_max_length', '2026-05-24 06:39:32.618613'),
(6, 'auth', '0004_alter_user_username_opts', '2026-05-24 06:39:32.631611'),
(7, 'auth', '0005_alter_user_last_login_null', '2026-05-24 06:39:32.656622'),
(8, 'auth', '0006_require_contenttypes_0002', '2026-05-24 06:39:32.662612'),
(9, 'auth', '0007_alter_validators_add_error_messages', '2026-05-24 06:39:32.681612'),
(10, 'auth', '0008_alter_user_username_max_length', '2026-05-24 06:39:32.703618'),
(11, 'auth', '0009_alter_user_last_name_max_length', '2026-05-24 06:39:32.716612'),
(12, 'auth', '0010_alter_group_name_max_length', '2026-05-24 06:39:32.741619'),
(13, 'auth', '0011_update_proxy_permissions', '2026-05-24 06:39:32.751618'),
(14, 'auth', '0012_alter_user_first_name_max_length', '2026-05-24 06:39:32.761612'),
(15, 'social_auth', '0001_initial', '2026-05-24 06:39:33.137612'),
(16, 'admin', '0001_initial', '2026-05-24 06:39:33.269615'),
(17, 'admin', '0002_logentry_remove_auto_add', '2026-05-24 06:39:33.294561'),
(18, 'admin', '0003_logentry_add_action_flag_choices', '2026-05-24 06:39:33.311093'),
(19, 'sessions', '0001_initial', '2026-05-24 06:39:33.371386'),
(20, 'social_feeds', '0001_initial', '2026-05-24 06:39:33.758145'),
(21, 'token_blacklist', '0001_initial', '2026-05-24 06:39:33.934143'),
(22, 'token_blacklist', '0002_outstandingtoken_jti_hex', '2026-05-24 06:39:33.957140'),
(23, 'token_blacklist', '0003_auto_20171017_2007', '2026-05-24 06:39:33.975140'),
(24, 'token_blacklist', '0004_auto_20171017_2013', '2026-05-24 06:39:34.036141'),
(25, 'token_blacklist', '0005_remove_outstandingtoken_jti', '2026-05-24 06:39:34.061142'),
(26, 'token_blacklist', '0006_auto_20171017_2113', '2026-05-24 06:39:34.079141'),
(27, 'token_blacklist', '0007_auto_20171017_2214', '2026-05-24 06:39:34.464145'),
(28, 'token_blacklist', '0008_migrate_to_bigautofield', '2026-05-24 06:39:34.818062'),
(29, 'token_blacklist', '0010_fix_migrate_to_bigautofield', '2026-05-24 06:39:34.861060'),
(30, 'token_blacklist', '0011_linearizes_history', '2026-05-24 06:39:34.867065'),
(31, 'token_blacklist', '0012_alter_outstandingtoken_user', '2026-05-24 06:39:34.881060');

-- --------------------------------------------------------

--
-- Table structure for table `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` bigint(20) NOT NULL,
  `content` longtext DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `content`, `created_at`, `user_id`) VALUES
(1, 'oasdfasjdfk jaskldf jasdklf jkl', '2026-05-24 07:47:02.907677', 2),
(2, 'ad fjasdkl fjaf\r\nkaj fklasdlfk jasklf\r\nkasj fkasldfk j\r\naksjd fklasfj ', '2026-05-24 07:48:19.347539', 2),
(3, 'aponi je ghonona ghotaichen ta ami ekhon bolbo.\r\n\r\n', '2026-05-24 07:49:20.857411', 2),
(4, 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\r\n\r\n', '2026-05-24 07:51:05.193586', 2),
(5, 'ঈদের ছুটিতে বাড়ি যাওয়ার অনুভূতিটাই আলাদা ❤️\r\nঅনেকদিন পর নিজের মানুষগুলোর সাথে সময় কাটানো, আম্মুর হাতের রান্না, আর গ্রামের শান্ত পরিবেশ — এসবের জন্য মনটা অনেকদিন ধরেই অপেক্ষা করছে', '2026-05-24 12:00:03.660656', 2),
(6, 'ঈদের ছুটিতে বাড়ি যাওয়ার অনুভূতিটাই আলাদা ❤️\r\nঅনেকদিন পর নিজের মানুষগুলোর সাথে সময় কাটানো, আম্মুর হাতের রান্না, আর গ্রামের শান্ত পরিবেশ — এসবের জন্য মনটা অনেকদিন ধরেই অপেক্ষা করছে\r\nঈদের ছুটিতে বাড়ি যাওয়ার অনুভূতিটাই আলাদা ❤️\r\nঅনেকদিন পর নিজের মানুষগুলোর সাথে সময় কাটানো, আম্মুর হাতের রান্না, আর গ্রামের শান্ত পরিবেশ — এসবের জন্য মনটা অনেকদিন ধরেই অপেক্ষা করছে\r\nঈদের ছুটিতে বাড়ি যাওয়ার অনুভূতিটাই আলাদা ❤️\r\nঅনেকদিন পর নিজের মানুষগুলোর সাথে সময় কাটানো, আম্মুর হাতের রান্না, আর গ্রামের শান্ত পরিবেশ — এসবের জন্য মনটা অনেকদিন ধরেই অপেক্ষা করছে\r\nঈদের ছুটিতে বাড়ি যাওয়ার অনুভূতিটাই আলাদা ❤️\r\nঅনেকদিন পর নিজের মানুষগুলোর সাথে সময় কাটানো, আম্মুর হাতের রান্না, আর গ্রামের শান্ত পরিবেশ — এসবের জন্য মনটা অনেকদিন ধরেই অপেক্ষা করছে\r\nঈদের ছুটিতে বাড়ি যাওয়ার অনুভূতিটাই আলাদা ❤️\r\nঅনেকদিন পর নিজের মানুষগুলোর সাথে সময় কাটানো, আম্মুর হাতের রান্না, আর গ্রামের শান্ত পরিবেশ — এসবের জন্য মনটা অনেকদিন ধরেই অপেক্ষা করছে\r\nঈদের ছুটিতে বাড়ি যাওয়ার অনুভূতিটাই আলাদা ❤️\r\nঅনেকদিন পর নিজের মানুষগুলোর সাথে সময় কাটানো, আম্মুর হাতের রান্না, আর গ্রামের শান্ত পরিবেশ — এসবের জন্য মনটা অনেকদিন ধরেই অপেক্ষা করছে\r\nঈদের ছুটিতে বাড়ি যাওয়ার অনুভূতিটাই আলাদা ❤️\r\nঅনেকদিন পর নিজের মানুষগুলোর সাথে সময় কাটানো, আম্মুর হাতের রান্না, আর গ্রামের শান্ত পরিবেশ — এসবের জন্য মনটা অনেকদিন ধরেই অপেক্ষা করছে\r\n', '2026-05-24 12:07:02.353822', 2),
(7, 'ঈদ মানেই পরিবারের কাছে ফিরে যাওয়ার আনন্দ, আর বাড়ি ফেরার অনুভূতিটা সত্যিই অন্যরকম ❤️\r\nব্যস্ত শহরের জীবন, কাজের চাপ আর প্রতিদিনের দৌড়ঝাঁপের মাঝেও মনে একটা আলাদা অপেক্ষা কাজ করে — কবে ঈদের ছুটি হবে, কবে নিজের মানুষগুলোর কাছে ফিরতে পারবো 😊\r\n\r\nঅনেকদিন পর আম্মুর হাতের রান্না খাওয়া, পরিবারের সবাইকে একসাথে দেখা, ছোটবেলার বন্ধুদের সাথে আড্ডা দেওয়া, গ্রামের শান্ত পরিবেশে একটু স্বস্তির নিঃশ্বাস নেওয়া — এসব ছোট ছোট মুহূর্তই আসলে সবচেয়ে বেশি সুখ দেয় 🌙✨\r\n\r\nইনশাআল্লাহ খুব শীঘ্রই বাড়ির পথে রওনা হবো। সবাই দোয়া করবেন যেন সুন্দরভাবে পরিবারের সাথে ঈদের আনন্দ ভাগাভাগি করতে পারি 🤍', '2026-05-24 12:14:31.252934', 2),
(8, 'ঈদ মানেই পরিবারের কাছে ফিরে যাওয়ার আনন্দ, আর বাড়ি ফেরার অনুভূতিটা সত্যিই অন্যরকম ❤️\r\nব্যস্ত শহরের জীবন, কাজের চাপ আর প্রতিদিনের দৌড়ঝাঁপের মাঝেও মনে একটা আলাদা অপেক্ষা কাজ করে — কবে ঈদের ছুটি হবে, কবে নিজের মানুষগুলোর কাছে ফিরতে পারবো 😊\r\n\r\nঅনেকদিন পর আম্মুর হাতের রান্না খাওয়া, পরিবারের সবাইকে একসাথে দেখা, ছোটবেলার বন্ধুদের সাথে আড্ডা দেওয়া, গ্রামের শান্ত পরিবেশে একটু স্বস্তির নিঃশ্বাস নেওয়া — এসব ছোট ছোট মুহূর্তই আসলে সবচেয়ে বেশি সুখ দেয় 🌙✨\r\n\r\nইনশাআল্লাহ খুব শীঘ্রই বাড়ির পথে রওনা হবো। সবাই দোয়া করবেন যেন সুন্দরভাবে পরিবারের সাথে ঈদের আনন্দ ভাগাভাগি করতে পারি 🤍', '2026-05-24 12:15:23.274762', 2),
(9, 'ঈদ মানেই পরিবারের কাছে ফিরে যাওয়ার আনন্দ, আর বাড়ি ফেরার অনুভূতিটা সত্যিই অন্যরকম ❤️\r\nব্যস্ত শহরের জীবন, কাজের চাপ আর প্রতিদিনের দৌড়ঝাঁপের মাঝেও মনে একটা আলাদা অপেক্ষা কাজ করে — কবে ঈদের ছুটি হবে, কবে নিজের মানুষগুলোর কাছে ফিরতে পারবো 😊\r\n\r\nঅনেকদিন পর আম্মুর হাতের রান্না খাওয়া, পরিবারের সবাইকে একসাথে দেখা, ছোটবেলার বন্ধুদের সাথে আড্ডা দেওয়া, গ্রামের শান্ত পরিবেশে একটু স্বস্তির নিঃশ্বাস নেওয়া — এসব ছোট ছোট মুহূর্তই আসলে সবচেয়ে বেশি সুখ দেয় 🌙✨\r\n\r\nইনশাআল্লাহ খুব শীঘ্রই বাড়ির পথে রওনা হবো। সবাই দোয়া করবেন যেন সুন্দরভাবে পরিবারের সাথে ঈদের আনন্দ ভাগাভাগি করতে পারি 🤍', '2026-05-24 12:20:49.714086', 2),
(10, '', '2026-05-24 12:21:46.517193', 2),
(11, 'ঈদের আগে বাড়ি ফেরার প্রস্তুতি চলছে 😊\r\nব্যাগ গুছানো প্রায় শেষ, কিন্তু মনটা তো আগেই গ্রামের পথে রওনা হয়ে গেছে ❤️🌙\r\nঅনেকদিন পর পরিবারের সাথে একসাথে সময় কাটানোর অপেক্ষা', '2026-05-24 12:29:44.869480', 1);

-- --------------------------------------------------------

--
-- Table structure for table `post_comments`
--

CREATE TABLE `post_comments` (
  `id` bigint(20) NOT NULL,
  `text` longtext NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `post_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `post_images`
--

CREATE TABLE `post_images` (
  `id` bigint(20) NOT NULL,
  `image` varchar(100) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `post_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `post_images`
--

INSERT INTO `post_images` (`id`, `image`, `created_at`, `post_id`) VALUES
(1, 'posts/ChatGPT_Image_May_18_2026_11_38_31_PM_2.png', '2026-05-24 07:49:20.882397', 3),
(2, 'posts/ChatGPT_Image_May_18_2026_11_38_15_PM_-_Copy.png', '2026-05-24 07:49:20.898642', 3),
(3, 'posts/ChatGPT_Image_May_18_2026_11_38_31_PM_1.png', '2026-05-24 07:49:20.922640', 3),
(4, 'posts/1778854441428.jpg', '2026-05-24 07:49:20.938642', 3),
(5, 'posts/images_4.jpg', '2026-05-24 07:51:05.200587', 4),
(6, 'posts/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-free-photo.jpg', '2026-05-24 07:51:05.208603', 4),
(7, 'posts/emp_manage.png', '2026-05-24 07:51:05.213591', 4),
(8, 'posts/akkas49.jpg', '2026-05-24 07:51:05.218588', 4),
(9, 'posts/ChatGPT_Image_May_23_2026_08_46_45_AM_2.png', '2026-05-24 12:00:03.694314', 5),
(10, 'posts/akkas_post7.png', '2026-05-24 12:07:02.376193', 6),
(11, 'posts/ChatGPT_Image_May_24_2026_04_53_21_PM.png', '2026-05-24 12:14:31.273620', 7),
(12, 'posts/ChatGPT_Image_May_23_2026_08_46_45_AM_1.png', '2026-05-24 12:14:31.291398', 7),
(13, 'posts/ChatGPT_Image_May_23_2026_08_46_45_AM_2_lcDVzvP.png', '2026-05-24 12:14:31.309223', 7),
(14, 'posts/ChatGPT_Image_May_18_2026_11_11_24_PM_-_Copy.png', '2026-05-24 12:14:31.322587', 7),
(15, 'posts/akkas4.9_profile.png', '2026-05-24 12:14:31.338023', 7),
(16, 'posts/akkas_post7_vgvekDM.png', '2026-05-24 12:14:31.354124', 7),
(17, 'posts/akkas_post6.png', '2026-05-24 12:14:31.395014', 7),
(18, 'posts/ChatGPT_Image_May_6_2026_10_07_36_PM.png', '2026-05-24 12:14:31.411060', 7),
(19, 'posts/ChatGPT_Image_May_23_2026_08_46_45_AM_1_2jeLyNO.png', '2026-05-24 12:15:23.298824', 8),
(20, 'posts/ChatGPT_Image_May_23_2026_08_46_45_AM_1_TcSHAdy.png', '2026-05-24 12:20:49.730147', 9),
(21, 'posts/ChatGPT_Image_May_23_2026_08_46_45_AM_2_OGCw6df.png', '2026-05-24 12:20:49.752302', 9),
(22, 'posts/ChatGPT_Image_May_18_2026_11_38_31_PM_2_A9fj6U2.png', '2026-05-24 12:21:46.532188', 10),
(23, 'posts/myProfile.png', '2026-05-24 12:29:44.875473', 11);

-- --------------------------------------------------------

--
-- Table structure for table `post_likes`
--

CREATE TABLE `post_likes` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `post_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `social_auth_user`
--

CREATE TABLE `social_auth_user` (
  `id` bigint(20) NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `gender` varchar(1) DEFAULT NULL,
  `email` varchar(254) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `profile_image` varchar(100) DEFAULT NULL,
  `bio` longtext DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `social_auth_user`
--

INSERT INTO `social_auth_user` (`id`, `password`, `last_login`, `is_superuser`, `gender`, `email`, `username`, `first_name`, `last_name`, `phone`, `profile_image`, `bio`, `location`, `is_active`, `is_staff`, `date_joined`) VALUES
(1, 'pbkdf2_sha256$600000$9vFHJ98XyQQibxMxcAJn21$euBIcpdlpAnEmRxE6N0v0DC54abhgie+m5IaEV2tU90=', NULL, 0, NULL, 'akkas@gmail.com', 'akkas@gmail.com', 'Md. Akkas', 'Mia', '0910928345', 'profiles/myProfile.png', NULL, NULL, 1, 0, '2026-05-24 06:41:19.807749'),
(2, 'pbkdf2_sha256$600000$OOPxEVfcZTOiaFv1owJkoB$8o707KTL6rH9e2Z/xhxOzP8wqAUFXmMfx1m5egnkXP8=', NULL, 0, NULL, 'akash@gmail.com', 'akash@gmail.com', 'Md. Akash', 'Ahmed', '01902353773', 'profiles/akkas.jpg', NULL, NULL, 1, 0, '2026-05-24 06:45:03.429336'),
(3, 'pbkdf2_sha256$600000$MEM5KuojjgtKIyEiv2j1V6$9X1OfAuFq0IdeQWDpXWJhT690EfQdqLAl9wMItOAX9U=', NULL, 0, NULL, 'deje@mailinator.com', 'deje@mailinator.com', 'Deborah', 'Roberson', '+1 (711) 774-7741', 'profiles/default.png', NULL, NULL, 1, 0, '2026-05-24 12:48:34.045122'),
(4, 'pbkdf2_sha256$600000$UFNQNMvjKyOlExfRTavNTb$j2WGFEC+bpfCabXorbTcU5Hvhjq56yvJx3dCBP5ZDqg=', NULL, 0, NULL, 'kyhylegac@mailinator.com', 'kyhylegac@mailinator.com', 'Mahbub', 'Hasan', '+1 (792) 508-3042', 'profiles/ChatGPT_Image_May_18_2026_11_38_31_PM_2.png', NULL, NULL, 1, 0, '2026-05-24 12:50:24.828213'),
(5, 'pbkdf2_sha256$600000$6i7JLzElXXQ5RpH3uF6lrx$08hykFMvSCmvHvMzYpoWw6AO/5LADeR9dKNxQKBQ9Tc=', NULL, 0, NULL, 'bejefoje@mailinator.com', 'bejefoje@mailinator.com', 'Gillian', 'Irwin', '+1 (992) 458-5527', 'profiles/default.png', NULL, NULL, 1, 0, '2026-05-24 13:08:50.199441');

-- --------------------------------------------------------

--
-- Table structure for table `social_auth_user_groups`
--

CREATE TABLE `social_auth_user_groups` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `social_auth_user_user_permissions`
--

CREATE TABLE `social_auth_user_user_permissions` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `token_blacklist_blacklistedtoken`
--

CREATE TABLE `token_blacklist_blacklistedtoken` (
  `id` bigint(20) NOT NULL,
  `blacklisted_at` datetime(6) NOT NULL,
  `token_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `token_blacklist_outstandingtoken`
--

CREATE TABLE `token_blacklist_outstandingtoken` (
  `id` bigint(20) NOT NULL,
  `token` longtext NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `expires_at` datetime(6) NOT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `jti` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `token_blacklist_outstandingtoken`
--

INSERT INTO `token_blacklist_outstandingtoken` (`id`, `token`, `created_at`, `expires_at`, `user_id`, `jti`) VALUES
(1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc4MDIwOTY3OSwiaWF0IjoxNzc5NjA0ODc5LCJqdGkiOiI3Nzc4ZDdmZWYzNGE0MWVlODZlZjRkMTIyNTg2NTVjOSIsInVzZXJfaWQiOjF9.7WuKDgdx6G0buDETpu4zogheHhK2YX-GKuNfmv4we-c', '2026-05-24 06:41:19.837272', '2026-05-31 06:41:19.000000', 1, '7778d7fef34a41ee86ef4d12258655c9'),
(2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc4MDIwOTY5MiwiaWF0IjoxNzc5NjA0ODkyLCJqdGkiOiJlNThlYmRiNmUzMGI0M2MzOThlY2IwYmFhMmU2YjQyYyIsInVzZXJfaWQiOjF9.YOJ812WW7sOoS4nRxNL1Ey1hn0BO-cAp6Wt4WmI7g2U', '2026-05-24 06:41:32.962799', '2026-05-31 06:41:32.000000', 1, 'e58ebdb6e30b43c398ecb0baa2e6b42c'),
(3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc4MDIwOTkwMywiaWF0IjoxNzc5NjA1MTAzLCJqdGkiOiIwZmFiYWJjODYwNDY0NmJhODk3YmM4ZGI5MzlhYTI0MyIsInVzZXJfaWQiOjJ9.Dbi4wkq2GYbdV3RALX-SnqfCa41qMs6i2htbR0H08Yk', '2026-05-24 06:45:03.431331', '2026-05-31 06:45:03.000000', 2, '0fababc8604646ba897bc8db939aa243'),
(4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc4MDIwOTkyNCwiaWF0IjoxNzc5NjA1MTI0LCJqdGkiOiJlOWJmOTZmZDhkZDM0YmJiYTJkOGFkNWVhNDgyM2Q2OSIsInVzZXJfaWQiOjJ9.3e06M4z3B4cT2ydVpb0cXDdjVZRh6oWt0oSGTpYHXxU', '2026-05-24 06:45:24.873438', '2026-05-31 06:45:24.000000', 2, 'e9bf96fd8dd34bbba2d8ad5ea4823d69'),
(5, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc4MDIxMDAzNSwiaWF0IjoxNzc5NjA1MjM1LCJqdGkiOiIzZGZlNGVjYjg5NTA0M2RiODExYWE5MDY4ZWNjMWJlYyIsInVzZXJfaWQiOjF9.0mGgZbi2zWp7lOtIUqGtb-n39FXyxKRq1U_wmQuBVKs', '2026-05-24 06:47:15.926549', '2026-05-31 06:47:15.000000', 1, '3dfe4ecb895043db811aa9068ecc1bec'),
(6, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc4MDIxMDA4NywiaWF0IjoxNzc5NjA1Mjg3LCJqdGkiOiJhODE4ZDZmZGIzNTg0Yjc2OTRkODI1YWE1ZjBhZjdhNiIsInVzZXJfaWQiOjJ9.2Ft4AE1rG2nXCP1QOlRt3BDeOFNa_b55DO3hfmN5czQ', '2026-05-24 06:48:07.212740', '2026-05-31 06:48:07.000000', 2, 'a818d6fdb3584b7694d825aa5f0af7a6'),
(7, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc4MDIxMDA5OSwiaWF0IjoxNzc5NjA1Mjk5LCJqdGkiOiJmYmJiYzU3OGQwZTE0MjFiOTBhYzA1OGUyNmU2YTJlOCIsInVzZXJfaWQiOjJ9.DJmL7INmtVYHiGKo9k18I98el4RvFBFuWoLZdIGqxDM', '2026-05-24 06:48:19.259412', '2026-05-31 06:48:19.000000', 2, 'fbbbc578d0e1421b90ac058e26e6a2e8'),
(8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc4MDIxMjY1MiwiaWF0IjoxNzc5NjA3ODUyLCJqdGkiOiI4NWNiYTJhNWIzMjU0ZWEzOWRmM2ZmMDExZGNmYjdmNSIsInVzZXJfaWQiOjJ9.oxW5Glbq89zMoEL3_fzcW6ixdA9yVwOXxD8e12JY4MU', '2026-05-24 07:30:52.489028', '2026-05-31 07:30:52.000000', 2, '85cba2a5b3254ea39df3ff011dcfb7f5'),
(9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc4MDIzMDQ2OCwiaWF0IjoxNzc5NjI1NjY4LCJqdGkiOiIwMjYwMjllMjcxYTY0N2Q3YmYwYWVmNDVlZTQ0MTRiOCIsInVzZXJfaWQiOjJ9.k_VqbT4_f310HSZybdB-SxibHLqXT28srFruTbKUX9s', '2026-05-24 12:27:48.843595', '2026-05-31 12:27:48.000000', 2, '026029e271a647d7bf0aef45ee4414b8'),
(10, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc4MDIzMDQ4MiwiaWF0IjoxNzc5NjI1NjgyLCJqdGkiOiI0NTRmNDA0ZTE0NDM0YTJiOTBmZjdmYWEzYzViZmI2MCIsInVzZXJfaWQiOjF9.PGFScnn3OnJYIAFq9OCMa3r8j54ZYRTnwx6rAbLTBhs', '2026-05-24 12:28:02.934337', '2026-05-31 12:28:02.000000', 1, '454f404e14434a2b90ff7faa3c5bfb60'),
(11, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc4MDIzMDU0NywiaWF0IjoxNzc5NjI1NzQ3LCJqdGkiOiI0M2ExOTQyOWI3YTc0ZDljOGVlZTM1OTI4ZDE4NzBhNSIsInVzZXJfaWQiOjF9.k3tprm4aGPoT9pOfcy7y20Wh4SMtmbmqjvfrn7oSOCY', '2026-05-24 12:29:07.273644', '2026-05-31 12:29:07.000000', 1, '43a19429b7a74d9c8eee35928d1870a5'),
(12, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc4MDIzMTcxNCwiaWF0IjoxNzc5NjI2OTE0LCJqdGkiOiJlNzk4OGFiM2RhYWE0MjhlOGRkOTM1OGM1NDg2ZGI4MSIsInVzZXJfaWQiOjN9.03zKQGRFGerBF-TMfIUSS7i2MXNIXk6OREQuSkYhq-o', '2026-05-24 12:48:34.061145', '2026-05-31 12:48:34.000000', 3, 'e7988ab3daaa428e8dd9358c5486db81'),
(13, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc4MDIzMTgyNCwiaWF0IjoxNzc5NjI3MDI0LCJqdGkiOiIyZjYwM2M4ZWQyY2Q0M2M3YjVlMjY3YzQwYWVlODk4NiIsInVzZXJfaWQiOjR9.UpAvh1kTMfekcbBMt7hABMJg3nUVviCzlChADli0uik', '2026-05-24 12:50:24.843925', '2026-05-31 12:50:24.000000', 4, '2f603c8ed2cd43c7b5e267c40aee8986'),
(14, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc4MDIzMjkzMCwiaWF0IjoxNzc5NjI4MTMwLCJqdGkiOiIwZGNkMTA2OWIzMWQ0Y2Y4YTBkYWNkNWJkOGE3OGVhOSIsInVzZXJfaWQiOjV9.b_qktE1kaw5yJzGp2rS4_vB06pxRh2PKjGhdM1QCuzk', '2026-05-24 13:08:50.222371', '2026-05-31 13:08:50.000000', 5, '0dcd1069b31d4cf8a0dacd5bd8a78ea9');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indexes for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_social_auth_user_id` (`user_id`);

--
-- Indexes for table `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indexes for table `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `posts_user_id_4291758d_fk_social_auth_user_id` (`user_id`);

--
-- Indexes for table `post_comments`
--
ALTER TABLE `post_comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_comments_post_id_e17f8125_fk_posts_id` (`post_id`),
  ADD KEY `post_comments_user_id_540f5634_fk_social_auth_user_id` (`user_id`);

--
-- Indexes for table `post_images`
--
ALTER TABLE `post_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_images_post_id_de04fec2_fk_posts_id` (`post_id`);

--
-- Indexes for table `post_likes`
--
ALTER TABLE `post_likes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `post_likes_user_id_post_id_14c72dee_uniq` (`user_id`,`post_id`),
  ADD KEY `post_likes_post_id_b7e609e3_fk_posts_id` (`post_id`);

--
-- Indexes for table `social_auth_user`
--
ALTER TABLE `social_auth_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `social_auth_user_groups`
--
ALTER TABLE `social_auth_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `social_auth_user_groups_user_id_group_id_945703ed_uniq` (`user_id`,`group_id`),
  ADD KEY `social_auth_user_groups_group_id_4b7be275_fk_auth_group_id` (`group_id`);

--
-- Indexes for table `social_auth_user_user_permissions`
--
ALTER TABLE `social_auth_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `social_auth_user_user_pe_user_id_permission_id_97278393_uniq` (`user_id`,`permission_id`),
  ADD KEY `social_auth_user_use_permission_id_4adbb112_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `token_blacklist_blacklistedtoken`
--
ALTER TABLE `token_blacklist_blacklistedtoken`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `token_id` (`token_id`);

--
-- Indexes for table `token_blacklist_outstandingtoken`
--
ALTER TABLE `token_blacklist_outstandingtoken`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `token_blacklist_outstandingtoken_jti_hex_d9bdf6f7_uniq` (`jti`),
  ADD KEY `token_blacklist_outs_user_id_83bc629a_fk_social_au` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `post_comments`
--
ALTER TABLE `post_comments`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `post_images`
--
ALTER TABLE `post_images`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `post_likes`
--
ALTER TABLE `post_likes`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `social_auth_user`
--
ALTER TABLE `social_auth_user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `social_auth_user_groups`
--
ALTER TABLE `social_auth_user_groups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `social_auth_user_user_permissions`
--
ALTER TABLE `social_auth_user_user_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `token_blacklist_blacklistedtoken`
--
ALTER TABLE `token_blacklist_blacklistedtoken`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `token_blacklist_outstandingtoken`
--
ALTER TABLE `token_blacklist_outstandingtoken`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Constraints for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Constraints for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_social_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `social_auth_user` (`id`);

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_user_id_4291758d_fk_social_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `social_auth_user` (`id`);

--
-- Constraints for table `post_comments`
--
ALTER TABLE `post_comments`
  ADD CONSTRAINT `post_comments_post_id_e17f8125_fk_posts_id` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`),
  ADD CONSTRAINT `post_comments_user_id_540f5634_fk_social_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `social_auth_user` (`id`);

--
-- Constraints for table `post_images`
--
ALTER TABLE `post_images`
  ADD CONSTRAINT `post_images_post_id_de04fec2_fk_posts_id` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`);

--
-- Constraints for table `post_likes`
--
ALTER TABLE `post_likes`
  ADD CONSTRAINT `post_likes_post_id_b7e609e3_fk_posts_id` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`),
  ADD CONSTRAINT `post_likes_user_id_12e60720_fk_social_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `social_auth_user` (`id`);

--
-- Constraints for table `social_auth_user_groups`
--
ALTER TABLE `social_auth_user_groups`
  ADD CONSTRAINT `social_auth_user_groups_group_id_4b7be275_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `social_auth_user_groups_user_id_11c21595_fk_social_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `social_auth_user` (`id`);

--
-- Constraints for table `social_auth_user_user_permissions`
--
ALTER TABLE `social_auth_user_user_permissions`
  ADD CONSTRAINT `social_auth_user_use_permission_id_4adbb112_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `social_auth_user_use_user_id_71781202_fk_social_au` FOREIGN KEY (`user_id`) REFERENCES `social_auth_user` (`id`);

--
-- Constraints for table `token_blacklist_blacklistedtoken`
--
ALTER TABLE `token_blacklist_blacklistedtoken`
  ADD CONSTRAINT `token_blacklist_blacklistedtoken_token_id_3cc7fe56_fk` FOREIGN KEY (`token_id`) REFERENCES `token_blacklist_outstandingtoken` (`id`);

--
-- Constraints for table `token_blacklist_outstandingtoken`
--
ALTER TABLE `token_blacklist_outstandingtoken`
  ADD CONSTRAINT `token_blacklist_outs_user_id_83bc629a_fk_social_au` FOREIGN KEY (`user_id`) REFERENCES `social_auth_user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
