import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../lang.jsx';

const REGIONS = [
  { id: 'yirgacheffe', name: 'Yirgacheffe', location: 'Southern Ethiopia', altitude: '1,700 – 2,200m', characteristics: 'Bright acidity, floral notes, vibrant citrusy profile. Among the most sought-after specialty coffees in the world.', process: 'Washed · Natural · Honey', notes: ['Floral', 'Citrus', 'Bergamot', 'Bright Acid'], img: 'https://bebaxreserve.com/cdn/shop/files/Ethiopia-Coffee-Cherry.jpg?v=1729945368&width=1500', badge: 'Signature Origin' },
  { id: 'masha', name: 'Masha', location: 'Southwestern Ethiopia', altitude: '1,800 – 2,100m', characteristics: 'Rich body, fruity undertones, and a hint of warming spice. A complex cup for discerning enthusiasts.', process: 'Natural · Honey', notes: ['Stone Fruit', 'Spice', 'Rich Body', 'Complex'], img: 'https://m.media-amazon.com/images/I/51qfX6Uf3BL._SL1000_.jpg', badge: 'Specialty Lot' },
  { id: 'jimma', name: 'Jimma', location: 'Western Ethiopia', altitude: '1,400 – 2,000m', characteristics: 'Robust, well-rounded flavour with chocolate and nutty notes. Fertile soils at lower altitudes yield a dependable, full-bodied cup.', process: 'Washed · Natural', notes: ['Chocolate', 'Nutty', 'Full Body', 'Balanced'], img: 'https://www.abolcoffeeco.com/wp-content/uploads/2021/03/From-Family-Farmers.jpg', badge: 'Classic Origin' },
  {
    id: 'saylem',
    name: 'Saylem',
    location: 'Southern Ethiopia',
    altitude: '1,700 – 2,100m',
    characteristics: 'Smooth body, balanced acidity, and sweet berry-like flavours. Ideal growing conditions yield consistently exceptional beans.',
    process: 'Natural · Washed',
    notes: ['Berry', 'Sweet', 'Smooth', 'Balanced Acid'],
    img: 'https://sarocoffee.com/wp-content/uploads/2024/08/photo_2025-04-03_07-26-05.jpg',
    badge: 'Community Origin',
  },
  {
    id: 'gesha',
    name: 'Gesha',
    location: 'Southwestern Ethiopia',
    altitude: '1,900 – 2,300m',
    characteristics: 'The world\'s most celebrated variety. Extraordinary floral complexity, jasmine, bergamot, and a tea-like delicacy that defines the pinnacle of specialty coffee.',
    process: 'Washed · Natural',
    notes: ['Jasmine', 'Bergamot', 'Tea-like', 'Floral'],
    img: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=900&q=80&fit=crop',
    badge: 'Rare Variety',
  },
];

const PRODUCTS = [
  { id: 'green', name: 'Green Beans', desc: 'Raw, unroasted specialty-grade Arabica. For roasters who demand perfection.', emoji: '🌿' },
  { id: 'roasted', name: 'Roasted Beans', desc: 'Expertly roasted to a medium-dark profile. Ready to grind and brew.', emoji: '☕' },
  { id: 'ground', name: 'Ground Coffee', desc: 'Pre-ground for convenience — drip, filter, French press, or espresso grind.', emoji: '🫙' },
];

export default function Coffees({ onAddToCart }) {
  const [activeRegion, setActiveRegion] = useState(null);
  const { t } = useLang();

  return (
    <section id="coffees" style={{
      padding: 'clamp(80px,10vw,140px) clamp(20px,5vw,60px)',
      background: 'linear-gradient(180deg, #1a0f05 0%, #150b04 100%)',
    }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <p className="section-label">{t.singleOriginLabel}</p>
          <h2 className="section-title">{t.ourCoffeesTitle} <em>{t.ourCoffeesItalic || 'Coffees'}</em></h2>
          <div className="divider center" />
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, color: 'rgba(245,236,215,0.5)', maxWidth: 520, margin: '0 auto', lineHeight: 1.8 }}>
            {t.coffeesDesc}
          </p>
        </div>

        {/* Origins Grid */}
        <div className="coffees-origins" style={{ marginBottom: 80 }}>
          {REGIONS.map((r, i) => (
            <div
              key={r.id}
              onMouseEnter={() => setActiveRegion(r.id)}
              onMouseLeave={() => setActiveRegion(null)}
              style={{
                position: 'relative', height: 420, overflow: 'hidden', cursor: 'pointer',
                ...(i === 0 ? { borderTopLeftRadius: 4 } : {}),
                ...(i === 1 ? { borderTopRightRadius: 4 } : {}),
                ...(i === 2 ? { borderBottomLeftRadius: 4 } : {}),
                ...(i === 3 ? { borderBottomRightRadius: 4 } : {}),
              }}
            >
              <img
                src={r.img} alt={r.name}
                style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  transform: activeRegion === r.id ? 'scale(1.06)' : 'scale(1)',
                  transition: 'transform 0.7s ease',
                }}
              />
              {/* Overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: activeRegion === r.id
                  ? 'linear-gradient(to top, rgba(20,8,2,0.95) 0%, rgba(20,8,2,0.5) 60%, rgba(20,8,2,0.15) 100%)'
                  : 'linear-gradient(to top, rgba(20,8,2,0.85) 0%, rgba(20,8,2,0.3) 100%)',
                transition: 'background 0.4s',
              }} />

              {/* Badge */}
              <div style={{
                position: 'absolute', top: 20, left: 20,
                background: 'rgba(20,8,2,0.75)', backdropFilter: 'blur(10px)',
                border: '1px solid rgba(212,137,58,0.35)',
                padding: '4px 12px', borderRadius: 20,
                fontFamily: 'DM Sans,sans-serif', fontSize: '0.65rem',
                letterSpacing: '0.15em', textTransform: 'uppercase',
                color: '#D4893A',
              }}>{r.badge}</div>

              {/* Content */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, padding: 32,
              }}>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond,serif', fontSize: '2.2rem',
                  fontWeight: 600, color: '#FDF3E3', marginBottom: 4,
                }}>{r.name}</h3>
                <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#D4893A', marginBottom: 12 }}>
                  📍 {r.location} · ⛰ {r.altitude}
                </p>

                {/* Flavor notes */}
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
                  {r.notes.map(n => (
                    <span key={n} style={{
                      background: 'rgba(212,137,58,0.18)', border: '1px solid rgba(212,137,58,0.28)',
                      padding: '3px 10px', borderRadius: 20,
                      fontFamily: 'DM Sans,sans-serif', fontSize: '0.65rem',
                      color: '#E8B86D',
                    }}>{n}</span>
                  ))}
                </div>

                <p style={{
                  fontFamily: 'DM Sans,sans-serif', fontWeight: 300, fontSize: '0.85rem',
                  color: 'rgba(253,243,227,0.68)', lineHeight: 1.65,
                  maxHeight: activeRegion === r.id ? '100px' : '0',
                  overflow: 'hidden', transition: 'max-height 0.4s ease',
                  marginBottom: activeRegion === r.id ? 20 : 0,
                }}>{r.characteristics}</p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.4rem', color: '#D4893A', fontStyle: 'italic' }}>Negotiable</div>
                    <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.6rem', color: 'rgba(253,243,227,0.35)', letterSpacing: '0.1em' }}>Contact for pricing</div>
                  </div>
                  <button
                    className="btn-primary"
                    style={{ padding: '10px 20px', fontSize: '0.65rem' }}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >Enquire</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Products */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p className="section-label">{t.valueAdded}</p>
          <h3 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '2.4rem', fontWeight: 300, color: '#F5ECD7' }}>
            {t.beyondGreenBean} <em>{t.beyondGreenBeanItalic || 'Green Bean'}</em>
          </h3>
        </div>
        <div className="coffees-products">
          {PRODUCTS.map(p => (
            <div key={p.id} style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
              border: '1px solid rgba(253,243,227,0.09)',
              borderRadius: 4, padding: 28,
              transition: 'all 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(212,137,58,0.35)'; e.currentTarget.style.background = 'rgba(212,137,58,0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(253,243,227,0.09)'; e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))'; }}
            >
              <div style={{ fontSize: '2rem', marginBottom: 16 }}>{p.emoji}</div>
              <h4 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.3rem', color: '#FDF3E3', marginBottom: 8 }}>{p.name}</h4>
              <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.82rem', fontWeight: 300, color: 'rgba(253,243,227,0.55)', lineHeight: 1.6, marginBottom: 20 }}>{p.desc}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.3rem', color: '#D4893A', fontStyle: 'italic' }}>Negotiable</span>
                <button
                  className="btn-primary"
                  style={{ padding: '8px 16px', fontSize: '0.62rem' }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >Enquire</button>
              </div>
            </div>
          ))}
        </div>

        {/* Wholesale CTA banner */}
        <div style={{ marginTop: 80, background: 'linear-gradient(135deg,rgba(139,74,31,.28),rgba(212,137,58,.1))', border: '1px solid rgba(212,137,58,.25)', borderRadius: 16, padding: 'clamp(32px,5vw,56px)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.65rem', letterSpacing: '.22em', textTransform: 'uppercase', color: '#D4893A', marginBottom: 10 }}>{t.b2bLabel}</p>
            <h3 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 300, color: '#FDF3E3', marginBottom: 10 }}>
              {t.bulkTitle} <em style={{ color: '#E8B86D' }}>{t.bulkItalic}</em>
            </h3>
            <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, color: 'rgba(253,243,227,.55)', fontSize: '.88rem', maxWidth: 480, lineHeight: 1.7 }}>
              {t.bulkDesc}
            </p>
          </div>
          <Link to="/wholesale" className="btn-primary" style={{ textDecoration: 'none', whiteSpace: 'nowrap', padding: '15px 36px' }}>
            {t.viewWholesale}
          </Link>
        </div>

      </div>
    </section>
  );
}

