import { prisma } from "../db/prisma.js";
import { OrderNotification } from "../models/orderNotification.js";

export const postMPOrders = async (body) => {
  try {
    if (!body || typeof body !== "object") {
      throw new Error("Body inválido ou vazio");
    }

    const saved = await prisma.orderNotification.upsert({
      where: { id: String(OrderNotification(body).id) },
      create: OrderNotification(body),
      update: OrderNotification(body)
    });

    return saved;
  } catch (error) {
    console.error("Erro ao salvar notificação:", error);
    throw error;
  }
};