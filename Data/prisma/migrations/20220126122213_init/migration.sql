/*
  Warnings:

  - Added the required column `isRemoved` to the `Access` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isRemoved` to the `Branch` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isRemoved` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isRemoved` to the `CategoryBranchMap` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isRemoved` to the `Chalan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isRemoved` to the `ChalanItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isRemoved` to the `ChalanItemMap` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isRemoved` to the `Credential` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isRemoved` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isRemoved` to the `ItemDetailMap` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isRemoved` to the `ItemDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isRemoved` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isRemoved` to the `OrderItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isRemoved` to the `OrderItemMap` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isRemoved` to the `PaySlip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `PaySlip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isRemoved` to the `Permission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isRemoved` to the `Site` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isRemoved` to the `Store` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isRemoved` to the `SubCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isRemoved` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isRemoved` to the `UserType` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isRemoved` to the `VividExpense` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `branch` DROP FOREIGN KEY `Branch_id_fkey`;

-- DropForeignKey
ALTER TABLE `payslip` DROP FOREIGN KEY `PaySlip_id_fkey`;

-- AlterTable
ALTER TABLE `access` ADD COLUMN `isRemoved` BIT(1) NOT NULL;

-- AlterTable
ALTER TABLE `branch` ADD COLUMN `isRemoved` BIT(1) NOT NULL;

-- AlterTable
ALTER TABLE `category` ADD COLUMN `isRemoved` BIT(1) NOT NULL;

-- AlterTable
ALTER TABLE `categorybranchmap` ADD COLUMN `isRemoved` BIT(1) NOT NULL;

-- AlterTable
ALTER TABLE `chalan` ADD COLUMN `isRemoved` BIT(1) NOT NULL;

-- AlterTable
ALTER TABLE `chalanitem` ADD COLUMN `isRemoved` BIT(1) NOT NULL;

-- AlterTable
ALTER TABLE `chalanitemmap` ADD COLUMN `isRemoved` BIT(1) NOT NULL;

-- AlterTable
ALTER TABLE `credential` ADD COLUMN `isRemoved` BIT(1) NOT NULL;

-- AlterTable
ALTER TABLE `item` ADD COLUMN `isRemoved` BIT(1) NOT NULL;

-- AlterTable
ALTER TABLE `itemdetailmap` ADD COLUMN `isRemoved` BIT(1) NOT NULL;

-- AlterTable
ALTER TABLE `itemdetails` ADD COLUMN `isRemoved` BIT(1) NOT NULL;

-- AlterTable
ALTER TABLE `order` ADD COLUMN `isRemoved` BIT(1) NOT NULL;

-- AlterTable
ALTER TABLE `orderitem` ADD COLUMN `isRemoved` BIT(1) NOT NULL;

-- AlterTable
ALTER TABLE `orderitemmap` ADD COLUMN `isRemoved` BIT(1) NOT NULL;

-- AlterTable
ALTER TABLE `payslip` ADD COLUMN `isRemoved` BIT(1) NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT;

-- AlterTable
ALTER TABLE `permission` ADD COLUMN `isRemoved` BIT(1) NOT NULL;

-- AlterTable
ALTER TABLE `site` ADD COLUMN `isRemoved` BIT(1) NOT NULL;

-- AlterTable
ALTER TABLE `store` ADD COLUMN `isRemoved` BIT(1) NOT NULL;

-- AlterTable
ALTER TABLE `subcategory` ADD COLUMN `isRemoved` BIT(1) NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `isRemoved` BIT(1) NOT NULL;

-- AlterTable
ALTER TABLE `usertype` ADD COLUMN `isRemoved` BIT(1) NOT NULL;

-- AlterTable
ALTER TABLE `vividexpense` ADD COLUMN `isRemoved` BIT(1) NOT NULL;

-- AddForeignKey
ALTER TABLE `PaySlip` ADD CONSTRAINT `PaySlip_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Branch` ADD CONSTRAINT `Branch_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
