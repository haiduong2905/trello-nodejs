import { MongoClient, ServerApiVersion } from 'mongodb'
import { env } from './env.js'

let dbInstance = null
export const connectDB = async () => {
    const client = new MongoClient(env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1
    })
    await client.connect()
    dbInstance = client.db(env.DATABASE_NAME)
}

export const getDB = () => {
    if (!dbInstance) throw new Error('Connect db???')
    return dbInstance
}