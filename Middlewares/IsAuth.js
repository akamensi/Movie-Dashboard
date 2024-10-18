var jwt = require('jsonwebtoken');
const User = require('../Models/User');


exports.isAuth = async (req, res, next) => {
    try {
        const token = req.header('Authorization'); // Get the token from the request header

        var decoded = jwt.verify(token, process.env.privateKey); // Decode the token

        if (!decoded) {
            return res.status(400).send({ errors: [{ msg: "Invalid token" }] });
        }

        const found = await User.findById(decoded.id); // Find user by decoded ID
        req.user = found; // Attach the user to the request object
        next(); // Proceed to the next middleware
    } catch (error) {
        res.status(500).send({ errors: [{ msg: 'Could not auth' }] });
    }
};