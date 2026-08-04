# ecosoc.seamun.com

SEAMUN I 2027 ECOSOC committee site (vinyl selector → payment gate → committee portal).

## Local

```bash
npm install
npm run dev
```

Open http://localhost:3001

## Hostinger (static)

```bash
npm run build:hostinger
```

Upload everything inside `out/` to the subdomain document root. Delete any leftover old HTML (`overview.html`, etc.).

## Vercel

```bash
npm run build
```

Do not set Output Directory to `out`.
