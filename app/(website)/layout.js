import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function WebsiteLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}