import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Responsive Food App",
  description: "This is a recruitment task from IRD Foundation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-[1920px] mx-auto bg-slate-500">
        <Header />
        {children}
      </body>
    </html>
  );
}
