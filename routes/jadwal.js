const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');

router.get('/jadwal/:id_kelas/:hari', controller.jadwal.getAllJadwal);

module.exports = router;