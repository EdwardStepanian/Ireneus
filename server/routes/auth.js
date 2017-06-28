const express = require("express")
const validator = require("validator")
const router = new express.Router()

//Validate SignUp Form

function validateSignupForm(payload) {
    let errors = {},
        isFormValid = true,
        message = ""

    if(!payload || typeof payload.email !== "string" || !validator.isEmail(payload.email)){
        isFormValid = false
        errors.email = "Please provide your email address"
    }
    if (!payload || typeof payload.password !== "string" || payload.password.trim().length === 0) {
        isFormValid = false
        errors.password = "Please provide your password."
    }

    if (!isFormValid) {
        message = "Check the form for errors."
    }

    return {
        success: isFormValid,
        message,
        errors
    }
}

router.post("/signup", (req, res) => {
    const validationResult = validateSignupForm(req.body)
    if(!validationResult.success){
        return res.status(400).json({
            success: false,
            message: validationResult.message,
            errors: validationResult.errors
        })
    }
    return res.status(200).end()
})
router.post("/login", (req, res) => {
    const validationResult = validateLoginForm(req.body)
    if (!validationResult.success) {
        return res.status(400).json({
            success: false,
            message: validationResult.message,
            errors: validationResult.errors
        })
    }

    return res.status(200).end()
})


module.exports = router