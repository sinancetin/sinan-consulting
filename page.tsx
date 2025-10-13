"use client";

export default function ConsultingLanding() {
  const year = new Date().getFullYear();
  const EMAIL = "info@ornek.com";
  const PHONE = "+90XXXXXXXXXX";
  const WHATSAPP = "https://wa.me/90XXXXXXXXXX";
  const FORMSPREE = "https://formspree.io/f/XXXXX";

  return (
    <div>
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#hero" className="font-semibold tracking-tight text-xl">Sinan Çetin Parlak</a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#services" className="hover:text-gray-700">Hizmetler</a>
            <a href="#model" className="hover:text-gray-700">Hizmet Modeli</a>
            <a href="#expertise" className="hover:text-gray-700">Uzmanlık</a>
            <a href="#about" className="hover:text-gray-700">Hakkımda</a>
            <a href="#contact" className="hover:text-gray-700">İletişim</a>
          </nav>
          <a href="#contact" className="inline-flex items-center rounded-xl border px-4 py-2 text-sm hover:shadow-sm">İletişime Geç</a>
        </div>
      </header>

      <section id="hero" className="bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-gray-600">
              Stratejik Satış & E-Ticaret Danışmanlığı
            </div>
            <h1 className="mt-5 text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
              Kurumsal Tecrübe + Global E-Ticaret Uzmanlığı
            </h1>
            <p className="mt-4 text-gray-600 md:text-lg">
              Süreç farkındalığı, kredi risk yönetimi ve satış geliştirme ile sağlam bir temel; Amazon & Etsy’de uçtan uca büyüme ile sürdürülebilir sonuç.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#services" className="rounded-xl bg-black text-white px-5 py-3 text-sm hover:bg-gray-800">Hizmetleri Gör</a>
              <a href="#contact" className="rounded-xl border px-5 py-3 text-sm hover:shadow">Toplantı Planla</a>
            </div>
          </div>
          <div className="md:justify-self-end">
            <div className="aspect-[4/3] rounded-3xl border shadow-sm bg-white grid place-items-center p-8">
              <div className="text-center">
                <div className="text-5xl">📈</div>
                <p className="mt-3 text-sm text-gray-600">Strateji • Sistem • Sürdürülebilir Satış</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Hizmet Alanları</h2>
          <p className="mt-2 text-gray-600 max-w-3xl">
            Kurumsal danışmanlık disipliniyle başlayan ve Amazon & Etsy tarafına stratejik geçiş yapan iki aşamalı yapı.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border p-6 hover:shadow-sm transition">
              <h3 className="text-xl font-semibold">A. Kurumsal Danışmanlık</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>• Süreç analizi & haritalama, darboğaz tespiti</li>
                <li>• Satış geliştirme, hedef/KPI mimarisi, CRM entegrasyonu</li>
                <li>• <span className="font-medium">Kredi risk yönetimi:</span> risk ölçümü, segmentasyon, erken uyarı</li>
                <li>• Proje/Değişim yönetimi, OKR-bazlı takip, veri odaklı karar</li>
                <li>• Operasyonel farkındalık ve dijitalleşme altyapısı</li>
              </ul>
            </div>

            <div className="rounded-3xl border p-6 hover:shadow-sm transition">
              <h3 className="text-xl font-semibold">B. Amazon & Etsy Danışmanlığı</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>• Mağaza kurulumu: şirket, marka, banka; vergi/ödeme (ABD/AB)</li>
                <li>• Ürün lansmanı & SEO: kategori, fiyat, rekabet analizi</li>
                <li>• Reklam & büyüme: Amazon Ads / Etsy Ads optimizasyonu</li>
                <li>• Operasyon: sipariş-kargo, iade, yorum & itibar yönetimi</li>
                <li>• <span className="font-medium">Hazır satış hesaplarının devri / satışı</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="model" className="border-t bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Hizmet Modeli</h2>
          <div className="mt-8 grid md:grid-cols-4 gap-6">
            {[
              {title: 'Kurumsal Danışmanlık', desc: 'Süreç & satış geliştirme, kredi risk ve proje yönetimi', tag: '4–8 hafta'},
              {title: 'E-Ticaret Kurulumu', desc: 'Amazon & Etsy altyapısı, ürün lansmanı', tag: '4–6 hafta'},
              {title: 'Stratejik Büyüme', desc: 'Reklam optimizasyonu, büyüme planı, raporlama', tag: 'Aylık'},
              {title: 'Hesap Devri', desc: 'Aktif satış hesaplarının analizi ve transferi', tag: 'Proje Bazlı'},
            ].map((c,i)=> (
              <div key={i} className="rounded-3xl border bg-white p-6 hover:shadow-sm">
                <div className="text-xs inline-flex rounded-full border px-2 py-1">{c.tag}</div>
                <h3 className="mt-4 font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-gray-700">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="expertise" className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Uzmanlık</h2>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700">
            {[
              'Satış & süreç geliştirme',
              'Kredi risk yönetimi',
              'Proje & dönüşüm programları',
              'Amazon & Etsy global satış',
              'SEO & reklam optimizasyonu',
              'Ev tekstili kategorisi deneyimi',
              'Hazır hesap kurulumu & devri',
              'Operasyonel sistem tasarımı',
            ].map((item, i)=> (
              <div key={i} className="rounded-2xl border p-4 hover:shadow-sm">• {item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-t bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Hakkımda</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Ben <span className="font-medium">Sinan Çetin Parlak</span>. 14 yıl bankacılık sektöründe süreç geliştirme, satış yönetimi,
              <span className="font-medium"> kredi risk yönetimi</span> ve proje yönetimi alanlarında görev yaptım. Son 10 yıldır ise Amazon ve Etsy platformlarında
              ev tekstili ürünleri odağında global satış operasyonları yürütüyorum. Kurumsal yapı ile dijital ticaretin çevikliğini birleştirerek markalara
              <span className="font-medium"> ölçeklenebilir satış modeli</span> kurmaları için stratejik danışmanlık sunuyorum.
            </p>
          </div>
          <div className="rounded-3xl border bg-white p-6">
            <h3 className="font-semibold">Öne Çıkan Deneyimler</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              <li>• Bankacılıkta satış geliştirme, süreç ve kredi risk projeleri</li>
              <li>• Amazon ABD pazarında ev tekstili operasyonları</li>
              <li>• Etsy mağaza lansman ve büyüme stratejileri</li>
              <li>• Hazır satış hesaplarının değerleme, devir ve geçiş danışmanlığı</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">İletişim & İşbirliği Kanalları</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6 text-sm">
            <div className="rounded-3xl border p-6">
              <div className="text-gray-500">Danışman</div>
              <div className="mt-1 font-medium">Sinan Çetin Parlak</div>
              <div className="mt-4">Amazon & Etsy Global Satış Danışmanı</div>
            </div>
            <div className="rounded-3xl border p-6">
              <div className="text-gray-500">E-posta</div>
              <a href={`mailto:${EMAIL}`} className="mt-1 font-medium text-black underline">{EMAIL}</a>
              <div className="mt-4 text-gray-500">Telefon</div>
              <a href={`tel:${PHONE}`} className="font-medium text-black underline">{PHONE}</a>
              <div className="mt-4 text-gray-500">WhatsApp</div>
              <a href={WHATSAPP} className="font-medium text-black underline" target="_blank">Mesaj Gönder</a>
            </div>
            <div className="rounded-3xl border p-6">
              <div className="text-gray-500">Ön Görüşme</div>
              <p className="mt-1">Kısa bir form bırakın; size dönüş yapayım.</p>
              <form action={FORMSPREE} method="POST" className="mt-4 flex flex-col gap-3">
                <input name="name" placeholder="Ad Soyad" className="border p-2 rounded" required />
                <input type="email" name="email" placeholder="E-posta" className="border p-2 rounded" required />
                <textarea name="message" placeholder="Kısaca mesajınız" className="border p-2 rounded h-28" />
                <button className="rounded-xl bg-black text-white px-4 py-2">Gönder</button>
              </form>
              <p className="text-xs text-gray-500 mt-2">Not: Formspree adresinizi FORMSPREE değişkenine yazın.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {year} Sinan Çetin Parlak — Strateji • Sistem • Sürdürülebilir Satış</div>
          <div className="flex gap-4">
            <a href="#services" className="hover:underline">Hizmetler</a>
            <a href="#model" className="hover:underline">Model</a>
            <a href="#contact" className="hover:underline">İletişim</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
