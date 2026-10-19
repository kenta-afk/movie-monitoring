import { createRoute, z } from '@hono/zod-openapi'

export const createBookRoute = createRoute({
  method: 'post',
  path: '/books',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({
            title: z.string(),
            author: z.string(),
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z.object({
            id: z.string(),
          }),
        },
      },
    },
  },
})
