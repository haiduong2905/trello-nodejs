import express from 'express'
//import { logger } from './src/utilities/logger.js'
import { connectDB } from './src/config/mongodb.js'
import { env } from './src/config/env.js'

import { apiV1 } from './src/routes/v1/index.js'

import { BoardModel } from './src/models/board.model.js'

connectDB()
    .then(() => { console.log('Connected success database!') })
    .then(() => bootServer())
    .catch(error => {
        console.log(error)
        process.exit(1)
    })

//Khởi động server
const bootServer = () => {
    const app = express()
    //parse req.body data
    app.use(express.json())
    //use api v1
    app.use('/v1', apiV1 )

    app.listen(env.APP_PORT, env.APP_HOST, () => {
        console.log(`Running ${env.APP_HOST}:${env.APP_PORT}`)
    })
}


