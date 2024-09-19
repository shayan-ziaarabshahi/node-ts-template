import express from 'express'
import { getHealthCheck } from '../services/health-check.service'

const router = express.Router()

router.route('/').get(getHealthCheck)

export default router