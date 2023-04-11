// const { timeStamp } = require('console')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TodoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }

}, {timestamps:true})

module.exports = mongoose.model('Todo',TodoSchema)