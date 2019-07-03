const psConnector = require('../../ps-properties')
const userDao = require('../../dao/user-dao')(psConnector);
userDao.getUsers();

const stubPsConnectoruserDaoStub = require('../stub-ps-connector');
const userDaoStub = require('../../dao/user-dao')(stubPsConnectoruserDaoStub);
userDaoStub.getUsers();
