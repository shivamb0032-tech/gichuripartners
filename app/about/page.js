

export default function AboutPage() {
  return (
    <>
      <PageHeader breadcrumb={[{ label: 'About Us' }]} badge="About TaxProCA" title="15 Years of Trusted Financial Excellence" subtitle="We started with a simple mission: make professional CA and legal services accessible to every business in India." />

      <section className="px-4 py-20 bg-white md:px-8">
        <div className="grid items-center gap-16 mx-auto max-w-7xl lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full" style={{ background: 'rgba(249,23,80,0.08)', color: '#F91750' }}>Our Story</span>
            <h2 className="mb-6 text-4xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>From a Small Office to Pan-India Presence</h2>
            <p className="mb-4 leading-relaxed text-gray-500">Founded in 2010 in Mumbai by CA Rajesh Gupta, TaxProCA began as a boutique firm serving startups and SMEs. Our client-first philosophy and deep technical expertise quickly earned us trust across the industry.</p>
            <p className="mb-4 leading-relaxed text-gray-500">Today, we serve 10,000+ clients across 25+ states with a team of 50+ Chartered Accountants, legal experts, and compliance professionals — all united by our commitment to accurate, timely, and ethical service.</p>
            <p className="mb-8 leading-relaxed text-gray-500">Whether you're a first-time entrepreneur or a growing enterprise, TaxProCA is your trusted financial partner for every milestone.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl" style={{ background: 'linear-gradient(135deg,#F91750,#d4103f)' }}>
              Work With Us <FaArrowRight className="text-xs" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {statsData.map((s) => (
              <div key={s.l} className="p-6 text-center transition-all duration-300 border border-gray-100 rounded-2xl hover:shadow-lg">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-xl" style={{ background: 'linear-gradient(135deg,rgba(249,23,80,0.1),rgba(39,50,119,0.1))' }}>
                  <FontAwesomeIcon icon={s.faIcon} className="text-xl" style={{ color: '#273277' }} />
                </div>
                <div className="mb-1 text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#F91750' }}>{s.n}</div>
                <div className="text-sm text-gray-500">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <h2 className="mb-4 text-4xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="p-6 text-center transition-all duration-300 bg-white border border-gray-100 rounded-2xl hover:shadow-lg card-hover">
                <div className="flex items-center justify-center mx-auto mb-4 w-14 h-14 rounded-2xl" style={{ background: 'linear-gradient(135deg,#F91750,#273277)' }}>
                  <FontAwesomeIcon icon={v.faIcon} className="text-xl text-white" />
                </div>
                <h4 className="mb-2 font-bold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>{v.title}</h4>
                <p className="text-xs leading-relaxed text-gray-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 bg-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <h2 className="mb-4 text-4xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>Meet Our Leadership</h2>
            <p className="max-w-xl mx-auto text-gray-500">Experienced professionals dedicated to your financial success.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <div key={m.name} className="p-6 text-center transition-all duration-300 bg-white border border-gray-100 rounded-2xl hover:shadow-xl card-hover">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-lg font-bold text-white rounded-2xl" style={{ background: 'linear-gradient(135deg,#F91750,#273277)' }}>
                  {m.avatar}
                </div>
                <h4 className="mb-1 font-bold text-gray-900">{m.name}</h4>
                <p className="mb-2 text-xs font-semibold" style={{ color: '#F91750' }}>{m.role}</p>
                <p className="mb-1 text-xs text-gray-400">{m.spec}</p>
                <p className="mb-4 text-xs text-gray-300">{m.exp} experience</p>
                <div className="flex justify-center gap-2">
                  {[FaLinkedinIn, FaTwitter].map((Icon, i) => (
                    <span key={i} className="flex items-center justify-center w-8 h-8 text-xs text-gray-400 transition-colors rounded-lg cursor-pointer hover:text-white" style={{ background: '#f8fafc' }}>
                      <Icon />
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-16 overflow-hidden" style={{ background: 'linear-gradient(135deg,#273277,#1b2357)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px,#F91750 1px,transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="relative max-w-3xl mx-auto text-center">
          <h3 className="mb-4 text-3xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Ready to Work With Us?</h3>
          <p className="mb-8" style={{ color: '#a5b4fc' }}>Book a free consultation and let's discuss how we can help your business thrive.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold text-white transition-all rounded-xl" style={{ background: '#F91750' }}>
            Get Started Today <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </section>
    </>
  )
}
