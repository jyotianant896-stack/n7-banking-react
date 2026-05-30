const tickerItems = ['N7', '✦', 'Say', '👋', 'to the new way of banking', '✦', 'CB7', '✦', 'Say', '👋', 'to the new way of banking', '✦']
const trustedBrands = ['SHELLS', 'SmartFinder', 'Zoomerr', 'ArtVenue', 'kontrastr', 'WAVESMARATHON']

export default function HeroSection() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', paddingTop: 72, background: 'var(--n7-dark)', overflow: 'hidden' }}>
      {/* Glow */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 65% 50% at 65% 50%, rgba(0,102,255,0.22) 0%, transparent 70%)' }} />

      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 3rem', minHeight: 'calc(100vh - 72px)', display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', width: '100%' }}>

          {/* Left */}
          <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <h1 className="font-display" style={{ fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 800, lineHeight: 1.05, color: '#fff' }}>
              The new<br />foundation of<br />
              <span className="gradient-text">modern banking</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.52)', fontSize: 16, lineHeight: 1.7, maxWidth: 400 }}>
              We drive innovation and growth, provide seamless customer experience and operational excellence
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button className="btn-primary">REQUEST DEMO</button>
              <button className="btn-outline">CONTACT US</button>
            </div>

            {/* Trusted By */}
            <div>
              <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 500, marginBottom: 12 }}>Trusted By</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px', alignItems: 'center' }}>
                {trustedBrands.map(b => (
                  <span key={b} style={{ fontSize: 11, color: 'rgba(255,255,255,0.38)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(0,180,255,0.5)', display: 'inline-block' }} />
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: hero image frame with floating cards */}
          <div className="fade-in delay-2" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: 560 }}>
              {/* Hero frame background */}
              <div style={{ borderRadius: 28, overflow: 'hidden', background: 'linear-gradient(135deg, #8B6914 0%, #C9873F 35%, #4a3820 65%, #1e1e30 100%)', aspectRatio: '562/320', position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(20,20,40,0.7) 100%)' }} />

                {/* Floating balance card – top right */}
                <div style={{
                  position: 'absolute', top: 16, right: 16,
                  background: 'rgba(249,250,252,0.94)', backdropFilter: 'blur(12px)',
                  borderRadius: 20, padding: 16, width: 210,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.25)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                    <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg,#667eea,#764ba2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 11, fontWeight: 700 }}>TK</div>
                    <div>
                      <p style={{ fontSize: 11, fontWeight: 600, color: '#1f2937' }}>Toni Kross</p>
                      <p style={{ fontSize: 9, color: '#9ca3af' }}>Good Morning</p>
                    </div>
                    <div style={{ marginLeft: 'auto', width: 24, height: 24, borderRadius: '50%', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10 }}>🔔</div>
                  </div>
                  <p style={{ fontSize: 9, color: '#9ca3af', marginBottom: 2 }}>Total balance</p>
                  <p style={{ fontSize: 20, fontWeight: 800, color: '#111827', marginBottom: 12 }}>$42,295.00 <span style={{ fontSize: 12, fontWeight: 500, color: '#6b7280' }}>USD</span></p>
                  <div style={{ display: 'flex', gap: 12 }}>
                    {[{ icon: '⬆', label: 'Fund Transfer' }, { icon: '💰', label: 'Add Money' }, { icon: '⚙', label: 'More' }].map(item => (
                      <div key={item.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                        <div style={{ width: 32, height: 32, borderRadius: 10, background: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>{item.icon}</div>
                        <span style={{ fontSize: 8, color: '#6b7280', fontWeight: 500 }}>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating recent activity card – bottom left */}
                <div style={{
                  position: 'absolute', bottom: 16, left: 16,
                  background: 'rgba(249,250,252,0.9)', backdropFilter: 'blur(12px)',
                  borderRadius: 18, padding: '12px 14px', width: 200,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
                }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#1f2937', marginBottom: 8 }}>Recent activity</p>
                  <div style={{ display: 'flex', gap: 6, marginBottom: 8, flexWrap: 'wrap' }}>
                    {['This Day', 'This Week', 'This Month', '6 Month'].map((tab, i) => (
                      <span key={tab} style={{ padding: '2px 7px', borderRadius: 999, fontSize: 8, fontWeight: 500, background: i === 1 ? '#1A1A4E' : '#F3F4F6', color: i === 1 ? '#fff' : '#6B7280' }}>{tab}</span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 24, height: 24, borderRadius: 8, background: 'rgba(0,102,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10 }}>↗</div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: 9, fontWeight: 600, color: '#1f2937' }}>To Jin · <span style={{ fontWeight: 400, color: '#6b7280' }}>Work</span></p>
                      <p style={{ fontSize: 8, color: '#9ca3af' }}>10 Jun 2022</p>
                    </div>
                    <span style={{ fontSize: 10, fontWeight: 700, color: '#EF4444' }}>-$59</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker bar */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '10px 0', background: 'rgba(0,0,0,0.3)' }}>
        <div className="ticker-track" style={{ display: 'flex', alignItems: 'center', gap: 28, width: 'max-content' }}>
          {[...Array(4)].flatMap((_, i) =>
            tickerItems.map((item, j) => (
              <span key={`${i}-${j}`} style={{ fontSize: 13, fontWeight: 500, whiteSpace: 'nowrap', color: item === 'N7' || item === 'CB7' ? '#00B4FF' : 'rgba(255,255,255,0.45)' }}>{item}</span>
            ))
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          section > div > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
