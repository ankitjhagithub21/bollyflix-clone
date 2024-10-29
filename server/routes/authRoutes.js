const express = require('express')
const authRouter = express.Router()

authRouter.post("/signup",authRouter)
authRouter.post("/login",authRouter)

module.exports = authRouter