'use client'
import { useState } from 'react'
import Link from 'next/link'
import { FaUserCircle, FaLock, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator, faShieldHalved } from '@fortawesome/free-solid-svg-icons'

export default function LoginPage() {
  const [tab, setTab] = useState('login')
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-32" style={{ background: 'linear-gradient(135deg,#0d1230 0%,#1b2357 100%)' }}>
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-6">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#F91750,#273277)' }}>
              <FontAwesomeIcon icon={faCalculator} className="text-white text-base" />
            </div>
            <span className="text-white font-bold text-xl" style={{ fontFamily: 'Playfair Display, serif' }}>TaxPro<span style={{ color: '#F91750' }}>CA</span></span>
          </Link>
          <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Welcome Back</h1>
          <p className="text-sm mt-1" style={{ color: '#64748b' }}>Access your client portal</p>
        </div>

        <div className="rounded-2xl p-8" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="flex gap-2 mb-6 rounded-xl p-1" style={{ background: 'rgba(255,255,255,0.06)' }}>
            {['login', 'register'].map(t => (
              <button key={t} onClick={() => setTab(t)}
                className="flex-1 py-2 rounded-lg text-sm font-semibold transition-all capitalize"
                style={tab === t ? { background: '#F91750', color: 'white' } : { color: '#64748b' }}
              >
                {t === 'login' ? 'Login' : 'Register'}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {tab === 'register' && (
              <div className="relative">
                <FaUserCircle className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input type="text" placeholder="Full Name" className="w-full rounded-xl px-4 py-3 pl-11 text-sm text-white placeholder-gray-500 focus:outline-none" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }} />
              </div>
            )}
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <input type="email" placeholder="Email Address" className="w-full rounded-xl px-4 py-3 pl-11 text-sm text-white placeholder-gray-500 focus:outline-none" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }} />
            </div>
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <input type="password" placeholder="Password" className="w-full rounded-xl px-4 py-3 pl-11 text-sm text-white placeholder-gray-500 focus:outline-none" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }} />
            </div>
            {tab === 'register' && (
              <div className="relative">
                <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input type="tel" placeholder="Phone Number" className="w-full rounded-xl px-4 py-3 pl-11 text-sm text-white placeholder-gray-500 focus:outline-none" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }} />
              </div>
            )}
            <button className="w-full text-white font-semibold py-3 rounded-xl text-sm flex items-center justify-center gap-2" style={{ background: 'linear-gradient(135deg,#F91750,#d4103f)' }}>
              <FontAwesomeIcon icon={faShieldHalved} />
              {tab === 'login' ? 'Login to Portal' : 'Create Account'}
            </button>
          </div>
          {tab === 'login' && <p className="text-center text-xs mt-4" style={{ color: '#475569' }}><Link href="#" style={{ color: '#F91750' }}>Forgot password?</Link></p>}
        </div>
        <p className="text-center text-xs mt-6" style={{ color: '#334155' }}>New client? <Link href="/contact" style={{ color: '#F91750' }}>Book a free consultation first</Link></p>
      </div>
    </div>
  )
}
