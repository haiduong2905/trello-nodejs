import { MongoClient, ServerApiVersion } from 'mongodb'
import { env } from './env.js'

export const connectDB = async () => {
    const client = new MongoClient(env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1
    })
    try {
        await client.connect()
        console.log('Connected MongoDB')
        await listDatabases(client)
    } finally {
        await client.close()
    }
}

const listDatabases = async (client) => {
    const databasesList = await client.db().admin().listDatabases()
    databasesList.databases.forEach(db => {
        console.log(` - ${db.name}`)
    })
}