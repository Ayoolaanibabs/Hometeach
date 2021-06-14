const response = require('../../utilities/index')
const general = async(req, res, next) => {
    try{
        const message = 'Welcome to the HomeTeach API';
        
        response.sendJSON(res, message)
    } catch (error) {
        response.sendError(res, error);
    }
}

module.exports = general;
