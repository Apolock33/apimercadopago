import express from "express";
import { createOrderData, returnNotificationsCount, searchPaymentsList } from "../controllers/mercadopagoControllers.js";

const router = express.Router();

router.post('/webhook', createOrderData);
router.get('/contagem', returnNotificationsCount);
router.get('/pagamentos/listar', searchPaymentsList)

export default router;