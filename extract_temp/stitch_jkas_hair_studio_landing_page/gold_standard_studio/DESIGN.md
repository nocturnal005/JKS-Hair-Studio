---
name: Gold Standard Studio
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#383939'
  surface-container-lowest: '#0d0e0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#292a2a'
  surface-container-highest: '#343535'
  on-surface: '#e3e2e2'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e3e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#d0cdcd'
  on-tertiary: '#303030'
  tertiary-container: '#b4b2b2'
  on-tertiary-container: '#454545'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474746'
  background: '#121414'
  on-background: '#e3e2e2'
  surface-variant: '#343535'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style

The design system is centered on the "Gold Standard" of hair craftsmanship. It targets a discerning clientele that values precision, exclusivity, and a premium grooming experience. The visual language evokes the feeling of an upscale boutique or a private members' club.

The aesthetic follows a **Minimalist Luxury** approach. It utilizes expansive dark space (charcoal/black) to allow metallic accents and high-end photography to breathe. The design avoids clutter, opting for generous whitespace and razor-sharp alignment to reflect the precision of a professional stylist. Visual elements are characterized by high contrast, editorial-grade typography, and subtle tactile depths that feel expensive and curated.

## Colors

The palette is anchored in a deep, nocturnal spectrum to create an atmosphere of intimacy and sophistication.

- **Primary (Metallic Gold):** #D4AF37. Reserved for key calls to action, high-level branding, and essential highlights. It should be used sparingly to maintain its "precious" impact.
- **Secondary (Obsidian):** #1A1A1A. The primary background surface color. It is a warm, deep charcoal that provides more depth than pure black.
- **Tertiary (Graphite):** #262626. Used for card surfaces, input fields, and UI layering to create subtle depth against the secondary background.
- **Neutral (Silver Birch):** #A0A0A0. Used for secondary text and borders to ensure legibility without competing with the gold accents.
- **Accents:** Use gradients transitioning from #D4AF37 to #F2D472 to simulate a metallic shimmer on large buttons or icons.

## Typography

This design system employs a high-contrast typographic pairing to balance heritage and modernity.

- **Headlines (Playfair Display):** This serif font communicates elegance and the "editorial" nature of high fashion. Use it for page titles, section headers, and promotional callouts. Large display sizes should use tighter letter-spacing for a sophisticated "Vogue" aesthetic.
- **Body & UI (Manrope):** A modern, technical sans-serif that provides a clean counterpoint to the serif headings. Its high legibility ensures that service menus and booking flows feel effortless and professional.
- **Utility Text:** Navigation and small labels use `label-caps` (Manrope Bold, Uppercase) with wide letter-spacing to mimic luxury brand architectural signage.

## Layout & Spacing

The layout philosophy is a **Fixed Grid** with generous inner-container margins. On desktop, content is centered within a 1280px container to maintain a focused, high-end feel.

- **Grid:** A 12-column grid is used for desktop, collapsing to 1 column for mobile. 
- **Rhythm:** An 8px linear scale governs all spacing.
- **Negative Space:** Sections should be separated by large vertical gaps (80px to 120px) to signify distinct chapters in the brand story. 
- **Mobile Adaption:** Margins tighten to 20px on mobile, but the 8px baseline remains constant for component-level spacing (padding within buttons, gap between text blocks).

## Elevation & Depth

In this dark-mode-first system, depth is communicated through **Tonal Layering** and **Subtle Inner Glows** rather than traditional drop shadows.

- **Surfaces:** Level 0 is the Obsidian base. Level 1 (Cards, Menus) uses Graphite (#262626).
- **Glints:** To enhance the "Gold Standard" theme, elevated elements like Primary Buttons feature a very subtle 1px top-border in a lighter gold tint to simulate a light catch on a metallic edge.
- **Backdrop Blurs:** Overlays and navigation bars use a 12px blur with a 70% opacity Obsidian background to maintain context while focusing the user's attention.
- **Outlines:** Use low-contrast borders (1px solid #333333) for secondary interactive elements to keep the interface feeling structured but not heavy.

## Shapes

The design system utilizes **Sharp (0px)** roundedness. 

Sharp corners convey a sense of precision, architectural rigor, and professional discipline—echoing the "haircraft" and blade-work of the studio. Every button, card, and image frame should feature crisp 90-degree angles. This geometric rigidity distinguishes the brand from more casual, mass-market salon apps.

## Components

### Buttons
- **Primary:** Solid Gold (#D4AF37) with Obsidian text. Rectangular with no radius. Transitions to a slightly lighter gold gradient on hover.
- **Secondary:** Transparent background with a 1px Gold border. Gold text.
- **Ghost:** Obsidian background with Silver Birch text. Used for less critical actions.

### Input Fields
- Underline style (bottom border only) for a minimal look, or fully enclosed boxes with #333333 borders. Text labels should use `label-caps`.

### Cards
- Obsidian background with 1px Graphite border. No shadows. Imagery within cards should fill the width and be flush with the top and sides.

### Lists & Menus
- Service menus should use the `headline-md` for the service name and `body-md` for the description, with a gold-dotted line leading to the price to evoke a high-end physical menu.

### Imagery
- Photography should be high-contrast, often black and white or with warm, desaturated tones, focusing on texture and detail.