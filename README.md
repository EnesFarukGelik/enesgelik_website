# enesgelik_website

Tek sayfa portföy: kökte `index.html` (Google Fonts + inline CSS/JS). **TR / EN** dil seçimi yan menüde; tercih `localStorage` içinde saklanır.

Çeviri metinleri `scripts/build-i18n.mjs` içinde tanımlıdır; düzenledikten sonra:

```bash
node scripts/build-i18n.mjs
```

komutu `js/i18n-data.js` dosyasını yeniden üretir.

## Görseller

Dosyalar **`public/homepage/`** ve **`public/about/`** altında olmalı (ör. `ss1.png` … `ss4.png`, `enesvesika.jpeg`, `wite.png`). HTML bu yüzden `/public/homepage/...` ve `/public/about/...` adreslerini kullanır.

Yerelde `npx serve .` ile proje kökünden sununca bu yollar 200 döner.

Ayrıca `robots.txt` kökte; `public/robots.txt` isteğe bağlı yedek.

## Önizleme

```bash
npx serve .
```

Tarayıcıda genelde `http://localhost:3000`.

Cloudflare Pages: **Build command** boş, **output / kök** proje kökü (veya platformun statik site ayarı).
