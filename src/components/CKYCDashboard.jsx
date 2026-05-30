const branches = [
  { name: 'Branch 1', total: 225, inProgress: 125, completed: 75, upTo: 25 },
  { name: 'Branch 2', total: 300, inProgress: 32, completed: 158, upTo: 110 },
  { name: 'Branch 3', total: 180, inProgress: 40, completed: 160, upTo: 140 },
  { name: 'Branch 4', total: 305, inProgress: 16, completed: 84, upTo: 41 },
  { name: 'Branch 5', total: 110, inProgress: 16, completed: 41, upTo: 41 },
  { name: 'Branch 6', total: 102, inProgress: 16, completed: 42, upTo: 42 },
  { name: 'Branch 7', total: 214, inProgress: 16, completed: 42, upTo: 42 },
]

const periodData = [
  { label: '28-1', pass: 128, fail: 22, total: 225 },
  { label: '28-2', pass: 160, fail: 18, total: 200 },
  { label: '28-3', pass: 140, fail: 25, total: 220 },
  { label: '28-4', pass: 170, fail: 15, total: 210 },
  { label: '28-5', pass: 155, fail: 20, total: 195 },
  { label: '28-6', pass: 180, fail: 10, total: 225 },
]

const customers = Array(8).fill({ id: '0098423', name: 'Raghu Nandan' })

export default function CKYCDashboard() {
  return (
    <div className="dashboard-card" style={{ fontFamily: 'Inter, sans-serif', width: '100%' }}>
      {/* Top bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', borderBottom: '1px solid #f1f5f9' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 30, height: 30, borderRadius: 6, background: '#1E3A5F', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 9, fontWeight: 700 }}>CB7</div>
          <div>
            <p style={{ fontSize: 9, fontWeight: 500, color: '#374151' }}>Bank Name: [BN US]</p>
            <p style={{ fontSize: 8, color: '#9ca3af' }}>Branch ID: 02 | Branch Name: Head Office Branch</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {['🔔', '📊', '👤', '⚙', '🌙'].map((icon, i) => (
            <div key={i} style={{ width: 22, height: 22, borderRadius: 4, background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10 }}>{icon}</div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <div style={{ width: 36, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, padding: '12px 0', background: '#1E3A5F', borderRight: '1px solid #e5e7eb' }}>
          {['≡', '📁', '📊', '□', '⚙', '🕐'].map((icon, i) => (
            <div key={i} style={{ width: 22, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4, background: i === 0 ? 'rgba(255,255,255,0.2)' : 'transparent', color: '#fff', fontSize: 10 }}>{icon}</div>
          ))}
        </div>

        {/* Main */}
        <div style={{ flex: 1, padding: 12, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <div>
              <h2 style={{ fontWeight: 600, color: '#111827', fontSize: 12 }}>CKYC Dashboard</h2>
              <p style={{ fontSize: 9, color: '#9ca3af' }}>XXXXXXXX</p>
            </div>
            <button style={{ padding: '5px 10px', borderRadius: 6, fontSize: 9, fontWeight: 500, color: '#fff', background: '#0066FF', border: 'none', cursor: 'pointer' }}>File Upload Record</button>
          </div>

          {/* Stat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 10 }}>
            {[
              { val: '2115', label: 'Total Customer', color: '#0066FF' },
              { val: '940', label: 'In Progress', color: '#FF9800' },
              { val: '105', label: 'KYC Completed / Failed Records', color: '#0066FF' },
            ].map((card, i) => (
              <div key={i} style={{ borderRadius: 8, padding: 10, border: `2px solid ${card.color}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <p style={{ fontSize: 22, fontWeight: 800, color: card.color, lineHeight: 1 }}>{card.val}</p>
                    <p style={{ fontSize: 8, color: '#6b7280', marginTop: 3 }}>{card.label}</p>
                  </div>
                  <div style={{ width: 18, height: 18, borderRadius: '50%', border: `2px solid ${card.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, color: card.color }}>⊕</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {/* Left col */}
            <div>
              {/* Branches table */}
              <div style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid #e5e7eb', marginBottom: 10 }}>
                <div style={{ padding: '6px 10px', background: '#f8fafc', display: 'flex', justifyContent: 'space-between' }}>
                  <p style={{ fontSize: 9, fontWeight: 600, color: '#374151' }}>All Branches</p>
                  <span style={{ fontSize: 10, color: '#9ca3af' }}>⋮</span>
                </div>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 7 }}>
                  <thead>
                    <tr style={{ background: '#f1f5f9' }}>
                      {['Branch', 'Total', 'In Prog.', 'Done', 'Up to Date'].map(h => (
                        <th key={h} style={{ padding: '4px 6px', textAlign: 'left', fontSize: 7, fontWeight: 500, color: '#6b7280' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {branches.map((b, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '3px 6px', color: '#374151', fontWeight: 500 }}>{b.name}</td>
                        <td style={{ padding: '3px 6px', color: '#6b7280' }}>{b.total}</td>
                        <td style={{ padding: '3px 6px', color: '#6b7280' }}>{b.inProgress}</td>
                        <td style={{ padding: '3px 6px', color: '#6b7280' }}>{b.completed}</td>
                        <td style={{ padding: '3px 6px', color: '#6b7280' }}>{b.upTo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Periodic chart */}
              <div style={{ borderRadius: 8, padding: 10, border: '1px solid #e5e7eb' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                  <p style={{ fontSize: 9, fontWeight: 600, color: '#374151' }}>Periodic Response | All Branches</p>
                  <div style={{ padding: '2px 6px', borderRadius: 4, background: '#0066FF', fontSize: 7, color: '#fff' }}>Report 1 | March Choice</div>
                </div>
                <div style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                  {[{ color: '#00BCD4', label: 'Pass', val: 128 }, { color: '#E91E63', label: 'Failed', val: 22 }, { color: '#2196F3', label: 'Total', val: 225 }].map(item => (
                    <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                      <div style={{ width: 8, height: 8, borderRadius: 2, background: item.color }} />
                      <span style={{ fontSize: 7, color: '#6b7280' }}>{item.label} <strong style={{ color: '#374151' }}>{item.val}</strong></span>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 44 }}>
                  {periodData.map((d, i) => (
                    <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                      <div style={{ width: '100%', display: 'flex', gap: 1, alignItems: 'flex-end', height: 36 }}>
                        <div style={{ flex: 1, borderRadius: '2px 2px 0 0', background: '#00BCD4', height: `${(d.pass / 250) * 36}px` }} />
                        <div style={{ flex: 1, borderRadius: '2px 2px 0 0', background: '#E91E63', height: `${(d.fail / 250) * 36}px` }} />
                        <div style={{ flex: 1, borderRadius: '2px 2px 0 0', background: '#2196F3', opacity: 0.4, height: `${(d.total / 250) * 36}px` }} />
                      </div>
                      <span style={{ fontSize: 6, color: '#9ca3af' }}>{d.label}</span>
                    </div>
                  ))}
                </div>
                <button style={{ marginTop: 6, fontSize: 8, color: '#0066FF', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 500 }}>Go to File Complete</button>
              </div>
            </div>

            {/* Right col */}
            <div>
              {/* Detail card */}
              <div style={{ borderRadius: 8, padding: 10, border: '1px solid #e5e7eb', background: '#f8fafc', marginBottom: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <div>
                    <p style={{ fontSize: 8, color: '#6b7280' }}>Failed Records</p>
                    <p style={{ fontSize: 8, fontWeight: 500, color: '#374151' }}>Branch No: 02</p>
                    <p style={{ fontSize: 8, fontWeight: 500, color: '#374151' }}>Branch Name: Chandni Chowk</p>
                  </div>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#E91E63', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 9, fontWeight: 700 }}>C</div>
                </div>
                <div style={{ display: 'flex', gap: 16, marginBottom: 8 }}>
                  <div>
                    <p style={{ fontSize: 8, color: '#9ca3af' }}>Customer ID</p>
                    <p style={{ fontSize: 10, fontWeight: 700, color: '#111827' }}>00TB841</p>
                  </div>
                  <div>
                    <p style={{ fontSize: 8, color: '#9ca3af' }}>Customer Name</p>
                    <p style={{ fontSize: 10, fontWeight: 700, color: '#111827' }}>Ajge Krishna</p>
                  </div>
                </div>
                <div style={{ marginBottom: 8 }}>
                  <p style={{ fontSize: 8, color: '#9ca3af', marginBottom: 4 }}>Notes</p>
                  <p style={{ fontSize: 8, color: '#374151' }}>1. Aadhar Number not matching</p>
                  <p style={{ fontSize: 8, color: '#374151' }}>2. PAN No. missing</p>
                </div>
                <button style={{ padding: '4px 10px', borderRadius: 5, fontSize: 9, fontWeight: 500, color: '#fff', background: '#0066FF', border: 'none', cursor: 'pointer' }}>Update</button>
              </div>

              {/* Customer list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                {customers.map((c, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 8px', borderRadius: 7, background: '#f8fafc', border: '1px solid #e5e7eb' }}>
                    <div>
                      <p style={{ fontSize: 7, color: '#9ca3af' }}>Customer ID</p>
                      <p style={{ fontSize: 9, fontWeight: 600, color: '#111827' }}>{c.id}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: 7, color: '#9ca3af' }}>Customer Name</p>
                      <p style={{ fontSize: 9, fontWeight: 600, color: '#111827' }}>{c.name}</p>
                    </div>
                    <span style={{ color: '#9ca3af', fontSize: 12 }}>›</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
