-- AlterTable
ALTER TABLE `access` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `branch` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `category` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `categorybranchmap` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `chalan` ADD COLUMN `due` DOUBLE NOT NULL DEFAULT 0.0,
    ADD COLUMN `isCompleted` BIT(1) NOT NULL DEFAULT false,
    ADD COLUMN `payedMoney` DOUBLE NOT NULL DEFAULT 0.0,
    MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `chalanitem` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `credential` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `item` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `itemdetails` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `order` ADD COLUMN `balance` DOUBLE NOT NULL DEFAULT 0.0,
    ADD COLUMN `isCompleted` BIT(1) NOT NULL DEFAULT false,
    ADD COLUMN `payedMoney` DOUBLE NOT NULL DEFAULT 0.0,
    MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

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
