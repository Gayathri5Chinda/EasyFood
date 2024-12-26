/*
  Warnings:

  - A unique constraint covering the columns `[id,foodItem]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `food` to the `CartItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_productId_fkey";

-- AlterTable
ALTER TABLE "CartItem" ADD COLUMN     "food" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Product_id_foodItem_key" ON "Product"("id", "foodItem");

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_productId_food_fkey" FOREIGN KEY ("productId", "food") REFERENCES "Product"("id", "foodItem") ON DELETE RESTRICT ON UPDATE CASCADE;
