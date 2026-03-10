import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { config } from "@fortawesome/fontawesome-svg-core";  
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const metadata = {
  title: 'TaxPro Consultancy | CA & Tax Experts',
  description: "India's trusted CA & Tax Consulting firm. Expert services in GST, Income Tax, Business Registration, Compliance & more.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
