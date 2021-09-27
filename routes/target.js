const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');

router.get('/', controller.target.getAllTarget);
router.post('/tambah', controller.target.post);
router.delete('/:id_target', controller.target.delete);

module.exports = router;