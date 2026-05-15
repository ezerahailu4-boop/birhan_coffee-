import { useState, useRef, useEffect, useCallback } from 'react';

const SYSTEM_PROMPT = `You are Selam, the friendly AI guide for Birhan Coffee PLC — a premium Ethiopian specialty coffee exporter, Addis Ababa, Ethiopia. Founded 2019 by Birhanu Lemi.

KEY FACTS:
- Top 100 Ethiopian coffee exporters | Exporting internationally since 2022
- HQ: Bole Sub-City, Addis Ababa | Phone: +251 091 124 3099 | Email: Birhancoffee24@gmail.com
- Processing: Yirgacheffe facility (washed/natural/honey) + Sebeta (wet/dry milling)

ORIGINS:
1. Yirgacheffe – S. Ethiopia, 1700–2200m – Floral, citrus, bright acidity. Washed/Natural/Honey
2. Masha – SW Ethiopia, 1800–2100m – Fruity, spice, rich body. Natural/Honey
3. Jimma – W. Ethiopia, 1400–2000m – Chocolate, nutty, robust. Washed/Natural
4. Saylem – S. Ethiopia, 1700–2100m – Berry, sweet, smooth. Natural/Washed

PRODUCTS: Green beans · Roasted beans · Ground coffee · Nespresso-compatible capsules
PRICING: Retail $12–$22/250g depending on product | Wholesale: contact for quote

CSR (Saylem): 12km road maintained · 2 bridges built · 200+ farmers trained · 3x fair prices paid directly

FOUNDER: Birhanu Lemi – 25 yrs business, Birhan & BLT personal care brand. Multiple awards.
TEAM: Agronomists, Harvesting Specialists, Q-graders (84+ cup score), Logistics & Export
VALUES: Quality · Sustainability · Community · Integrity

Ethiopian phrases: Selam (hello), Buna (coffee), Tena Yistilign (to your health), Ameseginalew (thank you), Jebena (clay pot)

Be warm, concise (2-4 sentences), proud of Ethiopia's coffee. Use markdown bold for key terms. Direct trade enquiries to Birhancoffee24@gmail.com.`;

const KB = [
  { patterns:['hello','hi','hey','selam','howdy','greetings','morning','afternoon','evening','start','help','what can you'], response:`Selam! ☕ I'm Selam, Birhan Coffee's guide.\n\nI can help with:\n• **Our origins** — Yirgacheffe, Masha, Jimma, Saylem\n• **Products** — green beans, roasted, ground, capsules\n• **CSR & community** work in Saylem\n• **Founder** Birhanu Lemi's story\n• **Ordering & wholesale** info\n• **Brewing tips** for Ethiopian coffee\n\nWhat would you like to know? *Tena Yistilign!*` },
  { patterns:['about','company','birhan','history','background','established','founded','2019','story','who are you','tell me about'], response:`**Birhan Coffee PLC** was founded in 2019 in Addis Ababa, Ethiopia, by Birhanu Lemi ☕.\n\nKey milestones:\n• 2019 — Founded; built direct farmer relationships\n• 2020 — Opened modern Sebeta processing facility\n• 2022 — Began international exports\n• Today — **Top 100 Ethiopian Exporter**, 200+ farming families, 4 origins, global reach` },
  { patterns:['yirgacheffe','yirgachefe','yirg'], response:`**Yirgacheffe** — our crown jewel ☕\n\n📍 Southern Ethiopia · ⛰ 1,700–2,200 masl\n🌸 **Flavour:** Bright acidity · jasmine · bergamot · lemon zest\n⚙️ **Processing:** Washed · Natural · Honey\n\nWorld-renowned as the benchmark for washed Ethiopian coffees.` },
  { patterns:['masha','southwestern ethiopia'], response:`**Masha** — rich and complex 🌿\n\n📍 Southwestern Ethiopia · ⛰ 1,800–2,100 masl\n🍑 **Flavour:** Stone fruit · peach · warming spice · rich full body\n⚙️ **Processing:** Natural & Honey` },
  { patterns:['jimma','western ethiopia'], response:`**Jimma** — the robust classic 🍫\n\n📍 Western Ethiopia · ⛰ 1,400–2,000 masl\n🍫 **Flavour:** Dark chocolate · hazelnut · full-bodied\n⚙️ **Processing:** Washed & Natural` },
  { patterns:['saylem','sayelem'], response:`**Saylem** — sweet and smooth 🍓\n\n📍 Southern Ethiopia · ⛰ 1,700–2,100 masl\n🍓 **Flavour:** Wild berry · honey · blackcurrant · smooth body\n⚙️ **Processing:** Natural & Washed\n\nSaylem is also the heart of our CSR work — we maintain a 12km road, built 2 bridges, and run farmer education programmes.` },
  { patterns:['origin','region','where','farm','all coffee','four','4 origins'], response:`Birhan Coffee sources from **four legendary Ethiopian regions** 🗺️:\n\n• **Yirgacheffe** (Southern, 1700–2200m) — Floral · Citrus · Bright\n• **Masha** (Southwestern, 1800–2100m) — Fruity · Spice · Rich body\n• **Jimma** (Western, 1400–2000m) — Chocolate · Nutty · Bold\n• **Saylem** (Southern, 1700–2100m) — Berry · Sweet · Smooth\n\nAll single-origin, fully traceable, 100% Ethiopian Arabica.` },
  { patterns:['product','buy','purchase','order','shop','capsule','ground','roasted','green bean'], response:`Birhan Coffee offers **four product formats** ☕:\n\n• 🌿 **Green Beans** — Raw specialty Arabica ($12/250g)\n• ☕ **Roasted Beans** — Medium-dark roasted ($16/250g)\n• 🫙 **Ground Coffee** — Drip, filter, French press or espresso ($14.50/250g)\n• 💊 **Capsules** — Nespresso-compatible pods ($22/pack)\n\nFor wholesale: **Birhancoffee24@gmail.com** · **+251 091 124 3099**` },
  { patterns:['price','cost','how much','pricing'], response:`**Retail pricing per 250g** 💰:\n\n• Green Beans — **$12.00**\n• Roasted Beans — **$16.00**\n• Ground Coffee — **$14.50**\n• Capsules — **$22.00**\n\nWholesale pricing varies by origin, grade, and volume. Email **Birhancoffee24@gmail.com** for a quote.` },
  { patterns:['csr','social responsib','community','road','bridge','farmer training','impact'], response:`Birhan Coffee's **CSR in Saylem** 🌍:\n\n• **12km Road Maintenance** — Farmers transport cherries efficiently\n• **Two Community Bridges** — Safe year-round passage for families\n• **Farmer Education** — Sustainable farming, health, financial literacy\n• **3× Fair Prices** — Paid directly to 200+ farming families, no middlemen` },
  { patterns:['founder','birhanu','lemi','ceo','who started','who founded'], response:`**Birhanu Lemi** — Founder & CEO 👤\n\nBorn in Ethiopia's coffee highlands, Birhanu spent **25+ years** in business before channelling his passion into Birhan Coffee in 2019.\n\n**Recognition:** Multiple national & international awards for sustainable farming and fair trade. Reached **Top 100 Ethiopian Exporter** within just 3 years.` },
  { patterns:['process','processing','washed','natural','honey','milling'], response:`Three **processing methods** at Birhan Coffee 🏭:\n\n• 🚿 **Washed** — Pulped, fermented, washed. Clean, bright acidity.\n• ☀️ **Natural** — Whole cherries sun-dried. Intense fruit & sweetness.\n• 🍯 **Honey** — Partial pulping with mucilage dried on. Sweet balance.` },
  { patterns:['ceremony','buna','jebena','tradition','cultural'], response:`The **Ethiopian Buna Ceremony** 🏺:\n\n1. Roasting — Green beans over charcoal\n2. Grinding — Mortar and pestle\n3. Brewing — In a clay **Jebena** pot\n4. Three Rounds: **Abol** (strongest) · **Tona** · **Baraka** (blessing)\n\nTakes ~45 minutes. *Tena Yistilign!*` },
  { patterns:['flavour','flavor','taste','note','fruity','floral','chocolate','berry','citrus'], response:`Ethiopian coffees offer **extraordinary flavour diversity** 🍋🌸🍓🍫:\n\n• **Yirgacheffe** — Jasmine · bergamot · lemon · sparkling acidity\n• **Masha** — Stone fruit · cherry · warming spice · rich body\n• **Jimma** — Dark chocolate · hazelnut · smooth finish\n• **Saylem** — Wild blueberry · honey · blackcurrant · natural sweetness` },
  { patterns:['brew','brewing','how to make','filter','espresso','french press','recipe'], response:`Brewing tips for Birhan Coffee ☕:\n\n• **Pour Over** — Yirgacheffe (93°C · 1:15 · medium-coarse)\n• **French Press** — Jimma/Masha (95°C · 1:12 · coarse)\n• **Espresso** — Saylem/Jimma (93°C · 1:2 · fine)\n• **AeroPress** — Any origin (88°C · 1:10 · medium-fine)\n• **Jebena** — Traditional Ethiopian (boiling · very fine)` },
  { patterns:['contact','reach','email','phone','call','address','get in touch'], response:`**Birhan Coffee PLC** 📞\n\n📍 Bole Sub-City, Addis Ababa, Ethiopia\n📞 **+251 091 124 3099**\n✉️ **Birhancoffee24@gmail.com**\n🌐 **www.birhancoffee.com**\n\nWe respond within **24 hours**.` },
  { patterns:['wholesale','bulk','import','export','trade','roaster','b2b','partner'], response:`Birhan Coffee works with **roasters, importers & distributors worldwide** 🌍:\n\n• Single-origin green bean lots, multiple grades\n• Fully traceable with complete documentation\n• End-to-end export logistics from Addis Ababa\n• Active exporter since 2022 · **Top 100 Ethiopian Exporter**\n\nContact: **Birhancoffee24@gmail.com** | **+251 091 124 3099**` },
  { patterns:['thank','thanks','ameseginalew','appreciate','helpful','great','wonderful'], response:`Ameseginaleh! 🙏☕ So glad I could help. Is there anything else you'd like to know about Birhan Coffee? *Tena Yistilign!*` },
  { patterns:['bye','goodbye','see you','later','farewell'], response:`Ciao for now! ☕\n\n🌐 www.birhancoffee.com · ✉️ Birhancoffee24@gmail.com · 📞 +251 091 124 3099\n\n*Tena Yistilign — to your health!*` },
];

const FALLBACK = `Ameseginalew for your question ☕. I'm best at answering about:\n\n• **Origins** — Yirgacheffe, Masha, Jimma, Saylem\n• **Products & pricing**\n• **CSR & community** work\n• **Brewing tips & flavours**\n• **Wholesale & ordering**\n\nOr contact us: **Birhancoffee24@gmail.com** · **+251 091 124 3099**`;

function getOfflineReply(userText) {
  const lower = userText.toLowerCase().replace(/[^\w\s]/g, ' ');
  const words = lower.split(/\s+/).filter(w => w.length > 2);
  let best = null, bestScore = 0;
  for (const entry of KB) {
    let score = 0;
    for (const pattern of entry.patterns) {
      const p = pattern.toLowerCase();
      if (lower.includes(p)) { score += p.length * 3; continue; }
      for (const word of words) {
        if (p.startsWith(word) || word.startsWith(p)) score += Math.min(word.length, p.length);
      }
    }
    if (score > bestScore) { bestScore = score; best = entry; }
  }
  return bestScore >= 4 ? best.response : FALLBACK;
}

const QUICK_CHIPS = [
  { label: '🗺️ Our origins',   q: 'Tell me about all four coffee origins' },
  { label: '🌍 CSR work',      q: 'What CSR and community work do you do?' },
  { label: '🛒 How to order',  q: 'How can I place an order or get a wholesale quote?' },
  { label: '👤 Founder story', q: 'Tell me about the founder Birhanu Lemi' },
];

function RichText({ text }) {
  const lines = (text || '').split('\n');
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:4 }}>
      {lines.map((line, i) => {
        if (!line.trim()) return <div key={i} style={{ height:4 }} />;
        const bullet = /^[•\-\*]\s/.test(line.trim());
        return (
          <div key={i} style={{ display:'flex', gap: bullet ? 8 : 0, alignItems:'flex-start' }}>
            {bullet && <span style={{ color:'#C27C3A', flexShrink:0, marginTop:3, fontSize:'0.6rem' }}>◆</span>}
            <span style={{ color:'rgba(245,236,215,0.9)', lineHeight:1.6, fontSize:'0.88rem' }}>
              <InlineBold text={bullet ? line.trim().slice(2) : line} />
            </span>
          </div>
        );
      })}
    </div>
  );
}

function InlineBold({ text }) {
  // Handle both **bold** and *italic*
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith('**') && p.endsWith('**')) return <strong key={i} style={{ fontWeight:600, color:'#F5ECD7' }}>{p.slice(2,-2)}</strong>;
    if (p.startsWith('*') && p.endsWith('*')) return <em key={i} style={{ color:'rgba(194,124,58,0.9)', fontStyle:'italic' }}>{p.slice(1,-1)}</em>;
    return <span key={i}>{p}</span>;
  });
}

export default function Chatbot() {
  const [open,   setOpen]   = useState(false);
  const [online, setOnline] = useState(navigator.onLine);
  const [apiOk,  setApiOk]  = useState(true);
  const [msgs,   setMsgs]   = useState([{
    role: 'assistant',
    content: "Selam! ☕ I'm **Selam**, Birhan Coffee's AI guide.\n\nAsk me anything about our Ethiopian specialty coffees, origins, CSR work, or how to order. *Tena Yistilign!*",
  }]);
  const [input,  setInput]  = useState('');
  const [typing, setTyping] = useState(false);
  const endRef   = useRef(null);
  const inputRef = useRef(null);
  const bodyRef  = useRef(null);

  useEffect(() => {
    const up = () => { setOnline(true); setApiOk(true); };
    const dn = () => { setOnline(false); };
    window.addEventListener('online', up);
    window.addEventListener('offline', dn);
    return () => { window.removeEventListener('online', up); window.removeEventListener('offline', dn); };
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [msgs, typing]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open]);

  // Prevent body scroll when chat is open on mobile
  useEffect(() => {
    if (open && window.innerWidth <= 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const offline = !online || !apiOk;

  const send = useCallback(async (override) => {
    const text = (override ?? input).trim();
    if (!text || typing) return;
    setInput('');
    setMsgs(prev => [...prev, { role: 'user', content: text }]);
    setTyping(true);

    if (offline) {
      const reply = getOfflineReply(text);
      setTimeout(() => {
        setMsgs(prev => [...prev, { role: 'assistant', content: reply, isOffline: true }]);
        setTyping(false);
      }, 400 + Math.random() * 300);
      return;
    }

    try {
      const history = msgs.filter(m => !m.sys).slice(-14).map(m => ({ role: m.role, content: m.content }));
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'anthropic-version': '2023-06-01' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: [...history, { role: 'user', content: text }],
        }),
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data  = await res.json();
      const reply = data.content?.[0]?.text;
      if (!reply) throw new Error('empty');
      setApiOk(true);
      setMsgs(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch (e) {
      setApiOk(false);
      const offlineReply = getOfflineReply(text);
      setMsgs(prev => [...prev, { role: 'assistant', content: offlineReply, isOffline: true }]);
    } finally {
      setTyping(false);
    }
  }, [input, typing, msgs, offline]);

  const dotColor = offline ? '#C27C3A' : '#4ade80';

  return (
    <>
      <style>{`
        @keyframes slideUpChat {
          from { opacity:0; transform:translateY(24px) scale(0.97); }
          to   { opacity:1; transform:translateY(0)    scale(1); }
        }
        @keyframes chatFadeIn {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes typingDot {
          0%,60%,100% { transform:translateY(0); opacity:0.4; }
          30% { transform:translateY(-6px); opacity:1; }
        }
        @keyframes fabPulse {
          0%,100% { box-shadow:0 0 0 0 rgba(194,124,58,0.45),0 8px 28px rgba(107,58,31,0.55); }
          50%      { box-shadow:0 0 0 10px rgba(194,124,58,0),0 8px 28px rgba(107,58,31,0.55); }
        }
        .chat-chip:hover { background:rgba(194,124,58,0.2) !important; color:#D4A55A !important; }
        .chat-send:hover { background:linear-gradient(135deg,#A05530,#D4A55A) !important; transform:scale(1.05); }
        .chat-send:disabled { opacity:0.4 !important; transform:none !important; }
        .chat-input:focus { border-color:rgba(194,124,58,0.7) !important; background:rgba(255,255,255,0.07) !important; }
        .chat-msg-user   { animation:chatFadeIn 0.22s ease both; }
        .chat-msg-bot    { animation:chatFadeIn 0.22s ease both; }
        @media (max-width:768px) {
          .chat-window-wrap {
            position:fixed !important;
            bottom:0 !important; right:0 !important; left:0 !important;
            width:100% !important; max-height:88vh !important;
            border-radius:22px 22px 0 0 !important;
            box-shadow:0 -8px 60px rgba(0,0,0,0.9) !important;
          }
          .chat-fab-btn {
            bottom:20px !important;
            right:20px !important;
          }
        }
      `}</style>

      {/* Chat Window */}
      {open && (
        <div className="chat-window-wrap" style={{
          position:'fixed', bottom:92, right:24, zIndex:5000,
          width:430, maxHeight:'80vh',
          background:'linear-gradient(160deg,#110b08 0%,#0d0905 100%)',
          border:'1px solid rgba(245,236,215,0.1)',
          borderRadius:20,
          display:'flex', flexDirection:'column',
          boxShadow:'0 32px 100px rgba(0,0,0,0.96), 0 0 0 1px rgba(194,124,58,0.06)',
          animation:'slideUpChat 0.3s cubic-bezier(.22,1,.36,1)',
          overflow:'hidden',
        }}>

          {/* Header */}
          <div style={{
            padding:'16px 20px', flexShrink:0,
            background:'linear-gradient(135deg,rgba(107,58,31,0.4),rgba(26,18,10,0.6))',
            borderBottom:'1px solid rgba(245,236,215,0.07)',
            display:'flex', justifyContent:'space-between', alignItems:'center',
          }}>
            <div style={{ display:'flex', alignItems:'center', gap:12 }}>
              <div style={{
                width:46, height:46, borderRadius:'50%',
                background:'linear-gradient(135deg,#6B3A1F,#C27C3A)',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:'1.3rem', flexShrink:0,
                boxShadow:'0 0 20px rgba(194,124,58,0.45)',
              }}>☕</div>
              <div>
                <div style={{ fontFamily:'Cormorant Garamond,serif', fontSize:'1.15rem', fontWeight:700, color:'#F5ECD7', lineHeight:1.2 }}>Selam</div>
                <div style={{ display:'flex', alignItems:'center', gap:6, marginTop:3 }}>
                  <span style={{ width:7, height:7, borderRadius:'50%', background:dotColor, display:'inline-block', boxShadow:`0 0 8px ${dotColor}` }} />
                  <span style={{ fontFamily:'DM Sans,sans-serif', fontSize:'0.58rem', letterSpacing:'0.15em', textTransform:'uppercase', color:'rgba(194,124,58,0.8)' }}>
                    Birhan Guide · {offline ? 'Knowledge Base' : 'AI · Live'}
                  </span>
                </div>
              </div>
            </div>
            <div style={{ display:'flex', alignItems:'center', gap:6 }}>
              {offline && (
                <span style={{ background:'rgba(194,124,58,0.12)', border:'1px solid rgba(194,124,58,0.3)', borderRadius:20, padding:'3px 10px', fontFamily:'DM Sans,sans-serif', fontSize:'0.58rem', color:'#C27C3A', letterSpacing:'0.1em' }}>
                  📖 Knowledge Base
                </span>
              )}
              <button onClick={() => { setMsgs([{ role:'assistant', content:"Selam! ☕ Fresh start. How can I help you today? *Tena Yistilign!*" }]); }}
                title="Clear chat"
                style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(245,236,215,0.08)', color:'rgba(245,236,215,0.5)', width:32, height:32, borderRadius:8, cursor:'pointer', fontSize:'0.75rem', transition:'all 0.2s' }}>
                🗑️
              </button>
              <button onClick={() => setOpen(false)}
                style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(245,236,215,0.08)', color:'rgba(245,236,215,0.6)', width:32, height:32, borderRadius:8, cursor:'pointer', fontSize:'1.1rem', lineHeight:1, transition:'all 0.2s', display:'flex', alignItems:'center', justifyContent:'center' }}>
                ×
              </button>
            </div>
          </div>

          {/* Messages */}
          <div ref={bodyRef} style={{
            flex:1, overflowY:'auto', padding:'16px 16px 8px',
            display:'flex', flexDirection:'column', gap:14,
            scrollbarWidth:'thin', scrollbarColor:'rgba(194,124,58,0.3) transparent',
          }}>
            {msgs.map((m, i) => (
              <div key={i} className={m.role==='user' ? 'chat-msg-user':'chat-msg-bot'}
                style={{ display:'flex', justifyContent: m.role==='user' ? 'flex-end':'flex-start', alignItems:'flex-end', gap:10 }}>
                {m.role === 'assistant' && !m.sys && (
                  <div style={{ width:30, height:30, borderRadius:'50%', background:'linear-gradient(135deg,#6B3A1F,#C27C3A)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.8rem', flexShrink:0, marginBottom:2 }}>☕</div>
                )}
                <div style={{ display:'flex', flexDirection:'column', gap:4, maxWidth:'78%', alignItems: m.role==='user' ? 'flex-end':'flex-start' }}>
                  <div style={{
                    padding: m.sys ? '6px 12px' : '12px 15px',
                    borderRadius: m.role==='user' ? '18px 18px 4px 18px' : m.sys ? '10px' : '4px 18px 18px 18px',
                    fontFamily:'DM Sans,sans-serif', fontWeight:300, lineHeight:1.6,
                    background: m.role==='user'
                      ? 'linear-gradient(135deg,#7A4422,#B36A2A)'
                      : m.sys ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.06)',
                    border: m.role !== 'user' ? '1px solid rgba(245,236,215,0.09)' : 'none',
                    color:'#F5ECD7',
                    boxShadow: m.role==='user' ? '0 4px 16px rgba(107,58,31,0.35)' : 'none',
                  }}>
                    {m.role === 'user'
                      ? <span style={{ fontSize:'0.88rem' }}>{m.content}</span>
                      : <RichText text={m.content} />}
                  </div>
                  {m.isOffline && <span style={{ fontFamily:'DM Sans,sans-serif', fontSize:'0.55rem', color:'rgba(194,124,58,0.5)', letterSpacing:'0.1em' }}>📖 knowledge base</span>}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div style={{ display:'flex', alignItems:'flex-end', gap:10 }}>
                <div style={{ width:30, height:30, borderRadius:'50%', background:'linear-gradient(135deg,#6B3A1F,#C27C3A)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.8rem', flexShrink:0 }}>☕</div>
                <div style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(245,236,215,0.09)', padding:'14px 18px', borderRadius:'4px 18px 18px 18px', display:'flex', gap:5, alignItems:'center' }}>
                  {[0, 0.18, 0.36].map((d, j) => (
                    <div key={j} style={{ width:6, height:6, borderRadius:'50%', background:'#C27C3A', animation:`typingDot 0.9s ${d}s ease-in-out infinite` }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Quick chips */}
          <div style={{
            padding:'8px 14px', display:'flex', gap:7, flexWrap:'wrap',
            borderTop:'1px solid rgba(245,236,215,0.05)', flexShrink:0,
            background:'rgba(0,0,0,0.15)',
          }}>
            {QUICK_CHIPS.map(({ label, q }) => (
              <button key={label} className="chat-chip" onClick={() => send(q)}
                style={{
                  background:'rgba(194,124,58,0.1)', border:'1px solid rgba(194,124,58,0.22)',
                  color:'rgba(194,124,58,0.85)', padding:'4px 12px', borderRadius:20,
                  fontFamily:'DM Sans,sans-serif', fontSize:'0.64rem', cursor:'pointer',
                  transition:'all 0.18s', letterSpacing:'0.04em',
                }}>
                {label}
              </button>
            ))}
          </div>

          {/* Input row */}
          <div style={{
            padding:'12px 14px', borderTop:'1px solid rgba(245,236,215,0.07)',
            display:'flex', gap:10, flexShrink:0,
            background:'rgba(0,0,0,0.2)',
          }}>
            <input
              ref={inputRef}
              className="chat-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }}
              placeholder={offline ? 'Ask me about Birhan Coffee…' : 'Ask about Birhan Coffee…'}
              style={{
                flex:1, background:'rgba(255,255,255,0.05)',
                border:'1px solid rgba(245,236,215,0.12)',
                color:'#F5ECD7', padding:'10px 15px', borderRadius:12,
                fontFamily:'DM Sans,sans-serif', fontSize:'0.875rem', fontWeight:300,
                outline:'none', transition:'all 0.2s',
              }}
            />
            <button
              className="chat-send"
              onClick={() => send()}
              disabled={typing || !input.trim()}
              style={{
                background: input.trim() && !typing ? 'linear-gradient(135deg,#6B3A1F,#C27C3A)' : 'rgba(255,255,255,0.07)',
                border:'none', color:'#F5ECD7', width:44, height:44, borderRadius:12,
                fontSize:'1.1rem', cursor: input.trim() && !typing ? 'pointer':'default',
                transition:'all 0.22s', display:'flex', alignItems:'center', justifyContent:'center',
                flexShrink:0, boxShadow: input.trim() && !typing ? '0 4px 16px rgba(107,58,31,0.4)':'none',
              }}>
              ↑
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        className="chat-fab-btn"
        onClick={() => setOpen(v => !v)}
        title={open ? 'Close chat' : 'Chat with Selam (AI-powered)'}
        style={{
          position:'fixed', bottom:28, right:28, zIndex:5000,
          width:58, height:58, borderRadius:'50%',
          background: open ? 'rgba(245,236,215,0.08)' : 'linear-gradient(135deg,#6B3A1F,#C27C3A)',
          border: open ? '1px solid rgba(245,236,215,0.15)' : 'none',
          color:'#F5ECD7', cursor:'pointer',
          display:'flex', alignItems:'center', justifyContent:'center',
          fontSize: open ? '1.4rem' : '1.5rem',
          transition:'all 0.28s cubic-bezier(.22,1,.36,1)',
          animation: open ? 'none' : 'fabPulse 3s ease-in-out infinite',
          boxShadow: open ? 'none' : '0 8px 28px rgba(107,58,31,0.55)',
        }}>
        {open ? '×' : '☕'}
        {!open && offline && (
          <span style={{ position:'absolute', top:4, right:4, width:12, height:12, borderRadius:'50%', background:'#FF9800', border:'2px solid #07050a', boxShadow:'0 0 8px rgba(255,152,0,0.8)' }} />
        )}
        {!open && (
          <span style={{
            position:'absolute', top:-6, right:-6,
            background:'linear-gradient(135deg,#6B3A1F,#C27C3A)',
            border:'2px solid #07050a', borderRadius:20,
            fontFamily:'DM Sans,sans-serif', fontSize:'0.5rem', fontWeight:600,
            color:'#F5ECD7', padding:'2px 6px', letterSpacing:'0.05em',
            whiteSpace:'nowrap', textTransform:'uppercase',
          }}>AI</span>
        )}
      </button>
    </>
  );
}

