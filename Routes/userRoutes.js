const express = require('express');
const { signUp, getOneUser, getUsers, signIn } = require("../Controllers/UserController");
const { isAuth } = require("../Middlewares/IsAuth");
const { validSignUp, validation, validSignIn } = require("../Middlewares/Validators");

const router = express.Router();
//userRouter.get('/getCurrentUser',isAuth,(req,res)=>res.send(req.user))
// Signup route
router.post('/signup', validSignUp, validation, signUp);

// Signin route
router.post('/signin', validSignIn, validation, signIn);

// Get all users (protected route)
router.get('/users', isAuth, getUsers);

// Get one user by ID (protected route)
router.get('/users/:id', isAuth, getOneUser);

router.get('/currentUser', isAuth, (req,res)=>res.send(req.user))
module.exports = router;