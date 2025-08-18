import { prisma } from "../db/prisma.js";

export const postMPOrders = async (body) => {
    try {
        if (!body || typeof body !== 'object') {
            throw new Error("Body inválido ou vazio");
        }

        const user = await prisma.OrderNotification.create({ data: body });

        console.log("Usuário criado com sucesso:", user);
        return user;

    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        console.error(error.stack);
        throw error;
    }
};