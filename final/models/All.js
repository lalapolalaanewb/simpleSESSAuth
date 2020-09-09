/* Dependencies */
// Mongoose
const mongoose = require('mongoose')

// Data Scheme
const allSchema = new mongoose.Schema({
    // User's Credential
    credentials: {
        // User's Email
        email: { type: String, required: true, min: 6 },
        // User's password
        password: { type: String, required: true, min: 6 }
    },
    // User's Information
    profiles: {
        // User's Name
        name: {
            // User's Firstname
            firstName: { type: String, required: true, min: 4 },
            // User's Lastname
            lastName: { type: String, required: true, min: 4 }
        }
    }
})

// Data Scheme Export
module.exports = mongoose.model('All', allSchema)