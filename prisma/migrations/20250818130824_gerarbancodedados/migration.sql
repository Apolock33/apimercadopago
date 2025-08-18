-- CreateTable
CREATE TABLE `OrderNotification` (
    `id` VARCHAR(191) NOT NULL,
    `action` VARCHAR(191) NOT NULL,
    `api_version` VARCHAR(191) NOT NULL,
    `application_id` VARCHAR(191) NOT NULL,
    `date_created` DATETIME(3) NOT NULL,
    `live_mode` BOOLEAN NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `user_id` INTEGER NOT NULL,
    `data` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
