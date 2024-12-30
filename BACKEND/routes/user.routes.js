const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const userController = require('../controllers/user.controller');
const authMiddleWare = require('../middlewares/auth.middleware');
router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    userController.registerUser
)
router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('password must be atleast 6 charaters')
],userController.loginUsers);
router.get('/profile',authMiddleWare.authUser,userController.getUserProfile);

router.get('/logout',authMiddleWare.authUser,userController.logoutUser);
module.exports = router;

// "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYxYzMxZTQxM2I0MzExYzBmOTY0N2EiLCJpYXQiOjE3MzU0MTA2MzgsImV4cCI6MTczNTQ5NzAzOH0.rtIJ8TryLB2sXPbjBWaiQO8fYpOkKzsvyDjdukMyCwc",
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYxYzMxZTQxM2I0MzExYzBmOTY0N2EiLCJpYXQiOjE3MzU0MTA3ODYsImV4cCI6MTczNTQ5NzE4Nn0.wv4tNYrTSFkUPAQbr3PxVzAihVNL6uQhYPk3EWnzovk