# N7 Banking – React + Vite

Pixel-perfect responsive frontend of the N7 Banking Figma design, built with plain React + Vite (no Next.js).

## Tech Stack
- **React 18** – UI library you already know
- **Vite** – super fast dev server & build tool
- No TypeScript, no Next.js, just JSX

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# Opens http://localhost:5173

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## Deploy to Vercel (free)
1. Push this folder to a GitHub repo
2. Go to https://vercel.com → New Project → Import repo
3. Framework: **Vite** (auto-detected) → Deploy ✓

## Project Structure
```
src/
├── components/
│   ├── Navbar.jsx            ← Sticky nav, Solutions/Resources dropdowns
│   ├── HeroSection.jsx       ← "The new foundation of modern banking"
│   │                            + floating balance card (Toni Kross $42,295)
│   │                            + Recent Activity card + scrolling ticker
│   ├── SolutionsSection.jsx  ← 5 solution cards
│   ├── CoreBankingSection.jsx← Wraps both dashboards
│   ├── AMLDashboard.jsx      ← AML Dashboard: 450 STR, donut chart,
│   │                            bar chart, AML Report table
│   ├── CKYCDashboard.jsx     ← CKYC Dashboard: 2115/940/105 stats,
│   │                            branches table, periodic chart,
│   │                            Ajge Krishna detail card, customer list
│   ├── PhoneMockup.jsx       ← 3 iPhone screens:
│   │                            Screen 1: Home (balance, Fund Transfer,
│   │                                       Add Money, transactions)
│   │                            Screen 2: Card (bar chart, $8,295)
│   │                            Screen 3: Profile (Toni Kross menu)
│   ├── DigitalBankingSection.jsx ← 3 feature rows each with a phone
│   ├── InsightsSection.jsx   ← Articles grid + Case Studies carousel
│   └── FooterSection.jsx     ← CTA banner + N7 logo + 3 offices
│                                (London/Dubai/Pune) + link columns
├── styles/
│   └── globals.css           ← All global styles, animations, phone CSS
├── App.jsx                   ← Root component
└── main.jsx                  ← ReactDOM.render entry point
```
