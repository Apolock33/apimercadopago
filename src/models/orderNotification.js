export const OrderNotification = (p) => ({
    notificationId: String(p.id),
    action: p.action ?? "",
    apiVersion: p.api_version ?? "",
    applicationId: String(p.application_id ?? ""),
    dateCreated: new Date(p.date_created),
    liveMode: Boolean(p.live_mode),
    type: p.type ?? "",
    userId: Number(p.user_id),
    orderId: String(p.data?.id ?? ""),
});