const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


const userRouter = require('./routers/userRoute')

const app = express()
app.use(morgan('dev'))
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/api/users/', userRouter)

app.get('/', (req,res) => {
    res.json({
        message: 'Welcome to our Application'
    })
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
    mongoose.connect('mongodb://localhost/project', 
    { useUnifiedTopology: true , 
     useNewUrlParser: true },
    () => {
        console.log('Database connected....')
    });
})