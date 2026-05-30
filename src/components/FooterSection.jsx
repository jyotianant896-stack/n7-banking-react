const footerColumns = [
  {
    title: 'Solutions',
    links: ['Core Banking CB7', 'Digital Banking N7', 'Open Banking', 'Loan Origination System', 'Loan Management System', 'Digital Transformation'],
  },
  {
    title: 'N7 Banking',
    links: ['About Us', 'Solutions', 'Contact', 'Company', 'Careers', 'Insights', 'Core Team', 'Brand Center'],
  },
  {
    title: 'Our Socials',
    links: ['LinkedIn', 'X'],
  },
]

const offices = [
  { city: 'London', address: 'Linktia Infosystems Ltd – CB7, 20 Main Road Surridge, TN14 6EP, England, United Kingdom' },
  { city: 'Dubai', address: 'Linktia Infosystems Ltd – CB7/Nimal, Business Centre 5, Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates' },
  { city: 'London', address: 'Linktia Infosystems Ltd – CB7/Nimal, Anand Nagar, Surucity Road, Pune, Maharashtra, 411041, India' },
]

export default function FooterSection() {
  return (
    <>
      {/* CTA Banner */}
      <section style={{ padding: '80px 0', background: '#050710' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 3rem' }}>
          <div style={{ borderRadius: 28, padding: '48px 64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32, background: 'linear-gradient(135deg, #0A0B14 0%, #1A2040 100%)', border: '1px solid rgba(0,180,255,0.1)' }}>
            <div>
              <h2 className="font-display" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 10 }}>
                Take the full advantage of<br />going paper-less now.
              </h2>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.38)', maxWidth: 380 }}>N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations</p>
            </div>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <button className="btn-outline">CONTACT US</button>
              <button className="btn-primary">REQUEST DEMO</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '64px 0 32px', background: '#050710', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
            {/* Logo + offices */}
            <div>
              <span className="font-display gradient-text" style={{ fontSize: 42, fontWeight: 800, display: 'block', marginBottom: 32 }}>N7</span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
                {offices.map((o, i) => (
                  <div key={i}>
                    <p style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.65)', marginBottom: 6 }}>{o.city}</p>
                    <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', lineHeight: 1.6 }}>{o.address}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {footerColumns.map((col, i) => (
              <div key={i}>
                <p style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.65)', marginBottom: 16 }}>{col.title}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {col.links.map(link => (
                    <li key={link}>
                      <a href="#" style={{ fontSize: 12, color: 'rgba(255,255,255,0.32)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5, transition: 'color .2s' }}
                        onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.7)'}
                        onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.32)'}>
                        {link} <span style={{ color: '#00B4FF', fontSize: 11 }}>→</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div style={{ paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.22)' }}>
              Copyright © 2025 by Linktia Infosystems Limited — CB7 and N7 are Controlled Risks — Registered under the Companies Act 2013, England and Wales (Company Incorporation 08131889)
            </p>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            footer > div > div:first-child { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </footer>
    </>
  )
}
