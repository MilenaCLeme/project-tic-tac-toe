const express = require('express');
const controllerRoom = require('../controller/roomcontroller');
const router = express.Router();

router.get('/', controllerRoom);

module.exports = router;
