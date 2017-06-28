const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const passportLocal = require("passport-local");
const userModel = mongoose.model("User")
const passportStrategy = passportLocal.Strategy
const config = require("../../config")

module.exports = new passportStrategy({
    usernameField: "email",
    passwordField: "password",
    session: false,
    passReqToCallback: true
}, (req, email, password, done) => {
    const userData = {
        email: email.trim(),
        password: password.trim()
    }

    //find users by email
    //findOne mongoose query

    return userModel.findOne({
        "email": userData.email
    }, (err, user) => {
        if(err) return done(err)
        if(!user) {
            const error = new Error("Incorect email or password")
            error.name = "CredentialError"
            return done(error)
        }
    })
})