import "../globals.css";

export default function AdventLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="font-serif antialiased">
        <main className="min-h-screen bg-gray-100 py-8 sm:py-12">
          {children}
        </main>
      </body>
    </html>
  );
}
