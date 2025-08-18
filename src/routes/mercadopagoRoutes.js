import express from "express";
import { createOrderData } from "../controllers/mercadopagoControllers.js";

const router = express.Router();

router.post('/webhook', createOrderData);

export default router;