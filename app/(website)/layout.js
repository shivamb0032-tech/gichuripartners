import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Popup from '@/components/Popup';

export default function WebsiteLayout({ children }) {
  return (
    <>
      <Navbar />
      <Popup/>
      <main>{children}</main>
      <Footer />
    </>
  )
}