const express = require('express');
const router = express.Router();
const controller = require("../controllers/index");

router.get('/belajar', controller.buku.getAllBuku);

router.get('/belajar/search', controller.buku.getSearch);
router.get('/belajar/:kategori', controller.buku.getAllBukuByKategori);


module.exports = router;