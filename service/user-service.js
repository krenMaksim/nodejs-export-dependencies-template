function UserService(userDao){
    initService();

    this.doLogic = function(){
        console.log('doLogic');
    }

    function initService(){
        console.log('userDao: ' + JSON.stringify(userDao, null,2));
    }
}

module.exports = function (userDao) {
    return new UserService(userDao);
};