function UserUtil(){
    this.formatUserName = function(){
        console.log('formatUserName');
    }

    this.checkUserState = function(){
        console.log('checkUserState');
    }
}

module.exports = new UserUtil();