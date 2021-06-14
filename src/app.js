const express = require('express');

const app = express();
const router = express.Router();
const generalRoutes = require('./components/general/routes');
const adminRoutes = require('./components/admin/routes');
const authRoutes = require('./components/auth/routes');
const parentsRoutes = require('./components/parents/routes');
const teacherRoutes = require('./components/teacher/routes');
const handleRoutes = require('./utilities/routesHandler.js');
const wildRoute = require('./utilities/wildRouteHandler');
const loadMiddlewares = require('./utilities/middlewaresloader');

app.use('/api/v1', router)

process.on('uncaughtException', (error) => {
    console.log('Uncaught: ', error)
});

process.on('unhandledRejection', (error) => {
    console.log('Unhandled: ', error)
});

loadMiddlewares(router)

const routes = [
    ...generalRoutes,
    ...parentsRoutes,
    ...teacherRoutes,
    ...adminRoutes,
    ...authRoutes
]


// Handle Routes
handleRoutes(router, routes)

//Handle wild routes
handleRoutes(app, [wildRoute])

module.exports = app;
