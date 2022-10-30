/*
  Warnings:

  - You are about to drop the column `asignee` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "asignee",
ADD COLUMN     "asigneeId" TEXT;

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_asigneeId_fkey" FOREIGN KEY ("asigneeId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
