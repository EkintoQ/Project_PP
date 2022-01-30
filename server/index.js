require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const PORT = process.env.PORT
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

// Error processing
app.use(errorHandler)


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log('Server started ...'))
    } catch (e) {
        console.log(e)
    }
}

start()