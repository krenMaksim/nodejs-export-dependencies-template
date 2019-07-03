const psProperties = require('./ps-properties');
const appConfig = require('./config/app-config')(psProperties);
const userService = appConfig.userService;

userService.doLogic();