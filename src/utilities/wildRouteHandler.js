const CustomHTTPError = require('./customHTTPError');
const response = require('./index.js')

const wildRouteHandler = (req,res) => {
    try{
        throw new CustomHTTPError(400, 'Not allowed');
    } catch (error){
        response.sendError(res, error);
    }
};

const wildRoute = {
    path: '/**',
    method: 'all',
    handlers: [wildRouteHandler]
};

module.exports = wildRoute;
