const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json("You are not authenticated!");
    }
    
    jwt.verify(token, process.env.SECRET, async (err, data) => {
        if (err) {
            return res.status(403).json("Token is not valid!");
        }

        // Ensure that data contains the expected properties
        if (!data || !data._id) {
            return res.status(403).json("Invalid token data!");
        }
        
        // Assign the user ID from the token to req.userId
        req.userId = data._id;

        // Proceed to the next middleware or route handler
        next();
    });
};

module.exports = verifyToken;
