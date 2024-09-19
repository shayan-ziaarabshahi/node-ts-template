import express from 'express'
import {
    createUserSessionHandler,
    deleteSessionHandler,
    getUserSessionsHandler
} from '../services/session.service'
import validateResource from "../middleware/validateResource";
import {createSessionSchema} from "../validation/session.schema";
import requireUser from "../middleware/requireUser";

const router = express.Router()

router.route('/').post(validateResource(createSessionSchema), createUserSessionHandler)
router.route('/').get(requireUser, getUserSessionsHandler)
router.route('/').delete(requireUser, deleteSessionHandler)

export default router