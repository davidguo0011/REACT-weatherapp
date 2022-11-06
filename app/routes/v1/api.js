const express = require('express');
const weatherController = require('../../controllers/weatherController');
const router = new express.Router();
router.get('/weathers', weatherController.index);
router.get('/weathers/:city', weatherController.show);
router.post('/weathers', weatherController.store);
router.put('/weathers/:city', weatherController.update);
router.delete('/weathers/:city', weatherController.delete);

module.exports = router;
