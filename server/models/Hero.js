const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name: { type: String },
    avatar: { type: String},
    banner: { type: String },
    title: { type: String },
    category: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Category'}],
    scories: {
        difficult: {type: Number},
        skill: {type: Number},
        attack: {type: Number},
        survice: {type: Number}
    },
    skills: [{
        name: { type: String },
        icon: { type: String },
        description: { type: String },
        delay: { type: String },
        cost: { type: String },
        tips: { type: String }
    }],
    itemssucc: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Item'}],
    itemdefeat: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Item'}],
    useageTips: { type: String },
    battleTips: { type: String },
    teamTips: { type: String },
    partners: [{
        hero: {type: mongoose.SchemaTypes.ObjectId, ref: 'Hero'},
        description: { type: String }
    }]
})
module.exports = mongoose.model('Hero', schema,'heroes')