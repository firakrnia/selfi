-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 01 Okt 2021 pada 09.50
-- Versi server: 10.4.20-MariaDB
-- Versi PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kksi_selfi`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `admin`
--

CREATE TABLE `admin` (
  `id_guru` int(11) NOT NULL,
  `hp_guru` varchar(15) DEFAULT NULL,
  `nama_guru` varchar(50) DEFAULT NULL,
  `username` varchar(25) DEFAULT NULL,
  `password` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `buku`
--

CREATE TABLE `buku` (
  `id_buku` int(11) NOT NULL,
  `id_guru` int(15) DEFAULT NULL,
  `judul_buku` varchar(50) DEFAULT NULL,
  `deskripsi_buku` varchar(50) DEFAULT NULL,
  `penulis_buku` varchar(50) DEFAULT NULL,
  `kategori_buku` varchar(50) DEFAULT NULL,
  `sampul_buku` varchar(255) DEFAULT NULL,
  `lampiran_buku` blob DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `jadwal`
--

CREATE TABLE `jadwal` (
  `id` int(11) NOT NULL,
  `id_kelas` int(11) DEFAULT NULL,
  `hari` varchar(100) DEFAULT NULL,
  `id_mapel` int(100) DEFAULT NULL,
  `waktu_dimulai` time DEFAULT NULL,
  `waktu_selesai` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `jadwal`
--

INSERT INTO `jadwal` (`id`, `id_kelas`, `hari`, `id_mapel`, `waktu_dimulai`, `waktu_selesai`) VALUES
(1, 3, 'Senin', 17, '06:30:00', '08:10:00'),
(2, 3, 'Senin', 19, '08:25:00', '11:25:00'),
(3, 3, 'Selasa', 21, '06:30:00', '07:20:00'),
(4, 3, 'Selasa', 3, '07:20:00', '09:15:00'),
(5, 3, 'Selasa', 5, '09:15:00', '10:35:00'),
(6, 3, 'Rabu', 18, '06:30:00', '08:50:00'),
(7, 3, 'Rabu', 22, '08:50:00', '11:25:00'),
(8, 3, 'Kamis', 1, '06:30:00', '08:10:00'),
(9, 3, 'Kamis', 2, '08:25:00', '09:15:00'),
(10, 3, 'Kamis', 4, '09:15:00', '11:00:00'),
(11, 3, 'Kamis', 21, '11:00:00', '11:25:00'),
(12, 3, 'Jumat', 21, '06:30:00', '08:50:00'),
(13, 3, 'Jumat', 20, '08:50:00', '11:25:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kelas`
--

CREATE TABLE `kelas` (
  `id_kelas` int(11) NOT NULL,
  `nama` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `kelas`
--

INSERT INTO `kelas` (`id_kelas`, `nama`) VALUES
(1, 'X'),
(2, 'XI'),
(3, 'XII');

-- --------------------------------------------------------

--
-- Struktur dari tabel `konseling`
--

CREATE TABLE `konseling` (
  `id_konseling` int(11) NOT NULL,
  `id_guru` int(15) DEFAULT NULL,
  `jenis_konseling` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `mapel`
--

CREATE TABLE `mapel` (
  `id_mapel` int(11) NOT NULL,
  `nama_mapel` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `mapel`
--

INSERT INTO `mapel` (`id_mapel`, `nama_mapel`) VALUES
(1, 'Matematika'),
(2, 'Bahasa Indonesia'),
(3, 'Bahasa Inggris'),
(4, 'Pend Agama'),
(5, 'PKN'),
(6, 'Sejarah Indonesia'),
(7, 'Bahasa Jepang'),
(8, 'Seni Budaya'),
(9, 'Pendidikan Jasmani, Olah Raga dan Kesehatan'),
(10, 'Simulasi dan Komunikasi Digital'),
(11, 'Fisika '),
(12, 'Kimia'),
(13, 'Sistem Komputer'),
(14, 'Komputer dan Jaringan Dasar'),
(15, 'Pemrograman Dasar'),
(16, 'Dasar Desain Grafis'),
(17, 'Sistem Keamanan Jaringan'),
(18, 'Infrastruktur  Komputasi Awan (IaaS)'),
(19, 'Platform Komputasi Awan (PaaS)'),
(20, 'Sistem Internet of Things (SIoT)'),
(21, 'Produk Kreatif dan Kewirausahaan'),
(22, 'Layanan Komputasi Awan (SaaS)');

-- --------------------------------------------------------

--
-- Struktur dari tabel `motivasi`
--

CREATE TABLE `motivasi` (
  `id_motivasi` int(11) NOT NULL,
  `id_guru` int(15) DEFAULT NULL,
  `judul_artikel` varchar(100) DEFAULT NULL,
  `deskripsi_artikel` varchar(255) DEFAULT NULL,
  `sampul_buku` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `perpustakaan`
--

CREATE TABLE `perpustakaan` (
  `id` int(11) NOT NULL,
  `id_buku` int(15) DEFAULT NULL,
  `nis` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `siswa`
--

CREATE TABLE `siswa` (
  `nis` int(11) NOT NULL,
  `nama` varchar(100) DEFAULT NULL,
  `id_kelas` int(5) DEFAULT NULL,
  `jurusan` varchar(20) DEFAULT NULL,
  `nohp` varchar(15) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `siswa`
--

INSERT INTO `siswa` (`nis`, `nama`, `id_kelas`, `jurusan`, `nohp`, `password`) VALUES
(1913913, 'fira', 3, 'SIJA', '081282573531', '$2a$10$tsngDflCtJO/X.T9eYbxKOfWci0ZfloQMCALqemu.dy0GyTBBdTI2'),
(1913949, 'fira', 1, 'SIJA', '081282573531', '12345'),
(1913950, 'fira kurnia putri', 2, 'SIJA', '081282573531', '123456'),
(1913952, 'fira kp', 1, 'SIJA', '081282573521', '123456'),
(1913954, 'firaa', 3, 'SIJA', '081282573521', '123456'),
(1913955, 'fira kp', 1, 'SIJA', '081282573521', '123456'),
(1913960, 'fira', 3, 'SIJA', '081282573531', '$2a$10$llcKpAQCu4Gaoni1K0fSi.BZWvGrlcKt.0Dz8qnWxNfhkNBonRNvy'),
(1913961, 'fira', 3, 'SIJA', '081282573531', '$2a$10$u4pKUL3SIz7adl32itjAPuAxLDW8o7VU5BqyyomjcCGlGBfKYEApC'),
(1913980, 'firaaaa', 3, 'SIJA', '081282573531', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `target`
--

CREATE TABLE `target` (
  `id_target` int(11) NOT NULL,
  `nis` int(11) DEFAULT NULL,
  `judul_target` varchar(100) DEFAULT NULL,
  `deskripsi_target` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `target`
--

INSERT INTO `target` (`id_target`, `nis`, `judul_target`, `deskripsi_target`) VALUES
(1, 1913950, 'juara kksi smartschool', 'semangat pasti menang!'),
(2, 1913961, 'belajar backend', 'apa aja');

-- --------------------------------------------------------

--
-- Struktur dari tabel `todolist`
--

CREATE TABLE `todolist` (
  `id_kegiatan` int(11) NOT NULL,
  `nama_kegiatan` varchar(255) DEFAULT NULL,
  `nis` int(11) DEFAULT NULL,
  `tanggal` date DEFAULT NULL,
  `jam` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `todolist`
--

INSERT INTO `todolist` (`id_kegiatan`, `nama_kegiatan`, `nis`, `tanggal`, `jam`) VALUES
(3, NULL, 1913949, '2021-09-26', '21:10:00'),
(4, NULL, 1913949, '2021-09-26', '21:10:00'),
(6, 'belajar coding', 1913950, '2021-09-28', '15:00:00');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id_guru`);

--
-- Indeks untuk tabel `buku`
--
ALTER TABLE `buku`
  ADD PRIMARY KEY (`id_buku`),
  ADD KEY `id_guru` (`id_guru`);

--
-- Indeks untuk tabel `jadwal`
--
ALTER TABLE `jadwal`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_kelas` (`id_kelas`),
  ADD KEY `id_mapel` (`id_mapel`);

--
-- Indeks untuk tabel `kelas`
--
ALTER TABLE `kelas`
  ADD PRIMARY KEY (`id_kelas`);

--
-- Indeks untuk tabel `konseling`
--
ALTER TABLE `konseling`
  ADD PRIMARY KEY (`id_konseling`),
  ADD KEY `id_guru` (`id_guru`);

--
-- Indeks untuk tabel `mapel`
--
ALTER TABLE `mapel`
  ADD PRIMARY KEY (`id_mapel`);

--
-- Indeks untuk tabel `motivasi`
--
ALTER TABLE `motivasi`
  ADD PRIMARY KEY (`id_motivasi`),
  ADD KEY `id_guru` (`id_guru`);

--
-- Indeks untuk tabel `perpustakaan`
--
ALTER TABLE `perpustakaan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_buku` (`id_buku`),
  ADD KEY `nis` (`nis`);

--
-- Indeks untuk tabel `siswa`
--
ALTER TABLE `siswa`
  ADD PRIMARY KEY (`nis`),
  ADD KEY `id_kelas` (`id_kelas`);

--
-- Indeks untuk tabel `target`
--
ALTER TABLE `target`
  ADD PRIMARY KEY (`id_target`),
  ADD KEY `nis` (`nis`);

--
-- Indeks untuk tabel `todolist`
--
ALTER TABLE `todolist`
  ADD PRIMARY KEY (`id_kegiatan`),
  ADD KEY `nis` (`nis`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `admin`
--
ALTER TABLE `admin`
  MODIFY `id_guru` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `buku`
--
ALTER TABLE `buku`
  MODIFY `id_buku` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `jadwal`
--
ALTER TABLE `jadwal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT untuk tabel `kelas`
--
ALTER TABLE `kelas`
  MODIFY `id_kelas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `konseling`
--
ALTER TABLE `konseling`
  MODIFY `id_konseling` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `mapel`
--
ALTER TABLE `mapel`
  MODIFY `id_mapel` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT untuk tabel `motivasi`
--
ALTER TABLE `motivasi`
  MODIFY `id_motivasi` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `perpustakaan`
--
ALTER TABLE `perpustakaan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `target`
--
ALTER TABLE `target`
  MODIFY `id_target` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `todolist`
--
ALTER TABLE `todolist`
  MODIFY `id_kegiatan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `buku`
--
ALTER TABLE `buku`
  ADD CONSTRAINT `buku_ibfk_1` FOREIGN KEY (`id_guru`) REFERENCES `admin` (`id_guru`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `jadwal`
--
ALTER TABLE `jadwal`
  ADD CONSTRAINT `jadwal_ibfk_1` FOREIGN KEY (`id_kelas`) REFERENCES `kelas` (`id_kelas`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `jadwal_ibfk_2` FOREIGN KEY (`id_mapel`) REFERENCES `mapel` (`id_mapel`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `konseling`
--
ALTER TABLE `konseling`
  ADD CONSTRAINT `konseling_ibfk_1` FOREIGN KEY (`id_guru`) REFERENCES `admin` (`id_guru`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `motivasi`
--
ALTER TABLE `motivasi`
  ADD CONSTRAINT `motivasi_ibfk_1` FOREIGN KEY (`id_guru`) REFERENCES `admin` (`id_guru`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `perpustakaan`
--
ALTER TABLE `perpustakaan`
  ADD CONSTRAINT `perpustakaan_ibfk_1` FOREIGN KEY (`id_buku`) REFERENCES `buku` (`id_buku`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `perpustakaan_ibfk_2` FOREIGN KEY (`nis`) REFERENCES `siswa` (`nis`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `siswa`
--
ALTER TABLE `siswa`
  ADD CONSTRAINT `siswa_ibfk_1` FOREIGN KEY (`id_kelas`) REFERENCES `kelas` (`id_kelas`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `target`
--
ALTER TABLE `target`
  ADD CONSTRAINT `target_ibfk_1` FOREIGN KEY (`nis`) REFERENCES `siswa` (`nis`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `todolist`
--
ALTER TABLE `todolist`
  ADD CONSTRAINT `todolist_ibfk_1` FOREIGN KEY (`nis`) REFERENCES `siswa` (`nis`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
