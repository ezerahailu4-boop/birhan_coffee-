import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import FarmToCup from '../components/FarmToCup';
import Coffees from '../components/Coffees';
import CSR from '../components/CSR';
import Team from '../components/Team';
import Contact from '../components/Contact';

const TICKER_TEXT = '✦ BIRHAN COFFEE PLC · ADDIS ABABA, ETHIOPIA · DIRECT TRADE · TOP 100 EXPORTER · YIRGACHEFFE · MASHA · JIMMA · SAYLEM · PREMIUM ARABICA · SUSTAINABLE FARMING · COMMUNITY FIRST · ';

export default function Home({ onExplore, onAddToCart }) {
  return (
    <>
      <Hero onExplore={onExplore} />

      {/* Ticker */}
      <div style={{ background: '#6B3A1F', padding: '12px 0', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div style={{ display: 'inline-block', animation: 'ticker 30s linear infinite' }}>
          <span style={{
            fontFamily: 'DM Sans,sans-serif', fontSize: '0.65rem',
            letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'rgba(245,236,215,0.85)',
          }}>
            {TICKER_TEXT + TICKER_TEXT}
          </span>
        </div>
      </div>

      <About />
      <FarmToCup />
      <Coffees onAddToCart={onAddToCart} />

      {/* Pull-quote divider */}
      <div style={{
        padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,60px)',
        background: '#07050a', textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1400&q=50)`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          backgroundAttachment: 'fixed', opacity: 0.06,
        }} />
        <div style={{ position: 'relative' }}>
          <p className="section-label">Our Strategy</p>
          <blockquote style={{
            fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic',
            fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', fontWeight: 300,
            color: '#D4A55A', lineHeight: 1.45,
            maxWidth: 820, margin: '0 auto 24px',
          }}>
            "We deliver on time not only for the sake of customer satisfaction — we do this because it is our internal culture of doing things the right way."
          </blockquote>
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,236,215,0.35)' }}>
            — Birhan Coffee, Core Philosophy
          </p>
        </div>
      </div>

      <CSR />
      <Team />
      <Contact />
    </>
  );
}
