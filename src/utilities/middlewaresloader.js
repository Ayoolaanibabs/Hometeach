const middlewareHandlers = require('../middlewares/index');
const middlewareHandler = [middlewareHandlers.bodyParserHandler, middlewareHandlers.compressionHandler, middlewareHandlers.corsHandler, middlewareHandlers.morganHandler]
const loadMiddlewares = (router) => {
    middlewareHandler.forEach(middleware => middleware(router));
};


module.exports = loadMiddlewares;
