import PageHeader from '@/components/PageHeader'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faTag, faNewspaper } from '@fortawesome/free-solid-svg-icons'

const posts = [
  { slug: 'gst-registration-guide-2024', title: 'Complete GST Registration Guide for Small Businesses in 2024', excerpt: 'Everything you need to know about GST registration — eligibility, documents, process, and common mistakes to avoid.', date: 'Dec 15, 2024', category: 'GST', readTime: '8 min' },
  { slug: 'private-limited-vs-llp', title: 'Private Limited vs LLP: Which is Better for Your Business?', excerpt: 'A detailed comparison of both structures across taxation, compliance, liability, and funding perspectives.', date: 'Dec 10, 2024', category: 'Business Registration', readTime: '10 min' },
  { slug: 'trademark-registration-benefits', title: '7 Reasons Why Every Business Needs a Registered Trademark', excerpt: 'Your brand is your most valuable asset. Here is why trademark registration is not optional in today\'s market.', date: 'Dec 5, 2024', category: 'Trademark', readTime: '6 min' },
  { slug: 'income-tax-saving-tips', title: 'Top 10 Legal Ways to Save Income Tax for Business Owners', excerpt: 'Maximize your savings with these CA-approved tax saving strategies for FY 2024-25.', date: 'Nov 28, 2024', category: 'Tax Planning', readTime: '12 min' },
  { slug: 'startup-india-registration', title: 'How to Get DPIIT Recognition for Your Startup (Step-by-Step)', excerpt: 'A complete guide to Startup India registration and the tax benefits you can unlock.', date: 'Nov 20, 2024', category: 'Startup', readTime: '7 min' },
  { slug: 'annual-compliance-checklist', title: 'Annual Compliance Checklist for Private Limited Companies 2024-25', excerpt: 'Don\'t miss any filing this year. Complete ROC compliance calendar for Pvt Ltd companies.', date: 'Nov 15, 2024', category: 'Compliance', readTime: '9 min' },
]

export default function BlogPage() {
  return (
    <>
      <PageHeader breadcrumb={[{ label: 'Blog' }]} badge="Knowledge Hub" title="CA & Tax Insights Blog" subtitle="Expert articles on GST, Income Tax, business registration, compliance, and legal matters." />
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 card-hover">
                <div className="h-40 flex items-center justify-center" style={{ background: 'linear-gradient(135deg,rgba(249,23,80,0.06),rgba(39,50,119,0.06))' }}>
                  <FontAwesomeIcon icon={faNewspaper} className="text-5xl" style={{ color: 'rgba(39,50,119,0.3)' }} />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full" style={{ background: 'rgba(249,23,80,0.08)', color: '#F91750' }}>
                      <FontAwesomeIcon icon={faTag} className="text-xs" /> {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-gray-400 text-xs">
                      <FontAwesomeIcon icon={faClock} className="text-xs" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#F91750] transition-colors leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>{post.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <p className="text-gray-400 text-xs">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
