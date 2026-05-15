import { useState } from 'react';
import { Link } from 'react-router-dom';

const POSTS = [
  { slug:'yirgacheffe-guide', cat:'Origins', readTime:'5 min', date:'Jan 2025', title:'What Makes Yirgacheffe Coffee So Special?', excerpt:'Explore the geology, altitude, and processing traditions that make Yirgacheffe the most celebrated coffee origin on earth — and why every specialty roaster should have it in their portfolio.', img:'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=700&q=80&fit=crop', featured:true },
  { slug:'honey-processing', cat:'Processing', readTime:'4 min', date:'Dec 2024', title:'Honey Process Explained: Between Washed and Natural', excerpt:'The honey process has taken specialty coffee by storm. We explain exactly what it means, why the mucilage matters, and how we use it at our Yirgacheffe facility to unlock golden sweetness.', img:'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=700&q=80&fit=crop' },
  { slug:'qgrade-cupping', cat:'Quality', readTime:'6 min', date:'Nov 2024', title:'Inside a Q-Grade Cupping: How We Score Every Lot', excerpt:'What does 84+ cup score actually mean? Walk through our on-site Q-grader process — from green bean inspection to the final cupping score that decides if a lot ships.', img:'https://images.unsplash.com/photo-1520970014086-2208d157c9e2?w=700&q=80&fit=crop' },
  { slug:'saylem-csr', cat:'Community', readTime:'7 min', date:'Oct 2024', title:'Saylem: The Village Behind the Coffee', excerpt:'How a 12km road and two bridges changed the lives of 200+ farming families — and why we believe infrastructure investment is the most sustainable form of coffee sourcing.', img:'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=700&q=80&fit=crop' },
  { slug:'altitude-flavor', cat:'Science', readTime:'4 min', date:'Sep 2024', title:'Why Altitude Produces Better Coffee', excerpt:'The science behind why our 1,700–2,200m Ethiopian origins produce denser beans with more sugar and complex acids — and how that translates directly into your cup.', img:'https://images.unsplash.com/photo-1516743619420-154b70a65fea?w=700&q=80&fit=crop' },
  { slug:'buna-ceremony', cat:'Culture', readTime:'3 min', date:'Aug 2024', title:'The Ethiopian Buna Ceremony: A 1,000-Year Ritual', excerpt:"Ethiopia gave the world coffee. The buna ceremony — three rounds, a clay jebena, and incense — is still how most Ethiopians start the day. Here's what it means and how to do it.", img:'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=700&q=80&fit=crop' },
];

const CATS = ['All', 'Origins', 'Processing', 'Quality', 'Community', 'Science', 'Culture'];

export default function Blog() {
  const [cat, setCat] = useState('All');
  const featured = POSTS.find(p => p.featured);
  const filtered = (cat === 'All' ? POSTS.filter(p => !p.featured) : POSTS.filter(p => p.cat === cat && !p.featured));

  return (
    <div style={{ background:'#07050a', minHeight:'100vh', padding:'clamp(100px,12vw,160px) clamp(16px,5vw,60px) 80px' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>

        <div style={{ textAlign:'center', marginBottom:64 }}>
          <p style={{ fontFamily:'DM Sans,sans-serif', fontSize:'0.68rem', letterSpacing:'0.3em', textTransform:'uppercase', color:'#C27C3A', marginBottom:18 }}>Knowledge & Stories</p>
          <h1 style={{ fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(2.4rem,5vw,4rem)', fontWeight:300, color:'#F5ECD7', lineHeight:1.08, marginBottom:20 }}>The Coffee <em style={{ fontStyle:'italic', color:'#D4A55A' }}>Journal</em></h1>
          <div style={{ width:48, height:1, background:'linear-gradient(90deg,transparent,#C27C3A,transparent)', margin:'0 auto 24px' }} />
          <p style={{ fontFamily:'DM Sans,sans-serif', fontWeight:300, color:'rgba(245,236,215,0.5)', maxWidth:480, margin:'0 auto', lineHeight:1.75 }}>Origins, processing, culture, and the science behind exceptional Ethiopian coffee.</p>
        </div>

        {/* Featured post */}
        {cat === 'All' && featured && (
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:0, borderRadius:16, overflow:'hidden', border:'1px solid rgba(245,236,215,0.07)', marginBottom:56, background:'rgba(255,255,255,0.02)' }}>
            <div style={{ aspectRatio:'4/3', overflow:'hidden' }}>
              <img src={featured.img} alt={featured.title} style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.5s' }}
                onMouseEnter={e => e.currentTarget.style.transform='scale(1.04)'}
                onMouseLeave={e => e.currentTarget.style.transform='none'} />
            </div>
            <div style={{ padding:'40px 40px', display:'flex', flexDirection:'column', justifyContent:'center', gap:16 }}>
              <div style={{ display:'flex', gap:10, alignItems:'center' }}>
                <span style={{ background:'rgba(194,124,58,0.1)', border:'1px solid rgba(194,124,58,0.25)', borderRadius:20, padding:'4px 12px', fontFamily:'DM Sans,sans-serif', fontSize:'0.6rem', letterSpacing:'0.12em', textTransform:'uppercase', color:'#C27C3A' }}>{featured.cat}</span>
                <span style={{ fontFamily:'DM Sans,sans-serif', fontSize:'0.6rem', color:'rgba(245,236,215,0.3)' }}>{featured.date} · {featured.readTime} read</span>
                <span style={{ background:'rgba(212,165,90,0.12)', border:'1px solid rgba(212,165,90,0.25)', borderRadius:20, padding:'4px 10px', fontFamily:'DM Sans,sans-serif', fontSize:'0.58rem', letterSpacing:'0.1em', textTransform:'uppercase', color:'#D4A55A' }}>Featured</span>
              </div>
              <h2 style={{ fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(1.5rem,2.5vw,2.2rem)', fontWeight:400, color:'#F5ECD7', lineHeight:1.2 }}>{featured.title}</h2>
              <p style={{ fontFamily:'DM Sans,sans-serif', fontWeight:300, color:'rgba(245,236,215,0.55)', lineHeight:1.75, fontSize:'0.88rem' }}>{featured.excerpt}</p>
              <a href="#" style={{ display:'inline-flex', alignItems:'center', gap:8, fontFamily:'DM Sans,sans-serif', fontSize:'0.7rem', letterSpacing:'0.15em', textTransform:'uppercase', color:'#C27C3A', textDecoration:'none' }}>Read Article →</a>
            </div>
          </div>
        )}

        {/* Filter */}
        <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:36 }}>
          {CATS.map(c => (
            <button key={c} onClick={() => setCat(c)}
              style={{ padding:'7px 18px', borderRadius:30, fontFamily:'DM Sans,sans-serif', fontSize:'0.68rem', letterSpacing:'0.1em', textTransform:'uppercase', cursor:'pointer', transition:'all 0.2s',
                background: cat===c ? 'linear-gradient(135deg,#6B3A1F,#C27C3A)' : 'rgba(255,255,255,0.04)',
                border: cat===c ? 'none' : '1px solid rgba(245,236,215,0.1)',
                color: cat===c ? '#F5ECD7' : 'rgba(245,236,215,0.5)',
              }}>{c}</button>
          ))}
        </div>

        {/* Posts grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))', gap:24 }}>
          {filtered.map((p, i) => (
            <div key={i} style={{ background:'rgba(255,255,255,0.02)', border:'1px solid rgba(245,236,215,0.07)', borderRadius:12, overflow:'hidden', cursor:'pointer', transition:'border-color 0.3s, transform 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(194,124,58,0.3)'; e.currentTarget.style.transform='translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(245,236,215,0.07)'; e.currentTarget.style.transform='none'; }}>
              <div style={{ aspectRatio:'16/9', overflow:'hidden' }}>
                <img src={p.img} alt={p.title} style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.4s' }}
                  onMouseEnter={e => e.currentTarget.style.transform='scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform='none'} />
              </div>
              <div style={{ padding:'22px 22px 24px' }}>
                <div style={{ display:'flex', gap:8, alignItems:'center', marginBottom:14 }}>
                  <span style={{ background:'rgba(194,124,58,0.1)', border:'1px solid rgba(194,124,58,0.2)', borderRadius:20, padding:'3px 10px', fontFamily:'DM Sans,sans-serif', fontSize:'0.58rem', letterSpacing:'0.12em', textTransform:'uppercase', color:'#C27C3A' }}>{p.cat}</span>
                  <span style={{ fontFamily:'DM Sans,sans-serif', fontSize:'0.6rem', color:'rgba(245,236,215,0.3)' }}>{p.date} · {p.readTime}</span>
                </div>
                <h3 style={{ fontFamily:'Cormorant Garamond,serif', fontSize:'1.25rem', fontWeight:500, color:'#F5ECD7', lineHeight:1.3, marginBottom:10 }}>{p.title}</h3>
                <p style={{ fontFamily:'DM Sans,sans-serif', fontWeight:300, color:'rgba(245,236,215,0.5)', lineHeight:1.7, fontSize:'0.82rem', marginBottom:16 }}>{p.excerpt}</p>
                <a href="#" style={{ fontFamily:'DM Sans,sans-serif', fontSize:'0.65rem', letterSpacing:'0.12em', textTransform:'uppercase', color:'#C27C3A', textDecoration:'none' }}>Read More →</a>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div style={{ marginTop:72, textAlign:'center', padding:'52px clamp(20px,5vw,60px)', background:'rgba(194,124,58,0.05)', border:'1px solid rgba(194,124,58,0.12)', borderRadius:16 }}>
          <p style={{ fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(1.5rem,3vw,2.2rem)', fontWeight:300, color:'#F5ECD7', marginBottom:12 }}>Get new articles in your <em style={{ color:'#D4A55A' }}>inbox</em></p>
          <p style={{ fontFamily:'DM Sans,sans-serif', fontWeight:300, color:'rgba(245,236,215,0.45)', marginBottom:28, fontSize:'0.86rem' }}>Origins deep-dives, processing guides, and stories from the Ethiopian highlands.</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', maxWidth:440, margin:'0 auto' }}>
            <input type="email" placeholder="your@email.com" style={{ flex:1, background:'rgba(255,255,255,0.06)', border:'1px solid rgba(245,236,215,0.12)', color:'#F5ECD7', padding:'12px 16px', borderRadius:4, fontFamily:'DM Sans,sans-serif', fontSize:'0.86rem', outline:'none' }} />
            <button style={{ background:'linear-gradient(135deg,#6B3A1F,#C27C3A)', border:'none', color:'#F5ECD7', padding:'12px 24px', borderRadius:4, fontFamily:'DM Sans,sans-serif', fontSize:'0.7rem', fontWeight:500, letterSpacing:'0.15em', textTransform:'uppercase', cursor:'pointer', whiteSpace:'nowrap' }}>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

