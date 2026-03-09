import PageHeader from '@/components/PageHeader'
import Link from 'next/link'
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'

export default function BlogPostPage({ params }) {
  const title = params.slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
  return (
    <>
      <PageHeader breadcrumb={[{ label: 'Blog', href: '/blog' }, { label: title }]} badge="Article" title={title} subtitle="Published by CA Rajesh Gupta · December 2024 · 8 min read" />
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2 text-gray-600 leading-relaxed space-y-6 text-sm">
            <p>This comprehensive guide covers everything you need to know about this topic from a CA's perspective. Our expert team has compiled the most up-to-date information to help you make informed decisions for your business.</p>
            <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>Key Points to Understand</h2>
            <p>Understanding the regulatory landscape is crucial for every business owner. Here's what you need to know to stay compliant and take advantage of available benefits.</p>
            <ul className="space-y-3">
              {['Stay updated with the latest regulatory changes', 'File all returns before due dates to avoid penalties', 'Maintain proper documentation for all transactions', 'Seek professional advice for complex matters', 'Utilize available exemptions and deductions legally'].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <FaCheckCircle style={{ color: '#F91750' }} className="flex-shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
            <p>If you need expert assistance with any of these matters, our team of qualified CAs is ready to help. Book a free consultation today.</p>
          </article>
          <aside>
            <div className="rounded-2xl p-6 sticky top-24 border" style={{ background: 'linear-gradient(135deg,rgba(249,23,80,0.04),rgba(39,50,119,0.04))', borderColor: 'rgba(249,23,80,0.2)' }}>
              <h3 className="font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Need Expert Help?</h3>
              <p className="text-gray-500 text-sm mb-4">Talk to our CA team for personalized advice on this topic.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full text-white font-semibold py-3 rounded-xl text-sm" style={{ background: 'linear-gradient(135deg,#F91750,#d4103f)' }}>
                <FontAwesomeIcon icon={faHeadset} /> Book Free Consultation
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
