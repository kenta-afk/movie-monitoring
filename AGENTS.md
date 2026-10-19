## Project Overview

- TypeScript + React 19.2.8 のWebアプリケーション
- バックエンド: bun + Hono
- データベース: CloudFlare R2
- テスト: bun test

## Commands
- Install dependencies: `bun install`
- Lint: `bun oxlint`
- Run all tests: `bun test`

### Backend
- Run dev server: `wrangler dev`
- Build for production: `wrangler deploy --minify`

### Frontend
- Run dev server: `bun vite`
- Build for production: `bun tsc -b && vite build`

## Boundaries
- `.env` ファイルを変更しない

