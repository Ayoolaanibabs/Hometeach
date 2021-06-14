class CustomHTTPError extends Error {
    statusCode;

    constructor(statusCode, message){
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
};

module.exports = CustomHTTPError;
