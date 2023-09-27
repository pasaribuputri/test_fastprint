-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 26 Sep 2023 pada 16.27
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test_fastprint`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `kategori`
--

CREATE TABLE `kategori` (
  `kategori_id` char(3) NOT NULL,
  `nama_kategori` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `kategori`
--

INSERT INTO `kategori` (`kategori_id`, `nama_kategori`) VALUES
('B1', 'L QUEENLY'),
('B2', 'L MTH AKSESORIS (IM)'),
('B3', 'L MTH TABUNG (LK)'),
('B4', 'SP MTH SPAREPART (LK)'),
('B5', 'CI MTH TINTA LAIN (IM)'),
('B6', 'S MTH STEMPEL (IM)');

-- --------------------------------------------------------

--
-- Struktur dari tabel `produk`
--

CREATE TABLE `produk` (
  `produk_id` int(3) NOT NULL,
  `nama_produk` varchar(120) NOT NULL,
  `harga` int(11) NOT NULL,
  `kategori_id` char(3) NOT NULL,
  `status_id` char(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `produk`
--

INSERT INTO `produk` (`produk_id`, `nama_produk`, `harga`, `kategori_id`, `status_id`) VALUES
(6, 'ALCOHOL GEL POLISH CLEANSER GP-CLN01', 12500, 'B1', 'A1'),
(9, 'ALUMUNIUM FOIL ALL IN ONE BULAT 23mm IM', 1000, 'B2', 'A1'),
(11, 'ALUMUNIUM FOIL ALL IN ONE BULAT 30mm IM', 1000, 'B2', 'A1'),
(12, 'ALUMUNIUM FOIL ALL IN ONE SHEET 250mm IM', 12500, 'B2', 'A2'),
(15, 'ALUMUNIUM FOIL HDPE/PE BULAT 23mm IM', 12500, 'B2', 'A2'),
(17, 'ALUMUNIUM FOIL HDPE/PE BULAT 30mm IM', 1000, 'B2', 'A1'),
(18, 'ALUMUNIUM FOIL HDPE/PE SHEET 250mm IM', 13000, 'B2', 'A2'),
(19, 'ALUMUNIUM FOIL PET SHEET 250mm IM', 1000, 'B2', 'A2'),
(22, 'ARM PENDEK MODEL U', 13000, 'B2', 'A1'),
(23, 'ARM SUPPORT KECIL', 13000, 'B3', 'A2'),
(24, 'ARM SUPPORT KOTAK PUTIH', 13000, 'B2', 'A2'),
(26, 'ARM SUPPORT PENDEK POLOS', 13000, 'B3', 'A1'),
(27, 'ARM SUPPORT S IM', 1000, 'B2', 'A2'),
(28, 'ARM SUPPORT T (IMPORT)', 13000, 'B2', 'A1'),
(29, 'ARM SUPPORT T - MODEL 1 ( LOKAL )', 10000, 'B3', 'A1'),
(50, 'BLACK LASER TONER FP-T3 (100gr)', 13000, 'B2', 'A2'),
(56, 'BODY PRINTER CANON IP2770', 500, 'B4', 'A1'),
(58, 'BODY PRINTER T13X', 15000, 'B4', 'A1'),
(59, 'BOTOL 1000ML BLUE KHUSUS UNTUK EPSON R1800/R800 - 4180 IM (T054920)', 10000, 'B5', 'A1'),
(60, 'BOTOL 1000ML CYAN KHUSUS UNTUK EPSON R1800/R800/R1900/R2000 - 4120 IM (T054220)', 10000, 'B5', 'A2'),
(61, 'BOTOL 1000ML GLOSS OPTIMIZER KHUSUS UNTUK EPSON R1800/R800/R1900/R2000/IX7000/MG6170 - 1400 IM (T054020)', 1500, 'B5', 'A1'),
(62, 'BOTOL 1000ML L.LIGHT BLACK KHUSUS UNTUK EPSON 2400 - 0599 IM', 1500, 'B5', 'A2'),
(63, 'BOTOL 1000ML LIGHT BLACK KHUSUS UNTUK EPSON 2400 - 0597 IM', 1500, 'B5', 'A2'),
(64, 'BOTOL 1000ML MAGENTA KHUSUS UNTUK EPSON R1800/R800/R1900/R2000', 1000, 'B5', 'A1'),
(65, 'BOTOL 1000ML MATTE BLACK KHUSUS UNTUK EPSON R1800/R800/R1900/R2000 - 3503 IM (T054820)', 1500, 'B5', 'A2'),
(66, 'BOTOL 1000ML ORANGE KHUSUS UNTUK EPSON R1900/R2000 IM - 4190 (T087920)', 1500, 'B5', 'A1'),
(67, 'BOTOL 1000ML RED KHUSUS UNTUK EPSON R1800/R800/R1900/R2000 - 4170 IM (T054720)', 1000, 'B5', 'A2'),
(68, 'BOTOL 1000ML YELLOW KHUSUS UNTUK EPSON R18000/R800/R1900/R2000 - 4160 IM (T054420)', 1500, 'B5', 'A2'),
(70, 'BOTOL KOTAK 100ML LK', 1000, 'B2', 'A1'),
(72, 'BOTOL 10ML IM', 1000, 'B6', 'A2'),
(83, 'Tinta', 10000, 'B5', 'A2'),
(84, 'Printer', 12000, 'B1', 'A1');

-- --------------------------------------------------------

--
-- Struktur dari tabel `status`
--

CREATE TABLE `status` (
  `status_id` char(3) NOT NULL,
  `nama_status` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `status`
--

INSERT INTO `status` (`status_id`, `nama_status`) VALUES
('A1', 'bisa dijual'),
('A2', 'tidak bisa dijual');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`kategori_id`);

--
-- Indeks untuk tabel `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`produk_id`),
  ADD KEY `fk_sts` (`status_id`),
  ADD KEY `fk_ktg` (`kategori_id`);

--
-- Indeks untuk tabel `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`status_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `produk`
--
ALTER TABLE `produk`
  MODIFY `produk_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `produk`
--
ALTER TABLE `produk`
  ADD CONSTRAINT `fk_ktg` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`kategori_id`),
  ADD CONSTRAINT `fk_sts` FOREIGN KEY (`status_id`) REFERENCES `status` (`status_id`),
  ADD CONSTRAINT `produk_ibfk_1` FOREIGN KEY (`status_id`) REFERENCES `status` (`status_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
