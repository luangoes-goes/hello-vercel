import "./globals.css";

export const metadata = {
  title: "Hello World — Next.js na Vercel",
  description: "Página estática básica em Next.js, pronta para deploy na Vercel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
