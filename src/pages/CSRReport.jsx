import { useState } from 'react';
import { Link } from 'react-router-dom';

const YEARS = ['2024', '2023', '2022'];

const REPORTS = {
  '2024': {
    headline: '520 Metric Tons Exported · 200+ Families Impacted · 3× Fair Prices Paid',
    summary: 'Our most impactful year yet. Birhan Coffee expanded its CSR programme across all four origins, completed two bridge constructions in Saylem, and launched a new financial literacy curriculum reaching 200+ farming families.',
    metrics: [
      { icon: '👨‍👩‍👧', label: 'Farming Families Supported', value: '214', change: '+7%', desc: 'Direct beneficiaries of our premium pricing and training programmes' },
      { icon: '💰', label: 'Avg. Income Uplift', value: '3.2×', change: '+0.2×', desc: 'Above commodity market rate paid directly to farmers — no middlemen' },
      { icon: '🌱', label: 'Sustainable Farms', value: '98%', change: '+3%', desc: 'Partner farms using shade-grown, zero harmful pesticide practices' },
      { icon: '📚', label: 'Farmers Trained', value: '200+', change: '+22%', desc: 'Completed agricultural, health, and financial literacy programmes' },
      { icon: '🏗️', label: 'Infrastructure Projects', value: '4', change: '+2', desc: 'Road maintenance, bridge construction, and water access projects' },
      { icon: '☕', label: 'Export Volume', value: '520 MT', change: '+44%', desc: 'Metric tons of premium Ethiopian Arabica exported globally' },
    ],
    initiatives: [
      {
        title: '12km Road Maintenance',
        location: 'Saylem Region',
        icon: '🛤️',
        outcome: 'Reduced farmer transport time by 60%. Coffee cherry spoilage dropped from 12% to 3% due to faster delivery to processing centres.',
        beneficiaries: '180 families',
        investment: '$28,000',
        img: 'https://img2.chinadaily.com.cn/images/201809/05/5b8f1f27a310add1c69a5f29.jpeg',
      },
      {
        title: 'Two Community Bridges',
        location: 'Saylem Streams',
        icon: '🌉',
        outcome: 'Year-round safe passage for 400+ residents. School attendance in the area increased by 34% as children can now cross safely during rainy season.',
        beneficiaries: '400+ residents',
        investment: '$42,000',
        img: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80&fit=crop',
      },
      {
        title: 'Farmer Education Programme',
        location: 'All 4 Regions',
        icon: '📚',
        outcome: 'Average farm yield increased by 18% among trained farmers. Financial literacy training helped 60 families open savings accounts for the first time.',
        beneficiaries: '200+ farmers',
        investment: '$15,000',
        img: 'https://blog.compassion.com/wp-content/uploads/2020/09/a-group-of-ethiopian-children-looking-up-at-the-camera-smiling.jpg',
      },
      {
        title: 'Direct Premium Pricing',
        location: 'All Partner Farms',
        icon: '💰',
        outcome: 'Total premium paid above commodity price: $186,000 in FY2024. Average household income among partner farmers rose by 42% since 2019.',
        beneficiaries: '214 families',
        investment: '$186,000',
        img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80&fit=crop',
      },
    ],
    goals2025: [
      'Expand farmer training to 300+ families across all origins',
      'Complete solar-powered water pump installation in Saylem',
      'Launch women-led cooperative in Masha region',
      'Achieve formal organic certification for 3 partner farms',
      'Publish quarterly CSR updates on website',
    ],
  },
  '2023': {
    headline: '360 Metric Tons Exported · 180 Families Impacted · 3× Fair Prices Paid',
    summary: 'A breakthrough year for community investment. We completed the first bridge construction in Saylem and expanded our farmer training programme to all four origins for the first time.',
    metrics: [
      { icon: '👨‍👩‍👧', label: 'Farming Families Supported', value: '200', change: '+15%', desc: 'Direct beneficiaries of our premium pricing and training programmes' },
      { icon: '💰', label: 'Avg. Income Uplift', value: '3.0×', change: '+0.3×', desc: 'Above commodity market rate paid directly to farmers' },
      { icon: '🌱', label: 'Sustainable Farms', value: '95%', change: '+5%', desc: 'Partner farms using shade-grown, zero harmful pesticide practices' },
      { icon: '📚', label: 'Farmers Trained', value: '164', change: '+40%', desc: 'Completed agricultural and financial literacy programmes' },
      { icon: '🏗️', label: 'Infrastructure Projects', value: '2', change: '+1', desc: 'Road maintenance and first bridge construction' },
      { icon: '☕', label: 'Export Volume', value: '360 MT', change: '+100%', desc: 'Metric tons of premium Ethiopian Arabica exported globally' },
    ],
    initiatives: [
      { title: '12km Road Maintenance', location: 'Saylem Region', icon: '🛤️', outcome: 'Maintained critical supply road enabling efficient transport of coffee cherries to processing centres.', beneficiaries: '160 families', investment: '$22,000', img: 'https://img2.chinadaily.com.cn/images/201809/05/5b8f1f27a310add1c69a5f29.jpeg' },
      { title: 'First Bridge Construction', location: 'Saylem Stream 1', icon: '🌉', outcome: 'First permanent bridge built over main stream. Eliminated dangerous seasonal crossing for 200+ residents.', beneficiaries: '200+ residents', investment: '$38,000', img: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80&fit=crop' },
      { title: 'Farmer Training Expansion', location: 'All 4 Regions', icon: '📚', outcome: 'Extended training programme to Jimma and Masha for the first time. 164 farmers completed full curriculum.', beneficiaries: '164 farmers', investment: '$11,000', img: 'https://blog.compassion.com/wp-content/uploads/2020/09/a-group-of-ethiopian-children-looking-up-at-the-camera-smiling.jpg' },
    ],
    goals2025: ['Build second bridge in Saylem', 'Expand training to 200+ farmers', 'Launch financial literacy module'],
  },
  '2022': {
    headline: '180 Metric Tons Exported · 140 Families Impacted · 2.7× Fair Prices Paid',
    summary: 'Our first full year of international exports. We established the CSR framework in Saylem and began direct premium pricing across all partner farms.',
    metrics: [
      { icon: '👨‍👩‍👧', label: 'Farming Families Supported', value: '174', change: 'Baseline', desc: 'First year of structured CSR programme' },
      { icon: '💰', label: 'Avg. Income Uplift', value: '2.7×', change: 'Baseline', desc: 'Above commodity market rate paid directly to farmers' },
      { icon: '🌱', label: 'Sustainable Farms', value: '90%', change: 'Baseline', desc: 'Partner farms using sustainable practices' },
      { icon: '📚', label: 'Farmers Trained', value: '117', change: 'Baseline', desc: 'First cohort of agricultural training programme' },
      { icon: '🏗️', label: 'Infrastructure Projects', value: '1', change: 'Baseline', desc: 'Road maintenance programme launched' },
      { icon: '☕', label: 'Export Volume', value: '180 MT', change: 'Baseline', desc: 'First full year of international exports' },
    ],
    initiatives: [
      { title: 'Road Maintenance Launch', location: 'Saylem Region', icon: '🛤️', outcome: 'Established ongoing road maintenance programme. First year of structured infrastructure investment.', beneficiaries: '140 families', investment: '$18,000', img: 'https://img2.chinadaily.com.cn/images/201809/05/5b8f1f27a310add1c69a5f29.jpeg' },
      { title: 'First Farmer Training Cohort', location: 'Yirgacheffe & Saylem', icon: '📚', outcome: '117 farmers completed first agricultural training programme. Average yield improved by 12% in first season.', beneficiaries: '117 farmers', investment: '$8,000', img: 'https://blog.compassion.com/wp-content/uploads/2020/09/a-group-of-ethiopian-children-looking-up-at-the-camera-smiling.jpg' },
    ],
    goals2025: ['Build first bridge', 'Expand training to all regions', 'Reach 200 partner families'],
  },
};

export default function CSRReport() {
  const [year, setYear] = useState('2024');
  const report = REPORTS[year];

  return (
    <div style={{ background: '#07050a', minHeight: '100vh', padding: 'clamp(100px,12vw,160px) clamp(16px,5vw,60px) 80px' }}>
      <style>{`
        .csr-metric { background:rgba(255,255,255,.03); border:1px solid rgba(245,236,215,.07); border-radius:12px; padding:24px; transition:border-color .3s,transform .3s; }
        .csr-metric:hover { border-color:rgba(194,124,58,.3); transform:translateY(-3px); }
        .csr-init { display:grid; grid-template-columns:1fr 1fr; border-radius:12px; overflow:hidden; border:1px solid rgba(245,236,215,.07); background:rgba(255,255,255,.02); transition:border-color .3s; }
        .csr-init:hover { border-color:rgba(194,124,58,.25); }
        @media(max-width:768px){ .csr-init{ grid-template-columns:1fr; } .csr-init-img{ height:200px !important; } }
      `}</style>

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.68rem', letterSpacing: '.3em', textTransform: 'uppercase', color: '#C27C3A', marginBottom: 18 }}>Transparency & Impact</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 300, color: '#F5ECD7', lineHeight: 1.08, marginBottom: 20 }}>
            Annual <em style={{ fontStyle: 'italic', color: '#D4A55A' }}>Impact Report</em>
          </h1>
          <div style={{ width: 48, height: 1, background: 'linear-gradient(90deg,transparent,#C27C3A,transparent)', margin: '0 auto 24px' }} />
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, color: 'rgba(245,236,215,.5)', maxWidth: 560, margin: '0 auto', lineHeight: 1.75 }}>
            Measurable outcomes, real numbers, and honest reporting on how every bag of Birhan Coffee creates lasting change in Ethiopian farming communities.
          </p>
        </div>

        {/* Year selector */}
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 56 }}>
          {YEARS.map(y => (
            <button key={y} onClick={() => setYear(y)}
              style={{ padding: '10px 28px', borderRadius: 30, fontFamily: 'DM Sans,sans-serif', fontSize: '.72rem', letterSpacing: '.15em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all .22s',
                background: year === y ? 'linear-gradient(135deg,#6B3A1F,#C27C3A)' : 'rgba(255,255,255,.04)',
                border: year === y ? 'none' : '1px solid rgba(245,236,215,.1)',
                color: year === y ? '#F5ECD7' : 'rgba(245,236,215,.5)',
                boxShadow: year === y ? '0 6px 24px rgba(194,124,58,.3)' : 'none',
              }}>FY {y}</button>
          ))}
        </div>

        {/* Headline banner */}
        <div style={{ background: 'linear-gradient(135deg,rgba(107,58,31,.3),rgba(194,124,58,.1))', border: '1px solid rgba(194,124,58,.2)', borderRadius: 16, padding: 'clamp(24px,4vw,40px)', marginBottom: 56, textAlign: 'center' }}>
          <div style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(1rem,2vw,1.3rem)', fontStyle: 'italic', color: '#D4A55A', lineHeight: 1.6 }}>{report.headline}</div>
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, color: 'rgba(245,236,215,.6)', fontSize: '.88rem', lineHeight: 1.75, maxWidth: 700, margin: '16px auto 0' }}>{report.summary}</p>
        </div>

        {/* Metrics grid */}
        <div style={{ marginBottom: 64 }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 300, color: '#F5ECD7', marginBottom: 32 }}>
            Key <em style={{ color: '#D4A55A' }}>Outcomes</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 16 }}>
            {report.metrics.map((m, i) => (
              <div key={i} className="csr-metric">
                <div style={{ fontSize: '1.8rem', marginBottom: 12 }}>{m.icon}</div>
                <div style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '2.2rem', fontWeight: 300, color: '#C27C3A', lineHeight: 1 }}>{m.value}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '6px 0 8px' }}>
                  <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.78rem', fontWeight: 500, color: '#F5ECD7' }}>{m.label}</span>
                  <span style={{ background: 'rgba(74,222,128,.1)', border: '1px solid rgba(74,222,128,.2)', borderRadius: 20, padding: '2px 8px', fontFamily: 'DM Sans,sans-serif', fontSize: '.55rem', color: '#4ade80' }}>{m.change}</span>
                </div>
                <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, fontSize: '.78rem', color: 'rgba(245,236,215,.4)', lineHeight: 1.6, margin: 0 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Initiatives */}
        <div style={{ marginBottom: 64 }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 300, color: '#F5ECD7', marginBottom: 32 }}>
            Programme <em style={{ color: '#D4A55A' }}>Highlights</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {report.initiatives.map((item, i) => (
              <div key={i} className="csr-init">
                <div style={{ padding: 'clamp(24px,3vw,36px)' }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 }}>
                    <span style={{ fontSize: '1.8rem' }}>{item.icon}</span>
                    <div>
                      <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.6rem', letterSpacing: '.18em', textTransform: 'uppercase', color: '#C27C3A' }}>{item.location}</div>
                      <h3 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.4rem', color: '#F5ECD7', lineHeight: 1.2 }}>{item.title}</h3>
                    </div>
                  </div>
                  <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, fontSize: '.86rem', color: 'rgba(245,236,215,.6)', lineHeight: 1.75, marginBottom: 20 }}>{item.outcome}</p>
                  <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                    {[['👥 Beneficiaries', item.beneficiaries], ['💵 Investment', item.investment]].map(([k, v]) => (
                      <div key={k} style={{ background: 'rgba(194,124,58,.08)', border: '1px solid rgba(194,124,58,.15)', borderRadius: 8, padding: '8px 14px' }}>
                        <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.58rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(194,124,58,.7)', marginBottom: 3 }}>{k}</div>
                        <div style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.1rem', color: '#F5ECD7' }}>{v}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="csr-init-img" style={{ overflow: 'hidden', minHeight: 220 }}>
                  <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Goals */}
        <div style={{ background: 'rgba(255,255,255,.02)', border: '1px solid rgba(245,236,215,.07)', borderRadius: 16, padding: 'clamp(28px,4vw,48px)', marginBottom: 56 }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 300, color: '#F5ECD7', marginBottom: 28 }}>
            Goals for <em style={{ color: '#D4A55A' }}>Next Year</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {report.goals2025.map((g, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg,#6B3A1F,#C27C3A)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.7rem', flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
                <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, fontSize: '.88rem', color: 'rgba(245,236,215,.65)', lineHeight: 1.6, margin: 0 }}>{g}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 16 }}>
          <a href="mailto:Birhancoffee24@gmail.com?subject=CSR Report Request — Birhan Coffee"
            style={{ display: 'flex', flexDirection: 'column', gap: 8, background: 'rgba(194,124,58,.06)', border: '1px solid rgba(194,124,58,.15)', borderRadius: 12, padding: '28px', textDecoration: 'none', transition: 'border-color .3s' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(194,124,58,.4)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(194,124,58,.15)'}>
            <span style={{ fontSize: '1.8rem' }}>📄</span>
            <span style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.2rem', color: '#F5ECD7' }}>Download Full Report</span>
            <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.78rem', color: 'rgba(245,236,215,.45)', lineHeight: 1.6 }}>Request the complete audited CSR report with all data and documentation.</span>
          </a>
          <Link to="/csr"
            style={{ display: 'flex', flexDirection: 'column', gap: 8, background: 'rgba(194,124,58,.06)', border: '1px solid rgba(194,124,58,.15)', borderRadius: 12, padding: '28px', textDecoration: 'none', transition: 'border-color .3s' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(194,124,58,.4)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(194,124,58,.15)'}>
            <span style={{ fontSize: '1.8rem' }}>🌍</span>
            <span style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.2rem', color: '#F5ECD7' }}>Our CSR Programme</span>
            <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.78rem', color: 'rgba(245,236,215,.45)', lineHeight: 1.6 }}>Learn more about our ongoing community investment and sustainability work.</span>
          </Link>
          <Link to="/investor"
            style={{ display: 'flex', flexDirection: 'column', gap: 8, background: 'rgba(194,124,58,.06)', border: '1px solid rgba(194,124,58,.15)', borderRadius: 12, padding: '28px', textDecoration: 'none', transition: 'border-color .3s' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(194,124,58,.4)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(194,124,58,.15)'}>
            <span style={{ fontSize: '1.8rem' }}>📊</span>
            <span style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.2rem', color: '#F5ECD7' }}>Investor Relations</span>
            <span style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '.78rem', color: 'rgba(245,236,215,.45)', lineHeight: 1.6 }}>View financial highlights, export volumes, and growth data.</span>
          </Link>
        </div>

      </div>
    </div>
  );
}

