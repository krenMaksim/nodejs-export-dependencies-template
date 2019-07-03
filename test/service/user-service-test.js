const psConnector = require('../../ps-properties');
const userDao = require('../../dao/user-dao')(psConnector);
const userService = require('../../service/user-service')(userDao);

userService.doLogic();

