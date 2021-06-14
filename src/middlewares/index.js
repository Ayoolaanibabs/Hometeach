const compression = require('compression');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser')

const morganHandler = (router) => {
    router.use(morgan('dev'));
};

const compressionHandler = (router) => {
    router.use(compression());
};

const corsHandler = (router) => {
    router.use(cors());
};

const bodyParserHandler = (router) => {
    router.use(bodyParser.urlencoded({  extended: true, limit: '10kb' }));
    router.use(bodyParser.json());
};

module.exports = {
    morganHandler, compressionHandler, corsHandler, bodyParserHandler
};
