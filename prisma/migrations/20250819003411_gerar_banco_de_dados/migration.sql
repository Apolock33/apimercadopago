-- CreateTable
CREATE TABLE `order_notifications` (
    `id` VARCHAR(191) NOT NULL,
    `action` VARCHAR(191) NOT NULL,
    `apiVersion` VARCHAR(191) NOT NULL,
    `applicationId` VARCHAR(191) NOT NULL,
    `dateCreated` DATETIME(3) NOT NULL,
    `liveMode` BOOLEAN NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `dataId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
