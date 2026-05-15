export const STEPS = [
  {
    slug: 'growing',
    num: '01',
    title: 'Growing',
    subtitle: 'The Ethiopian Highlands',
    desc: 'Our partner farmers cultivate Arabica coffee at altitudes between 1,400–2,200m across Yirgacheffe, Masha, Jimma, and Saylem. Rich volcanic soil, shade trees, and high elevation create the ideal micro-climate for exceptional beans.',
    img: '/Coffee Bean Tree.jpg',
    icon: '🌱',
    color: '#2D5016',
  },
  {
    slug: 'harvesting',
    num: '02',
    title: 'Harvesting',
    subtitle: 'Hand-Picked, Cherry by Cherry',
    desc: 'Our harvesting specialists oversee selective hand-picking — only the ripest red cherries are chosen. This labour-intensive process ensures every batch starts with the finest raw material and preserves the health of the coffee plant.',
    img: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=900&q=80&fit=crop',
    icon: '🍒',
    color: '#8B1A1A',
  },
  {
    slug: 'processing',
    num: '03',
    title: 'Processing',
    subtitle: 'Washed · Natural · Honey',
    desc: 'At our Yirgacheffe facility we employ washed, natural, and honey processing. Our Sebeta centre handles precision wet and dry milling. Each method unlocks distinct flavour characteristics — from bright florals to rich fruit complexity.',
    img: '/COFFEE SOURCING.jpg',
    icon: '⚙️',
    color: '#6B3A1F',
  },
  {
    slug: 'quality-control',
    num: '04',
    title: 'Quality Control',
    subtitle: 'Certified Q-Graders On-Site',
    desc: 'Every lot undergoes rigorous cupping and grading by our certified Q-graders. Only beans that achieve our premium standard — cup score 84+ — are approved for export. Consistency is not a target; it is our baseline.',
    img: 'https://images.unsplash.com/photo-1520970014086-2208d157c9e2?w=900&q=80&fit=crop',
    icon: '🔬',
    color: '#2A4A6B',
  },
  {
    slug: 'export',
    num: '05',
    title: 'Export',
    subtitle: 'Addis Ababa to the World',
    desc: "Our logistics team manages end-to-end export from Addis Ababa, ensuring full traceability, compliance with international trade regulations, and on-time delivery. From Ethiopia's highlands to roasters worldwide — with integrity at every step.",
    img: '/export.jpg',
    icon: '🌍',
    color: '#1A3A5C',
  },
];

import { Link } from 'react-router-dom';
import { useLang } from '../lang.jsx';

export default function FarmToCup() {
  const { t } = useLang();
  return (
    <section id="farmtocup" style={{
      padding: 'clamp(80px,10vw,140px) clamp(16px,5vw,60px)',
      background: '#07050a',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '40%',
        backgroundImage: `url(https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1800&q=60&fit=crop)`,
        backgroundSize: 'cover', backgroundPosition: 'center top',
        opacity: 0.06,
      }} />

      <div className="container" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(48px,8vw,80px)' }}>
          <p className="section-label">{t.theJourney}</p>
          <h2 className="section-title">{t.farmToCupTitle} <em>{t.farmToCupItalic}</em></h2>
          <div className="divider center" />
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, color: 'rgba(245,236,215,0.5)', maxWidth: 540, margin: '0 auto', lineHeight: 1.75 }}>
            {t.farmToCupDesc}
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line — desktop only */}
          <div className="ftc-vline" style={{
            position: 'absolute', left: '50%', top: 0, bottom: 0,
            width: 1, background: 'linear-gradient(to bottom, transparent, rgba(194,124,58,0.3) 10%, rgba(194,124,58,0.3) 90%, transparent)',
            transform: 'translateX(-50%)',
          }} />

          {STEPS.map((step, i) => (
            <div key={step.num} className="ftc-timeline-row">
              {/* Left side */}
              <div className="ftc-left" style={{ order: i % 2 === 0 ? 1 : 3 }}>
                {i % 2 === 0 ? (
                  <Link to={`/farmtocup/${step.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <StepContent step={step} align="right" />
                  </Link>
                ) : (
                  <Link to={`/farmtocup/${step.slug}`} style={{ display: 'block' }}>
                    <StepPhoto step={step} />
                  </Link>
                )}
              </div>

              {/* Center dot */}
              <div className="ftc-center" style={{ order: 2 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: '50%',
                  background: `linear-gradient(135deg, ${step.color}, #C27C3A)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.3rem', flexShrink: 0,
                  boxShadow: `0 0 0 8px rgba(7,5,10,1), 0 0 0 9px rgba(194,124,58,0.25)`,
                  zIndex: 2, position: 'relative',
                }}>{step.icon}</div>
              </div>

              {/* Right side */}
              <div className="ftc-right" style={{ order: i % 2 === 0 ? 3 : 1 }}>
                {i % 2 === 0 ? (
                  <Link to={`/farmtocup/${step.slug}`} style={{ display: 'block' }}>
                    <StepPhoto step={step} />
                  </Link>
                ) : (
                  <Link to={`/farmtocup/${step.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <StepContent step={step} align="left" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StepContent({ step, align }) {
  const { t } = useLang();
  return (
    <div style={{ textAlign: align }}>
      <div style={{
        fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(3rem,5vw,4.5rem)',
        fontWeight: 300, color: 'rgba(194,124,58,0.15)', lineHeight: 1,
        marginBottom: -8,
      }}>{step.num}</div>
      <h3 style={{
        fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(1.6rem,2.5vw,2.2rem)',
        fontWeight: 600, color: '#F5ECD7', marginBottom: 6,
      }}>{step.title}</h3>
      <p style={{
        fontFamily: 'DM Sans,sans-serif', fontSize: '0.7rem',
        letterSpacing: '0.2em', textTransform: 'uppercase',
        color: '#C27C3A', marginBottom: 16,
      }}>{step.subtitle}</p>
      <p style={{
        fontFamily: 'DM Sans,sans-serif', fontWeight: 300,
        color: 'rgba(245,236,215,0.55)', lineHeight: 1.75, fontSize: '0.92rem',
      }}>{step.desc}</p>
      <p style={{
        fontFamily: 'DM Sans,sans-serif', fontSize: '0.68rem', letterSpacing: '0.15em',
        textTransform: 'uppercase', color: 'rgba(194,124,58,0.6)', marginTop: 20,
        display: 'flex', alignItems: 'center', gap: 6,
        justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
      }}>
        {t.viewDetails}
      </p>
    </div>
  );
}

export function StepPhoto({ step }) {
  return (
    <div className="ftc-photo">
      <img src={step.img} alt={step.title} loading="lazy" />
      <div className="ftc-photo-overlay" />
      {/* Step badge */}
      <div style={{
        position: 'absolute', bottom: 16, left: 16,
        background: 'rgba(7,5,10,0.7)', backdropFilter: 'blur(8px)',
        border: '1px solid rgba(194,124,58,0.3)',
        borderRadius: 4, padding: '6px 12px',
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <span style={{ fontSize: '1rem' }}>{step.icon}</span>
        <div>
          <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C27C3A' }}>{step.num}</div>
          <div style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '0.95rem', fontWeight: 600, color: '#F5ECD7', lineHeight: 1.2 }}>{step.title}</div>
        </div>
      </div>
    </div>
  );
}

