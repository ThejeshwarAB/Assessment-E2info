const express = require('express')
const mongoose = require('mongoose')

const app = express()

const Todo = require('./model/todoModel')

app.use(express.json())

mongoose.connect('mongodb://127.0.0.1/todo-db')
    .then(() => {
        app.listen(4000, () => {
            console.log("connected to database & server is running in port 4000")
        })
    })

app.get('/todos', async (req, res) => {
    // fetch all records
    const data = await Todo.find({}).sort({ createdAt: -1 })
    if (data) {
        res.status(200).json(data)
    }
    else {
        res.status(400).json({ err: "error" })
    }
})

app.post('/todos', async (req, res) => {
    // add one record
    const todo = req.body
    console.log(req.body)
    const data = await Todo.create(todo)
    if (data) {
        res.status(200).json(data)
    }
    else {
        res.status(400).json({ err: "error" })
    }
})

