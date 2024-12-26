import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";

export const userRouter = new Hono<{
    Bindings : {
      DATABASE_URL: string;
      JWT_SECRET: string;
    }
}>();

userRouter.post('/signup', async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

  
    try{
      const user = await prisma.user.create({
        data: {
          email : body.email,
          password: body.password,
          name: body.name
        }
      })

      await prisma.cart.create({
        data: {
          id: user.id
        }
      })

  
      const jwt = await sign({
        id: user.id
      },c.env.JWT_SECRET)
  
      return c.text(jwt)
    } catch(e){
      c.status(411);
      return c.text('Invalid')
    }
  })
  
  
  
  userRouter.post('/signin', async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
   
  
    try{
      const user = await prisma.user.findFirst({
        where: {
          email : body.email,
          password: body.password,
        }
      })



  
      if(!user){
        c.status(403);
        return c.json({
          message: "Incorrect creds"
        })
      }

  
      const jwt = await sign({
        id: user.id
      },c.env.JWT_SECRET)
  
      return c.text(jwt)
    } catch(e){
      c.status(411);
      return c.text('Invalid')
    }
    
  })


  userRouter.get('/bulk', async(c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    const cartItem = await prisma.cartItem.findMany();
  
    return c.json({
      cartItem
    })
  })