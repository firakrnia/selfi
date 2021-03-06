const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');

router.get('/target/:nis', controller.target.getAllTarget);

router.get('/target/:nis/profile', controller.target.getTarget);

router.post('/target/tambah', controller.target.post);

router.delete('/target/:nis/:id_target', controller.target.delete);


module.exports = router;