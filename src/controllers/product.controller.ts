import express from 'express'
import validateResource from "../middleware/validateResource";
import requireUser from "../middleware/requireUser";
import {
    createProductSchema,
    deleteProductSchema,
    getProductSchema,
    updateProductSchema
} from "../validation/product.schema";
import {createProductHandler, getProductHandler, updateProductHandler} from "../services/product.service";

const router = express.Router()

router.route('/').post([requireUser, validateResource(createProductSchema)],
    createProductHandler)
router.route('/:productId').put([requireUser, validateResource(updateProductSchema)],
    updateProductHandler)
router.route('/:productId').get(validateResource(getProductSchema),
    getProductHandler)
router.route('/:productId').delete([requireUser, validateResource(deleteProductSchema)],
    getProductHandler)

export default router