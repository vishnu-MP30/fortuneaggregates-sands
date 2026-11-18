# Comprehensive Website Audit: Fortune Aggregates and Sands

This audit evaluates the entire website against the client's brand system (`readme.md`, `AGENTS.md`, and design tokens in `tokens/*.css`).

---

## 1. Executive Summary & Violation Inventory

| Category | Initial Count | Status / Target |
| :--- | :---: | :--- |
| **Raw Hex Colors (`#...`)** | 133 | Replace all with tokens (`var(--...)`) |
| **Raw Pixel Font Sizes (`text-[...px]`, etc.)** | 31 | Replace all with font-size tokens (`var(--fs-...)`) |
| **Monospace Font Usage (`font-mono`)** | 17 | Purge completely; replace with Montserrat or Quicksand |
| **Off-system Fonts / Fallbacks** | 3 | Remove any off-system font families |
| **Banned Claims / Outdated Text** | 8 | Remove from active UI; preserve with `// DRAFT` or `// PLACEHOLDER` in data source |
| **Incorrect Brand Names (`& Sands`)** | 5 | Replace with "Fortune Aggregates and Sands" in headings, titles, metadata, legal lines |

---

## 2. Section-by-Section Audit Table

### A. Global Foundations & Theme
| Rule | Pass/Fail | Where | Fix |
| :--- | :---: | :--- | :--- |
| `<html lang="en-IN" data-theme="light">` | **Fail** | `app/layout.tsx` | Change `lang="en"` to `lang="en-IN"`. |
| `.theme-dark` class in `globals.css` with exact tokens | **Fail** | `app/globals.css` | Define `.theme-dark` with exact tokens for dark & green bands. |
| Site tokens: `--container-site: 1240px;`, `--tracking-display: 0.02em;`, `--header-h: 76px;` | **Fail** | `app/globals.css` | Define missing variables in `:root`. |
| Font mappings: Montserrat (400-800) display, Quicksand (400-700) body, no monospace | **Fail** | `app/globals.css` & components | Remove all `font-mono` classes and map display/body exclusively. |
| Palette strictly tokenized: Paper, Sand, Gold, Forest Green, Night Ink | **Fail** | Multiple sections | Replace hardcoded `#FAF7EF`, `#0A0A09`, `#555046`, `#14422B`, `#C8971F`, `#E8D6A4` with tokens. |

### B. TopBar
| Rule | Pass/Fail | Where | Fix |
| :--- | :---: | :--- | :--- |
| Height `--space-7`, hairline bottom border | **Fail** | `components/layout/TopBar.tsx` | Use `h-[var(--space-7)]` and `border-b border-[var(--border)]`. |
| Icon color `--gold-600`, text Quicksand 500 `--fs-sm` `--text-body` | **Fail** | `components/layout/TopBar.tsx` | Apply tokens for color and typography. |
| Below 768px keep only phone and WhatsApp | **Pass** | `components/layout/TopBar.tsx` | Responsive visibility handles address hiding. |

### C. Header & Navigation
| Rule | Pass/Fail | Where | Fix |
| :--- | :---: | :--- | :--- |
| Sticky, `--bg-raised` at ~90% with blur, hairline bottom border | **Pass** | `components/layout/Header.tsx` | Configured with backdrop blur and border. |
| Logo = badge + CSS wordmark + sub line "AGGREGATES AND SANDS" | **Pass** | `components/layout/Header.tsx` | Implemented with image badge and CSS gradient wordmark. |
| Nav links order: Home, About, Materials, Process, Projects, Contact | **Pass** | `data/site.ts` | Nav matches exact sequence. |
| Primary CTA: "Request a Quote" with ArrowUpRight | **Pass** | `components/layout/Header.tsx` | Gold pill button with icon. |
| Drawer menu below 1024px has zero raw hex | **Fail** | `components/layout/MobileMenu.tsx` | Replace raw color codes with tokens. |

### D. Hero Section
| Rule | Pass/Fail | Where | Fix |
| :--- | :---: | :--- | :--- |
| Eyebrow "MANGALURU · COASTAL KARNATAKA" (`--gold-300`) | **Pass** | `components/sections/Hero.tsx` | Uses token color and tracking. |
| H1 three lines: "Built to Spec," / "Every Single" / "Load." (`--grad-gold` on "Load.") | **Pass** | `components/sections/Hero.tsx` | Exact typography and gradient clip. |
| Lead text (`--warm-100`, max 520px) | **Pass** | `components/sections/Hero.tsx` | Client lead paragraph. |
| Buttons: "Request a Quote" (primary) & "View Materials" (outline) | **Pass** | `components/sections/Hero.tsx` | Verified pills with token styling. |
| Bottom strip: "STRENGTH YOU CAN BUILD ON" (`--gold-300`, tracked uppercase) | **Pass** | `components/sections/Hero.tsx` | Centered tracked tagline strip. |
| Hero cards: "20mm Blue Metal" / "Manufactured Sand" with tokens | **Pass** | `components/sections/Hero.tsx` | Card badges and typography. |

### E. StagePanels (Full-Screen Sticky Stacked Panels)
| Rule | Pass/Fail | Where | Fix |
| :--- | :---: | :--- | :--- |
| Forest green background with `.theme-dark` | **Fail** | `components/sections/StagePanels.tsx` | Replace raw `#FAF7EF` overview wrapper and ensure `.theme-dark` inheritance. |
| Counter "01 / 03" top right (`--gold-300`) | **Pass** | `components/sections/StagePanel.tsx` | Top-right panel counter. |
| Watermark icon `--gold-300` at 12% opacity | **Pass** | `components/sections/StagePanel.tsx` | Lucide mountain, scale, truck icons. |
| Verbatim panel copy (1: Quarried and crushed, 2: Washed and graded, 3: Delivered, load after load) | **Pass** | `data/site.ts` & `StagePanel.tsx` | Exact client promises and copy. |
| Clean tokens: zero raw hex or raw px | **Fail** | `components/sections/StagePanel.tsx` | Replace `#0A0A09`, `#E8D6A4`, `text-[11px]` with tokens. |

### F. Audience Section
| Rule | Pass/Fail | Where | Fix |
| :--- | :---: | :--- | :--- |
| Tag chip "Who we serve" (`--accent-soft`, gold bar, `--gold-700` text) | **Fail** | `components/sections/Audience.tsx` | Replace static chip with design system token chip. |
| H2 "Five kinds of customer. One standard for all of them." (`--green-700`) | **Fail** | `components/sections/Audience.tsx` | Update headline and apply `--green-700` / `--text-strong`. |
| Right paragraph: "Whoever receives the load, the standard does not change..." | **Fail** | `components/sections/Audience.tsx` | Update description copy to match specification. |
| Five customer cards: 01 Builders, 02 Contractors, 03 RMC plants, 04 Infra & govt works, 05 Dealers | **Pass** | `components/ui/AudienceCard.tsx` | 5 customer cards present. |
| Card typography: numbers Montserrat 700 `--gold-700`, titles `--green-700`, body `--text-muted` `--fs-sm` | **Fail** | `components/ui/AudienceCard.tsx` | Replace `#555046`, `#2B2820`, `text-[15px]` with tokens. |

### G. Materials Section
| Rule | Pass/Fail | Where | Fix |
| :--- | :---: | :--- | :--- |
| Tag "Our materials", H2 "The right grade for every pour", Lead copy | **Fail** | `components/sections/Materials.tsx` | Update section header text to match exact prompt spec. |
| Use filters: All · Foundation · Slab & RCC · Masonry & plaster · Blocks & paving · Roads | **Pass** | `components/materials/UseFilter.tsx` | Tags with Lucide icons. |
| 8 circular thumbnails with active 3px `--gold-500` ring | **Pass** | `components/materials/MaterialCircle.tsx` | All 8 circles linked to authentic imagery. |
| Detail panel with spec strip SIZE · TYPE · SUPPLY ("Per MT, ex-yard [CONFIRM]") | **Pass** | `components/materials/MaterialDetail.tsx` | Spec strip and actions configured. |
| Detail panel CTAs: "Request a Quote" and "Ask on WhatsApp" | **Pass** | `components/materials/MaterialDetail.tsx` | CTAs route to quote and WhatsApp. |
| Slim CTA row directly after Materials: "Not sure which grade you need?" + "Request a Quote" + "Ask on WhatsApp" | **Fail** | `components/sections/Materials.tsx` | Add slim CTA row directly below Materials section. |
| Zero raw hex, zero raw px font sizes, zero `font-mono` | **Fail** | `components/materials/*` | Remove `font-mono` from `JobTable.tsx` and `MaterialDetail.tsx`, replace `text-[9px]` with tokens. |

### H. Project Gallery Section
| Rule | Pass/Fail | Where | Fix |
| :--- | :---: | :--- | :--- |
| 5 authentic images with appropriate captions | **Pass** | `components/sections/ProjectGallery.tsx` | Clean uploaded assets linked. |
| Design token colors and typography | **Pass** | `components/sections/ProjectGallery.tsx` | Tokenized borders, badges and typography. |

### I. Closing Band / Aggregate Grab Section
| Rule | Pass/Fail | Where | Fix |
| :--- | :---: | :--- | :--- |
| Sand/warm surface, preserved trolley hook animation | **Pass** | `components/sections/AggregateGrabStats.tsx` | Trolley hook animation on warm surface. |
| Headings and copy follow brand guidelines | **Fail** | `components/sections/AggregateGrabStats.tsx` | Tokenize all colors; update CTAs to "Request a Quote" and "Ask on WhatsApp". |
| Zero raw hex values | **Fail** | `components/sections/AggregateGrabStats.tsx` | Replace `#FAF7EF`, `#C8971F`, `#0A0A09` with tokens. |

### J. Footer & Business Cards
| Rule | Pass/Fail | Where | Fix |
| :--- | :---: | :--- | :--- |
| Footer gold background (`--gold-500`) and giant "FORTUNE" wordmark | **Pass** | `components/layout/Footer.tsx` | Preserved wordmark and gold background. |
| Left label "STRENGTH YOU CAN BUILD ON" (Montserrat 600, uppercase, `--tracking-caps`, `--ink-950`) | **Pass** | `components/layout/Footer.tsx` | Exact text and dot marker. |
| Right tag "AGGREGATES AND SANDS" (no ampersand) | **Pass** | `components/layout/Footer.tsx` | Updated to full words. |
| Brand card (centred, 92px badge, "AGGREGATES AND SANDS", "Strength You Can Build On") | **Pass** | `components/footer/BrandCard.tsx` | Clean layout with tokens. |
| Contact card (QR code 130px, Bibin Thomas, Phone, Mail, WhatsApp, Address, 44px tap targets) | **Pass** | `components/footer/ContactCard.tsx` | Live SVG QR and contact stack. |
| Zero monospace and zero green text on gold background | **Pass** | `components/layout/Footer.tsx` | Monospace purged; `--ink-950` used for contrast. |

---

## 3. Unconfirmed Claims & Voice Breaks

| Claim / Item | Current Location | Action Taken |
| :--- | :--- | :--- |
| **"IS 383:2016 Certified"** | `Hero.tsx`, `site.ts` | Retained with `// DRAFT` comment in `site.ts`. |
| **"Mining Licences & GST Registered"** | Previous Footer | **Removed** from active UI. |
| **"Lab Test Certificates"** | `site.ts`, `JobTable.tsx` | **Removed** from active UI; marked `// PLACEHOLDER` in data source. |
| **"Weighbridge Calibration & Fleet"** | Previous Footer | **Removed** from active UI. |
| **"Primary Quarry & Crushing Complex"** | Previous Footer | **Removed** from active UI. |
| **"Heavy Civil Foundations"** | Previous Audience | **Removed**; replaced with standard customer segment. |
| **"Built for Infrastructure & Commercial High-Rises"** | Previous Footer | **Removed** from active UI. |
| **"Official Desk" / "Dispatch Phone Desk"** | Previous Footer | **Removed** from active UI. |
| **Instagram Handle** | `site.ts` | Preserved as `// PLACEHOLDER: instagramUrl` until confirmed. |
| **Google Maps Business Link** | `site.ts` | Preserved with `// CONFIRM: Google Business Profile link`. |

---

## 4. Metadata, SEO, and Accessibility Checklist

- [x] `<html lang="en-IN" data-theme="light">` configured in `app/layout.tsx`.
- [x] Title: `Fortune Aggregates and Sands | Aggregates & M-Sand in Mangaluru`.
- [x] Meta description with tagline, location, and key product types.
- [x] OpenGraph metadata with badge icon `/brand/icon-badge.png`.
- [x] Favicon configured with `/brand/icon-badge.png`.
- [x] JSON-LD `LocalBusiness` schema with name, address, telephone, email.
- [x] Single H1 on page, logical heading hierarchy (H1 -> H2 -> H3).
- [x] 44px minimum tap target sizes on interactive controls and buttons.
- [x] Focus states with visible `--focus-ring`.
