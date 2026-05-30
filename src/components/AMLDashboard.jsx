const amlData = [
  { month: '5 Nov', cleared: 320, reported: 190 },
  { month: '6 Nov', cleared: 280, reported: 210 },
  { month: '7 Nov', cleared: 240, reported: 160 },
  { month: '8 Nov', cleared: 290, reported: 180 },
  { month: '9 Nov', cleared: 380, reported: 220 },
]

const amlRows = [
  { id: 225, branch: 'Branch 1', identDate: '02-01-2022', txDate: '27-12-2021', amount: 70 },
  { id: 180, branch: 'Branch 3', identDate: '02-01-2022', txDate: '27-12-2021', amount: 160 },
  { id: 205, branch: 'Branch 4', identDate: '02-01-2022', txDate: '27-12-2021', amount: 65 },
  { id: 199, branch: 'Branch 5', identDate: '02-01-2022', txDate: '28-12-2021', amount: 152 },
]

export default function AMLDashboard() {
  const maxBar = 500

  return (
    <div className="dashboard-card" style={{ fontFamily: 'Inter, sans-serif', width: '100%' }}>
      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <div style={{ width: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, padding: '16px 0', background: '#1E3A5F', borderRight: '1px solid #e5e7eb' }}>
          {['📊', '📄', '☰', '□', '⚙', '🕐'].map((icon, i) => (
            <div key={i} style={{ width: 26, height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 6, background: i === 0 ? 'rgba(255,255,255,0.2)' : 'transparent', fontSize: 12, cursor: 'pointer' }}>{icon}</div>
          ))}
        </div>

        {/* Main */}
        <div style={{ flex: 1, padding: 16, minWidth: 0 }}>
          <h2 style={{ fontWeight: 600, color: '#111827', fontSize: 13, marginBottom: 2 }}>AML Dashboard</h2>
          <p style={{ fontSize: 10, color: '#9ca3af', marginBottom: 14 }}>XXXXXXXX</p>

          {/* Stat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
            <div style={{ borderRadius: 10, padding: 12, border: '2px solid #E91E63' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <p style={{ fontSize: 26, fontWeight: 800, color: '#E91E63', lineHeight: 1 }}>450</p>
                  <p style={{ fontSize: 9, color: '#6b7280', marginTop: 4 }}>Total STR (Suspicious Transaction Report)</p>
                </div>
                <div style={{ width: 22, height: 22, borderRadius: '50%', border: '2px solid #E91E63', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, color: '#E91E63' }}>↺</div>
              </div>
            </div>
            <div style={{ borderRadius: 10, padding: 12, border: '2px solid #FF9800' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <p style={{ fontSize: 26, fontWeight: 800, color: '#FF9800', lineHeight: 1 }}>3</p>
                  <p style={{ fontSize: 9, color: '#6b7280', marginTop: 4 }}>Days Pending for AML Process</p>
                </div>
                <div style={{ width: 22, height: 22, borderRadius: '50%', border: '2px solid #FF9800', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, color: '#FF9800' }}>📅</div>
              </div>
            </div>
          </div>

          {/* Charts row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
            {/* Donut chart */}
            <div style={{ borderRadius: 10, padding: 12, border: '1px solid #e5e7eb' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <p style={{ fontSize: 9, fontWeight: 600, color: '#374151' }}>Suspicious Transactions as on 10-01-2022</p>
                <span style={{ fontSize: 10, color: '#9ca3af' }}>⋮</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ position: 'relative', width: 72, height: 72, flexShrink: 0 }}>
                  <svg viewBox="0 0 72 72" style={{ width: 72, height: 72, transform: 'rotate(-90deg)' }}>
                    <circle cx="36" cy="36" r="26" fill="none" stroke="#e5e7eb" strokeWidth="11" />
                    <circle cx="36" cy="36" r="26" fill="none" stroke="#00BCD4" strokeWidth="11" strokeDasharray="122 163" />
                    <circle cx="36" cy="36" r="26" fill="none" stroke="#FF9800" strokeWidth="11" strokeDasharray="26 163" strokeDashoffset="-122" />
                    <circle cx="36" cy="36" r="26" fill="none" stroke="#9C27B0" strokeWidth="11" strokeDasharray="15 163" strokeDashoffset="-148" />
                  </svg>
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <p style={{ fontSize: 13, fontWeight: 800, color: '#111827', lineHeight: 1 }}>450</p>
                    <p style={{ fontSize: 8, color: '#9ca3af' }}>STR</p>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {[{ label: 'Reason 1', color: '#00BCD4' }, { label: 'Reason 2', color: '#FF9800' }, { label: 'Reason 3', color: '#9C27B0' }].map(r => (
                    <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <div style={{ width: 8, height: 8, borderRadius: 2, background: r.color }} />
                      <span style={{ fontSize: 8, color: '#6b7280' }}>{r.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bar chart */}
            <div style={{ borderRadius: 10, padding: 12, border: '1px solid #e5e7eb' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <p style={{ fontSize: 9, fontWeight: 600, color: '#374151' }}>STR Summary</p>
                <div style={{ display: 'flex', gap: 8 }}>
                  <span style={{ fontSize: 8, color: '#9ca3af' }}>Start date</span>
                  <span style={{ fontSize: 8, color: '#9ca3af' }}>End date</span>
                </div>
              </div>
              <div style={{ fontSize: 8, color: '#fff', background: '#0066FF', padding: '4px 6px', borderRadius: 4, marginBottom: 6, display: 'inline-block', lineHeight: 1.5 }}>
                5 Nov 2021<br />● Total Cleared  320<br />● Total Reported  195
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 48 }}>
                {amlData.map((d, i) => (
                  <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                    <div style={{ width: '100%', display: 'flex', gap: 2, alignItems: 'flex-end', height: 40 }}>
                      <div style={{ flex: 1, borderRadius: '2px 2px 0 0', background: '#00BCD4', height: `${(d.cleared / maxBar) * 40}px` }} />
                      <div style={{ flex: 1, borderRadius: '2px 2px 0 0', background: '#E91E63', height: `${(d.reported / maxBar) * 40}px` }} />
                    </div>
                    <span style={{ fontSize: 7, color: '#9ca3af' }}>{d.month}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
                {[{ color: '#00BCD4', label: 'Cleared' }, { color: '#E91E63', label: 'Reported' }].map(l => (
                  <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <div style={{ width: 8, height: 8, background: l.color }} />
                    <span style={{ fontSize: 7, color: '#6b7280' }}>{l.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AML Report Table */}
          <div style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid #e5e7eb' }}>
            <div style={{ padding: '8px 12px', background: '#1E3A5F' }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: '#fff' }}>AML Report</p>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 8 }}>
                <thead>
                  <tr style={{ background: '#2563EB' }}>
                    {['AML Case ID', 'Branch ID', 'Identified Date', 'Date of Transaction', 'Amount of Transaction', 'Account Number'].map(h => (
                      <th key={h} style={{ padding: '6px 8px', textAlign: 'left', color: '#fff', fontWeight: 500, whiteSpace: 'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {amlRows.map((row, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#F8FAFC', borderBottom: '1px solid #e5e7eb' }}>
                      <td style={{ padding: '5px 8px', color: '#374151' }}>{row.id}</td>
                      <td style={{ padding: '5px 8px', color: '#374151' }}>{row.branch}</td>
                      <td style={{ padding: '5px 8px', color: '#374151' }}>{row.identDate}</td>
                      <td style={{ padding: '5px 8px', color: '#374151' }}>{row.txDate}</td>
                      <td style={{ padding: '5px 8px', color: '#374151' }}>{row.amount}</td>
                      <td style={{ padding: '5px 8px', color: '#374151' }}>{row.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
