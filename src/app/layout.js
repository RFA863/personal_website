import "./globals.css";
import 'aos/dist/aos.css';

export const metadata = {
  title: "Rafi Fajrul Personal Website",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
