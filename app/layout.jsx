import "./globals.css";

import NavBar from "@/Components/Header/NavBar";
import Footer from "@/Components/Footer/Footer";
import { CartProvider } from "./context/CartContext";

export const metadata = {
  title: "Autobotwa Assignment",
  description: "Next.js Ecommerce Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <NavBar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
