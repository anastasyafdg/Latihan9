const jwt = require('jsonwebtoken');
const User = require("../models/user.model");

const authBearer = (req, res, next) => {
    const header = req.headers.authorization; // FIXED

    if (!header || !header.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized - Token Required" });
    }

    const token = header.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Optional: cek apakah user masih ada di database
        User.getById(decoded.id, (err, result) => {
            if (err) return res.status(500).json({ message: err.message });
            if (result.length === 0) {
                return res.status(401).json({ message: "Invalid Token User" });
            }

            req.user = result[0]; // Simpan user ke request
            next();
        });

    } catch (err) {
        return res.status(401).json({ message: "Invalid or Expired Token" });
    }
};

module.exports = authBearer; 
