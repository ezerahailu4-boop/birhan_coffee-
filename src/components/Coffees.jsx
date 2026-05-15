import { useState } from 'react';
import { Link } from 'react-router-dom';

const WHOLESALE_TIERS = [
  { tier: 'Starter', volume: '1–5 bags', unit: '60kg/bag', pricePerKg: '$8.50', total: '$510–$2,550', perks: ['Free samples', 'Standard docs', 'Email support'], color: 'rgba(194,124,58,0.15)', border: 'rgba(194,124,58,0.25)' },
  { tier: 'Partner', volume: '6–20 bags', unit: '60kg/bag', pricePerKg: '$7.80', total: '$2,808–$9,360', perks: ['Priority samples', 'Full traceability docs', 'Dedicated account manager', 'Custom lot selection'], color: 'rgba(194,124,58,0.22)', border: 'rgba(194,124,58,0.45)', featured: true },
  { tier: 'Importer', volume: '20+ bags', unit: '60kg/bag', pricePerKg: '$6.90', total: 'Custom quote', perks: ['Exclusive lot reservation', 'Farm-level data', 'Custom processing', 'FOB/CIF/DAP terms', 'Annual contract pricing'], color: 'rgba(107,58,31,0.25)', border: 'rgba(194,124,58,0.35)' },
];

const SHIPPING_REGIONS = [
  { region: 'Europe', flag: '🇪🇺', transit: '18–25 days', incoterm: 'CIF', baseRate: 1.20, note: 'Hamburg, Rotterdam, Antwerp' },
  { region: 'North America', flag: '🇺🇸', transit: '22–30 days', incoterm: 'CIF', baseRate: 1.45, note: 'New York, Los Angeles, Seattle' },
  { region: 'Middle East', flag: '🌍', transit: '10–15 days', incoterm: 'CIF', baseRate: 0.95, note: 'Dubai, Jeddah, Beirut' },
  { region: 'Asia Pacific', flag: '🌏', transit: '20–28 days', incoterm: 'CIF', baseRate: 1.35, note: 'Tokyo, Seoul, Singapore' },
  { region: 'Africa', flag: '🌍', transit: '7–12 days', incoterm: 'FOB', baseRate: 0.65, note: 'Nairobi, Lagos, Cairo' },
  { region: 'Australia', flag: '🇦🇺', transit: '25–32 days', incoterm: 'CIF', baseRate: 1.55, note: 'Sydney, Melbourne' },
];

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

        {/* ── WHOLESALE PRICING TIERS ── */}
        <div style={{ marginTop: 100 }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p className="section-label">B2B & Wholesale</p>
            <h3 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 300, color: '#F5ECD7' }}>
              Wholesale <em>Pricing Tiers</em>
            </h3>
            <div className="divider center" />
            <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, color: 'rgba(245,236,215,0.5)', maxWidth: 500, margin: '0 auto', lineHeight: 1.8 }}>
              Transparent pricing for roasters, importers, and distributors. All prices FOB Addis Ababa.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20, marginBottom: 60 }}>
            {WHOLESALE_TIERS.map(t => (
              <div key={t.tier} style={{
                background: t.color, border: `1px solid ${t.border}`,
                borderRadius: 16, padding: '32px 28px',
                position: 'relative', transition: 'transform .3s',
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'none'}
              >
                {t.featured && (
                  <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg,#6B3A1F,#C27C3A)', borderRadius: 20, padding: '4px 16px', fontFamily: 'DM Sans,sans-serif', fontSize: '.6rem', letterSpacing: '.15em', textTransform: 'uppercase', color: '#F5ECD7', whiteSpace: 'nowrap' }}>
                    Most Popular
                  </div>
                )}
                <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.62rem', letterSpacing: '.2em', textTransform: 'uppercase', color: '#C27C3A', marginBottom: 8 }}>{t.tier}</div>
                <div style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '2.4rem', fontWeight: 300, color: '#F5ECD7', lineHeight: 1 }}>{t.pricePerKg}</div>
                <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.7rem', color: 'rgba(245,236,215,.4)', marginBottom: 4 }}>per kg · {t.unit}</div>
                <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.78rem', color: 'rgba(245,236,215,.6)', marginBottom: 24 }}>Volume: {t.volume}</div>
                <div style={{ width: '100%', height: 1, background: 'rgba(245,236,215,.08)', marginBottom: 20 }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                  {t.perks.map(p => (
                    <div key={p} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                      <span style={{ color: '#C27C3A', fontSize: '.7rem', flexShrink: 0 }}>✦</span>
                      <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.82rem', color: 'rgba(245,236,215,.65)', fontWeight: 300 }}>{p}</span>
                    </div>
                  ))}
                </div>
                <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.68rem', color: 'rgba(245,236,215,.35)', marginBottom: 20 }}>Est. total: {t.total}</div>
                <Link to="/sample-request" className="btn-primary" style={{ display: 'flex', justifyContent: 'center', textDecoration: 'none', padding: '12px', fontSize: '.68rem' }}>
                  Get a Quote →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* ── SHIPPING CALCULATOR ── */}
        <ShippingCalculator />

      </div>
    </section>
  );
}

function ShippingCalculator() {
  const [bags, setBags] = useState(5);
  const [region, setRegion] = useState(SHIPPING_REGIONS[0]);
  const kgPerBag = 60;
  const pricePerKg = bags <= 5 ? 8.50 : bags <= 20 ? 7.80 : 6.90;
  const coffeeValue = bags * kgPerBag * pricePerKg;
  const shippingCost = bags * kgPerBag * region.baseRate;
  const total = coffeeValue + shippingCost;

  return (
    <div style={{ marginTop: 80, background: 'rgba(255,255,255,.02)', border: '1px solid rgba(245,236,215,.07)', borderRadius: 20, overflow: 'hidden' }}>
      <div style={{ padding: 'clamp(28px,4vw,48px)', borderBottom: '1px solid rgba(245,236,215,.06)', background: 'linear-gradient(135deg,rgba(107,58,31,.2),rgba(7,5,10,.4))' }}>
        <p className="section-label">Estimate Your Order</p>
        <h3 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 300, color: '#F5ECD7' }}>
          Shipping <em>Calculator</em>
        </h3>
        <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, color: 'rgba(245,236,215,.5)', fontSize: '.88rem', marginTop: 8 }}>
          Indicative CIF pricing. Final quotes confirmed by our logistics team.
        </p>
      </div>

      <div style={{ padding: 'clamp(28px,4vw,48px)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
        {/* Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {/* Bags slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
              <label style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.65rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(194,124,58,.8)' }}>Number of Bags (60kg each)</label>
              <span style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.4rem', color: '#C27C3A' }}>{bags}</span>
            </div>
            <input type="range" min={1} max={50} value={bags} onChange={e => setBags(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#C27C3A', cursor: 'pointer' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
              <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.6rem', color: 'rgba(245,236,215,.3)' }}>1 bag</span>
              <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.6rem', color: 'rgba(245,236,215,.3)' }}>50 bags</span>
            </div>
          </div>

          {/* Region selector */}
          <div>
            <label style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.65rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(194,124,58,.8)', display: 'block', marginBottom: 12 }}>Destination Region</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {SHIPPING_REGIONS.map(r => (
                <button key={r.region} onClick={() => setRegion(r)}
                  style={{ padding: '10px 16px', borderRadius: 8, textAlign: 'left', cursor: 'pointer', transition: 'all .2s', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    background: region.region === r.region ? 'rgba(194,124,58,.12)' : 'rgba(255,255,255,.03)',
                    border: `1px solid ${region.region === r.region ? 'rgba(194,124,58,.4)' : 'rgba(245,236,215,.07)'}`,
                  }}>
                  <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.82rem', color: region.region === r.region ? '#C27C3A' : 'rgba(245,236,215,.6)' }}>{r.flag} {r.region}</span>
                  <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.65rem', color: 'rgba(245,236,215,.35)' }}>{r.transit}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: 'rgba(194,124,58,.06)', border: '1px solid rgba(194,124,58,.15)', borderRadius: 12, padding: '24px' }}>
            <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.6rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(194,124,58,.7)', marginBottom: 20 }}>Order Estimate</div>
            {[
              ['Volume', `${bags} bags · ${bags * kgPerBag} kg`],
              ['Price/kg', `$${pricePerKg.toFixed(2)} (${bags <= 5 ? 'Starter' : bags <= 20 ? 'Partner' : 'Importer'} tier)`],
              ['Coffee Value', `$${coffeeValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`],
              ['Est. Shipping', `$${shippingCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} (${region.incoterm})`],
              ['Transit Time', region.transit],
              ['Port', region.note],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(245,236,215,.05)' }}>
                <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.78rem', color: 'rgba(245,236,215,.45)' }}>{k}</span>
                <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.82rem', color: '#F5ECD7', fontWeight: 400 }}>{v}</span>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16, paddingTop: 16, borderTop: '1px solid rgba(194,124,58,.2)' }}>
              <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.78rem', color: 'rgba(245,236,215,.6)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Est. Total</span>
              <span style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '2rem', color: '#C27C3A' }}>${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
          </div>
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.72rem', color: 'rgba(245,236,215,.3)', lineHeight: 1.6 }}>
            * Indicative estimate only. Final pricing confirmed by our team based on current market rates, exact destination, and incoterms.
          </p>
          <a href={`mailto:info@birhancoffee.com?subject=Wholesale Quote — ${bags} bags to ${region.region}&body=Hi, I'd like a quote for ${bags} bags (${bags * kgPerBag}kg) shipped to ${region.region}.`}
            className="btn-primary" style={{ justifyContent: 'center', textDecoration: 'none', padding: '14px' }}>
            Request Confirmed Quote →
          </a>
        </div>
      </div>
    </div>
  );
}
