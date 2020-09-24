module.exports = app =>{
    const mongoose = require('mongoose')
    mongoose.connect('mongodb://134.175.217.208:27017/moba', {
        useNewUrlParser: true
    })
    require('require-all')(__dirname + '/../models')
}