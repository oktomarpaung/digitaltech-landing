# Hostinger Static Deploy

Project ini adalah static export Next.js. Deploy production harus memakai isi folder `out/` langsung di `public_html`, bukan Node.js Web App runtime.

## Build dan Package

Jalankan dari root project:

```powershell
npm run build
npm run package:hostinger
```

Atau sekali jalan:

```powershell
npm run build:hostinger
```

Output ZIP:

```text
digitaltechsolusi-out.zip
```

ZIP ini berisi isi folder `out/`, bukan folder `out` itu sendiri.

## Struktur Benar di Hostinger

Setelah extract ZIP di `public_html`, struktur harus seperti ini:

```text
public_html/index.html
public_html/.htaccess
public_html/_next/
public_html/screenshots/
public_html/logo-dtn.png
public_html/og-digitaltech.png
public_html/deploy-check.txt
```

Struktur yang salah:

```text
public_html/out/index.html
```

## Checklist Deploy

1. Buka File Manager Hostinger.
2. Masuk ke folder `public_html`.
3. Hapus isi `public_html` lama untuk domain ini.
4. Upload `digitaltechsolusi-out.zip`.
5. Extract ZIP di dalam `public_html`.
6. Pastikan `index.html` dan `_next/` langsung berada di `public_html`.
7. Pastikan tidak terbentuk folder `public_html/out/`.
8. Pastikan `.htaccess` ada di `public_html`.
9. Flush cache Hostinger.
10. Buka `https://digitaltechsolusi.com/deploy-check.txt`.
11. Pastikan isinya: `DigitalTech static export OK`.
12. Buka `https://digitaltechsolusi.com/og-digitaltech.png`.
13. Buka `https://digitaltechsolusi.com/`.

## Catatan Penting

- Jangan arahkan domain utama ke Node.js Web App runtime.
- Jangan menjalankan `npm start` untuk production landing page ini.
- Jika halaman utama masih 503, cek kembali apakah domain masih terhubung ke Node.js runtime, Passenger, proxy, atau konfigurasi app lama di panel hosting.
- Untuk static hosting, Hostinger harus membaca file dari `public_html/index.html`.
