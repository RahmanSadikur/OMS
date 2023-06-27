BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[UserType] (
    [id] INT NOT NULL IDENTITY(1,1),
    [title] VARCHAR(250) NOT NULL,
    [updatedAt] DATETIME2 NOT NULL CONSTRAINT [UserType_updatedAt_df] DEFAULT CURRENT_TIMESTAMP,
    [isRemoved] BIT NOT NULL CONSTRAINT [UserType_isRemoved_df] DEFAULT 0,
    CONSTRAINT [UserType_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[User] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] VARCHAR(250) NOT NULL,
    [address] VARCHAR(250) NOT NULL,
    [nid] VARCHAR(15) NOT NULL,
    [phone] VARCHAR(11) NOT NULL,
    [userTypeId] INT NOT NULL,
    [dailywages] FLOAT NOT NULL,
    [updatedAt] DATETIME2 NOT NULL CONSTRAINT [User_updatedAt_df] DEFAULT CURRENT_TIMESTAMP,
    [isRemoved] BIT NOT NULL CONSTRAINT [User_isRemoved_df] DEFAULT 0,
    CONSTRAINT [User_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Credential] (
    [id] INT NOT NULL,
    [userName] VARCHAR(250) NOT NULL,
    [password] VARCHAR(250) NOT NULL,
    [updatedAt] DATETIME2 NOT NULL CONSTRAINT [Credential_updatedAt_df] DEFAULT CURRENT_TIMESTAMP,
    [isRemoved] BIT NOT NULL CONSTRAINT [Credential_isRemoved_df] DEFAULT 0,
    CONSTRAINT [Credential_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[PaySlip] (
    [id] INT NOT NULL IDENTITY(1,1),
    [day] DATE NOT NULL CONSTRAINT [PaySlip_day_df] DEFAULT CURRENT_TIMESTAMP,
    [total] FLOAT NOT NULL,
    [description] VARCHAR(250) NOT NULL,
    [updatedAt] DATETIME2 NOT NULL CONSTRAINT [PaySlip_updatedAt_df] DEFAULT CURRENT_TIMESTAMP,
    [userId] INT NOT NULL,
    [isRemoved] BIT NOT NULL CONSTRAINT [PaySlip_isRemoved_df] DEFAULT 0,
    CONSTRAINT [PaySlip_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Store] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] VARCHAR(250) NOT NULL,
    [descrpiction] VARCHAR(250) NOT NULL,
    [primaryPhone] VARCHAR(11) NOT NULL,
    [secondaryPhone] VARCHAR(11) NOT NULL,
    [email] VARCHAR(250) NOT NULL,
    [webaddress] VARCHAR(250) NOT NULL,
    [facebookLink] VARCHAR(250) NOT NULL,
    [youtubeLink] VARCHAR(250) NOT NULL,
    [updatedAt] DATETIME2 NOT NULL CONSTRAINT [Store_updatedAt_df] DEFAULT CURRENT_TIMESTAMP,
    [isRemoved] BIT NOT NULL CONSTRAINT [Store_isRemoved_df] DEFAULT 0,
    CONSTRAINT [Store_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Branch] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] VARCHAR(250) NOT NULL,
    [descrpiction] VARCHAR(250) NOT NULL,
    [primaryPhone] VARCHAR(11) NOT NULL,
    [secondaryPhone] VARCHAR(11) NOT NULL,
    [email] VARCHAR(250) NOT NULL,
    [webaddress] VARCHAR(250) NOT NULL,
    [facebookLink] VARCHAR(250) NOT NULL,
    [youtubeLink] VARCHAR(250) NOT NULL,
    [updatedAt] DATETIME2 NOT NULL CONSTRAINT [Branch_updatedAt_df] DEFAULT CURRENT_TIMESTAMP,
    [storeId] INT NOT NULL,
    [isRemoved] BIT NOT NULL CONSTRAINT [Branch_isRemoved_df] DEFAULT 0,
    CONSTRAINT [Branch_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Site] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] VARCHAR(250) NOT NULL,
    [descrpiction] VARCHAR(250) NOT NULL,
    [updatedAt] DATETIME2 NOT NULL CONSTRAINT [Site_updatedAt_df] DEFAULT CURRENT_TIMESTAMP,
    [branchId] INT NOT NULL,
    [isRemoved] BIT NOT NULL CONSTRAINT [Site_isRemoved_df] DEFAULT 0,
    CONSTRAINT [Site_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Category] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] VARCHAR(250) NOT NULL,
    [descrpiction] VARCHAR(250) NOT NULL,
    [updatedAt] DATETIME2 NOT NULL CONSTRAINT [Category_updatedAt_df] DEFAULT CURRENT_TIMESTAMP,
    [isRemoved] BIT NOT NULL CONSTRAINT [Category_isRemoved_df] DEFAULT 0,
    CONSTRAINT [Category_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[SubCategory] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] VARCHAR(250) NOT NULL,
    [descrpiction] VARCHAR(250) NOT NULL,
    [updatedAt] DATETIME2 NOT NULL CONSTRAINT [SubCategory_updatedAt_df] DEFAULT CURRENT_TIMESTAMP,
    [categoryId] INT NOT NULL,
    [isRemoved] BIT NOT NULL CONSTRAINT [SubCategory_isRemoved_df] DEFAULT 0,
    CONSTRAINT [SubCategory_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Item] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] VARCHAR(250) NOT NULL,
    [descrpiction] VARCHAR(250) NOT NULL,
    [updatedAt] DATETIME2 NOT NULL CONSTRAINT [Item_updatedAt_df] DEFAULT CURRENT_TIMESTAMP,
    [subCategoryId] INT NOT NULL,
    [isRemoved] BIT NOT NULL CONSTRAINT [Item_isRemoved_df] DEFAULT 0,
    CONSTRAINT [Item_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[ItemDetails] (
    [id] INT NOT NULL IDENTITY(1,1),
    [quantity] FLOAT NOT NULL,
    [size] VARCHAR(250) NOT NULL,
    [basePrice] FLOAT NOT NULL,
    [selling] FLOAT NOT NULL,
    [descrpiction] VARCHAR(250) NOT NULL,
    [updatedAt] DATETIME2 NOT NULL CONSTRAINT [ItemDetails_updatedAt_df] DEFAULT CURRENT_TIMESTAMP,
    [isRemoved] BIT NOT NULL CONSTRAINT [ItemDetails_isRemoved_df] DEFAULT 0,
    [itemId] INT NOT NULL,
    CONSTRAINT [ItemDetails_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[SiteItemDetailMap] (
    [siteId] INT NOT NULL,
    [itemDetailId] INT NOT NULL,
    [isRemoved] BIT NOT NULL CONSTRAINT [SiteItemDetailMap_isRemoved_df] DEFAULT 0,
    [quantity] INT NOT NULL,
    [updatedAt] DATETIME2 NOT NULL CONSTRAINT [SiteItemDetailMap_updatedAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [SiteItemDetailMap_pkey] PRIMARY KEY CLUSTERED ([siteId],[itemDetailId])
);

-- CreateTable
CREATE TABLE [dbo].[CategoryBranchMap] (
    [categoryId] INT NOT NULL,
    [branchId] INT NOT NULL,
    [isRemoved] BIT NOT NULL CONSTRAINT [CategoryBranchMap_isRemoved_df] DEFAULT 0,
    [updatedAt] DATETIME2 NOT NULL CONSTRAINT [CategoryBranchMap_updatedAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [CategoryBranchMap_pkey] PRIMARY KEY CLUSTERED ([branchId],[categoryId])
);

-- CreateTable
CREATE TABLE [dbo].[Order] (
    [id] INT NOT NULL IDENTITY(1,1),
    [buyerName] VARCHAR(250) NOT NULL,
    [buyerPhone] VARCHAR(11) NOT NULL,
    [descrpiction] VARCHAR(250) NOT NULL,
    [totalQuantity] FLOAT NOT NULL CONSTRAINT [Order_totalQuantity_df] DEFAULT 0.0,
    [totalPrice] FLOAT NOT NULL CONSTRAINT [Order_totalPrice_df] DEFAULT 0.0,
    [payedMoney] FLOAT NOT NULL CONSTRAINT [Order_payedMoney_df] DEFAULT 0.0,
    [balance] FLOAT NOT NULL CONSTRAINT [Order_balance_df] DEFAULT 0.0,
    [isCompleted] BIT NOT NULL CONSTRAINT [Order_isCompleted_df] DEFAULT 0,
    [isRemoved] BIT NOT NULL CONSTRAINT [Order_isRemoved_df] DEFAULT 0,
    [orderDate] DATETIME2 NOT NULL CONSTRAINT [Order_orderDate_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL CONSTRAINT [Order_updatedAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [Order_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[OrderItem] (
    [id] INT NOT NULL IDENTITY(1,1),
    [totalQuantity] FLOAT NOT NULL CONSTRAINT [OrderItem_totalQuantity_df] DEFAULT 0.0,
    [totalPrice] FLOAT NOT NULL CONSTRAINT [OrderItem_totalPrice_df] DEFAULT 0.0,
    [size] INT NOT NULL,
    [itemId] INT NOT NULL,
    [isRemoved] BIT NOT NULL CONSTRAINT [OrderItem_isRemoved_df] DEFAULT 0,
    [updatedAt] DATETIME2 NOT NULL CONSTRAINT [OrderItem_updatedAt_df] DEFAULT CURRENT_TIMESTAMP,
    [orderId] INT NOT NULL,
    CONSTRAINT [OrderItem_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [OrderItem_size_key] UNIQUE NONCLUSTERED ([size]),
    CONSTRAINT [OrderItem_itemId_key] UNIQUE NONCLUSTERED ([itemId])
);

-- CreateTable
CREATE TABLE [dbo].[Permission] (
    [id] INT NOT NULL IDENTITY(1,1),
    [userId] INT NOT NULL,
    [permissionModuleID] INT NOT NULL,
    [isRemoved] BIT NOT NULL CONSTRAINT [Permission_isRemoved_df] DEFAULT 0,
    [updatedAt] DATETIME2 NOT NULL CONSTRAINT [Permission_updatedAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [Permission_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[PermissionModule] (
    [id] INT NOT NULL IDENTITY(1,1),
    [ModuleName] VARCHAR(250) NOT NULL,
    [isRemoved] BIT NOT NULL CONSTRAINT [PermissionModule_isRemoved_df] DEFAULT 0,
    [updatedAt] DATETIME2 NOT NULL CONSTRAINT [PermissionModule_updatedAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [PermissionModule_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Access] (
    [userId] INT NOT NULL,
    [branchId] INT NOT NULL,
    [hasAccess] BIT NOT NULL CONSTRAINT [Access_hasAccess_df] DEFAULT 0,
    [isRemoved] BIT NOT NULL CONSTRAINT [Access_isRemoved_df] DEFAULT 0,
    [updatedAt] DATETIME2 NOT NULL CONSTRAINT [Access_updatedAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [Access_pkey] PRIMARY KEY CLUSTERED ([userId],[branchId])
);

-- CreateTable
CREATE TABLE [dbo].[Chalan] (
    [id] INT NOT NULL IDENTITY(1,1),
    [sellerName] VARCHAR(250) NOT NULL,
    [sellerAddress] VARCHAR(250) NOT NULL,
    [sellerPhone] VARCHAR(11) NOT NULL,
    [descrpiction] VARCHAR(250) NOT NULL,
    [totalQuantity] FLOAT NOT NULL CONSTRAINT [Chalan_totalQuantity_df] DEFAULT 0.0,
    [totalPrice] FLOAT NOT NULL CONSTRAINT [Chalan_totalPrice_df] DEFAULT 0.0,
    [payedMoney] FLOAT NOT NULL CONSTRAINT [Chalan_payedMoney_df] DEFAULT 0.0,
    [due] FLOAT NOT NULL CONSTRAINT [Chalan_due_df] DEFAULT 0.0,
    [isCompleted] BIT NOT NULL CONSTRAINT [Chalan_isCompleted_df] DEFAULT 0,
    [isRemoved] BIT NOT NULL CONSTRAINT [Chalan_isRemoved_df] DEFAULT 0,
    [chalanDate] DATETIME2 NOT NULL CONSTRAINT [Chalan_chalanDate_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL CONSTRAINT [Chalan_updatedAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [Chalan_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[ChalanItem] (
    [id] INT NOT NULL IDENTITY(1,1),
    [totalQuantity] FLOAT NOT NULL CONSTRAINT [ChalanItem_totalQuantity_df] DEFAULT 0.0,
    [totalPrice] FLOAT NOT NULL CONSTRAINT [ChalanItem_totalPrice_df] DEFAULT 0.0,
    [size] INT NOT NULL,
    [itemId] INT NOT NULL,
    [isRemoved] BIT NOT NULL CONSTRAINT [ChalanItem_isRemoved_df] DEFAULT 0,
    [updatedAt] DATETIME2 NOT NULL CONSTRAINT [ChalanItem_updatedAt_df] DEFAULT CURRENT_TIMESTAMP,
    [chalanId] INT NOT NULL,
    CONSTRAINT [ChalanItem_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [ChalanItem_size_key] UNIQUE NONCLUSTERED ([size]),
    CONSTRAINT [ChalanItem_itemId_key] UNIQUE NONCLUSTERED ([itemId])
);

-- CreateTable
CREATE TABLE [dbo].[VividExpense] (
    [id] INT NOT NULL IDENTITY(1,1),
    [date] DATETIME2 NOT NULL CONSTRAINT [VividExpense_date_df] DEFAULT CURRENT_TIMESTAMP,
    [totalcost] FLOAT NOT NULL CONSTRAINT [VividExpense_totalcost_df] DEFAULT 0.0,
    [description] VARCHAR(250) NOT NULL,
    [branchId] INT NOT NULL,
    [isRemoved] BIT NOT NULL CONSTRAINT [VividExpense_isRemoved_df] DEFAULT 0,
    [updatedAt] DATETIME2 NOT NULL CONSTRAINT [VividExpense_updatedAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [VividExpense_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[User] ADD CONSTRAINT [User_userTypeId_fkey] FOREIGN KEY ([userTypeId]) REFERENCES [dbo].[UserType]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Credential] ADD CONSTRAINT [Credential_id_fkey] FOREIGN KEY ([id]) REFERENCES [dbo].[User]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[PaySlip] ADD CONSTRAINT [PaySlip_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[User]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Branch] ADD CONSTRAINT [Branch_storeId_fkey] FOREIGN KEY ([storeId]) REFERENCES [dbo].[Store]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Site] ADD CONSTRAINT [Site_branchId_fkey] FOREIGN KEY ([branchId]) REFERENCES [dbo].[Branch]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[SubCategory] ADD CONSTRAINT [SubCategory_categoryId_fkey] FOREIGN KEY ([categoryId]) REFERENCES [dbo].[Category]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Item] ADD CONSTRAINT [Item_subCategoryId_fkey] FOREIGN KEY ([subCategoryId]) REFERENCES [dbo].[SubCategory]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[ItemDetails] ADD CONSTRAINT [ItemDetails_itemId_fkey] FOREIGN KEY ([itemId]) REFERENCES [dbo].[Item]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[SiteItemDetailMap] ADD CONSTRAINT [SiteItemDetailMap_siteId_fkey] FOREIGN KEY ([siteId]) REFERENCES [dbo].[Site]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[SiteItemDetailMap] ADD CONSTRAINT [SiteItemDetailMap_itemDetailId_fkey] FOREIGN KEY ([itemDetailId]) REFERENCES [dbo].[ItemDetails]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CategoryBranchMap] ADD CONSTRAINT [CategoryBranchMap_categoryId_fkey] FOREIGN KEY ([categoryId]) REFERENCES [dbo].[Category]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[CategoryBranchMap] ADD CONSTRAINT [CategoryBranchMap_branchId_fkey] FOREIGN KEY ([branchId]) REFERENCES [dbo].[Branch]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[OrderItem] ADD CONSTRAINT [OrderItem_size_fkey] FOREIGN KEY ([size]) REFERENCES [dbo].[ItemDetails]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[OrderItem] ADD CONSTRAINT [OrderItem_itemId_fkey] FOREIGN KEY ([itemId]) REFERENCES [dbo].[Item]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[OrderItem] ADD CONSTRAINT [OrderItem_orderId_fkey] FOREIGN KEY ([orderId]) REFERENCES [dbo].[Order]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Permission] ADD CONSTRAINT [Permission_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[User]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Permission] ADD CONSTRAINT [Permission_permissionModuleID_fkey] FOREIGN KEY ([permissionModuleID]) REFERENCES [dbo].[PermissionModule]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Access] ADD CONSTRAINT [Access_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[User]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Access] ADD CONSTRAINT [Access_branchId_fkey] FOREIGN KEY ([branchId]) REFERENCES [dbo].[Branch]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[ChalanItem] ADD CONSTRAINT [ChalanItem_size_fkey] FOREIGN KEY ([size]) REFERENCES [dbo].[ItemDetails]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[ChalanItem] ADD CONSTRAINT [ChalanItem_itemId_fkey] FOREIGN KEY ([itemId]) REFERENCES [dbo].[Item]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[ChalanItem] ADD CONSTRAINT [ChalanItem_chalanId_fkey] FOREIGN KEY ([chalanId]) REFERENCES [dbo].[Chalan]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[VividExpense] ADD CONSTRAINT [VividExpense_branchId_fkey] FOREIGN KEY ([branchId]) REFERENCES [dbo].[Branch]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
