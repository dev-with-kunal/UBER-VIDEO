const UserModel = require('../models/user.model');
const userService = require('../services/user.service');
const {validationResult}= require('express-validator');
const BlacklistToken = require('../models/blacklistToken.model');
module.exports.registerUser = async (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()});
    }
    const { fullname, email, password } = req.body;
    const isUserAlereadyExist = await UserModel.findOne({email});
    if(isUserAlereadyExist){   
        return res.status(400).json({message : 'User already exist'});
    }
    const hashedPassword = await UserModel.hashPassword(password);
    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    });
    const token = user.generateAuthToken();
    res.status(201).json({token,user});
}
module.exports.loginUsers = async (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({errors: errors.array()});    
    }
    const {email,password} = req.body;
    const user = await UserModel.findOne({email}).select('+password');
    if(!user){
       return res.status(400).json({message : 'Invalid email or password'});
    }
    const isMatch = await user.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({message :'Invalid email or password'});
    }
    const token = user.generateAuthToken();
    res.cookie('token',token);
    res.status(200).json({token,user});

}
module.exports.getUserProfile = async(req,res,next)=>{
    res.status(200).json(req.user);
}
module.exports.logoutUser = async(req,res,next)=>{
    res.clearCookie('token');
    const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
    await BlacklistToken.create({token});
    res.status(200).json({message : 'Logged out successfully'});
}
// {
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYxYzMxZTQxM2I0MzExYzBmOTY0N2EiLCJpYXQiOjE3MzQ0NjAxOTAsImV4cCI6MTczNDU0NjU5MH0.Q8pO5oyplGnCPqCVN7zI6tpxMoJnDn_ybiGEnT2-RPQ",
//     "user": {
//         "fullname": {
//             "firstname": "test_firstname1",
//             "lastname": "test_last_name1"
//         },
//         "email": "test121@gmail.com",
//         "password": "$2b$10$X3325dPSTAv./8fVQMLgauhZpcWXa4WG2MHvZdmafqgTv8Dxb5jHi",
//         "_id": "6761c31e413b4311c0f9647a",
//         "__v": 0
//     }
// }