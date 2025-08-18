import { postMPOrders } from "../services/mercadopagoServices.js";

export const createOrderData = async (req, res) => {
    const result = await postMPOrders(req.body);
    return res.json({
        data: result
    });
}