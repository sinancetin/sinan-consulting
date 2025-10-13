# Stratejik Satış & E-Ticaret Danışmanlığı — Tek Sayfa Site (Temiz Paket)

## Hızlı Kurulum (Vercel CLI — önerilen)
1) Zip'i çıkarın, klasöre girin:
```
npm i -g vercel
npm i
vercel
```
Sorulara Enter / Y / N olarak geçin. Sonunda size bir URL verir.
Prod için: `vercel --prod`.

## Tarayıcıdan (Vercel + GitHub)
- GitHub'da yeni repo açın, **klasörün İÇİNDEKİ dosyaları** yükleyin (klasörü değil).
- Vercel → Add New → Import Git Repository → Deploy.

## Kişiselleştirme
`app/page.tsx` içinde en üstteki sabitleri düzenleyin:
- `EMAIL` → e-posta
- `PHONE` → telefon
- `WHATSAPP` → https://wa.me/90…
- `FORMSPREE` → Formspree URL (opsiyonel)
