/* Dependencies */
// Express & Routes
const router = require('express').Router()
// Model
const All = require('../models/All')
// Verification
const { redirectLogin } = require('../controllers/verifications')

/* Routes */
// HOME Get Router
router.get('/', redirectLogin, async(req, res) => {
    // get user from DB (using req.session.userId)
    All.findById(
        { _id: req.session.userId }
    ).then(user => {
        // data to send
        let data = {
            email: user.credentials.email,
            name: `${user.profiles.name.firstName} ${user.profiles.name.lastName}`
        }

        // render Home page
        return res.render('home', { user: data })
        // return res.send(`
        //     <h1>Welcome to homepage!</h1>
        //     <div>
        //         <p>Email: ${data.email}</p>
        //         <p>Email: ${data.name}</p>
        //     </div>
        //     <form action='/auth/logout' method='POST'>
        //         <button type="submit">Logout</button>
        //     </form>
        // `)
    }).catch(err => res.json({ message: err }))    
})

// PROFILE Get Router
router.post('/addtime', redirectLogin, async(req, res) => {
    req.session.cookie.maxAge = 1000 * 60 * 60
    res.redirect('/')
})

/* Auth Routes Export */
module.exports = router