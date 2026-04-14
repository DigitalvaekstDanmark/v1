'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.id]: e.target.value }))

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      alert('Udfyld venligst navn, e-mail og besked.')
      return
    }

    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="bg-white border border-[#E4E1D9] rounded-[22px] p-10">
      <div className="mb-5">
        <label htmlFor="name" className="block text-[13px] font-medium text-navy mb-1.5">Navn</label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder="Dit fulde navn"
          className="w-full px-4 py-3 border border-[#E4E1D9] rounded-[8px] text-[15px] text-navy bg-[#F7F5F0] outline-none focus:border-accent focus:bg-white transition-all duration-200 font-body"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="email" className="block text-[13px] font-medium text-navy mb-1.5">E-mail</label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="din@email.dk"
          className="w-full px-4 py-3 border border-[#E4E1D9] rounded-[8px] text-[15px] text-navy bg-[#F7F5F0] outline-none focus:border-accent focus:bg-white transition-all duration-200 font-body"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="company" className="block text-[13px] font-medium text-navy mb-1.5">Virksomhed (valgfrit)</label>
        <input
          id="company"
          type="text"
          value={form.company}
          onChange={handleChange}
          placeholder="Virksomhedens navn"
          className="w-full px-4 py-3 border border-[#E4E1D9] rounded-[8px] text-[15px] text-navy bg-[#F7F5F0] outline-none focus:border-accent focus:bg-white transition-all duration-200 font-body"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="message" className="block text-[13px] font-medium text-navy mb-1.5">Besked</label>
        <textarea
          id="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Fortæl os om dit projekt eller din udfordring..."
          rows={5}
          className="w-full px-4 py-3 border border-[#E4E1D9] rounded-[8px] text-[15px] text-navy bg-[#F7F5F0] outline-none focus:border-accent focus:bg-white transition-all duration-200 resize-none font-body"
        />
      </div>

      {status === 'success' ? (
        <div className="w-full py-4 bg-[#E6F7EF] text-green rounded-[8px] text-[15px] font-medium text-center">
          ✓ Besked sendt – vi vender tilbage snart!
        </div>
      ) : (
        <button
          onClick={handleSubmit}
          disabled={status === 'loading'}
          className="w-full py-4 bg-accent text-white rounded-[8px] text-[15px] font-medium flex items-center justify-center gap-2 hover:bg-[#1459CC] hover:-translate-y-px transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <>
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
              </svg>
              Sender...
            </>
          ) : status === 'error' ? (
            'Noget gik galt – prøv igen'
          ) : (
            <>
              Send besked
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </>
          )}
        </button>
      )}

      <p className="text-[12px] text-[#8A96A8] text-center mt-3">
        🔒 Dine oplysninger behandles fortroligt og deles ikke med tredjepart.
      </p>
    </div>
  )
}
