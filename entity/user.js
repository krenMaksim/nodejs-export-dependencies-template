function User(id, name){
    let _id = id;
    let _name = name;

    this.userInfo = function (){
        console.log(`id:${_id} name:${_name}`);
    }

    this.setName = function(name){
        _name = name;
    }
}

module.exports = User;