/*
  Warnings:

  - You are about to alter the column `title` on the `tasks` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `name` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `password` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(20)`.

*/
-- AlterTable
ALTER TABLE `tasks` MODIFY `title` VARCHAR(50) NOT NULL,
    MODIFY `description` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `name` VARCHAR(50) NOT NULL,
    MODIFY `email` VARCHAR(255) NOT NULL,
    MODIFY `password` VARCHAR(20) NOT NULL;
