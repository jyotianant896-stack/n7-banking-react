import AMLDashboard from './AMLDashboard'
import CKYCDashboard from './CKYCDashboard'

const features = [
  'Customer-On Boarding',
  'CRM Activities',
  'Managing deposits and withdrawals',
  'Configuring New Banking Products',
  'Transaction management',
  'Loan disbursal and Loan management',
  'Interest Calculation',
  'Establishing criteria for minimum balances',
  'Payments processing (cash, cheques, mandates, NEFT, RTGS etc)',
]

export default function CoreBankingSection() {
  return (
    <section
      id="core-banking"
      style={{
        padding: '96px 0',
        background: 'var(--n7-dark2)',
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          padding: '0 3rem',
        }}
      >
        {/* AML Dashboard Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 64,
            alignItems: 'center',
            marginBottom: 96,
          }}
        >
          {/* Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
            }}
          >
            <p
              style={{
                fontSize: 11,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: 'rgba(255,255,255,0.38)',
                fontWeight: 500,
              }}
            >
              CORE BANKING
            </p>

            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(32px, 3.5vw, 52px)',
                fontWeight: 800,
                color: '#fff',
                lineHeight: 1.1,
              }}
            >
              A complete
              <br />
              cloud-based
              <br />
              <span className="gradient-text">
                core banking.
              </span>
            </h2>

            <p
              style={{
                color: 'rgba(255,255,255,0.48)',
                fontSize: 14,
                lineHeight: 1.7,
              }}
            >
              Faster time to market with our cloud-based core banking services
            </p>

            <div
              style={{
                display: 'flex',
                gap: 16,
                flexWrap: 'wrap',
              }}
            >
              <button className="btn-primary">
                REQUEST DEMO
              </button>

              <button
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 13,
                  fontWeight: 700,
                  color: '#00B4FF',
                }}
              >
                LEARN MORE →
              </button>
            </div>
          </div>

          {/* AML Dashboard */}
          <div
            style={{
              borderRadius: 24,
              overflow: 'hidden',
              boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
            }}
          >
            <AMLDashboard />
          </div>
        </div>

        {/* CKYC Dashboard Row - EXCHANGED */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 64,
            alignItems: 'center',
          }}
        >
          {/* Dashboard First */}
          <div
            style={{
              borderRadius: 24,
              overflow: 'hidden',
              boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
            }}
          >
            <CKYCDashboard />
          </div>

          {/* Content Second */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 28,
            }}
          >
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(28px, 3vw, 44px)',
                fontWeight: 800,
                color: '#fff',
                lineHeight: 1.15,
              }}
            >
              Run a more efficient,
              flexible, and digitally
              connected corebanking
              system
            </h2>

            <div>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.65)',
                  marginBottom: 14,
                }}
              >
                What you will get:
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '8px 16px',
                }}
              >
                {features.map((f, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 8,
                    }}
                  >
                    <div
                      style={{
                        width: 16,
                        height: 16,
                        borderRadius: '50%',
                        background: 'rgba(0,102,255,0.2)',
                        border:
                          '1px solid rgba(0,180,255,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: 1,
                        fontSize: 9,
                        color: '#00B4FF',
                      }}
                    >
                      ✓
                    </div>

                    <span
                      style={{
                        fontSize: 12,
                        color: 'rgba(255,255,255,0.52)',
                        lineHeight: 1.6,
                      }}
                    >
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #core-banking > div > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}