# Fortune Aggregates and Sands — Web Platform

> **Strength You Can Build On**  
> High-performance Next.js 16 web application for Fortune Aggregates and Sands (Mangaluru, Karnataka).

---

## Overview

Fortune Aggregates and Sands is an industrial-grade quarrying, automated washing, and multi-deck screening enterprise operating out of Yedapadavu, Mangaluru. This web platform showcases:
- **Material Catalog**: Graded blue metal (20mm, 40mm, 10mm, 6mm), double-washed M-Sand, P-Sand, and GSB with physical specifications and IS 383 compliance.
- **Architectural Storytelling**: Interactive 3-stage crushing overview, expanding process views, and responsive project showcases.
- **Direct Dispatch & Logistics**: Live quarry dispatch indicators, GPS tipper fleet tracking features, and instant WhatsApp quote routing (+91 84228 19302).
- **Design System Fidelity**: Full compliance with brand design tokens, typography (Montserrat & Quicksand), and accessible semantic palettes.

---

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with pure CSS design tokens
- **Icons**: [Lucide React](https://lucide.dev/)
- **QR / Mobile Utilities**: `qrcode.react`
- **Languages**: TypeScript, CSS, Python (audit tooling)

---

## Getting Started

### Prerequisites

- Node.js 18.18+ or 20+
- npm 9+

### Installation

```bash
git clone https://github.com/PraveenIIMK/fortuneaggregates.git
cd fortuneaggregates
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Quality & Design Token Audit

```bash
python scripts/audit_scan.py
```

### Production Build

```bash
npm run build
npm run start
```

---

## Deployment

### Vercel (Recommended)
1. Push this repository to GitHub.
2. Import the project into [Vercel](https://vercel.com/new).
3. The configuration is automatically detected via `vercel.json` (Framework: Next.js).
4. Click **Deploy**.

### Netlify
1. Connect this GitHub repository in Netlify.
2. Build settings are pre-configured via `netlify.toml`:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `.next`
   - **Plugin**: `@netlify/plugin-nextjs`

---

## License & Proprietary Rights

Proprietary enterprise code for **Fortune Aggregates and Sands**. All rights reserved.
