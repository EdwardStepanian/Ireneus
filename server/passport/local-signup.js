const mongoose = require("mongoose")
const passportLocal = require("passport-local");
const userModel = mongoose.model("User")
const passportStrategy = passportLocal.Strategy

//In Passport Strategy instead of a username try to use an email address

module.exports = new passportStrategy({
    usernameField: "email",
    passwordField: "password",
    session: false,
    passReqToCallback: true
}, (req, email, password, done) => {
    const userData = {
        email: email.trim(),
        password: password.trim(),
        name: req.body.name.trim()
    };

    const newUser = new userModel(userData);
    newUser.save((err) => {
        if (err) { return done(err); }

        return done(null);
    });
});
