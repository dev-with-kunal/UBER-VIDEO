const UserModel = require('../models/user.model');
const CaptainModel = require('../models/captain.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const BlacklistToken = require('../models/blacklistToken.model');
module.exports.authUser = async(req,res,next)=>{
    const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({message : 'unauthorized'});
    }
    try{
        const isBlacklisted = await BlacklistToken.findOne({token:token});
        if(isBlacklisted){
            return res.status(401).json({message : 'unauthorized'});
        }
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        const user = await UserModel.findById(decode._id);
        req.user = user
        return next();
    }
    catch(err){
        return res.status(401).json({message : 'unauthorized'});
    }
}
module.exports.authCaptain = async(req,res,next)=>{
    const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({message:'unauthorized token'});
    }
    try{
        const isBlacklisted = await BlacklistToken.findOne({token:token});
        if(isBlacklisted){
            return res.status(400).json({message:'unauthorized token'});
        }
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        const captain = await CaptainModel.findById(decode._id); 
        req.captain = captain;
        return next();
    }catch(err){
        return res.status(401).json({message:'unauthorized token'});
    }    
}