import { useEffect, useState, useRef } from 'react';

const HERO_VIDEO = '/back.mp4';

export default function Hero({ onExplore }) {
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = HERO_VIDEO;
    img.onload = () => setLoaded(true);
  }, []);

  return (
    <section id="hero" style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      {/* Gradient overlays */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(7,5,10,0.92) 40%, rgba(7,5,10,0.5) 80%, rgba(7,5,10,0.3) 100%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(7,5,10,0.8) 0%, transparent 50%)',
      }} />

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, padding: '0 clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: 680 }}>
          <div style={{ animation: 'fadeUp 1s ease 0.2s both' }}>
           
          </div>
          <div style={{ animation: 'fadeUp 1s ease 0.4s both' }}>
            <h1 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3.2rem, 7vw, 6.5rem)',
              fontWeight: 300, lineHeight: 0.95,
              color: '#F5ECD7', letterSpacing: '-0.02em',
              marginBottom: 8,
            }}>
              From the
            </h1>
            <h1 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3.2rem, 7vw, 6.5rem)',
              fontWeight: 600, lineHeight: 0.95,
              fontStyle: 'italic',
              color: '#C27C3A', letterSpacing: '-0.02em',
              marginBottom: 8,
            }}>
              Ethiopian Highlands
            </h1>
            <h1 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3.2rem, 7vw, 6.5rem)',
              fontWeight: 300, lineHeight: 0.95,
              color: '#F5ECD7', letterSpacing: '-0.02em',
              marginBottom: 36,
            }}>
              To Your Cup
            </h1>
          </div>
          <div style={{ animation: 'fadeUp 1s ease 0.6s both' }}>
            <div className="divider" />
            <p style={{
              fontFamily: 'DM Sans, sans-serif', fontWeight: 300,
              fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
              color: 'rgba(245,236,215,0.65)',
              lineHeight: 1.75, marginBottom: 44, maxWidth: 500,
            }}>
              Birhan Coffee PLC — a top-100 Ethiopian coffee exporter — brings single-origin, 
              traceable specialty beans from four legendary regions directly to global markets. 
              Every sack carries the soul of the land.
            </p>
          </div>
          <div style={{ animation: 'fadeUp 1s ease 0.8s both', display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={onExplore}>
              Explore Our Coffees →
            </button>
            <button className="btn-outline" onClick={() => document.getElementById('farmtocup')?.scrollIntoView({ behavior: 'smooth' })}>
              Farm to Cup Journey
            </button>
          </div>
        </div>

        {/* Stats strip */}
        <div style={{
          position: 'absolute', bottom: -80, left: 'clamp(20px,5vw,60px)',
          display: 'flex', gap: 48,
          animation: 'fadeUp 1s ease 1s both',
        }}>
          {[['200+', 'Partner Farmers'], ['4', 'Origin Regions'], ['Top 100', 'Ethiopian Exporters'], ['2019', 'Founded']].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 600, color: '#C27C3A' }}>{n}</div>
              <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,236,215,0.35)' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
       
      }}>
       
        <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, rgba(245,236,215,0.6), transparent)' }} />
      </div>
    </section>
  );
}
