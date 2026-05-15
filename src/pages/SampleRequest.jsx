import { useState } from 'react';

const ORIGINS = ['Yirgacheffe', 'Masha', 'Jimma', 'Saylem'];
const FORMATS = ['Green Beans', 'Roasted Beans', 'Ground Coffee', 'Capsules'];
const VOLUMES = ['Sample (250g)', 'Small (1–5 bags)', 'Medium (6–20 bags)', 'Wholesale (20+ bags)'];

export default function SampleRequest() {
  const [form, setForm] = useState({ name:'', company:'', email:'', phone:'', country:'', origins:[], formats:[], volume:'', message:'' });
  const [sent, setSent] = useState(false);

  const toggle = (field, val) => setForm(prev => {
    const arr = prev[field];
    return { ...prev, [field]: arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val] };
  });

  const handleSubmit = () => {
    const sub = `Sample Request — ${form.origins.join(', ')} — ${form.company}`;
    const body = `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\nCountry: ${form.country}\nOrigins: ${form.origins.join(', ')}\nFormats: ${form.formats.join(', ')}\nVolume: ${form.volume}\n\nMessage:\n${form.message}`;
    window.location.href = `mailto:Birhancoffee24@gmail.com?subject=${encodeURIComponent(sub)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const chip = (field, val, color='#C27C3A') => {
    const active = form[field].includes(val);
    return (
      <button key={val} onClick={() => toggle(field, val)} style={{ padding: '8px 16px', borderRadius: 30, fontFamily: 'DM Sans,sans-serif', fontSize: '0.72rem', cursor: 'pointer', transition: 'all 0.2s', letterSpacing: '0.06em',
        background: active ? `linear-gradient(135deg,#6B3A1F,#C27C3A)` : 'rgba(255,255,255,0.04)',
        border: active ? 'none' : '1px solid rgba(245,236,215,0.1)',
        color: active ? '#F5ECD7' : 'rgba(245,236,215,0.55)',
        boxShadow: active ? '0 4px 16px rgba(194,124,58,0.3)' : 'none',
      }}>{val}</button>
    );
  };

  const field = (label, key, type='text', placeholder='') => (
    <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
      <label style={{ fontFamily:'DM Sans,sans-serif', fontSize:'0.65rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(194,124,58,0.8)' }}>{label}</label>
      <input type={type} value={form[key]} onChange={e => setForm(p => ({...p,[key]:e.target.value}))} placeholder={placeholder}
        style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(245,236,215,0.12)', color:'#F5ECD7', padding:'12px 16px', borderRadius:8, fontFamily:'DM Sans,sans-serif', fontSize:'0.86rem', fontWeight:300, outline:'none', transition:'border-color 0.2s' }}
        onFocus={e => e.target.style.borderColor='rgba(194,124,58,0.6)'}
        onBlur={e => e.target.style.borderColor='rgba(245,236,215,0.12)'}
      />
    </div>
  );

  if (sent) return (
    <div style={{ background:'#07050a', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'clamp(100px,12vw,160px) clamp(16px,5vw,60px)' }}>
      <div style={{ textAlign:'center', maxWidth:480 }}>
        <div style={{ fontSize:'4rem', marginBottom:24 }}>☕</div>
        <h2 style={{ fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(1.8rem,4vw,3rem)', fontWeight:300, color:'#F5ECD7', marginBottom:16 }}>Request <em style={{ color:'#D4A55A' }}>Sent!</em></h2>
        <p style={{ fontFamily:'DM Sans,sans-serif', fontWeight:300, color:'rgba(245,236,215,0.55)', lineHeight:1.75 }}>Your email client should have opened with your request. We'll respond within 24 hours. <em>Tena Yistilign!</em></p>
        <a href="/" style={{ display:'inline-flex', alignItems:'center', gap:10, marginTop:32, background:'linear-gradient(135deg,#6B3A1F,#C27C3A)', border:'none', color:'#F5ECD7', padding:'14px 36px', borderRadius:2, fontFamily:'DM Sans,sans-serif', fontSize:'0.72rem', fontWeight:500, letterSpacing:'0.2em', textTransform:'uppercase', textDecoration:'none' }}>Back Home</a>
      </div>
    </div>
  );

  return (
    <div style={{ background:'#07050a', minHeight:'100vh', padding:'clamp(100px,12vw,160px) clamp(16px,5vw,60px) 80px' }}>
      <div style={{ maxWidth:900, margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:64 }}>
          <p style={{ fontFamily:'DM Sans,sans-serif', fontSize:'0.68rem', letterSpacing:'0.3em', textTransform:'uppercase', color:'#C27C3A', marginBottom:18 }}>Free Samples</p>
          <h1 style={{ fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(2.4rem,5vw,4rem)', fontWeight:300, color:'#F5ECD7', lineHeight:1.08, marginBottom:20 }}>Request a <em style={{ fontStyle:'italic', color:'#D4A55A' }}>Sample</em></h1>
          <div style={{ width:48, height:1, background:'linear-gradient(90deg,transparent,#C27C3A,transparent)', margin:'0 auto 24px' }} />
          <p style={{ fontFamily:'DM Sans,sans-serif', fontWeight:300, color:'rgba(245,236,215,0.5)', maxWidth:500, margin:'0 auto', lineHeight:1.75 }}>We ship free samples to verified roasters and importers worldwide. Taste before you commit — that's our promise.</p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:32 }}>
          {/* Left column */}
          <div style={{ display:'flex', flexDirection:'column', gap:24 }}>
            {field('Full Name', 'name', 'text', 'Your name')}
            {field('Company / Roastery', 'company', 'text', 'Company name')}
            {field('Email Address', 'email', 'email', 'your@email.com')}
            {field('Phone / WhatsApp', 'phone', 'tel', '+1 234 567 8900')}
            {field('Country', 'country', 'text', 'Your country')}
          </div>

          {/* Right column */}
          <div style={{ display:'flex', flexDirection:'column', gap:28 }}>
            <div>
              <div style={{ fontFamily:'DM Sans,sans-serif', fontSize:'0.65rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(194,124,58,0.8)', marginBottom:14 }}>Select Origins</div>
              <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>{ORIGINS.map(o => chip('origins', o))}</div>
            </div>
            <div>
              <div style={{ fontFamily:'DM Sans,sans-serif', fontSize:'0.65rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(194,124,58,0.8)', marginBottom:14 }}>Product Format</div>
              <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>{FORMATS.map(f => chip('formats', f))}</div>
            </div>
            <div>
              <div style={{ fontFamily:'DM Sans,sans-serif', fontSize:'0.65rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(194,124,58,0.8)', marginBottom:14 }}>Expected Volume</div>
              <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
                {VOLUMES.map(v => (
                  <button key={v} onClick={() => setForm(p => ({...p, volume:v}))}
                    style={{ padding:'10px 16px', borderRadius:8, textAlign:'left', fontFamily:'DM Sans,sans-serif', fontSize:'0.78rem', cursor:'pointer', transition:'all 0.2s',
                      background: form.volume===v ? 'rgba(194,124,58,0.12)' : 'rgba(255,255,255,0.03)',
                      border: `1px solid ${form.volume===v ? 'rgba(194,124,58,0.4)' : 'rgba(245,236,215,0.08)'}`,
                      color: form.volume===v ? '#C27C3A' : 'rgba(245,236,215,0.5)',
                    }}>{v}</button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Message */}
        <div style={{ marginTop:28, display:'flex', flexDirection:'column', gap:8 }}>
          <label style={{ fontFamily:'DM Sans,sans-serif', fontSize:'0.65rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(194,124,58,0.8)' }}>Additional Notes</label>
          <textarea value={form.message} onChange={e => setForm(p => ({...p, message:e.target.value}))} rows={4} placeholder="Tell us about your roastery, how you plan to use the coffee, or any specific requirements..."
            style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(245,236,215,0.12)', color:'#F5ECD7', padding:'12px 16px', borderRadius:8, fontFamily:'DM Sans,sans-serif', fontSize:'0.86rem', fontWeight:300, outline:'none', resize:'vertical', transition:'border-color 0.2s' }}
            onFocus={e => e.target.style.borderColor='rgba(194,124,58,0.6)'}
            onBlur={e => e.target.style.borderColor='rgba(245,236,215,0.12)'}
          />
        </div>

        <div style={{ marginTop:36, display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:16 }}>
          <p style={{ fontFamily:'DM Sans,sans-serif', fontWeight:300, color:'rgba(245,236,215,0.35)', fontSize:'0.78rem' }}>Free samples shipped to verified businesses. Response within 24 hours.</p>
          <button onClick={handleSubmit}
            style={{ background:'linear-gradient(135deg,#6B3A1F,#C27C3A)', border:'none', color:'#F5ECD7', padding:'15px 40px', borderRadius:4, fontFamily:'DM Sans,sans-serif', fontSize:'0.75rem', fontWeight:500, letterSpacing:'0.2em', textTransform:'uppercase', cursor:'pointer', transition:'all 0.25s', boxShadow:'0 8px 28px rgba(107,58,31,0.4)' }}>
            Send Request →
          </button>
        </div>
      </div>
    </div>
  );
}

