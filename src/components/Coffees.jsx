import { useState } from 'react';

const REGIONS = [
  {
    id: 'yirgacheffe',
    name: 'Yirgacheffe',
    location: 'Southern Ethiopia',
    altitude: '1,700 – 2,200m',
    characteristics: 'Bright acidity, floral notes, vibrant citrusy profile. Among the most sought-after specialty coffees in the world.',
    process: 'Washed · Natural · Honey',
    notes: ['Floral', 'Citrus', 'Bergamot', 'Bright Acid'],
    img: 'https://bebaxreserve.com/cdn/shop/files/Ethiopia-Coffee-Cherry.jpg?v=1729945368&width=1500',
    price: 18.50,
    badge: 'Signature Origin',
  },
  {
    id: 'masha',
    name: 'Masha',
    location: 'Southwestern Ethiopia',
    altitude: '1,800 – 2,100m',
    characteristics: 'Rich body, fruity undertones, and a hint of warming spice. A complex cup for discerning enthusiasts.',
    process: 'Natural · Honey',
    notes: ['Stone Fruit', 'Spice', 'Rich Body', 'Complex'],
    img: 'https://m.media-amazon.com/images/I/51qfX6Uf3BL._SL1000_.jpg',
    price: 19.00,
    badge: 'Specialty Lot',
  },
  {
    id: 'jimma',
    name: 'Jimma',
    location: 'Western Ethiopia',
    altitude: '1,400 – 2,000m',
    characteristics: 'Robust, well-rounded flavour with chocolate and nutty notes. Fertile soils at lower altitudes yield a dependable, full-bodied cup.',
    process: 'Washed · Natural',
    notes: ['Chocolate', 'Nutty', 'Full Body', 'Balanced'],
    img: 'https://www.abolcoffeeco.com/wp-content/uploads/2021/03/From-Family-Farmers.jpg',
    price: 16.50,
    badge: 'Classic Origin',
  },
  {
    id: 'saylem',
    name: 'Saylem',
    location: 'Southern Ethiopia',
    altitude: '1,700 – 2,100m',
    characteristics: 'Smooth body, balanced acidity, and sweet berry-like flavours. Ideal growing conditions yield consistently exceptional beans.',
    process: 'Natural · Washed',
    notes: ['Berry', 'Sweet', 'Smooth', 'Balanced Acid'],
    img: 'https://sarocoffee.com/wp-content/uploads/2024/08/photo_2025-04-03_07-26-05.jpg',
    price: 17.50,
    badge: 'Community Origin',
  },
];

const PRODUCTS = [
  { id: 'green', name: 'Green Beans', desc: 'Raw, unroasted specialty-grade Arabica. For roasters who demand perfection.', emoji: '🌿', price: 12.00 },
  { id: 'roasted', name: 'Roasted Beans', desc: 'Expertly roasted to a medium-dark profile. Ready to grind and brew.', emoji: '☕', price: 16.00 },
  { id: 'ground', name: 'Ground Coffee', desc: 'Pre-ground for convenience — drip, filter, French press, or espresso grind.', emoji: '🫙', price: 14.50 },
  { id: 'capsules', name: 'Coffee Capsules', desc: 'Birhan in a capsule. Compatible with Nespresso® machines.', emoji: '💊', price: 22.00 },
];

export default function Coffees({ onAddToCart }) {
  const [activeRegion, setActiveRegion] = useState(null);

  return (
    <section id="coffees" style={{
      padding: 'clamp(80px,10vw,140px) clamp(20px,5vw,60px)',
      background: 'linear-gradient(180deg, #07050a 0%, #0c0908 100%)',
    }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <p className="section-label">Single-Origin Specialty</p>
          <h2 className="section-title">Our <em>Coffees</em></h2>
          <div className="divider center" />
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, color: 'rgba(245,236,215,0.5)', maxWidth: 520, margin: '0 auto', lineHeight: 1.8 }}>
            Four distinct Ethiopian origins. Fully traceable. Ethically sourced. Premium Arabica at its finest.
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
                  ? 'linear-gradient(to top, rgba(7,5,10,0.95) 0%, rgba(7,5,10,0.5) 60%, rgba(7,5,10,0.15) 100%)'
                  : 'linear-gradient(to top, rgba(7,5,10,0.85) 0%, rgba(7,5,10,0.3) 100%)',
                transition: 'background 0.4s',
              }} />

              {/* Badge */}
              <div style={{
                position: 'absolute', top: 20, left: 20,
                background: 'rgba(7,5,10,0.7)', backdropFilter: 'blur(10px)',
                border: '1px solid rgba(194,124,58,0.3)',
                padding: '4px 12px', borderRadius: 20,
                fontFamily: 'DM Sans,sans-serif', fontSize: '0.65rem',
                letterSpacing: '0.15em', textTransform: 'uppercase',
                color: '#C27C3A',
              }}>{r.badge}</div>

              {/* Content */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, padding: 32,
              }}>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond,serif', fontSize: '2.2rem',
                  fontWeight: 600, color: '#F5ECD7', marginBottom: 4,
                }}>{r.name}</h3>
                <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C27C3A', marginBottom: 12 }}>
                  📍 {r.location} · ⛰ {r.altitude}
                </p>

                {/* Flavor notes */}
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
                  {r.notes.map(n => (
                    <span key={n} style={{
                      background: 'rgba(194,124,58,0.15)', border: '1px solid rgba(194,124,58,0.25)',
                      padding: '3px 10px', borderRadius: 20,
                      fontFamily: 'DM Sans,sans-serif', fontSize: '0.65rem',
                      color: '#D4A55A',
                    }}>{n}</span>
                  ))}
                </div>

                <p style={{
                  fontFamily: 'DM Sans,sans-serif', fontWeight: 300, fontSize: '0.85rem',
                  color: 'rgba(245,236,215,0.65)', lineHeight: 1.65,
                  maxHeight: activeRegion === r.id ? '100px' : '0',
                  overflow: 'hidden', transition: 'max-height 0.4s ease',
                  marginBottom: activeRegion === r.id ? 20 : 0,
                }}>{r.characteristics}</p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.6rem', color: '#C27C3A' }}>${r.price.toFixed(2)}</div>
                    <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.6rem', color: 'rgba(245,236,215,0.3)', letterSpacing: '0.1em' }}>per 250g bag</div>
                  </div>
                  <button
                    className="btn-primary"
                    style={{ padding: '10px 20px', fontSize: '0.65rem' }}
                    onClick={() => onAddToCart({ id: r.id, name: `${r.name} Coffee`, price: r.price, emoji: '☕' })}
                  >Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Products */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p className="section-label">Value-Added Products</p>
          <h3 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '2.4rem', fontWeight: 300, color: '#F5ECD7' }}>
            Beyond the <em>Green Bean</em>
          </h3>
        </div>
        <div className="coffees-products">
          {PRODUCTS.map(p => (
            <div key={p.id} style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
              border: '1px solid rgba(245,236,215,0.08)',
              borderRadius: 4, padding: 28,
              transition: 'all 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(194,124,58,0.3)'; e.currentTarget.style.background = 'rgba(194,124,58,0.06)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(245,236,215,0.08)'; e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))'; }}
            >
              <div style={{ fontSize: '2rem', marginBottom: 16 }}>{p.emoji}</div>
              <h4 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.3rem', color: '#F5ECD7', marginBottom: 8 }}>{p.name}</h4>
              <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.82rem', fontWeight: 300, color: 'rgba(245,236,215,0.5)', lineHeight: 1.6, marginBottom: 20 }}>{p.desc}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.5rem', color: '#C27C3A' }}>${p.price.toFixed(2)}</span>
                <button
                  className="btn-primary"
                  style={{ padding: '8px 16px', fontSize: '0.62rem' }}
                  onClick={() => onAddToCart({ id: `prod-${p.id}`, name: p.name, price: p.price, emoji: p.emoji })}
                >Add</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
