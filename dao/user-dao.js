function UserDao(psConnector){
    initConnection();

    this.getUsers = function(){
        console.log('getUsers');
    }

    function initConnection(){
        console.log('psConnector: ' + JSON.stringify(psConnector, null,2));
    }
}

module.exports = function (psConnector) {
    return new UserDao(psConnector);
};
