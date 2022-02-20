import express from 'express'
//import { logger } from './src/utilities/logger.js'
import { connectDB } from './src/config/mongodb.js'
import { env } from './src/config/env.js'

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
    app.get('/test', async (req, res) => {
        const fakeData = {
            title: '11111'
        }
        const newBoard = await BoardModel.createNew(fakeData)
        console.log(newBoard)
        res.send('Insert success!!')
    })

    app.listen(env.APP_PORT, env.APP_HOST, () => {
        console.log(`Running ${env.APP_HOST}:${env.APP_PORT}`)
    })
}


