import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const foodRouter = new Hono<{
    Bindings : {
      DATABASE_URL: string;
      JWT_SECRET: string;
    },
    Variables: {
      userId: any;
    }
}>();

foodRouter.use("/*", async(c, next) => {
  const authHeader = c.req.header("authorization") || "";
  const user = await verify(authHeader, c.env.JWT_SECRET);
  try{
    if(user){
      c.set("userId", user.id);
      await next();
    }else{
      c.status(403);
      return c.json({
        message: "You are not logged in"
      })
    }
  }catch(e){
    c.status(403);
    return c.json({
      message: "You are not logged in"
    })
  }

});



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

foodRouter.get('/:id', async(c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  try{
    const productid = await prisma.product.findFirst({
      where: {
        id: Number(id)
      }
    })

    return c.json({
      productid
    })

  } catch(e){
    c.status(411);
    return c.text('Invalid')
  }
})

foodRouter.get('/cart', async(c) => {
  const body = await c.req.json();
  const userId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const cartItem = await prisma.cartItem.findMany({
    where: {
      cartId: Number(userId)
    }
  });

  return c.json({
    cartItem
  })
})


foodRouter.post('/addtc', async(c) => {
  const body = await c.req.json();
  const productId = body.productId;
  const cartId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  try{

    const product = await prisma.product.findFirst({
      where: {
        id: Number(productId),
      }
    });

    if(!product) {
      c.status(403);
      return c.text('Product not found' );
    }

    const addItem = await prisma.cartItem.create({
      data: {
        cartId: Number(cartId),
        productId: product.id,
        quantity: 1,
        food: product.foodItem
      }
    })

    return c.json({
      addItem
    })

  } catch(e){
    c.status(411);
    return c.text('Invalid')
  }

})




