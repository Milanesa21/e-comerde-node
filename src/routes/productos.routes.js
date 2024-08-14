import { Router } from "express";
import { createProduct, getProducts } from "../controllers/productController.js";

const router = Router();

router.get('/proucts', getProducts)
router.post('/product', createProduct) 

export default router;