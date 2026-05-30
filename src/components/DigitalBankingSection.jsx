import { SinglePhone } from './PhoneMockup'

const tickerItems = ['N7', '✦', 'Say', '👋', 'to the new way of banking', '✦', 'CB7', '✦', 'Say', '👋', 'to the new way of banking', '✦']

const features = [
  {
    title: 'Fully compliant with regulatory requirement',
    desc: "The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures.",
    points: ['Pre-Integrated Security System', 'Fully Compliant With Regulatory Requirement', 'Digitally Connected Core'],
    screen: 0,
    phoneLeft: false,
  },
  {
    title: 'No legacy IT systems',
    desc: 'Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.',
    points: ['Adaptive & Intelligent API monetization', 'Ambient User Experience', 'Cloud-native With lower TCO'],
    screen: 1,
    phoneLeft: true,
  },
  {
    title: 'No traditional branches',
    desc: 'Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.',
    points: ['Branchless & Paperless Banking', 'Digital Transformation Capability', 'Optimized, Adoptable and Scalable'],
    screen: 2,
    phoneLeft: false,
  },
]

export default function DigitalBankingSection() {
  return (
    <section id="digital-banking" style={{ padding: '96px 0', background: 'var(--n7-light)' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 3rem' }}>

        {/* Ticker */}
        <div style={{ borderRadius: 999, marginBottom: 64, overflow: 'hidden', background: '#0A0B14', padding: '10px 24px' }}>
          <div className="ticker-track" style={{ display: 'flex', alignItems: 'center', gap: 24, width: 'max-content' }}>
            {[...Array(4)].flatMap((_, i) =>
              tickerItems.map((item, j) => (
                <span key={`${i}-${j}`} style={{ fontSize: 13, fontWeight: 500, whiteSpace: 'nowrap', color: item === 'N7' || item === 'CB7' ? '#00B4FF' : 'rgba(255,255,255,0.45)' }}>{item}</span>
              ))
            )}
          </div>
        </div>

        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#9ca3af', fontWeight: 500, marginBottom: 12 }}>DIGITAL BANKING</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, color: '#111827', marginBottom: 12, lineHeight: 1.1 }}>
            Digital banking<br />out-of-the-box
          </h2>
          <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.7, maxWidth: 380, marginBottom: 20 }}>
            N7 helps your financial institution improve the client experience, automate and optimize procedures
          </p>
          <div style={{ display: 'flex', gap: 16 }}>
            <button className="btn-primary">REQUEST DEMO</button>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 700, color: '#374151', display: 'flex', alignItems: 'center', gap: 6 }}>LEARN MORE →</button>
          </div>
        </div>

        {/* Feature rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
          {features.map((f, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
              {/* Phone */}
              <div style={{ display: 'flex', justifyContent: 'center', order: f.phoneLeft ? 1 : 2 }}>
                <SinglePhone screen={f.screen} />
              </div>
              {/* Text */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, order: f.phoneLeft ? 2 : 1 }}>
                <h3 className="font-display" style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 700, color: '#111827', lineHeight: 1.2 }}>{f.title}</h3>
                <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.7 }}>{f.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {f.points.map((point, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 16, height: 16, borderRadius: '50%', background: 'rgba(0,102,255,0.1)', border: '1px solid rgba(0,102,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 9, color: '#0066FF' }}>✓</div>
                      <span style={{ fontSize: 14, color: '#374151' }}>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #digital-banking .feature-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
