const connectDb = require('./db/index.js')

const user = require('./models/user.model.js')
const note = require('./models/note.model.js')
const express = require('express')
require('dotenv').config()

const app = express()

// app.get("/", (req, res) => {
//     res.send('mello')
// })
connectDb()
app.get('/createuser', async (req, res) => {
    await user.create({
        userName: 'amandhiran',
        email: 'amandhiran201@gmail.com',
        password: 'aman1234',
    })
    res.send('user created')
})

app.get('/users', async(req, res) => {
     const users = await user.find()
     res.send(users)
})

app.get('/createnote', async(req, res) => {
    
})

app.get('/notes', async(req, res) => {
    const notes = await note.find()
    res.send(notes)
})

app.listen(process.env.PORT, () => {
    console.log(`app is listening to ${process.env.PORT}`);
})