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

1. Build:
   ```bash
   npm run build
   ```
2. Upload **everything inside** the `out/` folder into the subdomain document root  
   (usually `public_html` for `ecosoc.seamun.com`).
3. **Delete** leftover old files if present: `overview.html`, `topics.html`, `styles.css`, `faq.html`, etc.
4. Confirm `index.html` and the `_next/` folder are both at the root of that subdomain.
5. Hard-refresh (or wait a minute for Hostinger CDN).

A ready zip is produced locally as `ecosoc-hostinger-upload.zip` (contents of `out/`).

## Correct site check

After upload, the homepage title should be **ECOSOC — SEAMUN I 2027** and you should see **Choose your committee** (vinyl wheel).  
If you still see **SEAMUN | ECOSOC Committee** with Overview/Topics/FAQ links, the old Hostinger files were not replaced.
