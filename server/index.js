require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDB = require('./db/connection')
const authRouter = require('./routes/authRoutes')
const app = express()
const port = process.env.PORT || 3000

connectDB()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api/auth",authRouter)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})