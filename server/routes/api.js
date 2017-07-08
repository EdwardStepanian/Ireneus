const express = require('express')
const router = new express.Router()

/**
 * For auth/login path we checking errors
 * In successful case we send response
 */

router.get('/dashbord', (req, res) => {
    res.status(200).json({
        message: "Tralala"
    })
})

module.exports = router