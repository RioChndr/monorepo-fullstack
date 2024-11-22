-- CreateTable
CREATE TABLE "funds" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "stripe_product_id" TEXT,
    "target_goal" INTEGER,
    "target_monthly" INTEGER,
    "target_yearly" INTEGER,
    "current_monthly" INTEGER,
    "current_yearly" INTEGER,
    "current_goal" INTEGER,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "FundsRecurring" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fund_id" TEXT NOT NULL,
    "email" TEXT,
    "name" TEXT,
    "stripe_subscription_id" TEXT,
    "stripe_customer_id" TEXT,
    "amount" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "FundsRecurring_fund_id_fkey" FOREIGN KEY ("fund_id") REFERENCES "funds" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FundsHistory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fund_id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "is_onetime" BOOLEAN,
    "is_recurring" BOOLEAN,
    "email" TEXT,
    "name" TEXT,
    "stripe_charge_id" TEXT,
    "stripe_customer_id" TEXT,
    "stripe_event_id" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "FundsHistory_fund_id_fkey" FOREIGN KEY ("fund_id") REFERENCES "funds" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "funds_name_key" ON "funds"("name");

-- CreateIndex
CREATE UNIQUE INDEX "FundsRecurring_stripe_subscription_id_key" ON "FundsRecurring"("stripe_subscription_id");
