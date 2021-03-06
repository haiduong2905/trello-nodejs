import { ColumnService } from '../services/column.service.js'
import { httpStatusCode } from '../utilities/constants.js'

const createNew = async (req, res) => {
    try {
        const result = await ColumnService.createNew(req.body)
        console.log(result)
        res.status(httpStatusCode.OK).json(result)
    } catch (error) {
        res.status(httpStatusCode.INTERNAL_SERVER).json({
            errors: error.mesage
        })
    }
}
const update = async (req, res) => {
    try {
        const { id } = req.params
        const result = await ColumnService.update(id, req.body)
        res.status(httpStatusCode.OK).json(result)
    } catch (error) {
        res.status(httpStatusCode.INTERNAL_SERVER).json({
            errors: error.mesage
        })
    }
}

export const ColumnController = { createNew, update }