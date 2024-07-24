import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Logo from "./images/logo.svg";
import Modal from "./Modal";
import { FaUser, FaSearch, FaHeart } from "react-icons/fa";
import Footer_second from "./images/footer_second.png";
import Link from "next/link";
import Footer from "./components/Footer";
import UserIcon from "./UserIcon";

const inter = Inter({ subsets: ["latin"] });

const DashboardLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
          <nav className="fixed top-0 left-0 w-full bg-white text-black p-4 shadow-md z-50">
            <div className="container mx-auto flex justify-between items-center">
              <Link href="/">
                <Image
                  src={Logo}
                  alt="Logo"
                  width={100}
                  height={40}
                  className="transition-transform duration-300 transform hover:scale-110"
                />
              </Link>
              <div className="flex space-x-12">
                <Link
                  href="/"
                  className="relative inline-block text-gray-700 font-bold hover:text-orange-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-orange-500 after:transform after:scale-x-0 after:origin-bottom-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  Home
                </Link>
                <Link
                  href="/shop"
                  className="relative inline-block text-gray-700 font-bold hover:text-orange-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-orange-500 after:transform after:scale-x-0 after:origin-bottom-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  Shop
                </Link>
                <Link
                  href="/about"
                  className="relative inline-block text-gray-700 font-bold hover:text-orange-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-orange-500 after:transform after:scale-x-0 after:origin-bottom-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="relative inline-block text-gray-700 font-bold hover:text-orange-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-orange-500 after:transform after:scale-x-0 after:origin-bottom-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  Contact
                </Link>
              </div>
              <div className="flex space-x-6">
                <UserIcon/>
                <FaSearch className="w-5 h-5 mr-2 transform transition-transform duration-500 ease-in-out hover:rotate-[360deg]" />
                <FaHeart className="w-5 h-5 mr-2 transform transition-transform duration-500 ease-in-out hover:rotate-[360deg]" />
                <Modal />
              </div>
            </div>
          </nav>
          <main className="flex-grow container mx-auto p-8 bg-white shadow-lg rounded-lg mt-16"> {/* Adjusted mt-16 to account for the fixed navbar height */}
            {children}
          </main>
          <Image src={Footer_second} alt="footer" className="w-screen h-full" />
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
