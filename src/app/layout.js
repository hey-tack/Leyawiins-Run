import "./globals.css";

export const metadata = {
  title: "Leyawiins' Run",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
