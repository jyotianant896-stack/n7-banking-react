const solutions = [
  {
    icon: '⚙',
    label: '',
    title: 'Core Banking CB7',
    desc: 'CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.',
    href: '#core-banking',
  },
  {
    icon: '✦',
    label: '',
    title: 'Digital Banking N7',
    desc: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation.',
    href: '#digital-banking',
  },
  {
    icon: '◈',
    label: '',
    title: 'Open Banking',
    desc: 'Our API banking helps you gain actionable insights, streamline onboarding, KYC, payment initiation and enhanced credit scoring.',
    href: '#open-banking',
  },
  {
    icon: '◎',
    label: 'NBFC',
    title: 'Loan Origination System',
    desc: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science.',
    href: '#loan-origination',
  },
  {
    icon: '✧',
    label: 'NBFC',
    title: 'Loan Management System',
    desc: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science.',
    href: '#loan-management',
  },
]

export default function SolutionsSection() {
  return (
    <section id="solutions" className="solutions-section">
      <div className="solutions-wrapper">

        <div className="solutions-left">
          {/* <p className="solutions-subtitle">
            OUR SOLUTIONS
          </p> */}

          <h2 className="solutions-heading font-display">
            All of our solutions are
            <br />
            <span>tailor-made to your needs</span>
          </h2>

          <button className="btn-outline">
            REQUEST DEMO
          </button>
        </div>

        <div className="solutions-right">
          <div className="solutions-grid">
            {solutions.map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="solution-card"
              >
                <div className="solution-top">
                  <div className="solution-icon">
                    {s.icon}
                  </div>

                  {s.label && (
                    <span className="solution-label">
                      {s.label}
                    </span>
                  )}
                </div>

                <h3 className="solution-title">
                  {s.title}
                </h3>

                <p className="solution-desc">
                  {s.desc}
                </p>

                <span className="solution-link">
                  LEARN MORE →
                </span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}