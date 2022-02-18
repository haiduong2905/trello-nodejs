import express from "express"
const app = express()
import { logger } from "./src/utilities/logger.js"

const hostname = 'localhost'
const port = 5000

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

app.listen(port, hostname, ()=>{
    logger('Running 123')
})