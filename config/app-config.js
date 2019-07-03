module.exports = function (psProperties) {    
    const userDao = require('../dao/user-dao')(psProperties);
    const userService = require('../service/user-service')(userDao);

    return {
        userDao: userDao,
        userService: userService
    }
};