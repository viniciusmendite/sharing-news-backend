const { Router } = require('express');

const SharingController = require('./controllers/SharingController');

const routes = Router();

routes.get('/news', SharingController.index);
routes.post('/news', SharingController.store);
routes.delete('/news', SharingController.delete);

module.exports = routes;