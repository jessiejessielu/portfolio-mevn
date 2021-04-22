const path = require('path');

module.exports = {
    devServer:{
        proxy:{
            '/contact':{
                target:`http://localhost:8000/`
            }
        }
    }
};