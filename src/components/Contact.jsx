import { useState } from 'react';

const CONTACT_BG = 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1600&q=70&fit=crop';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', interest: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ name: '', email: '', company: '', message: '', interest: '' });
  };

  const inputStyle = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(245,236,215,0.15)',
    color: '#F5ECD7',
    padding: '14px 18px',
    borderRadius: 3,
    fontFamily: 'DM Sans, sans-serif',
    fontWeight: 300,
    fontSize: '0.9rem',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.3s',
  };

  return (
    <section id="contact" style={{ position: 'relative' }}>
      {/* Map/info band */}
      <div style={{
        padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,60px)',
        backgroundImage: `url(${CONTACT_BG})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(7,5,10,0.88)' }} />
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
            <div>
              <p className="section-label">Get In Touch</p>
              <h2 className="section-title" style={{ marginBottom: 24 }}>
                Let's Talk <em>Coffee</em>
              </h2>
              <div className="divider" />
              <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, color: 'rgba(245,236,215,0.6)', lineHeight: 1.8, marginBottom: 48, fontSize: '0.95rem' }}>
                Whether you're a specialty roaster, importer, distributor, or simply passionate about exceptional Ethiopian coffee — we'd love to hear from you.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {[
                  { icon: '📍', label: 'Address', val: 'Bole Sub-City, Addis Ababa, Ethiopia' },
                  { icon: '📞', label: 'Phone', val: '+251 091 124 3099' },
                  { icon: '✉️', label: 'Email', val: 'info@birhancoffee.com' },
                  { icon: '🌐', label: 'Website', val: 'www.birhancoffee.com' },
                ].map(({ icon, label, val }) => (
                  <div key={label} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: '50%',
                      background: 'rgba(194,124,58,0.15)', border: '1px solid rgba(194,124,58,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.1rem', flexShrink: 0,
                    }}>{icon}</div>
                    <div>
                      <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C27C3A', marginBottom: 2 }}>{label}</div>
                      <div style={{ fontFamily: 'DM Sans,sans-serif', color: 'rgba(245,236,215,0.75)', fontSize: '0.92rem' }}>{val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {sent ? (
                <div style={{
                  height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
                  padding: 40,
                }}>
                  <div style={{ fontSize: '4rem', marginBottom: 20 }}>☕</div>
                  <h3 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '2rem', color: '#F5ECD7', marginBottom: 12 }}>Message Received!</h3>
                  <p style={{ fontFamily: 'DM Sans,sans-serif', color: 'rgba(245,236,215,0.6)', lineHeight: 1.7 }}>Thank you for reaching out. A member of our team will respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <label style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,236,215,0.4)', display: 'block', marginBottom: 8 }}>Your Name *</label>
                      <input required style={inputStyle} placeholder="Full Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                        onFocus={e => e.target.style.borderColor = '#C27C3A'} onBlur={e => e.target.style.borderColor = 'rgba(245,236,215,0.15)'} />
                    </div>
                    <div>
                      <label style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,236,215,0.4)', display: 'block', marginBottom: 8 }}>Email *</label>
                      <input required type="email" style={inputStyle} placeholder="email@company.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                        onFocus={e => e.target.style.borderColor = '#C27C3A'} onBlur={e => e.target.style.borderColor = 'rgba(245,236,215,0.15)'} />
                    </div>
                  </div>
                  <div>
                    <label style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,236,215,0.4)', display: 'block', marginBottom: 8 }}>Company / Organisation</label>
                    <input style={inputStyle} placeholder="Your company name" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })}
                      onFocus={e => e.target.style.borderColor = '#C27C3A'} onBlur={e => e.target.style.borderColor = 'rgba(245,236,215,0.15)'} />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,236,215,0.4)', display: 'block', marginBottom: 8 }}>I'm interested in</label>
                    <select style={{ ...inputStyle, background: 'rgba(12,9,8,0.9)' }} value={form.interest} onChange={e => setForm({ ...form, interest: e.target.value })}>
                      <option value="">Select an option...</option>
                      <option>Wholesale / Bulk Green Beans</option>
                      <option>Roasted Coffee Import</option>
                      <option>Specialty / Single-Origin Lots</option>
                      <option>Partnership & Distribution</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,236,215,0.4)', display: 'block', marginBottom: 8 }}>Message *</label>
                    <textarea required rows={5} style={{ ...inputStyle, resize: 'vertical' }} placeholder="Tell us about your requirements..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      onFocus={e => e.target.style.borderColor = '#C27C3A'} onBlur={e => e.target.style.borderColor = 'rgba(245,236,215,0.15)'} />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px' }}>
                    Send Message ✦
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ background: '#040302', padding: 'clamp(40px,6vw,60px) clamp(20px,5vw,60px)', borderTop: '1px solid rgba(245,236,215,0.05)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'linear-gradient(135deg, #6B3A1F, #C27C3A)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem' }}>☕</div>
            <div>
              <div style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1rem', fontWeight: 700, color: '#F5ECD7' }}>Birhan Coffee PLC</div>
              <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(194,124,58,0.7)' }}>Addis Ababa · Est. 2019</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.75rem', color: 'rgba(245,236,215,0.25)' }}>
              © 2025 Birhan Coffee PLC. All rights reserved.
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 4 }}>
              <a href="mailto:info@birhancoffee.com" style={{ display: 'inline-flex', gap: 8, alignItems: 'center', textDecoration: 'none', color: 'rgba(245,236,215,0.75)', fontFamily: 'DM Sans,sans-serif', fontSize: '0.88rem' }} aria-label="Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display:'block' }}>
                  <path d="M3 6.5C3 5.67 3.67 5 4.5 5H19.5C20.33 5 21 5.67 21 6.5V17.5C21 18.33 20.33 19 19.5 19H4.5C3.67 19 3 18.33 3 17.5V6.5Z" stroke="#F5ECD7" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 6.5L12 12.5L3 6.5" stroke="#F5ECD7" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                info@birhancoffee.com
              </a>
              <a href="tel:+2510911243099" style={{ display: 'inline-flex', gap: 8, alignItems: 'center', textDecoration: 'none', color: 'rgba(245,236,215,0.75)', fontFamily: 'DM Sans,sans-serif', fontSize: '0.88rem' }} aria-label="Phone">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V20C22 21.1 21.1 22 20 22C10.61 22 3 14.39 3 5C3 3.9 3.9 3 5 3H8.09C8.6 3 9.07 3.21 9.39 3.58L11.7 6.42C11.92 6.71 11.88 7.09 11.6 7.33L9.99 8.7C10.89 11.06 12.94 13.11 15.31 14.01L16.68 12.4C16.92 12.12 17.3 12.08 17.59 12.3L20.42 14.61C20.79 14.93 21 15.4 21 15.91V19C21 19.55 20.55 20 20 20H17.5" stroke="#F5ECD7" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                +251 091 124 3099
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            {[
              {
                title: 'Facebook', href: 'https://facebook.com/birhancoffee', svg: (
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                    <path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h2V2z" stroke="#F5ECD7" strokeWidth={0.9} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )
              },
              {
                title: 'Instagram', href: 'https://instagram.com/birhancoffee', svg: (
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                    <rect x="3" y="3" width="18" height="18" rx="5" stroke="#F5ECD7" strokeWidth={0.9} />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8" stroke="#F5ECD7" strokeWidth={0.9} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.5 6.5h.01" stroke="#F5ECD7" strokeWidth={0.9} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )
              },
              {
                title: 'LinkedIn', href: 'https://linkedin.com/company/birhancoffee', svg: (
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2c-1.1 0-2 .9-2 2v7h-4V6h4v2" stroke="#F5ECD7" strokeWidth={0.9} strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="2" y="9" width="4" height="12" rx="1" stroke="#F5ECD7" strokeWidth={0.9} />
                    <circle cx="4" cy="4" r="2" stroke="#F5ECD7" strokeWidth={0.9} />
                  </svg>
                )
              },
              {
                title: 'Twitter', href: 'https://twitter.com/birhancoffee', svg: (
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43 1s-1.72.9-2.67 1.3A4.48 4.48 0 0 0 16 1c-2.4 0-4.34 1.95-4.34 4.36 0 .34.04.67.11.99A12.78 12.78 0 0 1 3 2.16s-4 9 5 13c-1.7.47-3.5.56-5.2.2 3.3 2.1 7.2 2.6 11 1.6 8-2.2 11-9 11-16.5v-.75A7.72 7.72 0 0 0 23 3z" stroke="#F5ECD7" strokeWidth={0.9} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )
              },
            ].map(s => (
              <a key={s.title} href={s.href} target="_blank" rel="noreferrer" title={s.title} aria-label={s.title} style={{ display: 'inline-flex', width: 36, height: 36, borderRadius: 8, alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(245,236,215,0.04)', color: '#F5ECD7', textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.background='rgba(194,124,58,0.12)'} onMouseLeave={e => e.currentTarget.style.background='rgba(255,255,255,0.02)'}>
                {s.svg}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
}
