const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    username: { type: String },
    password: {
        type: String,
        select: false,
        set(value) {
            return require('bcrypt').hashSync(value, 12)
        }
    }
})
module.exports = mongoose.model('AdminUser', schema)