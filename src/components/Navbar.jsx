import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

const solutionsLinks = [
  { label: 'Core Banking CB7', href: '#core-banking' },
  { label: 'Digital Banking N7', href: '#digital-banking' },
  { label: 'Open Banking', href: '#open-banking' },
  { label: 'Loan Origination System', href: '#loan-origination' },
  { label: 'Loan Management System', href: '#loan-management' },
]

const resourcesLinks = [
  { label: 'Insights', href: '#insights' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Core Team', href: '#core-team' },
  { label: 'Brand Center', href: '#brand-center' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: 'rgba(10,11,20,0.92)', backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255,255,255,0.06)'
    }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 3rem', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none' }}>
          <span className="font-display gradient-text" style={{ fontWeight: 800, fontSize: 26 }}>N7</span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="desktop-nav">
          {/* Solutions dropdown */}
          <div style={{ position: 'relative' }}
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}>
            <button className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.8)', background: 'none', border: 'none', cursor: 'pointer', padding: '8px 0' }}>
              SOLUTIONS <ChevronDown size={13} style={{ transition: 'transform .2s', transform: solutionsOpen ? 'rotate(180deg)' : '' }} />
            </button>
            {solutionsOpen && (
              <div style={{ position: 'absolute', top: '100%', left: 0, marginTop: 4, width: 210, borderRadius: 14, padding: '8px 0', background: '#0D1020', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
                {solutionsLinks.map(l => (
                  <a key={l.label} href={l.href} style={{ display: 'block', padding: '10px 16px', fontSize: 13, color: 'rgba(255,255,255,0.65)', textDecoration: 'none', transition: 'color .2s' }}
                    onMouseEnter={e => e.target.style.color = '#fff'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.65)'}>
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Resources dropdown */}
          <div style={{ position: 'relative' }}
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}>
            <button className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.8)', background: 'none', border: 'none', cursor: 'pointer', padding: '8px 0' }}>
              RESOURCES <ChevronDown size={13} style={{ transition: 'transform .2s', transform: resourcesOpen ? 'rotate(180deg)' : '' }} />
            </button>
            {resourcesOpen && (
              <div style={{ position: 'absolute', top: '100%', left: 0, marginTop: 4, width: 180, borderRadius: 14, padding: '8px 0', background: '#0D1020', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
                {resourcesLinks.map(l => (
                  <a key={l.label} href={l.href} style={{ display: 'block', padding: '10px 16px', fontSize: 13, color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}
                    onMouseEnter={e => e.target.style.color = '#fff'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.65)'}>
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#about" className="nav-link" style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>ABOUT US</a>
        </div>

        {/* CTA button */}
        <button className="btn-outline" style={{ padding: '10px 22px', fontSize: 13 }}>REQUEST DEMO</button>

        {/* Mobile hamburger */}
        <button onClick={() => setMobileOpen(!mobileOpen)} style={{ display: 'none', background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }} className="mobile-menu-btn">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ padding: '16px 24px 24px', background: 'rgba(10,11,20,0.98)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 8 }}>Solutions</p>
          {solutionsLinks.map(l => <a key={l.label} href={l.href} style={{ display: 'block', padding: '8px 0', fontSize: 13, color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }} onClick={() => setMobileOpen(false)}>{l.label}</a>)}
          <p style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.15em', margin: '16px 0 8px' }}>Resources</p>
          {resourcesLinks.map(l => <a key={l.label} href={l.href} style={{ display: 'block', padding: '8px 0', fontSize: 13, color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }} onClick={() => setMobileOpen(false)}>{l.label}</a>)}
          <a href="#about" style={{ display: 'block', padding: '8px 0', fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', marginTop: 8 }} onClick={() => setMobileOpen(false)}>ABOUT US</a>
          <button className="btn-outline" style={{ width: '100%', marginTop: 16 }}>REQUEST DEMO</button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          nav > div > button.btn-outline { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
