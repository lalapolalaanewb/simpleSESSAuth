/** Dependencies */
// Express
// const { request, response, next } = require('express')

// redirect NOT log in user
function redirectLogin(req, res, next) {
    if(!req.session.userId) {
        // return res.json({ message: 'Access denied!' })
        // redirect to Login page
        res.redirect('/auth')
    } else {
        next()
    }
}

// redirect ALREADY logged in user
function redirectHome(req, res, next) {
    if(req.session.userId) {
        // return res.json({ message: 'Access denied!' })
        // redirect to Home page
        res.redirect('/')
    } else {
        next()
    }
}

/** Module Exports */
module.exports = {
    redirectLogin,
    redirectHome
}