import express from 'express'
import { httpStatusCode } from '../../utilities/constants.js'
import { boardRoutes } from './board.route.js'

const router = express.Router()

router.get('/status', (req, res) => res.status(httpStatusCode.OK).json({ status: 'OK!' }))

// Boar APIs
router.use('/boards', boardRoutes)

export const apiV1 = router