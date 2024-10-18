const { body , validationResult } = require('express-validator');

exports.validSignUp = [
    body('email','Enter a valid email').isEmail(),
    body('password', 'You must enter at least 8 char').isLength({min : 8})
]

exports.validSignIn = [
    body('email','Enter valid email').isEmail()
]


exports.validation=(req,res,next)=>{
    const result = validationResult(req);
if (!result.isEmpty()) {
    return res.status(400).send({ errors: result.array() })
}

next()
}