import Joi from 'joi'
import { ObjectID } from 'bson'
import { getDB } from '../config/mongodb.js'

const collectionName = 'columns'
const columnSchema = Joi.object({
    boardId: Joi.string().required(),
    title: Joi.string().required().min(3).max(20),
    cardOrder: Joi.array().items(Joi.string()).default([]),
    createdAt: Joi.date().timestamp().default(Date.now()),
    updatedAt: Joi.date().timestamp().default(null),
    _destroy: Joi.boolean().default(false)
})

const validateSchema = async (data) => {
    return await columnSchema.validateAsync(data, { abortEarly: false })
}

const createNew = async (data) => {
    try {
        const value = await validateSchema(data)
        const result = await getDB().collection(collectionName).insertOne(value)
        const record = await getDB().collection(collectionName).find({ _id: result.insertedId })
        return record
    } catch (error) {
        throw new Error(error)
    }
}
const update = async (id, data) => {
    try {
        const result = await getDB().collection(collectionName).findOneAndUpdate(
            { _id: ObjectID(id) },
            { $set: data },
            { returnOriginal: false }
        )
        console.log(result)
        return result.value
    } catch (error) {
        throw new Error(error)
    }
}

export const ColumnModel = { createNew, update }