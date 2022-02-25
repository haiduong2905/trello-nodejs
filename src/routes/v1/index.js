import express from 'express'
import { httpStatusCode } from '../../utilities/constants.js'
import { boardRoutes } from './board.route.js'
import { columnRoutes } from './column.route.js'
import { cardRoutes } from './card.route.js'

const router = express.Router()

router.get('/status', (req, res) => res.status(httpStatusCode.OK).json({ status: 'OK!' }))

// Board APIs
router.use('/boards', boardRoutes)
// Column APIs
router.use('/columns', columnRoutes)
// Card APIs
router.use('/cards', cardRoutes)


export const apiV1 = router