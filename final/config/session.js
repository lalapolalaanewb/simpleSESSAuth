/** Default Environment */
// A. Expiration time options
// 1. 1 hours
const ONE_HOUR = 1000 * 60 * 60
// 2. 5 secs
const FIVE_SECS = 1000 * 5

const {
    NODE_ENV = 'development',
    SESS_NAME = 'sid',
    SESS_SECRET = 'thisCanBeAnyCombinationOfStringYouWant',
    SESS_LIFETIME = FIVE_SECS
} = process.env

// check node environment
const IN_PROD = NODE_ENV === 'production'
// absolute timeout - force logout user (5hours)
const SESS_ABSOLUTE_TIMEOUT = (1000 * 15)

module.exports = {
    SESS_NAME: SESS_NAME,
    SESS_ABSOLUTE_TIMEOUT: SESS_ABSOLUTE_TIMEOUT,
    SESSION_OPTIONS: {
        // session name
        name: SESS_NAME,
        // resave - set to 'true' by default
        // - forces session to be saved back to the session store
        // - even the session never modified
        resave: false,
        // rolling - set to 'false' by default
        // - user will still be logged in if they not idle 
        // (maxAge will be updated or refresh everytime user does something within the active lifetime of the cookies)
        // (maxAge will stay the same if user is idle within the active lifetime of cookies)
        // - enable to reSet maxAge
        rolling: true,
        // saveUninitialized - set to 'true' by default
        saveUninitialized: false,
        secret: SESS_SECRET,
        // set cookie
        cookie: {
            // set expiration time
            maxAge: SESS_LIFETIME,
            sameSite: true, // or 'strict'
            secure: IN_PROD // makes sense to set when have HTTPS
        }
    }
}