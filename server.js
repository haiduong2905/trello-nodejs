import express from 'express'
//import { logger } from './src/utilities/logger.js'
import { connectDB } from './src/config/mongodb.js'
import { env } from './src/config/env.js'

const app = express()

connectDB().catch(console.log)

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

app.listen(env.PORT, env.HOST_NAME, () => {
    console.log(`Running ${env.HOST_NAME}:${env.PORT}`)
})

