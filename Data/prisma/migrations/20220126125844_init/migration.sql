-- AlterTable
ALTER TABLE `access` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `branch` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `category` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `categorybranchmap` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `chalan` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `chalanitem` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `chalanitemmap` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `credential` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `item` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `itemdetailmap` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `itemdetails` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `order` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `orderitem` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `orderitemmap` MODIFY `isRemoved` BIT(1) NOT NULL DEFAULT false;

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
