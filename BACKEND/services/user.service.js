const UserModel = require('../models/user.model');
const { use } = require('../routes/user.routes');
module.exports.createUser = async({firstname,lastname,email,password}) => {
    if(!firstname || !lastname || !email || !password){
        throw new Error('All fields are required');
    }
    const user = UserModel.create({
        fullname:{
           firstname,
           lastname 
        },
        email,
        password
    });
    return user;
}