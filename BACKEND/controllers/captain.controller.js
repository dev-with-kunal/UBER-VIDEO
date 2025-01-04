const CaptainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const {validationResult} = require('express-validator');
module.exports.registerCaptain = async (req,res,next)=>{  
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()});
    }
    const { fullname, email, password,vechile } = req.body;
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
        color:vechile.color,
        plate:vechile.plate,
        capacity:vechile.capacity,
        vechileType:vechile.vechileType});
    const token = captain.generateAuthToken();
    return res.status(201).json({captain,token});
    
}