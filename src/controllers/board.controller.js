import { BoardService } from '../services/board.service.js'
import { httpStatusCode } from '../utilities/constants.js'

const createNew = async (req, res) => {
    try {
        const result = await BoardService.createNew(req.body)
        console.log(result)
        res.status(httpStatusCode.OK).json(result)
    } catch (error) {
        res.status(httpStatusCode.INTERNAL_SERVER).json({
            errors: error.mesage
        })
    }
}

export const BoardController = { createNew }