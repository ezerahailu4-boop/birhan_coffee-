export default function Testimonials() {
  const reviews = [
    { name: 'Marcus Heller', role: 'Head Roaster', company: 'Velvet Cup Roasters', country: 'Germany', flag: '🇩🇪', score: 5, text: 'The Yirgacheffe lot we received from Birhan Coffee was extraordinary — jasmine and bergamot so clean it felt like tasting the highlands themselves. Our customers have been asking for it ever since.', origin: 'Yirgacheffe', year: '2024' },
    { name: 'Sophie Laurent', role: 'Procurement Director', company: 'Maison du Café', country: 'France', flag: '🇫🇷', score: 5, text: 'Working with Birhan means zero surprises. Their documentation is immaculate, shipping is on time, and every lot scores above what they promise. That kind of reliability is rare in specialty imports.', origin: 'Masha', year: '2024' },
    { name: 'James Okafor', role: 'Founder', company: 'Groundwork Coffee Co.', country: 'UK', flag: '🇬🇧', score: 5, text: 'We have sourced from six Ethiopian exporters over the past decade. Birhan is the only one where I feel the relationship goes both ways — they genuinely care about traceability and farmer welfare, not just the sale.', origin: 'Saylem', year: '2023' },
    { name: 'Yuki Tanaka', role: 'Quality Director', company: 'Kissa Coffee Japan', country: 'Japan', flag: '🇯🇵', score: 5, text: "Birhan's Jimma natural processed lot blew our cupping panel away. Deep chocolate, dried fig — it hit 87.5 on our in-house scoring. We have placed standing orders for the next two harvests.", origin: 'Jimma', year: '2024' },
    { name: 'Fatima Al-Hassan', role: 'Buyer', company: 'Levant Specialty Imports', country: 'UAE', flag: '🇦🇪', score: 5, text: 'The team at Birhan respond within hours and always offer to send samples before we commit. That confidence in their own product tells you everything. Outstanding Saylem honey process.', origin: 'Saylem', year: '2023' },
    { name: 'Lena Brandt', role: 'Co-founder', company: 'Schwarz & Weiß Rösterei', country: 'Austria', flag: '🇦🇹', score: 5, text: "Our customers care deeply about ethical sourcing. Birhan's CSR reports from Saylem — roads, bridges, farmer training — gave us the story we needed. The coffee quality seals the deal.", origin: 'Yirgacheffe', year: '2024' },
  ];

  return (
    <div style={{ background: '#07050a', minHeight: '100vh', padding: 'clamp(100px,12vw,160px) clamp(16px,5vw,60px) 80px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.68rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C27C3A', marginBottom: 18 }}>Partner Voices</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 300, color: '#F5ECD7', lineHeight: 1.08, marginBottom: 20 }}>What Our <em style={{ fontStyle: 'italic', color: '#D4A55A' }}>Partners Say</em></h1>
          <div style={{ width: 48, height: 1, background: 'linear-gradient(90deg,transparent,#C27C3A,transparent)', margin: '0 auto 24px' }} />
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, color: 'rgba(245,236,215,0.5)', maxWidth: 500, margin: '0 auto', lineHeight: 1.75 }}>
            Roasters, importers, and specialty buyers from across the globe — on what makes Birhan Coffee their trusted Ethiopian partner.
          </p>
        </div>

        {/* Stats bar */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 1, background: 'rgba(194,124,58,0.1)', borderRadius: 12, overflow: 'hidden', marginBottom: 64, border: '1px solid rgba(194,124,58,0.15)' }}>
          {[['50+', 'Global Partners'], ['15+', 'Countries'], ['84+', 'Avg Cup Score'], ['100%', 'On-Time Delivery']].map(([num, label]) => (
            <div key={label} style={{ padding: '28px 20px', textAlign: 'center', background: 'rgba(7,5,10,0.6)' }}>
              <div style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '2.4rem', fontWeight: 300, color: '#C27C3A', lineHeight: 1 }}>{num}</div>
              <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,236,215,0.45)', marginTop: 8 }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Reviews grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(340px,1fr))', gap: 24 }}>
          {reviews.map((r, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(245,236,215,0.07)', borderRadius: 12, padding: '28px 28px 24px', position: 'relative', transition: 'border-color 0.3s', cursor: 'default' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(194,124,58,0.3)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(245,236,215,0.07)'}>
              {/* Quote mark */}
              <div style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '5rem', color: 'rgba(194,124,58,0.12)', lineHeight: 0.6, marginBottom: 16, userSelect: 'none' }}>"</div>
              {/* Stars */}
              <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                {Array(r.score).fill(0).map((_, j) => <span key={j} style={{ color: '#C27C3A', fontSize: '0.75rem' }}>★</span>)}
              </div>
              <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, color: 'rgba(245,236,215,0.75)', lineHeight: 1.75, fontSize: '0.9rem', marginBottom: 24, fontStyle: 'italic' }}>"{r.text}"</p>
              <div style={{ borderTop: '1px solid rgba(245,236,215,0.06)', paddingTop: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.88rem', fontWeight: 500, color: '#F5ECD7' }}>{r.name}</div>
                  <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.72rem', color: 'rgba(245,236,215,0.4)', marginTop: 2 }}>{r.role} · {r.company}</div>
                  <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.65rem', color: 'rgba(194,124,58,0.6)', marginTop: 4 }}>{r.flag} {r.country}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ background: 'rgba(194,124,58,0.1)', border: '1px solid rgba(194,124,58,0.2)', borderRadius: 20, padding: '3px 10px', fontFamily: 'DM Sans,sans-serif', fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C27C3A' }}>{r.origin}</div>
                  <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.6rem', color: 'rgba(245,236,215,0.25)', marginTop: 6 }}>{r.year}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: 72, padding: '48px', background: 'rgba(194,124,58,0.05)', border: '1px solid rgba(194,124,58,0.12)', borderRadius: 12 }}>
          <p style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 300, color: '#F5ECD7', marginBottom: 12 }}>Become our next <em style={{ color: '#D4A55A' }}>partner roaster</em></p>
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, color: 'rgba(245,236,215,0.45)', marginBottom: 28, fontSize: '0.88rem' }}>Join roasters in 15+ countries who trust Birhan for their Ethiopian single-origin.</p>
          <a href="mailto:info@birhancoffee.com" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'linear-gradient(135deg,#6B3A1F,#C27C3A)', border: 'none', color: '#F5ECD7', padding: '14px 36px', borderRadius: 2, fontFamily: 'DM Sans,sans-serif', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}>Request Samples →</a>
        </div>
      </div>
    </div>
  );
}
