import { postMPOrders } from "../services/mercadopagoServices.js";

export const createOrderData = async (body) => {
    const result = await postMPOrders(body);
    return result;
}