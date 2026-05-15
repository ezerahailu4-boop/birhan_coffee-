import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { STEPS } from '../components/FarmToCup';
import { StepPhoto, StepContent } from '../components/FarmToCup';

export default function StepPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const step = STEPS.find(s => s.slug === slug);

  if (!step) {
    return (
      <div style={{ padding: 40, textAlign: 'center', color: '#F5ECD7' }}>
        <h2>Page not found</h2>
        <p>The step "{slug}" does not exist.</p>
        <button onClick={() => navigate('/farmtocup')} style={{
          marginTop: 20, padding: '8px 16px', background: '#C27C3A', border: 'none', color: '#07050a', borderRadius: 4, cursor: 'pointer'
        }}>Back to Farm to Cup</button>
      </div>
    );
  }

  return (
    <section style={{ padding: 'clamp(80px,10vw,140px) clamp(20px,5vw,60px)', background: '#07050a' }}>
      <button onClick={() => navigate('/farmtocup')} style={{
        marginBottom: 30, background: 'none', border: '1px solid #C27C3A', padding: '6px 14px', color: '#C27C3A', borderRadius: 4, cursor: 'pointer'
      }}>← Back to overview</button>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.8rem', color: '#F5ECD7' }}>{step.title}</h1>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', color: '#C27C3A', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{step.subtitle}</p>
      </div>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ marginBottom: 30 }}>
          <StepPhoto step={step} />
        </div>
        <div style={{ color: 'rgba(245,236,215,0.85)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7, fontSize: '1rem' }}>
          {step.desc}
        </div>
      </div>
    </section>
  );
}

