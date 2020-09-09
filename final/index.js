/** Dependencies */
// Express
const express = require('express')
const app = express()
// Authentication purposes (express-session)
const session = require('express-session')
// Dotenv
const dotenv = require('dotenv')
dotenv.config()
// Mongoose
const mongoose = require('mongoose')
// Default Env
const { isActive, SESSION_OPTIONS } = require('../final/config/index')

/** Global Middlewares */
// EJS
app.set('view engine', 'ejs')
// JSON Body Parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// Session create
app.use(session({
    ...SESSION_OPTIONS
}))
// track user ABSOLUTE TIMEOUT
app.use(isActive)

/** Routes Middleware */
// AUTH Routes
app.use('/auth', require('../final/routes/auth'))
// HOME Routes
app.use('/', require('../final/routes/home'))

/** Database Connection & Server Startup */
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
)
// if connection SUCCESS, then START the Server
.then(() => {
    console.log('Successfully connected to database!')
    app.listen(process.env.PORT || 3000, console.log(`Server is up and running at PORT ${process.env.PORT}!`))
})
// if connection UNSUCCESSFUL, then DON'T START the Server
.catch(err => {
    console.log(err)
})