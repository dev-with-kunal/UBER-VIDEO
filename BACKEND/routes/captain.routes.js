const express = require('express');
const router = express.Router();
const captainController = require('../controllers/captain.controller');
const authMiddleWare = require('../middlewares/auth.middleware');
const {body} = require('express-validator');

router.post('/register',[
    body('fullname.firstname').isLength({min:3}).withMessage('Firstname is required'),
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').isLength({min:3}).withMessage('Color is required'),
    body('vehicle.plate').isLength({min:3}).withMessage('Plate is required'),
    body('vehicle.capacity').isLength({min:1}).withMessage('Capacity is required'),
    body('vehicle.vehicleType').isIn(['car','motorcycle','bicycle']).withMessage('Invalid vehicle type'),
],captainController.registerCaptain);

router.post('/login',[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
],captainController.loginCaptain);

router.get('/profile',authMiddleWare.authCaptain,captainController.getCaptainProfile);
router.get('/logout',authMiddleWare.authCaptain,captainController.logoutCaptain);

module.exports = router;