import { useState } from 'react';
import { Link } from 'react-router-dom';

const WHOLESALE_TIERS = [
  { tier: 'Starter', volume: '1–5 bags', unit: '60kg/bag', pricePerKg: '$8.50', total: '$510–$2,550', perks: ['Free samples', 'Standard docs', 'Email support'], color: 'rgba(194,124,58,0.15)', border: 'rgba(194,124,58,0.25)' },
  { tier: 'Partner', volume: '6–20 bags', unit: '60kg/bag', pricePerKg: '$7.80', total: '$2,808–$9,360', perks: ['Priority samples', 'Full traceability docs', 'Dedicated account manager', 'Custom lot selection'], color: 'rgba(194,124,58,0.22)', border: 'rgba(194,124,58,0.45)', featured: true },
  { tier: 'Importer', volume: '20+ bags', unit: '60kg/bag', pricePerKg: '$6.90', total: 'Custom quote', perks: ['Exclusive lot reservation', 'Farm-level data', 'Custom processing', 'FOB/CIF/DAP terms', 'Annual contract pricing'], color: 'rgba(107,58,31,0.25)', border: 'rgba(194,124,58,0.35)' },
];

const SHIPPING_REGIONS = [
  { region: 'Europe',       flag: '🇪🇺', transit: '18–25 days', incoterm: 'CIF', baseRate: 1.20, note: 'Hamburg, Rotterdam, Antwerp' },
  { region: 'North America',flag: '🇺🇸', transit: '22–30 days', incoterm: 'CIF', baseRate: 1.45, note: 'New York, Los Angeles, Seattle' },
  { region: 'Middle East',  flag: '🌍',  transit: '10–15 days', incoterm: 'CIF', baseRate: 0.95, note: 'Dubai, Jeddah, Beirut' },
  { region: 'Asia Pacific', flag: '🌏',  transit: '20–28 days', incoterm: 'CIF', baseRate: 1.35, note: 'Tokyo, Seoul, Singapore' },
  { region: 'Africa',       flag: '🌍',  transit: '7–12 days',  incoterm: 'FOB', baseRate: 0.65, note: 'Nairobi, Lagos, Cairo' },
  { region: 'Australia',    flag: '🇦🇺', transit: '25–32 days', incoterm: 'CIF', baseRate: 1.55, note: 'Sydney, Melbourne' },
];

export default function Wholesale() {
  const [bags, setBags] = useState(5);
  const [region, setRegion] = useState(SHIPPING_REGIONS[0]);
  const kgPerBag = 60;
  const pricePerKg = bags <= 5 ? 8.50 : bags <= 20 ? 7.80 : 6.90;
  const tierName = bags <= 5 ? 'Starter' : bags <= 20 ? 'Partner' : 'Importer';
  const coffeeValue = bags * kgPerBag * pricePerKg;
  const shippingCost = bags * kgPerBag * region.baseRate;
  const total = coffeeValue + shippingCost;

  return (
    <div style={{ background: '#07050a', minHeight: '100vh', padding: 'clamp(100px,12vw,160px) clamp(16px,5vw,60px) 80px' }}>
      <style>{`
        .ws-tier { border-radius:16px; padding:32px 28px; position:relative; transition:transform .3s; }
        .ws-tier:hover { transform:translateY(-5px); }
        .ws-region-btn { padding:12px 16px; border-radius:10px; text-align:left; cursor:pointer; transition:all .2s; display:flex; justify-content:space-between; align-items:center; width:100%; }
      `}</style>

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.68rem', letterSpacing: '.3em', textTransform: 'uppercase', color: '#C27C3A', marginBottom: 18 }}>B2B & Wholesale</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 300, color: '#F5ECD7', lineHeight: 1.08, marginBottom: 20 }}>
            Wholesale <em style={{ fontStyle: 'italic', color: '#D4A55A' }}>Pricing & Shipping</em>
          </h1>
          <div style={{ width: 48, height: 1, background: 'linear-gradient(90deg,transparent,#C27C3A,transparent)', margin: '0 auto 24px' }} />
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, color: 'rgba(245,236,215,.5)', maxWidth: 560, margin: '0 auto', lineHeight: 1.75 }}>
            Transparent pricing for roasters, importers, and distributors. All prices FOB Addis Ababa. Use the calculator below to estimate your order cost and shipping.
          </p>
        </div>

        {/* Trust bar */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 1, background: 'rgba(194,124,58,.1)', borderRadius: 12, overflow: 'hidden', marginBottom: 72, border: '1px solid rgba(194,124,58,.15)' }}>
          {[['500+ MT', 'Exported Annually'], ['18', 'Countries Served'], ['100%', 'On-Time Delivery'], ['84+', 'Avg Cup Score']].map(([n, l]) => (
            <div key={l} style={{ padding: '24px 20px', textAlign: 'center', background: 'rgba(7,5,10,.6)' }}>
              <div style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '2rem', fontWeight: 300, color: '#C27C3A', lineHeight: 1 }}>{n}</div>
              <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.62rem', letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(245,236,215,.4)', marginTop: 6 }}>{l}</div>
            </div>
          ))}
        </div>

        {/* Pricing tiers */}
        <div style={{ marginBottom: 80 }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 300, color: '#F5ECD7', marginBottom: 40 }}>
            Pricing <em style={{ color: '#D4A55A' }}>Tiers</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
            {WHOLESALE_TIERS.map(t => (
              <div key={t.tier} className="ws-tier" style={{ background: t.color, border: `1px solid ${t.border}` }}>
                {t.featured && (
                  <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg,#6B3A1F,#C27C3A)', borderRadius: 20, padding: '4px 18px', fontFamily: 'DM Sans,sans-serif', fontSize: '.6rem', letterSpacing: '.15em', textTransform: 'uppercase', color: '#F5ECD7', whiteSpace: 'nowrap' }}>
                    Most Popular
                  </div>
                )}
                <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.62rem', letterSpacing: '.2em', textTransform: 'uppercase', color: '#C27C3A', marginBottom: 10 }}>{t.tier}</div>
                <div style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '2.8rem', fontWeight: 300, color: '#F5ECD7', lineHeight: 1 }}>{t.pricePerKg}</div>
                <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.72rem', color: 'rgba(245,236,215,.4)', marginBottom: 4 }}>per kg · {t.unit}</div>
                <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.8rem', color: 'rgba(245,236,215,.6)', marginBottom: 24 }}>Volume: {t.volume}</div>
                <div style={{ width: '100%', height: 1, background: 'rgba(245,236,215,.08)', marginBottom: 20 }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
                  {t.perks.map(p => (
                    <div key={p} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                      <span style={{ color: '#C27C3A', fontSize: '.7rem', flexShrink: 0 }}>✦</span>
                      <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.84rem', color: 'rgba(245,236,215,.65)', fontWeight: 300 }}>{p}</span>
                    </div>
                  ))}
                </div>
                <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.68rem', color: 'rgba(245,236,215,.3)', marginBottom: 20 }}>Est. total: {t.total}</div>
                <Link to="/sample-request" className="btn-primary" style={{ display: 'flex', justifyContent: 'center', textDecoration: 'none', padding: '13px', fontSize: '.7rem' }}>
                  Get a Quote →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Shipping Calculator */}
        <div style={{ background: 'rgba(255,255,255,.02)', border: '1px solid rgba(245,236,215,.07)', borderRadius: 20, overflow: 'hidden', marginBottom: 72 }}>
          {/* Calculator header */}
          <div style={{ padding: 'clamp(28px,4vw,48px)', borderBottom: '1px solid rgba(245,236,215,.06)', background: 'linear-gradient(135deg,rgba(107,58,31,.25),rgba(7,5,10,.5))' }}>
            <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.68rem', letterSpacing: '.3em', textTransform: 'uppercase', color: '#C27C3A', marginBottom: 12 }}>Estimate Your Order</p>
            <h2 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 300, color: '#F5ECD7', marginBottom: 8 }}>
              Shipping <em style={{ color: '#D4A55A' }}>Calculator</em>
            </h2>
            <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, color: 'rgba(245,236,215,.5)', fontSize: '.88rem' }}>
              Indicative CIF pricing. Final quotes confirmed by our logistics team within 24 hours.
            </p>
          </div>

          <div style={{ padding: 'clamp(28px,4vw,48px)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
            {/* Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>

              {/* Slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                  <label style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.65rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(194,124,58,.8)' }}>
                    Number of Bags (60kg each)
                  </label>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.8rem', color: '#C27C3A', lineHeight: 1 }}>{bags}</span>
                    <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.6rem', color: 'rgba(245,236,215,.3)', marginTop: 2 }}>{bags * kgPerBag} kg total</div>
                  </div>
                </div>
                <input type="range" min={1} max={50} value={bags} onChange={e => setBags(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#C27C3A', cursor: 'pointer', height: 4 }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
                  {['1', '10', '20', '30', '40', '50'].map(v => (
                    <span key={v} style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.58rem', color: 'rgba(245,236,215,.25)' }}>{v}</span>
                  ))}
                </div>
                {/* Active tier indicator */}
                <div style={{ marginTop: 14, display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(194,124,58,.1)', border: '1px solid rgba(194,124,58,.2)', borderRadius: 20, padding: '5px 14px' }}>
                  <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.62rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(245,236,215,.5)' }}>Active tier:</span>
                  <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.72rem', fontWeight: 500, color: '#C27C3A' }}>{tierName} — ${pricePerKg.toFixed(2)}/kg</span>
                </div>
              </div>

              {/* Region */}
              <div>
                <label style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.65rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(194,124,58,.8)', display: 'block', marginBottom: 14 }}>
                  Destination Region
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {SHIPPING_REGIONS.map(r => (
                    <button key={r.region} className="ws-region-btn" onClick={() => setRegion(r)}
                      style={{
                        background: region.region === r.region ? 'rgba(194,124,58,.12)' : 'rgba(255,255,255,.03)',
                        border: `1px solid ${region.region === r.region ? 'rgba(194,124,58,.4)' : 'rgba(245,236,215,.07)'}`,
                      }}>
                      <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.84rem', color: region.region === r.region ? '#C27C3A' : 'rgba(245,236,215,.6)' }}>
                        {r.flag} {r.region}
                      </span>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.65rem', color: 'rgba(245,236,215,.35)' }}>{r.transit}</div>
                        <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.58rem', color: 'rgba(194,124,58,.5)', marginTop: 2 }}>{r.incoterm}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ background: 'rgba(194,124,58,.06)', border: '1px solid rgba(194,124,58,.15)', borderRadius: 16, padding: '28px' }}>
                <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.6rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(194,124,58,.7)', marginBottom: 24 }}>
                  Order Estimate
                </div>
                {[
                  ['Volume',        `${bags} bags · ${bags * kgPerBag} kg`],
                  ['Price/kg',      `$${pricePerKg.toFixed(2)} (${tierName} tier)`],
                  ['Coffee Value',  `$${coffeeValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`],
                  ['Est. Shipping', `$${shippingCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} (${region.incoterm})`],
                  ['Transit Time',  region.transit],
                  ['Port / Hub',    region.note],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '11px 0', borderBottom: '1px solid rgba(245,236,215,.05)' }}>
                    <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.78rem', color: 'rgba(245,236,215,.4)' }}>{k}</span>
                    <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.84rem', color: '#F5ECD7', fontWeight: 400 }}>{v}</span>
                  </div>
                ))}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, paddingTop: 20, borderTop: '2px solid rgba(194,124,58,.2)' }}>
                  <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.75rem', color: 'rgba(245,236,215,.55)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Est. Total</span>
                  <span style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '2.4rem', color: '#C27C3A', lineHeight: 1 }}>
                    ${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
              </div>

              <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.72rem', color: 'rgba(245,236,215,.28)', lineHeight: 1.65 }}>
                * Indicative estimate only. Final pricing confirmed by our team based on current market rates, exact destination, and agreed incoterms.
              </p>

              <a href={`mailto:Birhancoffee24@gmail.com?subject=Wholesale Quote — ${bags} bags to ${region.region}&body=Hi, I'd like a confirmed quote for ${bags} bags (${bags * kgPerBag}kg) shipped to ${region.region} on ${region.incoterm} terms.`}
                className="btn-primary" style={{ justifyContent: 'center', textDecoration: 'none', padding: '15px', fontSize: '.72rem' }}>
                Request Confirmed Quote →
              </a>

              <Link to="/sample-request" className="btn-outline" style={{ display: 'flex', justifyContent: 'center', textDecoration: 'none', padding: '14px', fontSize: '.72rem', borderRadius: 2 }}>
                Request Free Sample First
              </Link>
            </div>
          </div>
        </div>

        {/* What's included */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16, marginBottom: 72 }}>
          {[
            { icon: '📄', title: 'Full Documentation', desc: 'Phytosanitary certificate, ICO certificate of origin, commercial invoice, packing list, and bill of lading with every shipment.' },
            { icon: '🔬', title: 'Q-Grade Reports', desc: 'Every lot ships with a full Q-grade cupping report. Minimum 84+ SCA score guaranteed or we replace the lot.' },
            { icon: '🌱', title: 'Traceability Data', desc: 'Farm-level origin data, altitude, processing method, harvest date, and moisture content available for all partner tiers.' },
            { icon: '🤝', title: 'Dedicated Support', desc: 'Partner and Importer tier clients get a dedicated account manager available via email, WhatsApp, and video call.' },
          ].map(item => (
            <div key={item.title} style={{ background: 'rgba(255,255,255,.02)', border: '1px solid rgba(245,236,215,.07)', borderRadius: 12, padding: '24px', transition: 'border-color .3s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(194,124,58,.3)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(245,236,215,.07)'}>
              <div style={{ fontSize: '1.8rem', marginBottom: 12 }}>{item.icon}</div>
              <h3 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.2rem', color: '#F5ECD7', marginBottom: 8 }}>{item.title}</h3>
              <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, fontSize: '.82rem', color: 'rgba(245,236,215,.5)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', padding: 'clamp(36px,5vw,56px)', background: 'rgba(194,124,58,.05)', border: '1px solid rgba(194,124,58,.12)', borderRadius: 16 }}>
          <p style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, color: '#F5ECD7', marginBottom: 12 }}>
            Ready to place your <em style={{ color: '#D4A55A' }}>first order?</em>
          </p>
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, color: 'rgba(245,236,215,.45)', marginBottom: 28, fontSize: '.88rem' }}>
            Our team responds within 24 hours with a confirmed quote and sample offer.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:Birhancoffee24@gmail.com?subject=Wholesale Enquiry — Birhan Coffee"
              className="btn-primary" style={{ textDecoration: 'none' }}>
              ✉️ Email Our Team
            </a>
            <a href="https://wa.me/251911243099?text=Hello%2C%20I%27m%20interested%20in%20wholesale%20coffee%20from%20Birhan%20Coffee."
              target="_blank" rel="noreferrer" className="btn-outline" style={{ textDecoration: 'none' }}>
              💬 WhatsApp Us
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

