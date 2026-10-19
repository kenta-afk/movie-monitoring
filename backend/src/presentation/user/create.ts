import { createRoute, z } from '@hono/zod-openapi'

export const createUserRoute = createRoute({
  method: 'post',
  path: '/users',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({
            name: z.string(),
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
