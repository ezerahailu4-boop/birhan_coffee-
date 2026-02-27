import { useState } from 'react';

const FAQS = [
  { cat:'Ordering', q:'What is your minimum order quantity?', a:'For samples we have no minimum — we ship free 250g samples to verified roasters worldwide. For commercial orders, our minimum is typically 1 bag (60kg green beans) or 5 retail bags per SKU. Wholesale and import quantities are negotiated directly.' },
  { cat:'Ordering', q:'How do I place a wholesale or import order?', a:'Contact us directly at info@birhancoffee.com or call +251 091 124 3099. Our team will discuss your volume needs, preferred origins, processing methods, and provide a tailored quote within 24 hours.' },
  { cat:'Ordering', q:'Do you ship to my country?', a:'Yes. We export worldwide from Addis Ababa with full documentation. We currently ship to Europe, North America, Asia, the Middle East, and Africa. Contact us to confirm lead times and incoterms for your region.' },
  { cat:'Products', q:'What products do you offer?', a:'We offer four formats: green (raw) beans for roasters, roasted whole beans, ground coffee, and Nespresso-compatible capsules. All are available in our four origins: Yirgacheffe, Masha, Jimma, and Saylem.' },
  { cat:'Products', q:'What processing methods are available?', a:'Washed, natural, and honey processing are all available. Our Yirgacheffe facility handles all three methods. Our Sebeta centre specialises in precision wet and dry milling. We can discuss specific processing preferences for large orders.' },
  { cat:'Products', q:'What is the cup score of your coffees?', a:'Every lot is cupped by our certified Q-graders on-site. We only approve and ship lots that score 84 or above on the SCA scale — the international specialty threshold. Our average export score is 85.5.' },
  { cat:'Quality', q:'How do you ensure consistent quality?', a:'Multiple quality checkpoints at every stage: selective hand-picking in the field, daily monitoring during processing and drying, full Q-grade cupping of every lot, moisture and density checks at milling, and pre-shipment sampling. Consistency is our baseline, not our target.' },
  { cat:'Quality', q:'Can I get samples before placing an order?', a:'Yes — we encourage it. We ship free samples to verified roasters and importers. Use our Sample Request form or email info@birhancoffee.com with your company details. Samples are typically despatched within 5 business days.' },
  { cat:'Quality', q:'Do you provide green bean data and traceability reports?', a:'Yes. Every export lot comes with full traceability documentation: farm/cooperative source, altitude, processing method, harvest date, cup score, moisture content, and screen size. We can also provide farmer-level data for verified partners.' },
  { cat:'Logistics', q:'What shipping and export documents do you provide?', a:'We provide a full documentation package with every shipment: Phytosanitary Certificate, ICO Certificate of Origin, commercial invoice, packing list, bill of lading, and any additional certifications required by your country. Our logistics team handles all customs compliance.' },
  { cat:'Logistics', q:'What are your available incoterms?', a:'We offer FOB (Addis Ababa), CIF (to your destination port), and DAP (delivered to your address). Our most common terms are FOB and CIF. Discuss with our team to find the best option for your situation.' },
  { cat:'Logistics', q:'What is the typical lead time from order to shipment?', a:'For stock lots, lead time is typically 2–3 weeks from order confirmation to shipment. For custom or seasonal lots, lead times vary. We recommend contacting us 6–8 weeks before your required delivery date.' },
  { cat:'Sustainability', q:'Are your coffees organic or fair trade certified?', a:'Our farms follow organic and sustainable practices — shade-grown, no harmful pesticides, environmentally responsible. We are in the process of pursuing formal certifications. We do operate a direct trade model, paying farmers 3× the commodity market rate with no middlemen.' },
  { cat:'Sustainability', q:'What CSR work does Birhan Coffee do?', a:'In the Saylem region, we maintain a 12km supply road, have built two community bridges, run regular farmer training programmes in sustainable agriculture and financial literacy, and pay premium prices directly to 200+ farming families. Every purchase funds this work.' },
];

const CATS = ['All', 'Ordering', 'Products', 'Quality', 'Logistics', 'Sustainability'];

export default function FAQ() {
  const [cat, setCat] = useState('All');
  const [open, setOpen] = useState(null);
  const filtered = cat === 'All' ? FAQS : FAQS.filter(f => f.cat === cat);

  return (
    <div style={{ background:'#07050a', minHeight:'100vh', padding:'clamp(100px,12vw,160px) clamp(16px,5vw,60px) 80px' }}>
      <div style={{ maxWidth:880, margin:'0 auto' }}>

        <div style={{ textAlign:'center', marginBottom:64 }}>
          <p style={{ fontFamily:'DM Sans,sans-serif', fontSize:'0.68rem', letterSpacing:'0.3em', textTransform:'uppercase', color:'#C27C3A', marginBottom:18 }}>Common Questions</p>
          <h1 style={{ fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(2.4rem,5vw,4rem)', fontWeight:300, color:'#F5ECD7', lineHeight:1.08, marginBottom:20 }}>Frequently Asked <em style={{ fontStyle:'italic', color:'#D4A55A' }}>Questions</em></h1>
          <div style={{ width:48, height:1, background:'linear-gradient(90deg,transparent,#C27C3A,transparent)', margin:'0 auto 24px' }} />
          <p style={{ fontFamily:'DM Sans,sans-serif', fontWeight:300, color:'rgba(245,236,215,0.5)', maxWidth:480, margin:'0 auto', lineHeight:1.75 }}>Shipping, minimum orders, certifications, samples — everything buyers and partners ask most.</p>
        </div>

        {/* Category pills */}
        <div style={{ display:'flex', gap:8, flexWrap:'wrap', justifyContent:'center', marginBottom:44 }}>
          {CATS.map(c => (
            <button key={c} onClick={() => { setCat(c); setOpen(null); }}
              style={{ padding:'8px 20px', borderRadius:30, fontFamily:'DM Sans,sans-serif', fontSize:'0.7rem', letterSpacing:'0.12em', textTransform:'uppercase', cursor:'pointer', transition:'all 0.22s',
                background: cat===c ? 'linear-gradient(135deg,#6B3A1F,#C27C3A)' : 'rgba(255,255,255,0.04)',
                border: cat===c ? 'none' : '1px solid rgba(245,236,215,0.1)',
                color: cat===c ? '#F5ECD7' : 'rgba(245,236,215,0.5)',
              }}>{c}</button>
          ))}
        </div>

        {/* Accordion */}
        <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
          {filtered.map((f, i) => (
            <div key={i} style={{ background:'rgba(255,255,255,0.03)', border:`1px solid ${open===i ? 'rgba(194,124,58,0.35)' : 'rgba(245,236,215,0.07)'}`, borderRadius:10, overflow:'hidden', transition:'border-color 0.25s' }}>
              <button onClick={() => setOpen(open===i ? null : i)}
                style={{ width:'100%', padding:'20px 24px', display:'flex', justifyContent:'space-between', alignItems:'center', background:'none', border:'none', cursor:'pointer', textAlign:'left', gap:16 }}>
                <div style={{ display:'flex', gap:14, alignItems:'center', flex:1 }}>
                  <span style={{ background:'rgba(194,124,58,0.1)', border:'1px solid rgba(194,124,58,0.2)', borderRadius:20, padding:'2px 9px', fontFamily:'DM Sans,sans-serif', fontSize:'0.55rem', letterSpacing:'0.12em', textTransform:'uppercase', color:'#C27C3A', flexShrink:0 }}>{f.cat}</span>
                  <span style={{ fontFamily:'Cormorant Garamond,serif', fontSize:'1.08rem', fontWeight:500, color: open===i ? '#F5ECD7' : 'rgba(245,236,215,0.8)', lineHeight:1.3 }}>{f.q}</span>
                </div>
                <span style={{ color:'#C27C3A', fontSize:'1.2rem', flexShrink:0, transition:'transform 0.3s', transform: open===i ? 'rotate(45deg)' : 'none' }}>+</span>
              </button>
              {open === i && (
                <div style={{ padding:'0 24px 22px', animation:'fadeIn 0.2s ease' }}>
                  <p style={{ fontFamily:'DM Sans,sans-serif', fontWeight:300, color:'rgba(245,236,215,0.6)', lineHeight:1.8, fontSize:'0.88rem', margin:0 }}>{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div style={{ marginTop:64, textAlign:'center', padding:'44px', background:'rgba(194,124,58,0.05)', border:'1px solid rgba(194,124,58,0.12)', borderRadius:12 }}>
          <p style={{ fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(1.4rem,3vw,2rem)', fontWeight:300, color:'#F5ECD7', marginBottom:10 }}>Still have a <em style={{ color:'#D4A55A' }}>question?</em></p>
          <p style={{ fontFamily:'DM Sans,sans-serif', fontWeight:300, color:'rgba(245,236,215,0.45)', marginBottom:24, fontSize:'0.86rem' }}>Our team responds within 24 hours, every day of the week.</p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href="mailto:info@birhancoffee.com" style={{ display:'inline-flex', alignItems:'center', gap:8, background:'linear-gradient(135deg,#6B3A1F,#C27C3A)', border:'none', color:'#F5ECD7', padding:'13px 28px', borderRadius:4, fontFamily:'DM Sans,sans-serif', fontSize:'0.7rem', fontWeight:500, letterSpacing:'0.18em', textTransform:'uppercase', textDecoration:'none' }}>✉️ Email Us</a>
            <a href="tel:+251091124309" style={{ display:'inline-flex', alignItems:'center', gap:8, background:'none', border:'1px solid rgba(245,236,215,0.2)', color:'#F5ECD7', padding:'13px 28px', borderRadius:4, fontFamily:'DM Sans,sans-serif', fontSize:'0.7rem', fontWeight:500, letterSpacing:'0.18em', textTransform:'uppercase', textDecoration:'none' }}>📞 Call Us</a>
          </div>
        </div>
      </div>
    </div>
  );
}
