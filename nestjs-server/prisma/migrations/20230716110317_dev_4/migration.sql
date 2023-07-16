/*
  Warnings:

  - Added the required column `accountType` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "users_email_key";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "accountType" TEXT NOT NULL;
