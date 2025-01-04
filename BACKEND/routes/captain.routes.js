const express = require('express');
const router = express.Router();
const captainController = require('../controllers/captain.controller');
const {body} = require('express-validator');

router.post('/register',[
    body('fullname.firstname').isLength({min:3}).withMessage('Firstname is required'),
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
    body('vechile.color').isLength({min:3}).withMessage('Color is required'),
    body('vechile.plate').isLength({min:3}).withMessage('Plate is required'),
    body('vechile.capacity').isLength({min:1}).withMessage('Capacity is required'),
    body('vechile.vechileType').isIn(['car','motorcycle','bicycle']).withMessage('Invalid vechile type'),
],captainController.registerCaptain);
module.exports = router;