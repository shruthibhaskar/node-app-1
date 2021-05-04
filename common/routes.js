const express = require('express');
let apiRoutes = express.Router();
const controller = require('./controller');

module.exports = function (app) {

    console.log("Inside routes");
    apiRoutes.get('/app1func1', controller.list);
    apiRoutes.get('/app1func2', controller.list1);
    apiRoutes.get('/app1apifunc3', controller.apiApp3);
    apiRoutes.get('/', controller.mainCall);
    apiRoutes.get('/health', controller.healthTest);
    app.use('/app/api', apiRoutes);
}
