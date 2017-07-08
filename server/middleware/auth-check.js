const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const user = mongoose.model("User")
const config = require("../../config")

//Authentication checker middleware function

module.exports = (req, res, next) => {
    console.log(req.headers)
    if(!req.headers.authorization) return res.status(401).end()

    const token = req.headers.authorization.split(" ")[1]
    // decode the token using a secret key-phrase
    return jwt.verify(token, config.jwtSecret, (err, decoded) => {
        // the 401 code is for unauthorized status
        if (err) {
            return res.status(401).end()
        }

        const userId = decoded.sub

        // check if a user exists
        return user.findById(userId, (userErr, user) => {
            if (userErr || !user) {
                return res.status(401).end()
            }

            return next()
        })
    })
}
