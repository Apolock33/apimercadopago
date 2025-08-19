import { postMPOrders, getNotificationsCount } from "../services/mercadopagoServices.js";

export const createOrderData = async (req, res) => {
    try {
        const result = await postMPOrders(req.body);
        return res.status(201).json({
            success: true,
            message: "Registro criado com sucesso",
            data: result,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Erro ao processar notificação",
            error: error.message,
        });
    }
}

export const returnNotificationsCount = async (req, res) => {
    try {
        const result = await getNotificationsCount();
        return res.status(200).json({
            success: true,
            message: "Quantidade de registros retornada com sucesso",
            data: result,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Erro ao processar quantidade de registros",
            error: error.message,
        });
    }
}