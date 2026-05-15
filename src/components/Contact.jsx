import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../lang.jsx';

const CONTACT_BG = 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1600&q=70&fit=crop';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', interest: '' });
  const [sent, setSent] = useState(false);
  const { t } = useLang();

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
      <div className="bg-fixed" style={{
        padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,60px)',
        backgroundImage: `url(${CONTACT_BG})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(7,5,10,0.88)' }} />
        <div className="container" style={{ position: 'relative' }}>
          <div className="contact-grid">
            <div>
              <p className="section-label">{t.getInTouch}</p>
              <h2 className="section-title" style={{ marginBottom: 24 }}>
                {t.letsTalk} <em>{t.coffee}</em>
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
                      <label style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,236,215,0.4)', display: 'block', marginBottom: 8 }}>{t.yourName} *</label>
                      <input required style={inputStyle} placeholder="Full Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                        onFocus={e => e.target.style.borderColor = '#C27C3A'} onBlur={e => e.target.style.borderColor = 'rgba(245,236,215,0.15)'} />
                    </div>
                    <div>
                      <label style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,236,215,0.4)', display: 'block', marginBottom: 8 }}>{t.email} *</label>
                      <input required type="email" style={inputStyle} placeholder="email@company.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                        onFocus={e => e.target.style.borderColor = '#C27C3A'} onBlur={e => e.target.style.borderColor = 'rgba(245,236,215,0.15)'} />
                    </div>
                  </div>
                  <div>
                    <label style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,236,215,0.4)', display: 'block', marginBottom: 8 }}>{t.company}</label>
                    <input style={inputStyle} placeholder="Your company name" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })}
                      onFocus={e => e.target.style.borderColor = '#C27C3A'} onBlur={e => e.target.style.borderColor = 'rgba(245,236,215,0.15)'} />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,236,215,0.4)', display: 'block', marginBottom: 8 }}>{t.interestedIn}</label>
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
                    <label style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,236,215,0.4)', display: 'block', marginBottom: 8 }}>{t.message} *</label>
                    <textarea required rows={5} style={{ ...inputStyle, resize: 'vertical' }} placeholder="Tell us about your requirements..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      onFocus={e => e.target.style.borderColor = '#C27C3A'} onBlur={e => e.target.style.borderColor = 'rgba(245,236,215,0.15)'} />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px' }}>
                    {t.sendMessage}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ background: '#040302', borderTop: '1px solid rgba(245,236,215,0.06)' }}>
        <style>{`
          .ft-link { font-family:'DM Sans',sans-serif; font-size:.84rem; font-weight:300; color:rgba(245,236,215,.5); text-decoration:none; display:flex; align-items:center; gap:7px; padding:5px 0; transition:color .2s; }
          .ft-link:hover { color:#C27C3A; }
          .ft-link:hover .ft-arr { opacity:1; transform:translateX(3px); }
          .ft-arr { opacity:0; transition:all .2s; font-size:.7rem; color:#C27C3A; }
          .ft-social { display:inline-flex; width:38px; height:38px; border-radius:9px; align-items:center; justify-content:center; background:rgba(255,255,255,.03); border:1px solid rgba(245,236,215,.07); transition:all .22s; }
          .ft-social:hover { background:rgba(194,124,58,.15); border-color:rgba(194,124,58,.35); transform:translateY(-2px); }
          .ft-col-title { font-family:'DM Sans',sans-serif; font-size:.6rem; letter-spacing:.22em; text-transform:uppercase; color:rgba(194,124,58,.7); margin-bottom:18px; }
          @media(max-width:768px){ .ft-grid{ grid-template-columns:1fr 1fr !important; } .ft-brand{ grid-column:1/-1; } }
          @media(max-width:480px){ .ft-grid{ grid-template-columns:1fr !important; } }
        `}</style>

        {/* Main grid */}
        <div className="container" style={{ padding: 'clamp(50px,7vw,80px) clamp(20px,5vw,60px) clamp(30px,4vw,50px)' }}>
          <div className="ft-grid" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 'clamp(30px,4vw,60px)' }}>

            {/* Brand column */}
            <div className="ft-brand">
              <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <img src="/logo.png" alt="Birhan Coffee" style={{ width: 42, height: 42, objectFit: 'contain', borderRadius: '50%', border: '2px solid rgba(194,124,58,0.4)', boxShadow: '0 0 18px rgba(194,124,58,.25)' }} />
                <div>
                  <div style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.1rem', fontWeight: 700, color: '#F5ECD7', lineHeight: 1 }}>Birhan Coffee</div>
                  <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.58rem', letterSpacing: '.22em', textTransform: 'uppercase', color: 'rgba(194,124,58,.7)', marginTop: 3 }}>PLC · Est. 2019</div>
                </div>
              </Link>
              <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, fontSize: '.85rem', color: 'rgba(245,236,215,.38)', lineHeight: 1.75, maxWidth: 260, marginBottom: 28 }}>
                Premium Ethiopian Arabica — direct from farm to your cup. Yirgacheffe, Jimma, Masha &amp; beyond.
              </p>
              {/* Socials */}
              <div style={{ display: 'flex', gap: 10 }}>
                {[
                  { title: 'Facebook', href: 'https://facebook.com/birhancoffee', svg: <svg viewBox="0 0 24 24" fill="none" width="18" height="18"><path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h2V2z" stroke="#F5ECD7" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" /></svg> },
                  { title: 'Instagram', href: 'https://instagram.com/birhancoffee', svg: <svg viewBox="0 0 24 24" fill="none" width="18" height="18"><rect x="3" y="3" width="18" height="18" rx="5" stroke="#F5ECD7" strokeWidth={1} /><path d="M16 11.37A4 4 0 1 1 12.63 8" stroke="#F5ECD7" strokeWidth={1} strokeLinecap="round" /><path d="M17.5 6.5h.01" stroke="#F5ECD7" strokeWidth={1} strokeLinecap="round" /></svg> },
                  { title: 'LinkedIn', href: 'https://linkedin.com/company/birhancoffee', svg: <svg viewBox="0 0 24 24" fill="none" width="18" height="18"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2" stroke="#F5ECD7" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" /><rect x="2" y="9" width="4" height="12" rx="1" stroke="#F5ECD7" strokeWidth={1} /><circle cx="4" cy="4" r="2" stroke="#F5ECD7" strokeWidth={1} /></svg> },
                  { title: 'Twitter / X', href: 'https://twitter.com/birhancoffee', svg: <svg viewBox="0 0 24 24" fill="none" width="18" height="18"><path d="M4 4l16 16M4 20L20 4" stroke="#F5ECD7" strokeWidth={1} strokeLinecap="round" /></svg> },
                ].map(s => (
                  <a key={s.title} href={s.href} target="_blank" rel="noreferrer" title={s.title} aria-label={s.title} className="ft-social">
                    {s.svg}
                  </a>
                ))}
                {/* WhatsApp separate so we can use onClick */}
                <a
                  href="https://wa.me/251911243099?text=Hello%2C%20I%27m%20interested%20in%20Birhan%20Coffee."
                  target="_blank"
                  rel="noreferrer"
                  title="WhatsApp"
                  aria-label="WhatsApp"
                  className="ft-social"
                >
                  <svg viewBox="0 0 24 24" fill="none" width="18" height="18"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="#F5ECD7" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <div className="ft-col-title">Explore</div>
              {[
                { label: 'Home',        path: '/' },
                { label: 'Farm to Cup', path: '/farmtocup' },
                { label: 'Our Coffees', path: '/coffees' },
                { label: 'Wholesale',    path: '/wholesale' },
                { label: 'Our Story',   path: '/story' },
                { label: 'CSR',         path: '/csr' },
                { label: 'Gallery',     path: '/gallery' },
              ].map(l => (
                <Link key={l.path} to={l.path} className="ft-link">
                  <span className="ft-arr">→</span>{l.label}
                </Link>
              ))}
            </div>

            {/* Trust */}
            <div>
              <div className="ft-col-title">Our Story</div>
              {[
                { label: '⭐ Testimonials',   path: '/testimonials' },
                { label: '🏆 Certifications', path: '/certifications' },
                { label: '🗺️ Origins Map',    path: '/origins-map' },
                { label: '✍️ Blog & Journal', path: '/blog' },
                { label: '❓ FAQ',            path: '/faq' },
                { label: '🌍 CSR Report',     path: '/csr-report' },
              ].map(l => (
                <Link key={l.path} to={l.path} className="ft-link">
                  <span className="ft-arr">→</span>{l.label}
                </Link>
              ))}
            </div>

            {/* Contact */}
            <div>
              <div className="ft-col-title">Get In Touch</div>
              <a href="https://wa.me/251911243099?text=Hello%2C%20I%27m%20interested%20in%20Birhan%20Coffee." target="_blank" rel="noreferrer" className="ft-link">
                <span className="ft-arr">→</span>💬 WhatsApp Us
              </a>
              {[
                { label: '📦 Request a Sample', path: '/sample-request' },
                { label: '✉️ Contact Us', path: '/contact' },
              ].map(l => (
                <Link key={l.path} to={l.path} className="ft-link">
                  <span className="ft-arr">→</span>{l.label}
                </Link>
              ))}
              <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <a href="mailto:info@birhancoffee.com" className="ft-link">📧 info@birhancoffee.com</a>
                <a href="tel:+2510911243099" className="ft-link">📞 +251 091 124 3099</a>
                <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.82rem', color: 'rgba(245,236,215,.35)', display:'flex', gap:7, alignItems:'center' }}>📍 Bole Sub-City, Addis Ababa</span>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(245,236,215,.05)', padding: '18px clamp(20px,5vw,60px)' }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
            <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.72rem', color: 'rgba(245,236,215,.2)' }}>
              {t.allRights}
            </span>
            <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.68rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(194,124,58,.35)' }}>
              {t.developedBy}
            </span>
            <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.68rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(194,124,58,.35)' }}>
              {t.tagline}
            </span>
          </div>
        </div>
      </footer>
    </section>
  );
}
