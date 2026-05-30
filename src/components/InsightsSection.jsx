const articles = [
  { category: 'GETTING STARTED', title: 'How to transition from a traditional to a digital bank', author: 'David Grohl', date: '17/08/24' },
  { category: 'GETTING STARTED', title: 'How to transition from a traditional to a digital bank', author: 'David Grohl', date: '17/08/24' },
  { category: 'GETTING STARTED', title: 'How to transition from a traditional to a digital bank', author: 'David Grohl', date: '17/08/24' },
]

export default function InsightsSection() {
  return (
    <section id="insights" style={{ padding: '96px 0', background: 'var(--n7-dark)' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 3rem' }}>

        {/* Insights */}
        <div style={{ marginBottom: 96 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'flex-start' }}>
            <div>
              <h2 className="font-display" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 20 }}>
                Get yourself up-to-speed on all the things happening in fintech
              </h2>
              <button className="btn-outline" style={{ fontSize: 12 }}>INSIGHTS</button>
            </div>

            <div>
              {/* Featured article */}
              <div style={{ borderRadius: 18, background: 'rgba(0,102,255,0.08)', border: '1px solid rgba(0,180,255,0.12)', marginBottom: 14 }}>
                <div style={{ padding: 16, display: 'flex', gap: 14, alignItems: 'center' }}>
                  <div style={{ width: 80, height: 80, borderRadius: 14, background: 'rgba(0,102,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, flexShrink: 0 }}>🏦</div>
                  <div>
                    <p style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#00B4FF', marginBottom: 6 }}>GETTING STARTED</p>
                    <h3 style={{ fontSize: 13, fontWeight: 700, color: '#fff', lineHeight: 1.4, marginBottom: 6 }}>How to transition from a traditional to a digital bank</h3>
                    <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.38)' }}>David Grohl · 17/08/24</p>
                    <button style={{ marginTop: 8, padding: '4px 10px', borderRadius: 5, fontSize: 9, fontWeight: 600, background: 'none', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.55)', cursor: 'pointer' }}>READ MORE</button>
                  </div>
                </div>
              </div>

              {/* Two smaller articles */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                {articles.slice(1).map((a, i) => (
                  <div key={i} style={{ borderRadius: 14, padding: 14, background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,180,255,0.1)' }}>
                    <p style={{ fontSize: 8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#00B4FF', marginBottom: 6 }}>{a.category}</p>
                    <h3 style={{ fontSize: 12, fontWeight: 700, color: '#fff', lineHeight: 1.4, marginBottom: 6 }}>{a.title}</h3>
                    <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.35)', marginBottom: 8 }}>{a.author} · {a.date}</p>
                    <button style={{ padding: '3px 8px', borderRadius: 4, fontSize: 8, fontWeight: 600, background: 'none', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.45)', cursor: 'pointer' }}>READ MORE</button>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <a href="#" style={{ fontSize: 11, fontWeight: 700, color: '#00B4FF', textDecoration: 'none' }}>READ ALL INSIGHTS →</a>
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div id="case-studies">
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 800, color: '#fff', textAlign: 'center', marginBottom: 48 }}>Our Case Studies</h2>

          <div style={{ borderRadius: 24, overflow: 'hidden', background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,180,255,0.1)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <div style={{ minHeight: 260, background: 'rgba(0,102,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 110, height: 110, borderRadius: 20, background: 'rgba(0,102,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 44 }}>🔷</div>
              </div>
              <div style={{ padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12 }}>
                <p style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#00B4FF' }}>GETTING STARTED</p>
                <h3 className="font-display" style={{ fontSize: 26, fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>How we help brand reach out to more people</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#6b7280' }} />
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>Zoomerr</span>
                </div>
                <button style={{ width: 'fit-content', padding: '8px 18px', borderRadius: 6, fontSize: 12, fontWeight: 600, background: 'none', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.6)', cursor: 'pointer' }}>READ MORE</button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <button style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', background: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', fontSize: 14 }}>←</button>
              <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                <div style={{ width: 22, height: 6, borderRadius: 3, background: '#0066FF' }} />
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
              </div>
              <button style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', background: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', fontSize: 14 }}>→</button>
            </div>
            <a href="#" style={{ fontSize: 12, fontWeight: 700, color: '#00B4FF', textDecoration: 'none' }}>VIEW ALL →</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #insights > div > div:first-child { grid-template-columns: 1fr !important; }
          #case-studies > div:nth-child(2) > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
