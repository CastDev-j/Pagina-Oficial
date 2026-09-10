---
name: Y2K Neobrutalist OS / Web Blueprint
colors:
  surface: '#fcfaf6'
  surface-dim: '#eae5db'
  surface-bright: '#ffffff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f4ed'
  surface-container: '#f1ede4'
  surface-container-high: '#ebe5db'
  surface-container-highest: '#e2dcd0'
  on-surface: '#000000'
  on-surface-variant: '#2c2b28'
  inverse-surface: '#121212'
  inverse-on-surface: '#fcfaf6'
  outline: '#000000'
  outline-variant: '#e2dcd0'
  grid-line: '#e6ded0'
  surface-tint: '#008080'
  primary: '#008080'
  on-primary: '#ffffff'
  primary-container: '#006565'
  on-primary-container: '#e3fffe'
  inverse-primary: '#76d6d5'
  secondary: '#ffde00'
  on-secondary: '#000000'
  secondary-container: '#ffe600'
  on-secondary-container: '#121212'
  tertiary: '#1b3bff'
  on-tertiary: '#ffffff'
  tertiary-container: '#4a60ff'
  on-tertiary-container: '#fbf8ff'
  error: '#ff2b44'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#93f2f2'
  primary-fixed-dim: '#76d6d5'
  on-primary-fixed: '#002020'
  on-primary-fixed-variant: '#004f4f'
  secondary-fixed: '#ffde00'
  secondary-fixed-dim: '#dec800'
  on-secondary-fixed: '#000000'
  on-secondary-fixed-variant: '#504700'
  tertiary-fixed: '#dfe0ff'
  tertiary-fixed-dim: '#bcc2ff'
  on-tertiary-fixed: '#000c62'
  on-tertiary-fixed-variant: '#0026d6'
  background: '#fcfaf6'
  on-background: '#000000'
  surface-variant: '#f1ede4'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 24px
  window-title:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  code-lg:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 22px
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 18px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.05em
  metric-counter:
    fontFamily: JetBrains Mono
    fontSize: 28px
    fontWeight: '800'
    lineHeight: 32px
    letterSpacing: -0.03em
spacing:
  space-2xs: 2px
  space-xs: 4px
  space-sm: 8px
  space-md: 12px
  space-base: 16px
  space-lg: 24px
  space-xl: 32px
  space-2xl: 48px
  gutter-desktop: 16px
  margin-desktop: 24px
  gutter-mobile: 12px
  margin-mobile: 12px
---

## Brand & Style

This design system synthesizes the nostalgic, pragmatic mechanical architecture of late-90s desktop operating systems (specifically the utilitarian ergonomics of Windows 98) with modern, high-density developer operations, technical blueprints, and Neobrutalism. 

Targeted at software engineers, forward-thinking B2B companies, and platform decision makers, the aesthetic conveys mechanical determinism, zero-latency feedback, and tactile certainty. The UI rejects the frictionless, low-contrast, overly blurred tropes of contemporary enterprise SaaS. Instead, it leans into hard edges, mechanical drop-shadows, technical grid canvases (blueprint background), dense modular control panels, high-contrast states, and diagnostic chromatic accents. The emotional impression is equal parts nostalgic desktop command center and high-performance, custom-crafted digital engineering studio.

## Colors

The palette operates under strict hierarchical distribution to preserve operational legibility while maintaining sharp retro-computing identity.

### Structural Base
- **Technical Canvas / Blueprint (`#FCFAF6` con grid `#E6DED0`)**: Superficie principal del canvas web estructurada con cuadrícula milimétrica sutil, simulando papel técnico / workbench.
- **Chassis Gray (`#D4D0C8`)**: Foundation color for OS chrome, window wrappers, toolbars, control ribbons, and secondary containers.
- **Pure White (`#FFFFFF`)**: Interior content surfaces, interactive cards, editable inputs, and tabular data bodies.
- **Pixel Black (`#000000` / `#121212`)**: High-contrast text, 2px/3px structural borders, dividers, icon strokes, and hard drop-shadows.

Together, **Technical Canvas**, **Pure White** and **Chassis Gray** must occupy at least 65% of visible screen real estate.

### Identity & Semantic Accents
- **Action Yellow (`#FFDE00` / `#FFE600`)**: Primary high-priority call-to-action buttons ("Solicitar Cotización"), badges, and elevated attention triggers.
- **Win Teal (`#008080`)**: Secondary branding badge ("AGENCIA B2B"), system anchors, and active status indicators.
- **Hyper Blue (`#1B3BFF`)**: Interactive variations, focus rings, text selections, and CI/CD / software labs nodes.
- **Terminal Green (`#00E065`)**: Deployment operational states, test passing markers, live terminal prompts, and active daemon statuses.
- **Error Red (`#FF2B44`)**: Critical failures, pipeline terminations, destructive confirmations, and hotfix alerts.

## Typography

Typography establishes an intentional contrast between contemporary Swiss-style readability and rigid system-level telemetry.

- **Primary Interface Body & Headings (Plus Jakarta Sans)**: Delivers geometric clarity and structural modernity. Used for overarching titles (H1 display en mayúsculas sólidas), section navigation, conversational labels, and long-form analytical documentation.
- **Monospaced Data & System Telemetry (JetBrains Mono)**: Handles all technical representations—terminal streams, raw deployment logs, timestamps, git commits, metrics, memory usage, query builders, footer credits, and environment configurations.
- **Window Titles & System Meta**: Always rendered in compact, high-legibility formats with uppercase or strict title casing to reinforce desktop window architecture.

## Layout & Spacing

Layout adheres to a dense, modular 8pt/4pt hybrid coordinate system reminiscent of multi-window developer tools, blueprint grids, and tiled desktop environments.

### Workspace Shell
- **Desktop Background Canvas**: Default `#FCFAF6` technical blueprint with 24px subtle grid lines (`#E6DED0`), or fallback `#008080` (Win Teal) OS desktop canvas for terminal modules.
- **Hero & Card Units**: Components, consoles, and value props are organized inside floating or tiled discrete cards featuring sharp 2px solid black borders and 4px hard black shadows.
- **Grid Architecture**: Standard 12-column fluid grid within main execution panes. Gutters stay compact (`16px` on desktop, `12px` on mobile/tablet) to retain high information density.

### Breakpoints & Adaptive Flow
- **Desktop (>1024px)**: Multi-panel split architecture. Side-by-side terminal, component inspector, and live metrics panels.
- **Tablet (768px - 1023px)**: Side panels collapse into tabbed stacked tool windows; title bars remain persistent.
- **Mobile (<767px)**: Full-bleed modular cards with 12px viewport margins; multi-column tools collapse into single-column vertical accordions with horizontal tab strips.

## Elevation & Depth

This system strictly rejects blurred shadows, translucent glassmorphism, and subtle ambient gradients. Depth is tactile, physical, and mechanical:

1. **Hard Pixel Drop-Shadows**:
   - **Interactive Elements & Cards**: `box-shadow: 4px 4px 0px #121212`.
   - **Hover / Active Transition**: Buttons physically depress upon press, transforming to `transform: translate(2px, 2px); box-shadow: 2px 2px 0px #121212`, or fully depressed: `transform: translate(4px, 4px); box-shadow: 0px 0px 0px #121212`.
   - **Modals, Floating Windows & Overlays**: `box-shadow: 6px 6px 0px #121212`.
2. **Beveled Chassis Borders**:
   - Primary elements leverage `border: 2px solid #121212` or `3px solid #121212`.
   - Inner sunken panels (terminal wells, code blocks, form inputs) use an inset effect created with `border: 2px solid #121212` plus a top-left dark inset or contrasting `#FFFFFF` bottom-right highlight to reference classic Windows 98 beveled geometry within a flat neobrutalist context.
3. **Z-Index Layering**:
   - `z-0`: Win Teal desktop base.
   - `z-10`: Anchored window panels.
   - `z-20`: Active/focused window panel (distinguished by an active `#008080` or `#1B3BFF` title bar).
   - `z-50`: Context menus, modal dialogues, and command palettes (`#121212` 6px solid offset).

## Shapes

The shape system is strictly sharp (`roundedness: 0`). 

- **Corner Radii**: Exactly `0px` across all structural UI layers (windows, buttons, inputs, badges, modals, tooltips).
- **Strokes & Separators**: Consistent, uninterrupted 2px borders for standard elements and 3px borders for focal windows, cards, and modal dialogs.
- **Geometric Purity**: All components embrace rigid rectangular geometry, mirroring vintage GUI monitors and CRT displays.

## Components

### 1. Windows & Frames
- **Container**: Chassis Gray (`#D4D0C8`) background, `3px solid #121212` border, `6px 6px 0px #121212` hard shadow.
- **Title Bar**: Persistent bar across top (`height: 28px` to `32px`). Active state: solid `#008080` or `#1B3BFF` background with `#FFFFFF` text. Inactive state: `#808080` background with `#D4D0C8` text.
- **Window Controls**: Triple-action cluster on top-right: Minimize (`_`), Maximize (`□`), and Close (`✕`). Each button is `#D4D0C8`, `2px solid #121212`, `18px x 18px` with bold centered iconography and a 1px solid active inset.

### 2. Buttons
- **Primary CTA (Action Yellow)**: Background `#FFDE00` (o `#FFE600`), text `#000000`, `border: 2px solid #000000`, `box-shadow: 4px 4px 0px #000000`. Hover translates by `(2px, 2px)` with `box-shadow: 2px 2px 0px #000000`. Active fully translates `(4px, 4px)` with no shadow. Con flecha indicadora (`→`).
- **Secondary CTA (Light Canvas)**: Background `#FFFFFF`, text `#000000`, `border: 2px solid #000000`, `box-shadow: 4px 4px 0px #000000`. Utilizado para acciones como *"Ver Portafolio"*.
- **Tertiary / Hyper Blue**: Background `#1B3BFF`, text `#FFFFFF`, mismo sistema de borde y hard shadow.
- **Classic System / Chassis Button**: Background `#D4D0C8`, text `#121212`, `border: 2px solid #121212`.
- **Destructive**: Background `#FF2B44`, text `#FFFFFF`, `border: 2px solid #121212`.

### 2.1. Feature & Value Prop Cards
- **Structure**: Surface `#FFFFFF`, `border: 2px solid #000000`, `box-shadow: 4px 4px 0px #000000`.
- **Content**: Icono cuadrado enmarcado (acento `#008080`, `#FFDE00` o `#000000`), título en peso Bold y descripción técnica concisa. Layout horizontal en desktop / stacked en mobile.

### 3. Terminal & Code Log Viewer
- **Canvas**: Background `#121212`, text `#00E065`, `border: 2px solid #121212`.
- **Prompt**: Displays user/branch/commit using `JetBrains Mono` (`label-mono`), with command inputs preceded by a solid terminal-green caret (`█`).
- **Log Levels**: Colored pills (`[INFO]` `#1B3BFF`, `[WARN]` `#FFE600` on black, `[ERR]` `#FF2B44`, `[OK]` `#00E065`).

### 4. Inputs & Form Fields
- **Text Inputs**: Background `#FFFFFF`, text `#121212`, `border: 2px solid #121212`, `box-shadow: inset 2px 2px 0px rgba(0,0,0,0.15)`.
- **Focus State**: `border: 2px solid #1B3BFF`, `outline: 2px solid #FFE600`.
- **Checkboxes & Radios**: Custom square inputs (`border: 2px solid #121212`, background `#FFFFFF`). Checked state features a solid square `#121212` fill or high-contrast tick mark.

### 5. Beveled Tabs & Navigation
- **Tabs**: Positioned along window content tops. Inactive tabs: `#D4D0C8` background, `border: 2px solid #121212`, bottom border intact. Active tab: `#FFFFFF` background, sits 2px taller, `border: 2px solid #121212` with bottom border removed to visually merge with the content canvas.

### 6. Badges & Metric Chips
- **Chips**: Hard `border: 2px solid #121212`, zero border-radius, uppercase `JetBrains Mono` text (`label-mono`), `box-shadow: 2px 2px 0px #121212`. Backgrounds dynamically map to status (`#00E065` for operational/passed, `#FFE600` for building/evaluating, `#FF2B44` for halted/failed).