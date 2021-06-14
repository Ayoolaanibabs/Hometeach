const handleRoutes = (router, routes) => {
    routes.forEach(route => {
        router[route.method](route.path, route.handlers)
    });
};

module.exports = handleRoutes
