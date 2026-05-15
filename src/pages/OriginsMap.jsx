import { useState } from 'react';

const ORIGINS = [
  {
    id: 'yirgacheffe', name: 'Yirgacheffe', region: 'Southern Ethiopia',
    altitude: '1,700–2,200 masl', processing: 'Washed · Natural · Honey',
    flavor: ['Jasmine', 'Bergamot', 'Lemon Zest', 'Bright Acidity'],
    color: '#2D7A3A', desc: 'The crown jewel of Ethiopian coffee. World-renowned for unrivalled floral complexity and sparkling citrus acidity. Grown under natural shade canopy in the Gedeo Zone.',
    x: 62, y: 68, img: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80&fit=crop',
  },
  {
    id: 'masha', name: 'Masha', region: 'Southwestern Ethiopia',
    altitude: '1,800–2,100 masl', processing: 'Natural · Honey',
    flavor: ['Stone Fruit', 'Peach', 'Warming Spice', 'Rich Body'],
    color: '#8B2A2A', desc: 'Our highest-altitude origin. The lush forest environment and dense Arabica shade canopy give Masha beans exceptional body and layered fruit complexity.',
    x: 38, y: 60, img: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&q=80&fit=crop',
  },
  {
    id: 'jimma', name: 'Jimma', region: 'Western Ethiopia',
    altitude: '1,400–2,000 masl', processing: 'Washed · Natural',
    flavor: ['Dark Chocolate', 'Hazelnut', 'Nutty Finish', 'Full Body'],
    color: '#5C3A1A', desc: 'The robust classic. Fertile soils at slightly lower altitude produce a dependable, satisfying coffee perfect for espresso blends and anyone who loves a bold traditional cup.',
    x: 35, y: 52, img: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600&q=80&fit=crop',
  },
  {
    id: 'saylem', name: 'Saylem', region: 'Southern Ethiopia',
    altitude: '1,700–2,100 masl', processing: 'Natural · Washed',
    flavor: ['Wild Berry', 'Honey', 'Blackcurrant', 'Smooth Body'],
    color: '#1A3A6B', desc: 'Sweet, smooth, and the heart of our CSR work. Every Saylem bag directly funds community infrastructure — roads, bridges, and farmer education in this remarkable region.',
    x: 55, y: 74, img: 'https://images.unsplash.com/photo-1520970014086-2208d157c9e2?w=600&q=80&fit=crop',
  },
];

export default function OriginsMap() {
  const [active, setActive] = useState(ORIGINS[0]);
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ background: '#07050a', minHeight: '100vh', padding: 'clamp(100px,12vw,160px) clamp(16px,5vw,60px) 80px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.68rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C27C3A', marginBottom: 18 }}>Where It Begins</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 300, color: '#F5ECD7', lineHeight: 1.08, marginBottom: 20 }}>Origins <em style={{ fontStyle: 'italic', color: '#D4A55A' }}>Map</em></h1>
          <div style={{ width: 48, height: 1, background: 'linear-gradient(90deg,transparent,#C27C3A,transparent)', margin: '0 auto 24px' }} />
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, color: 'rgba(245,236,215,0.5)', maxWidth: 500, margin: '0 auto', lineHeight: 1.75 }}>
            Four legendary growing regions across Ethiopia's highlands. Click any origin to explore its altitude, processing, and flavour profile.
          </p>
        </div>

        {/* Origin selector tabs */}
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
          {ORIGINS.map(o => (
            <button key={o.id} onClick={() => setActive(o)}
              style={{ padding: '10px 22px', borderRadius: 30, fontFamily: 'DM Sans,sans-serif', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.25s',
                background: active.id === o.id ? `linear-gradient(135deg,${o.color},#C27C3A)` : 'rgba(255,255,255,0.04)',
                border: active.id === o.id ? 'none' : '1px solid rgba(245,236,215,0.1)',
                color: active.id === o.id ? '#F5ECD7' : 'rgba(245,236,215,0.5)',
                boxShadow: active.id === o.id ? '0 6px 24px rgba(194,124,58,0.3)' : 'none',
              }}>
              {o.name}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }}>

          {/* SVG Map */}
          <div style={{ position: 'relative', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(245,236,215,0.06)', borderRadius: 16, overflow: 'hidden', aspectRatio: '4/5' }}>
            <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', display: 'block' }}>
              {/* Ethiopia shape — simplified polygon */}
              <defs>
                <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(194,124,58,0.08)" />
                  <stop offset="100%" stopColor="rgba(7,5,10,0)" />
                </radialGradient>
              </defs>
              <rect width="100" height="100" fill="url(#mapGlow)" />
              <polygon
                points="20,18 38,12 55,14 72,18 80,28 85,40 82,52 78,62 70,72 60,80 50,85 38,82 28,75 20,65 16,52 14,38 17,28"
                fill="rgba(107,58,31,0.18)" stroke="rgba(194,124,58,0.25)" strokeWidth="0.6"
              />
              {/* Grid lines */}
              {[20,35,50,65,80].map(x => <line key={x} x1={x} y1="10" x2={x} y2="90" stroke="rgba(245,236,215,0.04)" strokeWidth="0.3" />)}
              {[20,35,50,65,80].map(y => <line key={y} x1="10" y1={y} x2="90" y2={y} stroke="rgba(245,236,215,0.04)" strokeWidth="0.3" />)}

              {/* Origin pins */}
              {ORIGINS.map(o => {
                const isActive = active.id === o.id;
                const isHov = hovered === o.id;
                return (
                  <g key={o.id} style={{ cursor: 'pointer' }} onClick={() => setActive(o)} onMouseEnter={() => setHovered(o.id)} onMouseLeave={() => setHovered(null)}>
                    {/* Pulse ring */}
                    {isActive && <circle cx={o.x} cy={o.y} r="6" fill="none" stroke={o.color} strokeWidth="0.8" opacity="0.4" />}
                    <circle cx={o.x} cy={o.y} r={isActive ? 3.5 : isHov ? 3 : 2.4}
                      fill={isActive ? '#C27C3A' : 'rgba(194,124,58,0.5)'}
                      stroke={isActive ? '#F5ECD7' : 'rgba(245,236,215,0.3)'} strokeWidth="0.5"
                      style={{ transition: 'all 0.3s' }}
                    />
                    {/* Label */}
                    <text x={o.x + (o.x > 50 ? -5 : 5)} y={o.y - 5} textAnchor={o.x > 50 ? 'end' : 'start'}
                      fontFamily="DM Sans,sans-serif" fontSize="3.2" fill={isActive ? '#C27C3A' : 'rgba(245,236,215,0.5)'}
                      style={{ transition: 'all 0.3s', fontWeight: isActive ? '600' : '300' }}>
                      {o.name}
                    </text>
                  </g>
                );
              })}

              {/* Country label */}
              <text x="50" y="94" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="3" fill="rgba(245,236,215,0.2)" letterSpacing="0.3">ETHIOPIA</text>
            </svg>
          </div>

          {/* Detail panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Photo */}
            <div style={{ aspectRatio: '16/9', borderRadius: 12, overflow: 'hidden', position: 'relative' }}>
              <img src={active.img} alt={active.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.3s' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(7,5,10,0.7) 0%,transparent 50%)' }} />
              <div style={{ position: 'absolute', bottom: 16, left: 16 }}>
                <div style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.8rem', fontWeight: 300, color: '#F5ECD7', lineHeight: 1 }}>{active.name}</div>
                <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C27C3A', marginTop: 4 }}>{active.region}</div>
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[['⛰️ Altitude', active.altitude], ['⚙️ Processing', active.processing]].map(([k, v]) => (
                <div key={k} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(245,236,215,0.07)', borderRadius: 10, padding: '14px 16px' }}>
                  <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.58rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(194,124,58,0.7)', marginBottom: 6 }}>{k}</div>
                  <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.82rem', color: '#F5ECD7', fontWeight: 400 }}>{v}</div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(245,236,215,0.06)', borderRadius: 10, padding: '18px 20px' }}>
              <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, color: 'rgba(245,236,215,0.65)', lineHeight: 1.75, fontSize: '0.88rem', margin: 0 }}>{active.desc}</p>
            </div>

            {/* Flavor tags */}
            <div>
              <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(194,124,58,0.7)', marginBottom: 12 }}>Tasting Notes</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {active.flavor.map(f => (
                  <span key={f} style={{ background: 'rgba(194,124,58,0.1)', border: '1px solid rgba(194,124,58,0.25)', borderRadius: 20, padding: '5px 14px', fontFamily: 'DM Sans,sans-serif', fontSize: '0.72rem', color: '#C27C3A' }}>{f}</span>
                ))}
              </div>
            </div>

            <a href="mailto:Birhancoffee24@gmail.com?subject=Sample Request — {active.name}" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: `linear-gradient(135deg,${active.color},#C27C3A)`, border: 'none', color: '#F5ECD7', padding: '14px 28px', borderRadius: 8, fontFamily: 'DM Sans,sans-serif', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', transition: 'opacity 0.2s' }}>
              Request {active.name} Sample →
            </a>
          </div>
        </div>

        {/* Mobile: origin list below */}
        <div style={{ display: 'none' }} className="mobile-origins-list">
          {ORIGINS.map(o => (
            <div key={o.id} onClick={() => setActive(o)} style={{ padding: '16px', borderRadius: 10, border: `1px solid ${active.id === o.id ? 'rgba(194,124,58,0.4)' : 'rgba(245,236,215,0.07)'}`, background: active.id === o.id ? 'rgba(194,124,58,0.07)' : 'transparent', cursor: 'pointer' }}>
              <div style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.2rem', color: '#F5ECD7' }}>{o.name}</div>
              <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.65rem', color: 'rgba(194,124,58,0.7)', marginTop: 4 }}>{o.region}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

