import { Hono } from 'hono'
import { userRouter } from './routes/user'
import { foodRouter } from './routes/food'
import {cors} from 'hono/cors';
const app = new Hono<{
  Bindings : {
    DATABASE_URL: string;
    JWT_SECRET: string;
  }
}>

app.use('/*', cors())

app.route("/api/v1/user", userRouter);
app.route("/api/v1/food", foodRouter);

export default app


// DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiOWQ3OTA4ZDktNDUzZS00NTkzLTk0NGItNzM2NGI1ZDgzNzM5IiwidGVuYW50X2lkIjoiZDA1ZjJiNzRhNTAwZjA3NGVjM2FkYWEzNTkxZWI0MjVlZjBjYTE5MGZhZTdjMDBjOGI5YWI3MGI4MjBjZGMzMyIsImludGVybmFsX3NlY3JldCI6IjkyMjU1YjE5LTIwNTUtNDFiZC05YjdiLTY5YjQ4YWE2YTE5NCJ9.hX07zUGvR7Lv8VYAfQFncdM6HVkJ-47pH-Y6-p7ukTc"