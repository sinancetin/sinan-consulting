export const metadata = {
  title: "Sinan Çetin Parlak — Stratejik Satış & E-Ticaret Danışmanlığı",
  description: "Kurumsal tecrübe + Global E-ticaret uzmanlığı: Strateji, sistem, sürdürülebilir satış.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="min-h-screen bg-white text-gray-900">{children}</body>
    </html>
  );
}
