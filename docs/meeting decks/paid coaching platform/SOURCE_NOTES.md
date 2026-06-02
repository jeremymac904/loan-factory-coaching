# Source Notes

This deck uses only the current paid coaching section of the LO Development Platform.

## Primary Source Files

- `src/data/apex.ts`
  - `apexTiers`
  - LO Mastery price, tagline, description, best-for copy, and included benefits
  - Loan Factory Alliance price, tagline, description, best-for copy, and included benefits
  - Coaching certification data and compliance note
- `src/app/apex-advisor/page.tsx`
  - Coaching landing page language
  - Paid coaching positioning
  - Member tier comparison language
  - Member area, certifications, calendar, leaderboards, trackers, and assessments cards
- `src/app/lo-mastery-coaching/page.tsx`
  - LO Mastery page title, body copy, benefits section, and pricing note
- `src/app/loan-factory-alliance/page.tsx`
  - Loan Factory Alliance page title, body copy, benefits section, and pricing note
- `src/app/apex-advisor-pro/page.tsx`
  - Alliance upgrade language
  - Advanced coaching cadence, Breakfast Club, advanced certifications, and priority accountability copy
- `src/app/apex-member-area/page.tsx`
  - Member area copy
  - Coaching rhythm
  - Resource library
  - Trackers and scorecards
  - Membership path language
- `src/app/apex-calendar/page.tsx`
  - Confirmed coaching cadence
  - Exact dates/times pending through the member communication channel
- `src/app/apex-certifications/page.tsx`
  - Certification names, positioning, requirements, and eligibility
- `src/app/apex-leaderboards/page.tsx`
  - Leaderboard positioning and results-vary language

## Brand And Layout Sources

- `tailwind.config.ts`
  - Loan Factory color palette and font stack
- `src/app/globals.css`
  - `container-page`, `card`, `btn-primary`, `btn-secondary`, `metal-title`, and display typography conventions
- `src/components/PageHero.tsx`
  - Dark hero treatment and background imagery pattern
- `src/components/SectionHeading.tsx`
  - Eyebrow, title, and description hierarchy
- `public/images/brand/LoanFactory_Logo_Name_orangeblack.png`
  - Main Loan Factory brand logo
- `public/logos/lo-development/lo-mastery.png`
  - LO Mastery logo asset
- `public/logos/lo-development/loan-factory-alliance.png`
  - Loan Factory Alliance logo asset
- `public/media/dark-hero-background.png`
  - Dark premium hero background
- `public/media/light-hero-background.png`
  - Light section background

## Accuracy Notes

- The deck uses the site-confirmed prices: LO Mastery at `$249 per month` and Loan Factory Alliance at `$449 per month`.
- The site also says pricing is pending final approval before public rollout. That remains a TBD item in the deck.
- Exact call dates and times are not shown on the site. The coaching calendar says times are shared in the member channel.
- Any item not confirmed in the paid coaching section is either omitted or marked TBD.
