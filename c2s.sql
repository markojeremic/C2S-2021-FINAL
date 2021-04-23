-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 15, 2021 at 12:10 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `c2s`
--

-- --------------------------------------------------------

--
-- Table structure for table `applications`
--

CREATE TABLE `applications` (
  `id` int(11) NOT NULL,
  `fullname` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `phone_number` varchar(45) NOT NULL,
  `faculty` varchar(45) NOT NULL,
  `grade` varchar(45) NOT NULL,
  `attend_why` varchar(255) NOT NULL,
  `radionica1` varchar(45) DEFAULT NULL,
  `radionica2` varchar(45) DEFAULT NULL,
  `radionica3` varchar(45) DEFAULT NULL,
  `radionice_why` varchar(255) DEFAULT NULL,
  `radionice_experience` varchar(255) DEFAULT NULL,
  `panel` varchar(15) DEFAULT NULL,
  `speed_dating` varchar(15) DEFAULT NULL,
  `microsoft_teams` varchar(15) DEFAULT NULL,
  `spam` varchar(15) DEFAULT NULL,
  `cv` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `applications`
--

INSERT INTO `applications` (`id`, `fullname`, `email`, `phone_number`, `faculty`, `grade`, `attend_why`, `radionica1`, `radionica2`, `radionica3`, `radionice_why`, `radionice_experience`, `panel`, `speed_dating`, `microsoft_teams`, `spam`, `cv`) VALUES
(1, 'Test Test', 'test8@gmail.com', '063333333', 'Fon', 'Treca', 'Testiram bato', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(8, 'Uros Stanimirovic', '123@student.com', '12333333', 'Fon', 'Apsolvent', 'ggwp', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(9, 'Uros', 'blabla@gmail.com', '12323321321', 'Fon', 'Prva', 'Zatp', 'radionica1', 'radionica2', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(10, 'Dusko', 'puca@gmail.com', '0321312312', 'ETF', 'Treca', 'Onako bzvz volim prirodu', NULL, 'radionica2', NULL, 'Pa svaki dan gledam radionicu 2', 'Ne znam nista sorry', 'da', NULL, NULL, 'da', NULL),
(11, 'Paja', 'patak@gmail.com', '32131232', 'Raf', 'Prva', 'Volim', NULL, NULL, NULL, '', '', NULL, 'da', NULL, 'da', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `applications`
--
ALTER TABLE `applications`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `applications`
--
ALTER TABLE `applications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
