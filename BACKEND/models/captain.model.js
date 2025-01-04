const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlenght: [3, 'First name must be at least 3 characters long'],
        },
        lastname: { 
            type: String,
            required: true,
            minlenght: [3, 'Last name must be at least 3 characters long'],
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [ /^\S+@\S+\.\S+$/, 'Please enter a valid email' ]
    },
    password:{
        type: String,
        required: true,
        select: false
    },
    socketId: {
        type: String,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vechile: {
        color: {
            type: String,
            required: true,
            minlenght: [3, 'Color must be at least 3 characters long'],
        },
        plate: {
            type: String,
            required: true,
            minlenght: [3, 'Plate must be at least 3 characters long'],
        },
        capacity: {
            type: Number,
            required: true,
            minlenght: [1, 'Capacity must be at least 1 characters long'],
        },
        vechileType: {
            type: String,
            required: true,
            enum: ['car', 'motorcycle', 'bicycle'],
        },
        location: {
            ltd: {
                type: Number,
            },
            lng: {
                type: Number,
            }
        }
    },
    

});
captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn:'24h'});
    return token;
}
captainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10);
}
captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
}
const CaptainModel = mongoose.model('captain', captainSchema);
module.exports = CaptainModel;