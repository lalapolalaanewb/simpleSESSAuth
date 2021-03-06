/* Dependencies */
// Express & Routes
const router = require('express').Router()
// Model
const All = require('../models/All')
// Hashing Password
const bcrypt = require('bcryptjs')
// Validation
const { registerValidation, loginValidation } = require('../controllers/validations')
// Verification
const { redirectLogin, redirectHome} = require('../controllers/verifications')
// Default Env
const { logIn, logOut } = require('../config/index')

/* Routes */
// REGISTER Get Router
router.get('/register', redirectHome, (req, res) => {
    // render Register page
    res.render('auth/register', { message: '' })
})

// REGISTER Post Router
router.post('/register', redirectHome, async(req, res) => {
    let {
        // user's email
        email,
        // user's password
        password,
        // user's passwordConfirm
        passwordConfirm,
        // user's firstName
        firstName,
        // user's lastName
        lastName
    } = req.body

    // 1. do validation
    const { error } = registerValidation(req.body)
    // if(error) return res.json({ message: error.details[0].message })
    if(error) return res.render('auth/register', { message: error.details[0].message })
    
    // 2. check email existance
    const emailExist = await All.findOne({ 'credentials.email': email })
    // - if exist, then throw error
    // if(emailExist) return res.json({ message: 'Email already exist!' })
    if(emailExist) return res.render('auth/register', { message: 'Email already exist!' })
    
    // 3. hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    
    // 4. create new user
    const user = new All({
        credentials: {
            email: email,
            password: hashedPassword
        },
        profiles: {
            name: {
                firstName: firstName,
                lastName: lastName
            }
        }
    })

    // 5. save new user
    try {
        const saveNewUser = await user.save()
        // res.json({ message: "User successfully saved!" })
        res.render('auth/register', { message: 'Your account successfully created! You can start login now.' })
    } catch(err) {
        // res.json({ message: "Unsuccessfully save new user!" })
        res.render('auth/register', { message: 'Unsuccessfully save new user! Please try again later.' })
    }
})

// LOGIN Get Router (Login page)
router.get('/', redirectHome, async(req, res) => {
    // render Login page
    res.render('auth/login', { message: '' })
    // res.send(`
    //     <h2>Login Page</h2>
    //     <p>Insert your credential below:-</p>
    //     <form action='/auth' method='POST'>
    //         <input type="email" name="email" placeholder="Username" required>
    //         <input type="password" name="password" placeholder="Password" required>
    //         <button type="submit">Login</button>
    //     </form>
    // `)
})

// LOGIN Post Router
router.post('/', redirectHome, async(req, res) => {
    let {
        // user's email
        email,
        // user's password
        password
    } = req.body

    // 1. check email existance
    const user = await All.findOne({ 'credentials.email': email })
    // - if don't exist, then throw error
    if(!user) return res.render('auth/login', { message: `Email doesn't exist!` })
    
    // 2. check password matching
    // - try matching compare & password with DB
    const validPassword = await bcrypt.compare(password, user.credentials.password)
    // - if not match, then throw error
    if(!validPassword) return res.render('auth/login', { message: `Invalid password! Make sure you insert the correct password.` })
    
    // 3. assign new session info to user
    logIn(req, user._id)

    // 4. redirect user to HOME page
    return res.redirect('/')
})

// LOGOUT Post Router
router.post('/logout', redirectLogin, async (req, res) => {
    // handle user session destroy
    await logOut(req, res)
})

/* Auth Routes Export */
module.exports = router