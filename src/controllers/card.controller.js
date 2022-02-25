import { CardService } from '../services/card.service.js'
import { httpStatusCode } from '../utilities/constants.js'

const createNew = async (req, res) => {
    try {
        const result = await CardService.createNew(req.body)
        res.status(httpStatusCode.OK).json(result)
    } catch (error) {
        res.status(httpStatusCode.INTERNAL_SERVER).json({
            errors: error.mesage
        })
    }
}

export const CardController = { createNew }