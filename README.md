# ecosoc.seamun.com

SEAMUN I 2027 ECOSOC committee site (vinyl selector → payment gate → committee portal).

## Local

```bash
npm install
npm run dev
```

Open http://localhost:3001

## Hostinger upload (static)

Hostinger only serves static files. Do **not** upload the repo root or `.next/`.

1. Build the Hostinger export:
   ```bash
   npm run build:hostinger
   ```
2. Upload **everything inside** the `out/` folder into the subdomain document root  
   (usually `public_html` for `ecosoc.seamun.com`).
3. **Delete** leftover old files if present: `overview.html`, `topics.html`, `styles.css`, `faq.html`, etc.
4. Confirm `index.html` and the `_next/` folder are both at the root of that subdomain.
5. Hard-refresh (or wait a minute for Hostinger CDN).

## Vercel

Use the normal Next.js build (`npm run build`). Do not set Output Directory to `out`.
