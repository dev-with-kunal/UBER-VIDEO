const CaptainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const {validationResult} = require('express-validator');
const BlacklistToken = require('../models/blacklistToken.model');
module.exports.registerCaptain = async (req,res,next)=>{  
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()});
    }
    const { fullname, email, password,vehicle } = req.body;
    const isCaptainAlreadyExist = await CaptainModel.findOne({email});
    if(isCaptainAlreadyExist){
        return res.status(400).json({message : 'Captain already exist'});
    }
    const hashPassword = await CaptainModel.hashPassword(password);
    const captain = await captainService.createCaptain({
        firstname:fullname.firstname,
        lastname:fullname.lastname, 
        email, 
        password:hashPassword, 
        color:vehicle.color,
        plate:vehicle.plate,
        capacity:vehicle.capacity,
        vehicleType:vehicle.vehicleType});
    const token = captain.generateAuthToken();
    return res.status(201).json({captain,token});
    
}

module.exports.loginCaptain = async (req,res,next)=>{   
    const {email,password} = req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
     return res.status(400).json({errors:errors.array()});
    }
    const captain = await CaptainModel.findOne({email:email}).select('+password');
    if(!captain){
        return res.status(400).json({message:'Invalid email or password'});
    }
    const isMatch = await captain.comparePassword(password);
    if(!isMatch){
        return res.status(400).json({message:"Invalid email and password"});
    }
    const token = captain.generateAuthToken();
    res.cookie('token',token);
    return res.status(200).json({token,captain});

}
module.exports.getCaptainProfile = async (req,res,next)=>{
    res.status(200).json({captain:req.captain});
}

module.exports.logoutCaptain = async (req,res,next)=>{
    const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
    await BlacklistToken.create({token});
    res.clearCookie('token');
    res.status(200).json({message:'Logged out successfully'});

}