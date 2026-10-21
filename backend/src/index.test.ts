import { describe, expect, test } from 'bun:test'
import app from './index'

describe('API', () => {
  test('creates a user', async () => {
    const response = await app.request('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Taro',
      }),
    })

    expect(response.status).toBe(200)
    expect(await response.json()).toEqual({
      id: expect.any(String),
    })
  })

  test('creates a book', async () => {
    const response = await app.request('/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'Movie',
        author: 'Author',
      }),
    })

    expect(response.status).toBe(200)
    expect(await response.json()).toEqual({
      id: expect.any(String),
    })
  })

  test('rejects an invalid user request', async () => {
    const response = await app.request('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })

    expect(response.status).toBe(400)
  })

  test('returns the OpenAPI document', async () => {
    const response = await app.request('/docs')
    const document = await response.json()

    expect(response.status).toBe(200)
    expect(document).toMatchObject({
      openapi: '3.0.0',
      info: {
        title: 'Movie Monitoring API',
        version: '1.0.0',
      },
    })
  })
})
