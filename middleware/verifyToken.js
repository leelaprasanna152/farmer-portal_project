// const User = require('../models/User');
// const jwt = require('jsonwebtoken');

// module.exports = async (req, res, next) => {
//     try {
//         const token = req.headers.token;
//         if (!token) {
//             return res.status(401).json({ message: 'token required' });
//         } 
//         try {
//             const decoded = jwt.verify(token, 'supersecret_dont_share');
//             const vendor = await User.findById(decoded.vendorId);
//             if (!vendor) {
//                 return res.status(401).json({ message: 'user not found' });
//             }
//             req.vendorId = vendor._id
//             next()
//         } catch (err) { 
//             return res.status(401).json({ message: 'invalid token' });
//         }
//     } catch (err) {        
//         return res.status(500).json({ message: err.message });
//     }
// }

// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// module.exports = (req, res, next) => {
//     try {
//         // Extract token from Authorization header
//         const token = req.headers.authorization?.split(' ')[1];
//         if (!token) {
//             return res.status(401).json({ message: 'Token required' });
//         }

//         // Verify token
//         const decoded = jwt.verify(token, 'supersecret_dont_share');
//         console.log("Decoded Token:", decoded);  // Debugging log

//         // Assign user ID from token directly
//         req.vendorId = vendor._id

//         next();
//     } catch (err) {
//         return res.status(401).json({ message: 'Invalid token' });
//     }
// };



const User = require('../models/User');
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    try {
        const token = req.headers.token;
        if (!token) {
            return res.status(401).json({ message: 'Token required' });
        } 
        try {
            const decoded = jwt.verify(token, 'supersecret_dont_share');

            // Use decoded.id or decoded._id based on how the token was signed
            const user = await User.findById(decoded.id || decoded._id); 

            if (!user) {
                return res.status(401).json({ message: 'User not found' });
            }
            req.user = user; // Attach full user object for easier access
            next();
        } catch (err) { 
            return res.status(401).json({ message: 'Invalid token' });
        }
    } catch (err) {        
        return res.status(500).json({ message: err.message });
    }
};


