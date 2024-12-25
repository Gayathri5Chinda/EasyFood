import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";

export const foodRouter = new Hono<{
    Bindings : {
      DATABASE_URL: string;
      JWT_SECRET: string;
    }
}>();

foodRouter.get('/bulk', async(c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const products = await prisma.product.findMany();

  return c.json({
    products
  })
})