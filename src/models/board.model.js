import Joi from 'joi'
import { getDB } from '../config/mongodb.js'

const collectionName = 'boards'
const boardSchema = Joi.object({
    title: Joi.string().required().min(3).max(20),
    columnOrder: Joi.array().items(Joi.string()).default([]),
    createdAt: Joi.date().timestamp().default(Date.now()),
    updatedAt: Joi.date().timestamp().default(null),
    _destroy: Joi.boolean().default(false)
})

const validateSchema = async (data) => {
    return await boardSchema.validateAsync(data, { abortEarly: false })
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

export const BoardModel = { createNew }