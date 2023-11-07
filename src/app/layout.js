import "./globals.css";

export const metadata = {
  title: "Responsive Food App",
  description: "This is a recruitment task from IRD Foundation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
