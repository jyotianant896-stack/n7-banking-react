// ---- Screen 1: Home ----
function HomeScreen() {
  const transactions = [
    { name: 'To Jin', sub: 'Work', date: '10 Jun 2022', amount: '-$59', type: 'out' },
    { name: 'From Google', sub: 'Salary', date: '10 Jun 2022', amount: '+$859', type: 'in' },
    { name: 'To David', sub: 'Work', date: '7 Jun 2022', amount: '-$479', type: 'out' },
    { name: 'From Google', sub: 'Bonus', date: '7 Jun 2022', amount: '+$859', type: 'in' },
  ]

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '32px 14px 8px', background: '#F9FAFC' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'linear-gradient(135deg,#667eea,#764ba2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 10, fontWeight: 700 }}>TK</div>
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, color: '#111827' }}>Toni Kross</p>
            <p style={{ fontSize: 9, color: '#9ca3af' }}>Good Morning</p>
          </div>
        </div>
        <div style={{ width: 26, height: 26, borderRadius: '50%', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11 }}>🔔</div>
      </div>

      <p style={{ fontSize: 9, color: '#9ca3af', marginBottom: 2 }}>Total balance</p>
      <p style={{ fontSize: 20, fontWeight: 800, color: '#111827', marginBottom: 14 }}>$42,295.00 <span style={{ fontSize: 11, fontWeight: 500, color: '#9ca3af' }}>USD</span></p>

      {/* Action buttons */}
      <div style={{ display: 'flex', gap: 14, marginBottom: 16 }}>
        {[{ icon: '⬆', label: 'Fund Transfer' }, { icon: '💰', label: 'Add Money' }, { icon: '⚙', label: 'More' }].map(item => (
          <div key={item.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
            <div style={{ width: 36, height: 36, borderRadius: 12, background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>{item.icon}</div>
            <span style={{ fontSize: 8, color: '#6b7280', fontWeight: 500 }}>{item.label}</span>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <p style={{ fontSize: 12, fontWeight: 700, color: '#111827', marginBottom: 8 }}>Recent activity</p>
      <div style={{ display: 'flex', gap: 5, marginBottom: 10, flexWrap: 'wrap' }}>
        {['This Day', 'This Week', 'This Month', '6 Month'].map((tab, i) => (
          <button key={tab} style={{ padding: '3px 8px', borderRadius: 999, fontSize: 8, fontWeight: 500, border: 'none', cursor: 'pointer', background: i === 1 ? '#1A1A4E' : '#F3F4F6', color: i === 1 ? '#fff' : '#6B7280' }}>{tab}</button>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {transactions.map((tx, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: 9, background: tx.type === 'out' ? 'rgba(0,102,255,0.1)' : 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, flexShrink: 0 }}>
              {tx.type === 'out' ? '↗' : '↙'}
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 9, fontWeight: 600, color: '#111827' }}>{tx.name} · <span style={{ fontWeight: 400, color: '#6b7280' }}>{tx.sub}</span></p>
              <p style={{ fontSize: 8, color: '#9ca3af' }}>{tx.date}</p>
            </div>
            <span style={{ fontSize: 9, fontWeight: 700, color: tx.type === 'out' ? '#EF4444' : '#22C55E' }}>{tx.amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ---- Screen 2: Card / Transaction ----
function CardScreen() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
  const barH = [38, 32, 76, 42, 28, 33]

  const transactions = [
    { name: 'To Jin', sub: 'Work', date: '10 Jun 2022', amount: '-$59', type: 'out' },
    { name: 'From Google', sub: 'Salary', date: '10 Jun 2022', amount: '+$859', type: 'in' },
  ]

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '32px 14px 8px', background: '#F9FAFC' }}>
      <p style={{ fontSize: 9, color: '#9ca3af', fontWeight: 500 }}>March 2022</p>
      <p style={{ fontSize: 20, fontWeight: 800, color: '#111827', margin: '4px 0 14px' }}>$8,295.00 <span style={{ fontSize: 11, fontWeight: 500, color: '#9ca3af' }}>USD</span></p>

      {/* Bar chart */}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 64, marginBottom: 12 }}>
        {months.map((m, i) => (
          <div key={m} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
            <div style={{ width: '100%', borderRadius: '4px 4px 0 0', background: i === 2 ? '#1A1A4E' : '#E2E8F0', height: barH[i] }} />
            <span style={{ fontSize: 7, color: '#9ca3af' }}>{m}</span>
          </div>
        ))}
      </div>

      {/* Income / Expense */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
        {[{ icon: '🏠', label: 'Home', val: '$453.00' }, { icon: '📊', label: 'Taxes', val: '$453.00' }].map(item => (
          <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>{item.icon}</div>
            <div>
              <p style={{ fontSize: 8, color: '#9ca3af' }}>{item.label}</p>
              <p style={{ fontSize: 11, fontWeight: 700, color: '#111827' }}>{item.val}</p>
            </div>
          </div>
        ))}
      </div>

      <p style={{ fontSize: 12, fontWeight: 700, color: '#111827', marginBottom: 8 }}>Recent activity</p>
      <div style={{ display: 'flex', gap: 5, marginBottom: 10 }}>
        {['This Day', 'This Week', 'This Month', '6 Month'].map((tab, i) => (
          <button key={tab} style={{ padding: '3px 7px', borderRadius: 999, fontSize: 8, border: 'none', cursor: 'pointer', background: i === 1 ? '#1A1A4E' : '#F3F4F6', color: i === 1 ? '#fff' : '#6B7280' }}>{tab}</button>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {transactions.map((tx, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: 9, background: tx.type === 'out' ? 'rgba(0,102,255,0.1)' : 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, flexShrink: 0 }}>
              {tx.type === 'out' ? '↗' : '↙'}
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 9, fontWeight: 600, color: '#111827' }}>{tx.name} · <span style={{ fontWeight: 400, color: '#6b7280' }}>{tx.sub}</span></p>
              <p style={{ fontSize: 8, color: '#9ca3af' }}>{tx.date}</p>
            </div>
            <span style={{ fontSize: 9, fontWeight: 700, color: tx.type === 'out' ? '#EF4444' : '#22C55E' }}>{tx.amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ---- Screen 3: Profile ----
function ProfileScreen() {
  const menuItems = [
    { icon: '👤', label: 'Profile setting' },
    { icon: '⚙', label: 'Setting' },
    { icon: '💬', label: 'Support' },
    { icon: '🚪', label: 'Sign out' },
  ]

  return (
    <div style={{ flex: 1, overflowY: 'auto', background: '#F9FAFC' }}>
      <div style={{ padding: '32px 14px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'linear-gradient(135deg,#667eea,#764ba2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 18, fontWeight: 700, border: '3px solid #fff', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', marginBottom: 10 }}>TK</div>
        <p style={{ fontSize: 14, fontWeight: 700, color: '#111827' }}>Toni Kross</p>
        <p style={{ fontSize: 10, color: '#9ca3af' }}>tonkross@gmail.com</p>
      </div>
      <div style={{ padding: '0 14px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {menuItems.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderRadius: 14, background: '#fff', border: '1px solid #f1f5f9', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 14 }}>{item.icon}</span>
              <span style={{ fontSize: 12, fontWeight: 500, color: '#111827' }}>{item.label}</span>
            </div>
            <span style={{ color: '#9ca3af', fontSize: 14 }}>›</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ---- Bottom Nav ----
function BottomNav({ activeTab }) {
  const navItems = [
    { icon: '🏠', label: 'Home' },
    { icon: '💳', label: 'Card' },
    { icon: '🔄', label: 'Transaction' },
    { icon: '👤', label: 'Profile' },
  ]

  return (
    <div style={{ padding: '6px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff', borderTop: '1px solid #f1f5f9', boxShadow: '0 -2px 8px rgba(0,0,0,0.04)' }}>
      {navItems.map((item, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <span style={{ fontSize: 13, opacity: i === activeTab ? 1 : 0.32 }}>{item.icon}</span>
          <span style={{ fontSize: 7, fontWeight: 500, color: i === activeTab ? '#1A1A4E' : '#9CA3AF' }}>{item.label}</span>
        </div>
      ))}
    </div>
  )
}

// ---- Single Phone ----
export function SinglePhone({ screen }) {
  const screenComponents = [<HomeScreen key="home" />, <CardScreen key="card" />, <ProfileScreen key="profile" />]
  const activeTab = screen === 0 ? 0 : screen === 1 ? 2 : 3

  return (
    <div className="phone-mockup">
      {screenComponents[screen]}
      <BottomNav activeTab={activeTab} />
    </div>
  )
}

// ---- Three Phones ----
export default function PhoneMockup() {
  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
      <SinglePhone screen={0} />
      <SinglePhone screen={1} />
      <SinglePhone screen={2} />
    </div>
  )
}
