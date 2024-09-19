import express from 'express'
import {createUserHandler} from '../services/user.service'
import validateResource from "../middleware/validateResource";
import {createUserSchema} from "../validation/user.schema";

const router = express.Router()

router.route('/').post(validateResource(createUserSchema), createUserHandler)

export default router