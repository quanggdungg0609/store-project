/*
  Warnings:

  - You are about to drop the `RefreshToken` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RefreshToken" DROP CONSTRAINT "RefreshToken_accountId_fkey";

-- DropTable
DROP TABLE "RefreshToken";

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "brandName" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tag" TEXT[],
    "buyPrice" INTEGER NOT NULL,
    "sellPrice" INTEGER NOT NULL,
    "buyFrom" INTEGER NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "refreshtokens" (
    "id" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "accountId" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,

    CONSTRAINT "refreshtokens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "refreshtokens_accountId_key" ON "refreshtokens"("accountId");

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_id_fkey" FOREIGN KEY ("id") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refreshtokens" ADD CONSTRAINT "refreshtokens_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "users"("accountId") ON DELETE RESTRICT ON UPDATE CASCADE;
