const general = require('./controllers');

const generalRoutes = [
    {
        path: '/',
        method: 'get',
        handlers: [general]
    }
];

module.exports = generalRoutes;
