-- AlterTable
ALTER TABLE `access` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `branch` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `category` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `categorybranchmap` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `chalan` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false,
    MODIFY `isCompleted` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `chalanitem` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `credential` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `item` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `itemdetails` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `order` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false,
    MODIFY `isCompleted` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `orderitem` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `payslip` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `permission` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `site` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `store` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `subcategory` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `user` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `usertype` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `vividexpense` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE `SiteItemDetailMap` (
    `siteId` INTEGER NOT NULL,
    `itemDetailId` INTEGER NOT NULL,
    `isRemoved` BIT(1) NOT NULL DEFAULT false,
    `quantity` INTEGER NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`siteId`, `itemDetailId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SiteItemDetailMap` ADD CONSTRAINT `SiteItemDetailMap_siteId_fkey` FOREIGN KEY (`siteId`) REFERENCES `Site`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SiteItemDetailMap` ADD CONSTRAINT `SiteItemDetailMap_itemDetailId_fkey` FOREIGN KEY (`itemDetailId`) REFERENCES `ItemDetails`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
