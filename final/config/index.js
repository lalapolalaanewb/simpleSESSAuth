// extract from AUTH
const { logIn, logOut, isActive } = require('../config/auth')
// extract from SESSION
const { SESS_NAME, SESS_ABSOLUTE_TIMEOUT, SESSION_OPTIONS } = require('../config/session')

module.exports = {
    logIn,
    logOut,
    isActive,
    SESS_NAME,
    SESS_ABSOLUTE_TIMEOUT,
    SESSION_OPTIONS
}