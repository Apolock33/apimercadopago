-- CreateTable
CREATE TABLE `OrderNotification` (
    `id` VARCHAR(191) NOT NULL,
    `notificationId` VARCHAR(191) NOT NULL,
    `action` VARCHAR(191) NOT NULL,
    `apiVersion` VARCHAR(191) NOT NULL,
    `applicationId` VARCHAR(191) NOT NULL,
    `dateCreated` DATETIME(3) NOT NULL,
    `liveMode` BOOLEAN NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `orderId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `OrderNotification_notificationId_key`(`notificationId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
