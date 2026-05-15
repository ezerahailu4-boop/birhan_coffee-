import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useLang, LANGUAGES } from '../lang.jsx';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  {
    label: 'Our Story', path: '/story',
    category: 'Builds Trust & Sales',
    dropdown: [
      { label: 'Testimonials',    path: '/testimonials',   icon: '⭐', desc: 'What our partners say' },
      { label: 'Certifications',  path: '/certifications', icon: '🏆', desc: 'Awards & credentials' },
      { label: 'Origins Map',     path: '/origins-map',    icon: '🗺️', desc: 'Explore our regions' },
      { label: 'Investor',        path: '/investor',       icon: '📊', desc: 'Financials & growth data' },
    ],
  },
  { label: 'Farm to Cup', path: '/farmtocup' },
  { label: 'Coffees',     path: '/coffees' },
  {
    label: 'About Us', path: '/csr',
    category: 'Engagement & Conversions',
    dropdown: [
      { label: 'Request a Sample', path: '/sample-request', icon: '📦', desc: 'Get a free sample' },
      { label: 'WhatsApp Us',      path: '/whatsapp',       icon: '💬', desc: 'Chat directly' },
      { label: 'Gallery',          path: '/gallery',        icon: '📷', desc: 'From farm to cup' },
    ],
  },
  {
    label: 'Contact', path: '/contact',
    category: 'Content & SEO',
    dropdown: [
      { label: 'Blog & Journal', path: '/blog', icon: '✍️', desc: 'Coffee stories & guides' },
      { label: 'FAQ',            path: '/faq',  icon: '❓', desc: 'Common questions' },
      { label: 'CSR Report',     path: '/csr-report', icon: '🌍', desc: 'Annual impact report' },
    ],
  },
];

export default function Navbar({ cartCount, onCartOpen }) {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [activeDD,  setActiveDD]  = useState(null);
  const [mobileExp, setMobileExp] = useState(null);
  const [langOpen,  setLangOpen]  = useState(false);
  const ddTimer = useRef(null);
  const location = useLocation();
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  // close everything on route change
  useEffect(() => {
    setMenuOpen(false);
    setActiveDD(null);
    setMobileExp(null);
  }, [location.pathname]);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const openDD  = (lbl) => { clearTimeout(ddTimer.current); setActiveDD(lbl); };
  const closeDD = ()    => { ddTimer.current = setTimeout(() => setActiveDD(null), 140); };

  return (
    <>
      <style>{`
        .nd-item { display:flex; align-items:center; gap:11px; padding:10px 16px; border-radius:8px; text-decoration:none; color:rgba(245,236,215,0.75); transition:background .18s,color .18s; font-family:'DM Sans',sans-serif; }
        .nd-item:hover { background:rgba(194,124,58,0.13); color:#F5ECD7; }
        .nd-item:hover .nd-arr { opacity:1; transform:translateX(4px); }
        .nd-arr { opacity:0; transition:all .18s; color:#C27C3A; font-size:.72rem; margin-left:auto; flex-shrink:0; }
        .nb-link { padding:8px 11px; border-radius:6px; display:flex; align-items:center; gap:5px; font-family:'DM Sans',sans-serif; font-size:.72rem; letter-spacing:.18em; text-transform:uppercase; text-decoration:none; transition:color .2s; }
        .nb-link:hover { color:#C27C3A !important; }
        .nb-cart:hover { border-color:rgba(194,124,58,.55) !important; color:#C27C3A !important; }
        .mob-sub-item { display:flex; align-items:center; gap:10px; padding:10px 14px; border-radius:8px; text-decoration:none; color:rgba(245,236,215,.72); font-family:'DM Sans',sans-serif; font-size:.85rem; transition:background .15s; }
        .mob-sub-item:hover, .mob-sub-item:active { background:rgba(194,124,58,.1); color:#F5ECD7; }
        @keyframes ddIn { from{opacity:0;transform:translateY(-7px) scale(.97)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes mobIn { from{opacity:0} to{opacity:1} }
        @keyframes subExpand { from{opacity:0;transform:translateY(-6px)} to{opacity:1;transform:translateY(0)} }
        @media(min-width:769px){ .nav-mobile-btn{display:none!important} }
        @media(max-width:768px){ .nav-desktop{display:none!important} .nav-mobile-btn{display:flex!important} }
      `}</style>

      {/* ── Top Bar ── */}
      <nav style={{
        position:'fixed', top:0, left:0, right:0, zIndex:900,
        padding: scrolled ? '13px clamp(16px,4vw,40px)' : '22px clamp(16px,4vw,40px)',
        display:'flex', alignItems:'center', justifyContent:'space-between',
        background: scrolled ? 'rgba(7,5,10,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(245,236,215,0.07)' : 'none',
        transition:'all .4s ease',
      }}>

        {/* Logo */}
        <NavLink to="/" style={{ textDecoration:'none', display:'flex', alignItems:'center', gap:11, flexShrink:0 }}>
          <img src="/logo.png" alt="Birhan Coffee" style={{ width:44, height:44, objectFit:'contain', borderRadius:'50%', boxShadow:'0 0 20px rgba(194,124,58,.35)', border:'2px solid rgba(194,124,58,0.4)' }} />
          <div>
            <div style={{ fontFamily:'Cormorant Garamond,serif', fontSize:'1.15rem', fontWeight:700, color:'#F5ECD7', lineHeight:1 }}>Birhan Coffee</div>
            <div style={{ fontFamily:'DM Sans,sans-serif', fontSize:'.6rem', letterSpacing:'.25em', textTransform:'uppercase', color:'rgba(194,124,58,.8)', marginTop:2 }}>PLC · Est. 2019</div>
          </div>
        </NavLink>

        {/* ── Desktop links ── */}
        <div className="nav-desktop" style={{ display:'flex', gap:4, alignItems:'center' }}>
          {NAV_LINKS.map(link => (
            <div key={link.path} style={{ position:'relative' }}
              onMouseEnter={() => link.dropdown && openDD(link.label)}
              onMouseLeave={() => link.dropdown && closeDD()}>

              <NavLink to={link.path} className="nb-link"
                style={({ isActive }) => ({ fontWeight: isActive ? 500 : 300, color: isActive ? '#C27C3A' : 'rgba(245,236,215,.65)' })}>
                {link.label}
                {link.dropdown && (
                  <span style={{ fontSize:'.48rem', opacity:.5, transition:'transform .22s', display:'inline-block', transform: activeDD === link.label ? 'rotate(180deg)' : 'none' }}>▼</span>
                )}
              </NavLink>

              {/* Dropdown */}
              {link.dropdown && activeDD === link.label && (
                <div onMouseEnter={() => openDD(link.label)} onMouseLeave={closeDD}
                  style={{
                    position:'absolute', top:'calc(100% + 12px)', left:'50%', transform:'translateX(-50%)',
                    background:'linear-gradient(160deg,#1c1007,#110a05)',
                    border:'1px solid rgba(194,124,58,.2)', borderRadius:14,
                    padding:10, minWidth:248,
                    boxShadow:'0 28px 70px rgba(0,0,0,.92), 0 0 0 1px rgba(194,124,58,.06)',
                    animation:'ddIn .22s cubic-bezier(.22,1,.36,1)', zIndex:910,
                  }}>
                  {/* Caret */}
                  <div style={{ position:'absolute', top:-6, left:'50%', width:11, height:11, background:'#1c1007', border:'1px solid rgba(194,124,58,.2)', borderRight:'none', borderBottom:'none', transform:'translateX(-50%) rotate(45deg)' }} />
                  {/* Category */}
                  <div style={{ fontFamily:'DM Sans,sans-serif', fontSize:'.54rem', letterSpacing:'.24em', textTransform:'uppercase', color:'rgba(194,124,58,.5)', padding:'3px 16px 9px', borderBottom:'1px solid rgba(245,236,215,.06)', marginBottom:5 }}>
                    {link.category}
                  </div>
                  {link.dropdown.map(item => (
                    <NavLink key={item.path} to={item.path} className="nd-item">
                      <span style={{ fontSize:'1.05rem', flexShrink:0 }}>{item.icon}</span>
                      <div style={{ flex:1 }}>
                        <div style={{ fontWeight:500, fontSize:'.82rem', lineHeight:1.2 }}>{item.label}</div>
                        <div style={{ fontSize:'.63rem', color:'rgba(245,236,215,.38)', marginTop:2 }}>{item.desc}</div>
                      </div>
                      <span className="nd-arr">→</span>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Language switcher */}
          <div style={{ position: 'relative' }}>
            <button onClick={() => setLangOpen(v => !v)}
              style={{ background: 'none', border: '1px solid rgba(245,236,215,.2)', color: '#F5ECD7', padding: '7px 13px', borderRadius: 2, fontFamily: 'DM Sans,sans-serif', fontSize: '.7rem', letterSpacing: '.12em', textTransform: 'uppercase', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, transition: 'all .2s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(194,124,58,.5)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(245,236,215,.2)'}>
              {LANGUAGES.find(l => l.code === lang)?.flag} {lang.toUpperCase()}
              <span style={{ fontSize: '.5rem', opacity: .5 }}>▼</span>
            </button>
            {langOpen && (
              <div style={{ position: 'absolute', top: 'calc(100% + 10px)', right: 0, background: 'linear-gradient(160deg,#1c1007,#110a05)', border: '1px solid rgba(194,124,58,.2)', borderRadius: 10, padding: 8, minWidth: 140, zIndex: 920, boxShadow: '0 20px 60px rgba(0,0,0,.9)', animation: 'ddIn .2s ease' }}>
                {LANGUAGES.map(l => (
                  <button key={l.code} onClick={() => { setLang(l.code); setLangOpen(false); }}
                    style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 10, padding: '9px 14px', borderRadius: 7, background: lang === l.code ? 'rgba(194,124,58,.15)' : 'none', border: 'none', color: lang === l.code ? '#C27C3A' : 'rgba(245,236,215,.7)', fontFamily: 'DM Sans,sans-serif', fontSize: '.78rem', cursor: 'pointer', transition: 'background .15s', textAlign: 'left' }}
                    onMouseEnter={e => { if (lang !== l.code) e.currentTarget.style.background = 'rgba(255,255,255,.05)'; }}
                    onMouseLeave={e => { if (lang !== l.code) e.currentTarget.style.background = 'none'; }}>
                    <span>{l.flag}</span> {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Cart */}
          <button onClick={onCartOpen} className="nb-cart"
            style={{ background:'none', border:'1px solid rgba(245,236,215,.2)', color:'#F5ECD7', padding:'8px 17px', borderRadius:2, fontFamily:'DM Sans,sans-serif', fontSize:'.71rem', letterSpacing:'.15em', textTransform:'uppercase', display:'flex', alignItems:'center', gap:8, transition:'all .2s', marginLeft:8, cursor:'pointer', flexShrink:0 }}>
            🛒 Cart
            {cartCount > 0 && <span style={{ background:'#C27C3A', color:'#07050a', borderRadius:'50%', width:18, height:18, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'.64rem', fontWeight:700, flexShrink:0 }}>{cartCount}</span>}
          </button>
        </div>

        {/* ── Mobile right side ── */}
        <div className="nav-mobile-btn" style={{ alignItems:'center', gap:10 }}>
          <button onClick={onCartOpen}
            style={{ background:'none', border:'1px solid rgba(245,236,215,.2)', color:'#F5ECD7', padding:'7px 11px', borderRadius:2, display:'flex', alignItems:'center', gap:6, fontFamily:'DM Sans,sans-serif', fontSize:'.75rem', cursor:'pointer' }}>
            🛒
            {cartCount > 0 && <span style={{ background:'#C27C3A', color:'#07050a', borderRadius:'50%', width:16, height:16, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'.6rem', fontWeight:700 }}>{cartCount}</span>}
          </button>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(v => !v)} aria-label="Menu"
            style={{ background:'none', border:'none', color:'#F5ECD7', cursor:'pointer', padding:6, display:'flex', flexDirection:'column', gap:5, width:30 }}>
            <span style={{ display:'block', height:1.5, background: menuOpen ? '#C27C3A':'#F5ECD7', borderRadius:1, transition:'all .28s', transform: menuOpen ? 'rotate(45deg) translate(4.5px,4.5px)':'none' }} />
            <span style={{ display:'block', height:1.5, background: menuOpen ? '#C27C3A':'#F5ECD7', borderRadius:1, transition:'all .28s', opacity: menuOpen ? 0:1 }} />
            <span style={{ display:'block', height:1.5, background: menuOpen ? '#C27C3A':'#F5ECD7', borderRadius:1, transition:'all .28s', transform: menuOpen ? 'rotate(-45deg) translate(4.5px,-4.5px)':'none' }} />
          </button>
        </div>
      </nav>

      {/* ── Mobile Full-Screen Menu ── */}
      {menuOpen && (
        <div style={{
          position:'fixed', inset:0, zIndex:890,
          background:'rgba(7,5,10,0.98)', backdropFilter:'blur(24px)',
          overflowY:'auto', WebkitOverflowScrolling:'touch',
          animation:'mobIn .22s ease', paddingBottom:40,
        }}>
          {/* Close strip at top */}
          <div style={{ height: scrolled ? 62 : 80 }} />

          <div style={{ maxWidth:420, margin:'0 auto', padding:'8px 24px 24px' }}>
            {NAV_LINKS.map((link, idx) => (
              <div key={link.path} style={{ borderBottom:'1px solid rgba(245,236,215,.06)' }}>

                {/* Parent row */}
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:8 }}>
                  {link.dropdown ? (
                    /* If has dropdown, the text itself navigates to the parent page */
                    <NavLink to={link.path} onClick={() => setMenuOpen(false)}
                      style={({ isActive }) => ({
                        fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(1.55rem,5.5vw,2.1rem)',
                        fontWeight:300, color: isActive ? '#C27C3A':'rgba(245,236,215,.88)',
                        textDecoration:'none', padding:'13px 0', flex:1,
                        animation:`fadeUp .28s ${idx*.05}s both`,
                      })}>
                      {link.label}
                    </NavLink>
                  ) : (
                    <NavLink to={link.path} onClick={() => setMenuOpen(false)}
                      style={({ isActive }) => ({
                        fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(1.55rem,5.5vw,2.1rem)',
                        fontWeight:300, color: isActive ? '#C27C3A':'rgba(245,236,215,.88)',
                        textDecoration:'none', padding:'13px 0', flex:1,
                        animation:`fadeUp .28s ${idx*.05}s both`,
                      })}>
                      {link.label}
                    </NavLink>
                  )}

                  {/* Expand chevron */}
                  {link.dropdown && (
                    <button
                      onClick={() => setMobileExp(mobileExp === link.label ? null : link.label)}
                      aria-label={`Expand ${link.label}`}
                      style={{
                        background: mobileExp === link.label ? 'rgba(194,124,58,.15)' : 'rgba(255,255,255,.05)',
                        border:'1px solid rgba(245,236,215,.1)',
                        color: mobileExp === link.label ? '#C27C3A' : 'rgba(245,236,215,.5)',
                        width:36, height:36, borderRadius:8, cursor:'pointer',
                        fontSize:'.6rem', flexShrink:0,
                        transition:'all .22s',
                        transform: mobileExp === link.label ? 'rotate(180deg)' : 'none',
                        display:'flex', alignItems:'center', justifyContent:'center',
                      }}>▼</button>
                  )}
                </div>

                {/* Sub-menu accordion */}
                {link.dropdown && mobileExp === link.label && (
                  <div style={{
                    marginLeft:12, marginBottom:12, paddingLeft:14,
                    borderLeft:'2px solid rgba(194,124,58,.25)',
                    animation:'subExpand .22s ease',
                  }}>
                    <div style={{ fontFamily:'DM Sans,sans-serif', fontSize:'.52rem', letterSpacing:'.22em', textTransform:'uppercase', color:'rgba(194,124,58,.5)', padding:'2px 0 10px 14px' }}>
                      {link.category}
                    </div>
                    {link.dropdown.map(item => (
                      <NavLink key={item.path} to={item.path} className="mob-sub-item"
                        onClick={() => setMenuOpen(false)}>
                        <span style={{ fontSize:'1.05rem', flexShrink:0 }}>{item.icon}</span>
                        <div style={{ flex:1 }}>
                          <div style={{ fontWeight:500, fontSize:'.84rem' }}>{item.label}</div>
                          <div style={{ fontSize:'.62rem', color:'rgba(245,236,215,.35)', marginTop:1 }}>{item.desc}</div>
                        </div>
                        <span style={{ color:'#C27C3A', fontSize:'.75rem', flexShrink:0 }}>→</span>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Language switcher mobile */}
            <div style={{ marginTop: 24, display: 'flex', gap: 8, animation: 'fadeUp .28s .32s both' }}>
              {LANGUAGES.map(l => (
                <button key={l.code} onClick={() => { setLang(l.code); setMenuOpen(false); }}
                  style={{ flex: 1, padding: '10px 8px', borderRadius: 8, border: `1px solid ${lang === l.code ? 'rgba(194,124,58,.5)' : 'rgba(245,236,215,.1)'}`, background: lang === l.code ? 'rgba(194,124,58,.15)' : 'rgba(255,255,255,.03)', color: lang === l.code ? '#C27C3A' : 'rgba(245,236,215,.6)', fontFamily: 'DM Sans,sans-serif', fontSize: '.7rem', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                  <span style={{ fontSize: '1.2rem' }}>{l.flag}</span>
                  <span>{l.label}</span>
                </button>
              ))}
            </div>

            {/* Footer contact */}
            <div style={{ marginTop:30, display:'flex', flexDirection:'column', gap:10, animation:'fadeUp .28s .36s both' }}>
              <a href="tel:+2510911243099" style={{ fontFamily:'DM Sans,sans-serif', fontSize:'.67rem', letterSpacing:'.14em', color:'rgba(194,124,58,.65)', textTransform:'uppercase', textDecoration:'none', display:'flex', alignItems:'center', gap:8 }}>
                <span>📞</span> +251 091 124 3099
              </a>
              <a href="mailto:info@birhancoffee.com" style={{ fontFamily:'DM Sans,sans-serif', fontSize:'.67rem', letterSpacing:'.14em', color:'rgba(194,124,58,.65)', textTransform:'uppercase', textDecoration:'none', display:'flex', alignItems:'center', gap:8 }}>
                <span>✉️</span> info@birhancoffee.com
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
