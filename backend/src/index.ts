import { OpenAPIHono } from '@hono/zod-openapi'
import { createBookRoute } from './presentation/book/create'
import { createUserRoute } from './presentation/user/create'

const app = new OpenAPIHono()

app.openapi(createUserRoute, (c) => {
  c.req.valid('json')
  return c.json({ id: Date.now().toString() }, 200)
})

app.openapi(createBookRoute, (c) => {
  c.req.valid('json')
  return c.json({ id: Date.now().toString() }, 200)
})

app.doc('/docs', {
  openapi: '3.0.0',
  info: {
    title: 'Movie Monitoring API',
    version: '1.0.0',
  },
})

export default app

