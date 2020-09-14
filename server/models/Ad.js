const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name: { type: String },
    items: [{ img: String, url: String }]
})
module.exports = mongoose.model('Ad', schema)