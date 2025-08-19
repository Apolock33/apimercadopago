import { prisma } from "../db/prisma.js";

export const postMPOrders = async (body) => {
  try {
    if (!body || typeof body !== "object") {
      throw new Error("Body inválido ou vazio");
    }

    const data = {
      id: body.id,
      action: body.action,
      apiVersion: body.api_version,
      applicationId: String(body.application_id ?? ""),
      dateCreated: new Date(body.date_created),
      liveMode: Boolean(body.live_mode),
      type: body.type,
      userId: Number(body.user_id),
      dataId: String(body.data?.id ?? ""),
    };

    const saved = await prisma.orderNotification.upsert({
      where: { id: data.id },
      create: data,
      update: data
    });

    return saved;
  } catch (error) {
    console.error("Erro ao salvar notificação:", error);
    throw error;
  }
};

export const getNotificationsCount = async () => {
  try {
    const count = await prisma.orderNotification.count();
    return count;
  } catch (error) {
    console.error("Erro ao contar notificações:", error);
    throw error;
  }
};