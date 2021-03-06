import { ColumnModel } from '../models/column.model.js'
const createNew = async (data) => {
    try {
        const result = await ColumnModel.createNew(data)
        return result
    } catch (error) {
        throw new Error(error)
    }
}
const update = async (id, data) => {
    try {
        const dataUpdate = { ...data, updatedAt: Date.now() }
        const result = await ColumnModel.update(id, dataUpdate)
        return result
    } catch (error) {
        throw new Error(error)
    }
}
export const ColumnService = { createNew, update }