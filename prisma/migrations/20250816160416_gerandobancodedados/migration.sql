-- CreateTable
CREATE TABLE `Pedidos` (
    `id` BIGINT NOT NULL,
    `status` VARCHAR(191) NULL,
    `idPagamento` VARCHAR(191) NULL,
    `valorTotal` DECIMAL(18, 2) NULL,
    `valorPago` DECIMAL(18, 2) NULL,
    `idComprador` BIGINT NULL,
    `nomeComprador` VARCHAR(191) NULL,
    `idVendedor` BIGINT NULL,
    `itensPedidos` JSON NULL,
    `raw_json` JSON NULL,
    `criadoEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `atualizadoEm` DATETIME(3) NOT NULL,

    INDEX `Pedidos_idVendedor_idx`(`idVendedor`),
    INDEX `Pedidos_idComprador_idx`(`idComprador`),
    INDEX `Pedidos_status_idx`(`status`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
