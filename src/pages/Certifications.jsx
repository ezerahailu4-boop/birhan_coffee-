export default function Certifications() {
  const certs = [
    { icon: '🏆', title: 'Top 100 Ethiopian Coffee Exporters', body: 'Officially ranked among Ethiopia\'s top 100 coffee exporters by the Ethiopian Coffee and Tea Authority — a nationally recognised benchmark of export quality and volume.', year: '2023–2024', category: 'Export Excellence' },
    { icon: '🔬', title: 'SCA Q-Grade Certified', body: 'All export lots are cupped and graded by SCA-certified Q-graders on-site. Every shipment meets or exceeds the specialty threshold of 84+ cup score before it leaves our facility.', year: 'Ongoing', category: 'Quality' },
    { icon: '🌱', title: 'Sustainable Farming Practices', body: 'Recognised by Ethiopian agriculture authorities for sustainable and environmentally responsible farming programmes across our four origins. Forest-friendly, shade-grown, zero harmful pesticide policy.', year: '2022–2024', category: 'Sustainability' },
    { icon: '🤝', title: 'Direct Trade Verified', body: 'We pay farmers 3× the commodity market rate directly, with zero middlemen. Our payment records and farmer agreements are available for partner verification upon request.', year: 'Since 2019', category: 'Fair Trade' },
    { icon: '📦', title: 'Full Phytosanitary & ICO Compliance', body: 'Every export lot ships with complete documentation — Phytosanitary Certificate, ICO Certificate of Origin, and all required customs documentation — ensuring smooth port clearance worldwide.', year: 'Ongoing', category: 'Logistics' },
    { icon: '🌍', title: 'Community Impact Recognition', body: 'Awarded recognition for CSR excellence in Saylem — infrastructure investment (12km road, 2 bridges), farmer education programmes, and direct community development initiatives.', year: '2023', category: 'CSR' },
  ];

  const awards = [
    { title: 'Best Ethiopian Specialty Exporter — East Africa Coffee Summit', year: '2023' },
    { title: 'Sustainable Business Award — Addis Ababa Chamber of Commerce', year: '2022' },
    { title: 'Fair Trade Excellence — Ethiopian Exporters Association', year: '2023' },
    { title: 'Community Impact Award — Saylem Regional Authority', year: '2022' },
  ];

  return (
    <div style={{ background: '#07050a', minHeight: '100vh', padding: 'clamp(100px,12vw,160px) clamp(16px,5vw,60px) 80px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.68rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C27C3A', marginBottom: 18 }}>Trust & Standards</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 300, color: '#F5ECD7', lineHeight: 1.08, marginBottom: 20 }}>Certifications <em style={{ fontStyle: 'italic', color: '#D4A55A' }}>&amp; Awards</em></h1>
          <div style={{ width: 48, height: 1, background: 'linear-gradient(90deg,transparent,#C27C3A,transparent)', margin: '0 auto 24px' }} />
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, color: 'rgba(245,236,215,0.5)', maxWidth: 500, margin: '0 auto', lineHeight: 1.75 }}>
            Every claim we make is backed by independent verification, certified processes, and a transparent paper trail.
          </p>
        </div>

        {/* Certs grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(340px,1fr))', gap: 24, marginBottom: 72 }}>
          {certs.map((c, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(245,236,215,0.07)', borderRadius: 12, padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 16, transition: 'border-color 0.3s, transform 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(194,124,58,0.35)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(245,236,215,0.07)'; e.currentTarget.style.transform = 'none'; }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '2.2rem' }}>{c.icon}</span>
                <span style={{ background: 'rgba(194,124,58,0.1)', border: '1px solid rgba(194,124,58,0.2)', borderRadius: 20, padding: '3px 10px', fontFamily: 'DM Sans,sans-serif', fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C27C3A' }}>{c.category}</span>
              </div>
              <div>
                <h3 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.25rem', fontWeight: 600, color: '#F5ECD7', lineHeight: 1.3, marginBottom: 10 }}>{c.title}</h3>
                <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, color: 'rgba(245,236,215,0.55)', lineHeight: 1.75, fontSize: '0.86rem' }}>{c.body}</p>
              </div>
              <div style={{ borderTop: '1px solid rgba(245,236,215,0.06)', paddingTop: 14, fontFamily: 'DM Sans,sans-serif', fontSize: '0.65rem', color: 'rgba(194,124,58,0.6)', letterSpacing: '0.1em' }}>📅 {c.year}</div>
            </div>
          ))}
        </div>

        {/* Awards timeline */}
        <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(245,236,215,0.06)', borderRadius: 12, padding: 'clamp(28px,4vw,48px)' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 300, color: '#F5ECD7', marginBottom: 36 }}>Award <em style={{ color: '#D4A55A' }}>Timeline</em></h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {awards.map((a, i) => (
              <div key={i} style={{ display: 'flex', gap: 24, alignItems: 'flex-start', paddingBottom: i < awards.length - 1 ? 28 : 0, borderBottom: i < awards.length - 1 ? '1px solid rgba(245,236,215,0.05)' : 'none', marginBottom: i < awards.length - 1 ? 28 : 0 }}>
                <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg,#6B3A1F,#C27C3A)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>🏅</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C27C3A', marginBottom: 6 }}>{a.year}</div>
                  <div style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.1rem', fontWeight: 500, color: '#F5ECD7', lineHeight: 1.4 }}>{a.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 64 }}>
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, color: 'rgba(245,236,215,0.4)', fontSize: '0.82rem', marginBottom: 20 }}>Need certification documents for due diligence? We provide full documentation to verified partners.</p>
          <a href="mailto:Birhancoffee24@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'linear-gradient(135deg,#6B3A1F,#C27C3A)', border: 'none', color: '#F5ECD7', padding: '14px 36px', borderRadius: 2, fontFamily: 'DM Sans,sans-serif', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}>Request Documents →</a>
        </div>
      </div>
    </div>
  );
}

