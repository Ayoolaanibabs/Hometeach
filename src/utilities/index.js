const sendJSON = (res, message, data) => {
    res.status(200).send({
        status: message,
        data
    })
};

const sendError = (res, error) => {
    res.status(error.statusCode || 400).send({
        status: 'ERROR',
        message: error.message
    });
};

module.exports = {
    sendJSON, sendError
}
