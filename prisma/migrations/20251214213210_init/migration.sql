-- CreateTable
CREATE TABLE "lawyers" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR,
    "email" VARCHAR,

    CONSTRAINT "lawyers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR,
    "email" VARCHAR,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
