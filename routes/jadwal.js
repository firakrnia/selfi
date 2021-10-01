const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');

router.get('/jadwal', controller.jadwal.getAllJadwal);

router.post('/target/tambah', controller.target.post);

router.delete('/target/:id_target', controller.target.delete);

module.exports = router;