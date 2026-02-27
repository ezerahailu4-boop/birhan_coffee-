const ABOUT_BG = 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1400&q=80&fit=crop';
const FOUNDER_IMG = '/q12.jpg';

export default function About() {
  return (
    <>
      {/* About Section */}
      <section id="about" style={{
        padding: 'clamp(80px,10vw,140px) clamp(20px,5vw,60px)',
        background: '#0c0908', position: 'relative',
      }}>
        {/* BG photo */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${ABOUT_BG})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: 0.05,
        }} />

        <div className="container" style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            {/* Left: image collage */}
            <div style={{ position: 'relative' }}>
              <div style={{
                width: '100%', aspectRatio: '4/5', borderRadius: 4, overflow: 'hidden',
                border: '1px solid rgba(245,236,215,0.08)',
              }}>
                <img src="/farm.jpg"  
                  alt="Ethiopian Coffee Farm"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,9,8,0.6) 0%, transparent 50%)' }} />
              </div>
              {/* Floating stat card */}
              <div style={{
                position: 'absolute', bottom: -24, right: -24,
                background: 'rgba(12,9,8,0.95)', backdropFilter: 'blur(20px)',
                border: '1px solid rgba(194,124,58,0.3)',
                borderRadius: 4, padding: '24px 28px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              }}>
                <div style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '3rem', fontWeight: 600, color: '#C27C3A', lineHeight: 1 }}>Top 100</div>
                <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,236,215,0.5)', marginTop: 4 }}>Ethiopian Exporters</div>
              </div>
            </div>

            {/* Right: text */}
            <div>
              <p className="section-label">Our Company</p>
              <h2 className="section-title" style={{ marginBottom: 24 }}>Five Years of <em>Purposeful Growth</em></h2>
              <div className="divider" />
              <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, color: 'rgba(245,236,215,0.6)', lineHeight: 1.8, marginBottom: 20, fontSize: '0.95rem' }}>
                Birhan Coffee PLC was established in 2019 with a simple but powerful conviction: exceptional Ethiopian coffee, delivered with integrity. Over five years we built strong relationships with over 200 local farmers, invested in sustainable farming, and opened our modern processing facility in Sebeta.
              </p>
              <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, color: 'rgba(245,236,215,0.6)', lineHeight: 1.8, marginBottom: 32, fontSize: '0.95rem' }}>
                By 2022 we had expanded to international markets, earning recognition in the top 100 Ethiopian coffee exporters. Today, Birhan Coffee is synonymous with quality, sustainability, and community empowerment — from our Bole Sub-City headquarters to coffee roasters around the world.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginBottom: 36 }}>
                {[
                  { icon: '🌱', label: 'Sustainable Farming', desc: 'Fair trade & eco-conscious practices at every stage' },
                  { icon: '🤝', label: 'Direct Relationships', desc: '200+ farming families paid premium fair prices' },
                  { icon: '🏆', label: 'Recognised Quality', desc: 'Top 100 Ethiopian coffee exporter since 2022' },
                  { icon: '🌍', label: 'Global Reach', desc: 'Exporting premium Arabica to international markets' },
                ].map(v => (
                  <div key={v.label} style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(245,236,215,0.07)',
                    borderRadius: 4, padding: 20,
                  }}>
                    <div style={{ fontSize: '1.3rem', marginBottom: 8 }}>{v.icon}</div>
                    <div style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.05rem', color: '#F5ECD7', marginBottom: 4 }}>{v.label}</div>
                    <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.78rem', color: 'rgba(245,236,215,0.4)', lineHeight: 1.5 }}>{v.desc}</div>
                  </div>
                ))}
              </div>
              <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Work With Us →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" style={{
        padding: 'clamp(80px,10vw,140px) clamp(20px,5vw,60px)',
        background: '#07050a',
      }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <p className="section-label">Our Founder</p>
              <h2 className="section-title" style={{ marginBottom: 8 }}>Birhanu <em>Lemi</em></h2>
              <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C27C3A', marginBottom: 24 }}>
                Founder & CEO, Birhan Coffee PLC
              </p>
              <div className="divider" />
              <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, color: 'rgba(245,236,215,0.6)', lineHeight: 1.8, marginBottom: 20, fontSize: '0.95rem' }}>
                Born and raised in the lush highlands of Ethiopia, Birhanu Lemi spent 25 years building successful businesses — including the beloved personal care brand Birhan & BLT — before channelling his passion for his homeland's most famous export into Birhan Coffee PLC.
              </p>
              <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, color: 'rgba(245,236,215,0.6)', lineHeight: 1.8, marginBottom: 20, fontSize: '0.95rem' }}>
                His founding vision was to blend Ethiopia's ancient coffee traditions with modern processing standards, paying fair prices that genuinely transform farmers' lives. Under his leadership, Birhan Coffee became a top-100 Ethiopian coffee exporter in just three years.
              </p>
              <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, color: 'rgba(245,236,215,0.6)', lineHeight: 1.8, marginBottom: 36, fontSize: '0.95rem' }}>
                Birhanu has received multiple national and international awards for sustainable farming and fair trade. His relentless pursuit of excellence and deep commitment to community uplift remain the beating heart of everything Birhan Coffee does.
              </p>
              <blockquote style={{
                fontFamily: 'Cormorant Garamond,serif', fontStyle: 'italic',
                fontSize: '1.4rem', color: 'rgba(212,165,90,0.85)', lineHeight: 1.5,
                borderLeft: '2px solid #C27C3A', paddingLeft: 24,
              }}>
                "Every cup of Birhan Coffee must not only taste exceptional — it must support a brighter future for Ethiopian farmers."
              </blockquote>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ width: '100%', aspectRatio: '3/4', borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(245,236,215,0.08)' }}>
                <img src={FOUNDER_IMG} alt="Birhanu Lemi" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,5,10,0.7) 0%, transparent 60%)' }} />
              </div>
              <div style={{
                position: 'absolute', top: 24, right: -24,
                background: 'linear-gradient(135deg, #6B3A1F, #C27C3A)',
                borderRadius: 4, padding: '20px 24px', minWidth: 160,
              }}>
                <div style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '2.2rem', fontWeight: 700, color: '#F5ECD7', lineHeight: 1 }}>25+</div>
                <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,236,215,0.8)', marginTop: 4 }}>Years in<br/>Business</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
