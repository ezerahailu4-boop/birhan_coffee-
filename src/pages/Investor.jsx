import { useState } from 'react';
import { Link } from 'react-router-dom';

const STATS = [
  { n: '500+', l: 'Metric Tons Exported', sub: '2023–2024 season' },
  { n: '$2.4M', l: 'Export Revenue', sub: 'FY 2023–2024' },
  { n: '18', l: 'Countries Reached', sub: 'Active trade partners' },
  { n: '340%', l: 'Revenue Growth', sub: 'Since founding 2019' },
];

const FINANCIALS = [
  { year: '2021', revenue: 420, volume: 80, partners: 6 },
  { year: '2022', revenue: 890, volume: 180, partners: 14 },
  { year: '2023', revenue: 1600, volume: 360, partners: 28 },
  { year: '2024', revenue: 2400, volume: 520, partners: 50 },
];

const CERTS = [
  { icon: '🏆', title: 'Top 100 Ethiopian Exporter', body: 'Ranked by Ethiopian Coffee & Tea Authority', year: '2023–2024' },
  { icon: '🔬', title: 'SCA Q-Grade Certified', body: 'All lots score 84+ on SCA scale', year: 'Ongoing' },
  { icon: '🌱', title: 'Sustainable Farming', body: 'Recognised by Ethiopian agriculture authorities', year: '2022–2024' },
  { icon: '🤝', title: 'Direct Trade Verified', body: '3× commodity price paid directly to farmers', year: 'Since 2019' },
];

const TESTIMONIALS = [
  { name: 'Marcus Heller', role: 'Head Roaster', company: 'Velvet Cup Roasters', country: '🇩🇪 Germany', text: 'Birhan is our most reliable Ethiopian supplier. On-time, consistent quality, and the traceability documentation is second to none.', volume: '4 MT/year' },
  { name: 'Sophie Laurent', role: 'Procurement Director', company: 'Maison du Café', country: '🇫🇷 France', text: 'Every lot scores above what they promise. That kind of reliability is rare in specialty imports. We have doubled our order volume.', volume: '8 MT/year' },
  { name: 'Yuki Tanaka', role: 'Quality Director', company: 'Kissa Coffee Japan', country: '🇯🇵 Japan', text: 'Their Jimma natural hit 87.5 on our in-house scoring. We have placed standing orders for the next two harvests.', volume: '6 MT/year' },
];

const MAX_REV = Math.max(...FINANCIALS.map(f => f.revenue));

export default function Investor() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = ['overview', 'financials', 'certifications', 'partners'];

  return (
    <div style={{ background: '#07050a', minHeight: '100vh', padding: 'clamp(100px,12vw,160px) clamp(16px,5vw,60px) 80px' }}>
      <style>{`
        .inv-tab { padding:10px 24px; border-radius:30px; font-family:'DM Sans',sans-serif; font-size:.7rem; letter-spacing:.15em; text-transform:uppercase; cursor:pointer; transition:all .22s; border:1px solid rgba(245,236,215,.1); background:rgba(255,255,255,.04); color:rgba(245,236,215,.5); }
        .inv-tab.active { background:linear-gradient(135deg,#6B3A1F,#C27C3A); border-color:transparent; color:#F5ECD7; }
        .inv-tab:hover:not(.active) { border-color:rgba(194,124,58,.35); color:#C27C3A; }
        .inv-card { background:rgba(255,255,255,.03); border:1px solid rgba(245,236,215,.07); border-radius:12px; padding:28px; transition:border-color .3s,transform .3s; }
        .inv-card:hover { border-color:rgba(194,124,58,.3); transform:translateY(-3px); }
        .bar-wrap { display:flex; flex-direction:column; align-items:center; gap:8px; flex:1; }
        .bar-inner { width:100%; border-radius:4px 4px 0 0; background:linear-gradient(to top,#6B3A1F,#C27C3A); transition:height .6s ease; min-width:40px; }
      `}</style>

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.68rem', letterSpacing: '.3em', textTransform: 'uppercase', color: '#C27C3A', marginBottom: 18 }}>Investor Relations</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 300, color: '#F5ECD7', lineHeight: 1.08, marginBottom: 20 }}>
            Growth You Can <em style={{ fontStyle: 'italic', color: '#D4A55A' }}>Trust</em>
          </h1>
          <div style={{ width: 48, height: 1, background: 'linear-gradient(90deg,transparent,#C27C3A,transparent)', margin: '0 auto 24px' }} />
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, color: 'rgba(245,236,215,.5)', maxWidth: 560, margin: '0 auto', lineHeight: 1.75 }}>
            Transparent financials, verified certifications, and real partner voices — everything you need to evaluate Birhan Coffee as a trade or investment partner.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56 }}>
          {tabs.map(t => (
            <button key={t} className={`inv-tab${activeTab === t ? ' active' : ''}`} onClick={() => setActiveTab(t)}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        {/* ── OVERVIEW ── */}
        {activeTab === 'overview' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
            {/* KPI stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 16 }}>
              {STATS.map(s => (
                <div key={s.l} className="inv-card" style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 300, color: '#C27C3A', lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.75rem', fontWeight: 500, color: '#F5ECD7', margin: '8px 0 4px' }}>{s.l}</div>
                  <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.62rem', color: 'rgba(245,236,215,.35)', letterSpacing: '.1em' }}>{s.sub}</div>
                </div>
              ))}
            </div>

            {/* Why invest */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
              {[
                { icon: '📈', title: 'Consistent Growth', desc: '340% revenue growth since 2019. Expanding to 3 new markets in 2025 — North America, Scandinavia, and South Korea.' },
                { icon: '🌍', title: 'Vertically Integrated', desc: 'We own the full chain — farm relationships, processing, milling, export logistics. No middlemen means higher margins and full quality control.' },
                { icon: '🏆', title: 'Verified Quality', desc: 'Top 100 Ethiopian exporter. Every lot Q-graded at 84+. Zero rejected shipments in 5 years of operation.' },
                { icon: '🤝', title: 'ESG Aligned', desc: 'Direct trade, community infrastructure, sustainable farming. Our CSR programme is documented and auditable — ideal for ESG-conscious investors.' },
                { icon: '📦', title: 'Diversified Products', desc: 'Green beans, roasted, ground, and capsules across 4 origins. Multiple revenue streams reduce single-product risk.' },
                { icon: '🔒', title: 'Long-Term Contracts', desc: 'Standing orders from 12 partners across Europe and Asia. Recurring revenue base with 85% partner retention rate.' },
              ].map(item => (
                <div key={item.title} className="inv-card">
                  <div style={{ fontSize: '1.8rem', marginBottom: 12 }}>{item.icon}</div>
                  <h3 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.2rem', color: '#F5ECD7', marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, fontSize: '.84rem', color: 'rgba(245,236,215,.55)', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ textAlign: 'center', padding: '48px', background: 'rgba(194,124,58,.05)', border: '1px solid rgba(194,124,58,.12)', borderRadius: 16 }}>
              <p style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 300, color: '#F5ECD7', marginBottom: 12 }}>
                Interested in <em style={{ color: '#D4A55A' }}>partnering or investing?</em>
              </p>
              <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, color: 'rgba(245,236,215,.45)', marginBottom: 28, fontSize: '.88rem' }}>
                We provide full financial documentation, audited reports, and farm-level traceability to verified partners.
              </p>
              <a href="mailto:Birhancoffee24@gmail.com?subject=Investor Enquiry — Birhan Coffee"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'linear-gradient(135deg,#6B3A1F,#C27C3A)', color: '#F5ECD7', padding: '14px 36px', borderRadius: 4, fontFamily: 'DM Sans,sans-serif', fontSize: '.72rem', fontWeight: 500, letterSpacing: '.2em', textTransform: 'uppercase', textDecoration: 'none' }}>
                Request Investor Pack →
              </a>
            </div>
          </div>
        )}

        {/* ── FINANCIALS ── */}
        {activeTab === 'financials' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            <div style={{ background: 'rgba(255,255,255,.02)', border: '1px solid rgba(245,236,215,.07)', borderRadius: 16, padding: 'clamp(24px,4vw,48px)' }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, color: '#F5ECD7', marginBottom: 8 }}>
                Revenue Growth <em style={{ color: '#D4A55A' }}>(USD '000)</em>
              </h2>
              <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.78rem', color: 'rgba(245,236,215,.35)', marginBottom: 40 }}>Audited financial highlights — FY 2021 to FY 2024</p>

              {/* Bar chart */}
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end', height: 200, marginBottom: 12 }}>
                {FINANCIALS.map(f => (
                  <div key={f.year} className="bar-wrap">
                    <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.7rem', color: '#C27C3A', fontWeight: 500 }}>${f.revenue}k</div>
                    <div className="bar-inner" style={{ height: `${(f.revenue / MAX_REV) * 160}px` }} />
                    <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.65rem', color: 'rgba(245,236,215,.4)', letterSpacing: '.1em' }}>{f.year}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Table */}
            <div style={{ background: 'rgba(255,255,255,.02)', border: '1px solid rgba(245,236,215,.07)', borderRadius: 16, overflow: 'hidden' }}>
              <div style={{ padding: '20px 28px', borderBottom: '1px solid rgba(245,236,215,.06)' }}>
                <h3 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.4rem', color: '#F5ECD7' }}>Key Metrics by Year</h3>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(245,236,215,.06)' }}>
                      {['Year', 'Revenue (USD)', 'Export Volume', 'Active Partners'].map(h => (
                        <th key={h} style={{ padding: '14px 28px', textAlign: 'left', fontFamily: 'DM Sans,sans-serif', fontSize: '.6rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(194,124,58,.7)', fontWeight: 400 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {FINANCIALS.map((f, i) => (
                      <tr key={f.year} style={{ borderBottom: i < FINANCIALS.length - 1 ? '1px solid rgba(245,236,215,.04)' : 'none', background: i % 2 === 0 ? 'rgba(255,255,255,.01)' : 'transparent' }}>
                        <td style={{ padding: '16px 28px', fontFamily: 'Cormorant Garamond,serif', fontSize: '1.1rem', color: '#C27C3A' }}>{f.year}</td>
                        <td style={{ padding: '16px 28px', fontFamily: 'DM Sans,sans-serif', fontSize: '.88rem', color: '#F5ECD7' }}>${f.revenue.toLocaleString()}k</td>
                        <td style={{ padding: '16px 28px', fontFamily: 'DM Sans,sans-serif', fontSize: '.88rem', color: 'rgba(245,236,215,.7)' }}>{f.volume} MT</td>
                        <td style={{ padding: '16px 28px', fontFamily: 'DM Sans,sans-serif', fontSize: '.88rem', color: 'rgba(245,236,215,.7)' }}>{f.partners}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div style={{ background: 'rgba(194,124,58,.05)', border: '1px solid rgba(194,124,58,.15)', borderRadius: 12, padding: '20px 28px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>📋</span>
              <div>
                <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.75rem', fontWeight: 500, color: '#C27C3A', marginBottom: 6 }}>Full Audited Reports Available</div>
                <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, fontSize: '.82rem', color: 'rgba(245,236,215,.5)', lineHeight: 1.7, margin: 0 }}>
                  Complete audited financial statements, export documentation, and due diligence packs are available to verified investors and trade partners upon request.
                </p>
              </div>
              <a href="mailto:Birhancoffee24@gmail.com?subject=Financial Documents Request" style={{ flexShrink: 0, display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#6B3A1F,#C27C3A)', color: '#F5ECD7', padding: '10px 20px', borderRadius: 4, fontFamily: 'DM Sans,sans-serif', fontSize: '.65rem', fontWeight: 500, letterSpacing: '.15em', textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                Request →
              </a>
            </div>
          </div>
        )}

        {/* ── CERTIFICATIONS ── */}
        {activeTab === 'certifications' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 20 }}>
              {CERTS.map((c, i) => (
                <div key={i} className="inv-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                    <span style={{ fontSize: '2rem' }}>{c.icon}</span>
                    <span style={{ background: 'rgba(194,124,58,.1)', border: '1px solid rgba(194,124,58,.2)', borderRadius: 20, padding: '3px 10px', fontFamily: 'DM Sans,sans-serif', fontSize: '.58rem', letterSpacing: '.12em', textTransform: 'uppercase', color: '#C27C3A' }}>{c.year}</span>
                  </div>
                  <h3 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.2rem', color: '#F5ECD7', marginBottom: 8, lineHeight: 1.3 }}>{c.title}</h3>
                  <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, fontSize: '.84rem', color: 'rgba(245,236,215,.55)', lineHeight: 1.7 }}>{c.body}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', padding: '40px', background: 'rgba(194,124,58,.05)', border: '1px solid rgba(194,124,58,.12)', borderRadius: 16 }}>
              <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, color: 'rgba(245,236,215,.45)', marginBottom: 20, fontSize: '.88rem' }}>Need certification documents for due diligence? We provide full documentation to verified partners.</p>
              <a href="mailto:Birhancoffee24@gmail.com?subject=Certification Documents Request" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'linear-gradient(135deg,#6B3A1F,#C27C3A)', color: '#F5ECD7', padding: '13px 32px', borderRadius: 4, fontFamily: 'DM Sans,sans-serif', fontSize: '.7rem', fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', textDecoration: 'none' }}>
                Request Documents →
              </a>
            </div>
          </div>
        )}

        {/* ── PARTNERS ── */}
        {activeTab === 'partners' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: 24 }}>
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="inv-card" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '4rem', color: 'rgba(194,124,58,.12)', lineHeight: .6 }}>"</div>
                  <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, color: 'rgba(245,236,215,.75)', lineHeight: 1.75, fontSize: '.9rem', fontStyle: 'italic' }}>"{t.text}"</p>
                  <div style={{ borderTop: '1px solid rgba(245,236,215,.06)', paddingTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div>
                      <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.88rem', fontWeight: 500, color: '#F5ECD7' }}>{t.name}</div>
                      <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.72rem', color: 'rgba(245,236,215,.4)', marginTop: 2 }}>{t.role} · {t.company}</div>
                      <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.65rem', color: 'rgba(194,124,58,.6)', marginTop: 4 }}>{t.country}</div>
                    </div>
                    <div style={{ background: 'rgba(194,124,58,.1)', border: '1px solid rgba(194,124,58,.2)', borderRadius: 8, padding: '8px 14px', textAlign: 'center' }}>
                      <div style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.1rem', color: '#C27C3A' }}>{t.volume}</div>
                      <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.55rem', letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(245,236,215,.3)', marginTop: 2 }}>Annual Order</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', padding: '44px', background: 'rgba(194,124,58,.05)', border: '1px solid rgba(194,124,58,.12)', borderRadius: 16 }}>
              <p style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 300, color: '#F5ECD7', marginBottom: 12 }}>
                Become our next <em style={{ color: '#D4A55A' }}>partner</em>
              </p>
              <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, color: 'rgba(245,236,215,.45)', marginBottom: 28, fontSize: '.88rem' }}>
                Join roasters and importers in 18 countries who trust Birhan for their Ethiopian single-origin.
              </p>
              <Link to="/sample-request" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'linear-gradient(135deg,#6B3A1F,#C27C3A)', color: '#F5ECD7', padding: '14px 36px', borderRadius: 4, fontFamily: 'DM Sans,sans-serif', fontSize: '.72rem', fontWeight: 500, letterSpacing: '.2em', textTransform: 'uppercase', textDecoration: 'none' }}>
                Request a Sample →
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

