/** Dependencies */
// Express
// const { request, response } = require('express')
// Default Env
const { SESS_NAME, SESS_ABSOLUTE_TIMEOUT } = require('../config/session')

// check if user logged in
function isLoggedIn(req) {
    if(req.session.userId) return true
    else return false
}

// assign new session info to login user
function logIn(req, userId) {
    // set session userId to user._id
    req.session.userId = userId

    // set session createdAt (to track ABSOLUTE TIMEOUT)
    req.session.createdAt = Date.now()
}

// handle session destroy on logout
async function logOut(req, res) {
    // destroy user session
    req.session.destroy(err => {
        // if err, then return to Home page
        if(err) return res.redirect('/')

        // clear out cookies
        res.clearCookie(SESS_NAME)

        // return to Login page
        return res.redirect('/auth')
    })
}

// check if user is active
async function isActive (req, res, next) {
    // check if user isloggedIn
    if(isLoggedIn(req) === true){
        // get time stamp NOW
        const now = Date.now()
        // get time stamp BEFORE (the one created once the user loggedIn)
        const { createdAt } = req.session

        // check if user already exceed (active/non-active) time in the system
        // - eg: 10AM > 8AM + 4Hours (then user should be forced to logout)
        if(now > createdAt + SESS_ABSOLUTE_TIMEOUT) {
            // logout user
            return await logOut(req, res)
        }
    }

    next()
}

/** Module Exports */
module.exports = {
    logIn,
    logOut,
    isActive
}