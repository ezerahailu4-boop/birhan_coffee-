import { useState } from 'react';

const PHOTOS = [
  { src:'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80&fit=crop', cat:'Farm', caption:'Selective hand-picking at Yirgacheffe', orientation:'landscape' },
  { src:'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&q=80&fit=crop', cat:'Farm', caption:'Masha highland growing region', orientation:'portrait' },
  { src:'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80&fit=crop', cat:'Processing', caption:'Natural drying beds at our Yirgacheffe facility', orientation:'landscape' },
  { src:'https://images.unsplash.com/photo-1520970014086-2208d157c9e2?w=600&q=80&fit=crop', cat:'Quality', caption:'Q-grade cupping session', orientation:'portrait' },
  { src:'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&q=80&fit=crop', cat:'Export', caption:'Graded and packed for export', orientation:'landscape' },
  { src:'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=600&q=80&fit=crop', cat:'Culture', caption:'Traditional Ethiopian buna ceremony', orientation:'portrait' },
  { src:'https://images.unsplash.com/photo-1610632380989-680fe40816c6?w=800&q=80&fit=crop', cat:'Farm', caption:'Coffee cherry ripening on the branch', orientation:'landscape' },
  { src:'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80&fit=crop', cat:'Quality', caption:'Green bean sorting and inspection', orientation:'portrait' },
  { src:'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80&fit=crop', cat:'Processing', caption:'Honey process drying beds, Sebeta', orientation:'landscape' },
  { src:'https://images.unsplash.com/photo-1516743619420-154b70a65fea?w=600&q=80&fit=crop', cat:'Culture', caption:'Ethiopian highlands morning fog', orientation:'portrait' },
  { src:'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80&fit=crop', cat:'Export', caption:'Export documentation and logistics', orientation:'landscape' },
  { src:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80&fit=crop', cat:'Culture', caption:'Coffee ready for the world', orientation:'portrait' },
];

const CATS = ['All', 'Farm', 'Processing', 'Quality', 'Export', 'Culture'];

export default function Gallery() {
  const [cat, setCat] = useState('All');
  const [lightbox, setLightbox] = useState(null);
  const filtered = cat === 'All' ? PHOTOS : PHOTOS.filter(p => p.cat === cat);

  return (
    <div style={{ background:'#07050a', minHeight:'100vh', padding:'clamp(100px,12vw,160px) clamp(16px,5vw,60px) 80px' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:56 }}>
          <p style={{ fontFamily:'DM Sans,sans-serif', fontSize:'0.68rem', letterSpacing:'0.3em', textTransform:'uppercase', color:'#C27C3A', marginBottom:18 }}>Visual Story</p>
          <h1 style={{ fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(2.4rem,5vw,4rem)', fontWeight:300, color:'#F5ECD7', lineHeight:1.08, marginBottom:20 }}>Farm to Cup <em style={{ fontStyle:'italic', color:'#D4A55A' }}>Gallery</em></h1>
          <div style={{ width:48, height:1, background:'linear-gradient(90deg,transparent,#C27C3A,transparent)', margin:'0 auto 24px' }} />
          <p style={{ fontFamily:'DM Sans,sans-serif', fontWeight:300, color:'rgba(245,236,215,0.5)', maxWidth:480, margin:'0 auto', lineHeight:1.75 }}>Real photographs from our farms, processing facilities, team, and the Ethiopian coffee landscape.</p>
        </div>

        {/* Category filter */}
        <div style={{ display:'flex', gap:8, justifyContent:'center', flexWrap:'wrap', marginBottom:40 }}>
          {CATS.map(c => (
            <button key={c} onClick={() => setCat(c)}
              style={{ padding:'8px 20px', borderRadius:30, fontFamily:'DM Sans,sans-serif', fontSize:'0.7rem', letterSpacing:'0.12em', textTransform:'uppercase', cursor:'pointer', transition:'all 0.22s',
                background: cat===c ? 'linear-gradient(135deg,#6B3A1F,#C27C3A)' : 'rgba(255,255,255,0.04)',
                border: cat===c ? 'none' : '1px solid rgba(245,236,215,0.1)',
                color: cat===c ? '#F5ECD7' : 'rgba(245,236,215,0.5)',
              }}>{c}</button>
          ))}
        </div>

        {/* Masonry grid */}
        <div style={{ columns: 'clamp(2,3,3)', columnGap:16 }}>
          {filtered.map((p, i) => (
            <div key={i} onClick={() => setLightbox(p)}
              style={{ breakInside:'avoid', marginBottom:16, borderRadius:8, overflow:'hidden', cursor:'zoom-in', position:'relative', border:'1px solid rgba(245,236,215,0.06)', transition:'transform 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.transform='scale(1.02)'}
              onMouseLeave={e => e.currentTarget.style.transform='none'}>
              <img src={p.src} alt={p.caption} style={{ width:'100%', display:'block', objectFit:'cover' }} loading="lazy" />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(7,5,10,0.8) 0%,transparent 50%)', opacity:0, transition:'opacity 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.opacity='1'}
                onMouseLeave={e => e.currentTarget.style.opacity='0'}>
                <div style={{ position:'absolute', bottom:12, left:14, right:14 }}>
                  <div style={{ fontFamily:'DM Sans,sans-serif', fontSize:'0.58rem', letterSpacing:'0.15em', textTransform:'uppercase', color:'#C27C3A', marginBottom:4 }}>{p.cat}</div>
                  <div style={{ fontFamily:'DM Sans,sans-serif', fontSize:'0.78rem', color:'#F5ECD7', lineHeight:1.4 }}>{p.caption}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox && (
          <div onClick={() => setLightbox(null)} style={{ position:'fixed', inset:0, zIndex:9999, background:'rgba(7,5,10,0.96)', backdropFilter:'blur(20px)', display:'flex', alignItems:'center', justifyContent:'center', padding:24, animation:'fadeIn 0.2s ease' }}>
            <button onClick={() => setLightbox(null)} style={{ position:'absolute', top:24, right:24, background:'rgba(255,255,255,0.08)', border:'1px solid rgba(245,236,215,0.15)', color:'#F5ECD7', width:44, height:44, borderRadius:'50%', fontSize:'1.3rem', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}>×</button>
            <div onClick={e => e.stopPropagation()} style={{ maxWidth:900, width:'100%' }}>
              <img src={lightbox.src} alt={lightbox.caption} style={{ width:'100%', borderRadius:12, display:'block', maxHeight:'75vh', objectFit:'contain' }} />
              <div style={{ marginTop:16, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <p style={{ fontFamily:'DM Sans,sans-serif', fontWeight:300, color:'rgba(245,236,215,0.6)', fontSize:'0.86rem' }}>{lightbox.caption}</p>
                <span style={{ background:'rgba(194,124,58,0.1)', border:'1px solid rgba(194,124,58,0.25)', borderRadius:20, padding:'4px 12px', fontFamily:'DM Sans,sans-serif', fontSize:'0.62rem', letterSpacing:'0.12em', textTransform:'uppercase', color:'#C27C3A' }}>{lightbox.cat}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

