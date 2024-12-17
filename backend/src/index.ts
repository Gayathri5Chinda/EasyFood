import { Hono } from 'hono'

const app = new Hono()

app.post('/api/v1/user/signup', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/v1/user/signup', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/v1/food/bulk', (c) => {
  return c.text('Hello Hono!')
})

export default app


// DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiOWQ3OTA4ZDktNDUzZS00NTkzLTk0NGItNzM2NGI1ZDgzNzM5IiwidGVuYW50X2lkIjoiZDA1ZjJiNzRhNTAwZjA3NGVjM2FkYWEzNTkxZWI0MjVlZjBjYTE5MGZhZTdjMDBjOGI5YWI3MGI4MjBjZGMzMyIsImludGVybmFsX3NlY3JldCI6IjkyMjU1YjE5LTIwNTUtNDFiZC05YjdiLTY5YjQ4YWE2YTE5NCJ9.hX07zUGvR7Lv8VYAfQFncdM6HVkJ-47pH-Y6-p7ukTc"