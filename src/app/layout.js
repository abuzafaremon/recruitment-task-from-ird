import Header from "./components/Header";
import LeftNav from "./components/LeftNav";
import "./globals.css";

export const metadata = {
  title: "Responsive Food App",
  description: "This is a recruitment task from IRD Foundation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-[1920px] mx-auto relative">
          <Header />
          <div className="max-2xl:container">
            <LeftNav />
          </div>
          <div className="md:ml-[70px] bg-[#EEF0F2] rounded-xl p-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
