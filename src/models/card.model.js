import Joi from 'joi'
import { getDB } from '../config/mongodb.js'

const collectionName = 'cards'
const cardSchema = Joi.object({
    boardId: Joi.string().required(),
    columnId: Joi.string().required(),
    title: Joi.string().required().min(3).max(100),
    cover: Joi.string().default(null),
    createdAt: Joi.date().timestamp().default(Date.now()),
    updatedAt: Joi.date().timestamp().default(null),
    _destroy: Joi.boolean().default(false)
})

const validateSchema = async (data) => {
    return await cardSchema.validateAsync(data, { abortEarly: false })
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

export const CardModel = { createNew }