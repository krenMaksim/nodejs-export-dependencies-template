const User = require('../../entity/user');

let userOne = new User(55,'Bob');
userOne.userInfo();
userOne.setName('Bill');
userOne.userInfo();

let userTwo = new User(40, 'Mike');
userTwo.userInfo();