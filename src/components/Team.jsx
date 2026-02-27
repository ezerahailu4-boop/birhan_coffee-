const TEAM_ROLES = [
  {
    role: 'Agronomists',
    icon: '🌱',
    desc: 'Ensure sustainable farming practices, provide guidance on crop management, and implement best practices for coffee cultivation across all four of our origin regions.',
    expertise: 'Ethiopian coffee varietals & growing conditions',
    img: '/hara.jpg',
  },
  {
    role: 'Harvesting Specialists',
    icon: '🍒',
    desc: 'Oversee the careful selective picking of coffee cherries, ensuring only the ripest and finest cherries are chosen — maintaining plant integrity and enhancing bean quality.',
    expertise: 'Selective harvesting techniques',
    img: '/masha.jpg',
  },
  {
    role: 'Processing Experts',
    icon: '⚙️',
    desc: 'Handle the meticulous processing of coffee cherries through washed, natural, and honey methods — ensuring each batch meets our exacting high standards.',
    expertise: 'Multi-method coffee processing',
    img: '/4321.jpg',
  },
  {
    role: 'Quality Control',
    icon: '🔬',
    desc: 'Conduct rigorous cupping and quality checks at each stage of production. Our certified Q-graders maintain the consistency and excellence Birhan Coffee is known for.',
    expertise: 'Certified Q-graders · Cup score 84+',
    img: '/quality.jpg',
  },
  {
    role: 'Logistics & Export',
    icon: '🌍',
    desc: 'Manage the efficient transportation and export of our coffee to international markets, ensuring timely delivery and full compliance with global trade regulations.',
    expertise: 'Global logistics & trade compliance',
    img: '/export1.jpg',
  },
];

export default function Team() {
  return (
    <section id="team" style={{
      padding: 'clamp(80px,10vw,140px) clamp(20px,5vw,60px)',
      background: '#0c0908',
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <p className="section-label">The People Behind the Cup</p>
          <h2 className="section-title">Our <em>Team of Experts</em></h2>
          <div className="divider center" />
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, color: 'rgba(245,236,215,0.5)', maxWidth: 500, margin: '0 auto', lineHeight: 1.8 }}>
            Every step of the farm-to-export journey is overseen by dedicated specialists who share a passion for Ethiopian coffee excellence.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {TEAM_ROLES.slice(0, 3).map(member => <TeamCard key={member.role} member={member} />)}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginTop: 20, maxWidth: '66.66%', margin: '20px auto 0' }}>
          {TEAM_ROLES.slice(3).map(member => <TeamCard key={member.role} member={member} />)}
        </div>

        {/* Commitment banner */}
        <div style={{
          marginTop: 60,
          background: 'linear-gradient(135deg, rgba(107,58,31,0.2), rgba(194,124,58,0.1))',
          border: '1px solid rgba(194,124,58,0.2)',
          borderRadius: 4, padding: 48, textAlign: 'center',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%', background: 'rgba(194,124,58,0.08)' }} />
          <p style={{ fontFamily: 'Cormorant Garamond,serif', fontStyle: 'italic', fontSize: 'clamp(1.4rem,3vw,2rem)', color: '#D4A55A', lineHeight: 1.5, maxWidth: 700, margin: '0 auto' }}>
            "At Birhan Coffee, we are committed to producing and delivering the finest Ethiopian coffee beans while supporting local communities and promoting sustainable agricultural practices."
          </p>
          <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,236,215,0.35)', marginTop: 20 }}>
            — Birhanu Lemi, Founder & CEO
          </p>
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member }) {
  return (
    <div style={{
      border: '1px solid rgba(245,236,215,0.08)', borderRadius: 4, overflow: 'hidden',
      background: 'rgba(255,255,255,0.02)', transition: 'all 0.3s',
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(194,124,58,0.25)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(245,236,215,0.08)'; }}
    >
      <div style={{ height: 180, overflow: 'hidden', position: 'relative' }}>
        <img src={member.img} alt={member.role} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,9,8,0.8) 0%, transparent 60%)' }} />
        <div style={{ position: 'absolute', bottom: 16, left: 20, fontSize: '1.5rem' }}>{member.icon}</div>
      </div>
      <div style={{ padding: 24 }}>
        <h4 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.3rem', color: '#F5ECD7', marginBottom: 6 }}>{member.role}</h4>
        <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C27C3A', marginBottom: 12 }}>{member.expertise}</p>
        <p style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 300, fontSize: '0.83rem', color: 'rgba(245,236,215,0.5)', lineHeight: 1.7 }}>{member.desc}</p>
      </div>
    </div>
  );
}
