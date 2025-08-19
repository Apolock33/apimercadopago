import express from "express";
import { createOrderData, returnNotificationsCount } from "../controllers/mercadopagoControllers.js";

const router = express.Router();

router.post('/webhook', createOrderData);
router.get('/contagem', returnNotificationsCount);

export default router;