-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "asignee" TEXT,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
