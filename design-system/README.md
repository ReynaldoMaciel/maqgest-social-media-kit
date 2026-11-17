> **Source of truth for the brand:** the MaqGest brand manual 2026 (`Manual-Marca-MaqGest.pptx.pdf`). Colours, typefaces and logo files below follow it.

MaqGest is the sales workspace of an agricultural machinery dealer. Salespeople browse a catalog of tractors, harvesters, sprayers and planters, put machines into a quote, and send the client a quotation file. The interface is calm and plain: a dark-green sidebar, a white working area, one green for every action, soft rounded shapes and a clean grotesque for titles and a friendly sans for text. It is used at a desk and on a phone in the field.

## Content fundamentals

- **Write like a good sales consultant:** concrete, short and sure of the numbers. Lead with the machine and the figure: “MG-7250 Tractor · 250 hp · R$ 1.249.900,00”, not “An amazing tractor for your farm!”.
- **Address the salesperson as “you”** in the app (“You have 4 quotes expiring this week”). The quotation file addresses the client formally (“Client”, “Valid until”).
- **Sentence case everywhere** — buttons, titles, labels, table headers, badges. No uppercase labels.
- **Buttons start with a verb:** “Add to quote”, “Generate quotation”, “Send to client”, “Save draft”. Never “OK” or “Submit”.
- **Numbers follow pt-BR:** `R$ 1.249.900,00`, `12.500 L`, `10,8 t`, dates `20/10/2026`. Format money with `Magest.formatCurrency()` and other numbers with `Magest.formatNumber()` (the component bundle keeps its old `Magest` namespace). Put the unit after the value, in `ink-muted`, separated by a space (`250 hp`).
- **Big money in KPIs** may be shortened: `R$ 38,6 mi`, `R$ 920 mil`. On machine cards, line items and the quotation file always write the full value with cents.
- **Machine names** are model code + type: “HX-9 Combine Harvester”. Categories are plural nouns: Tractors, Harvesters, Sprayers, Planters, Implements.
- **No emoji, no exclamation marks.** Errors say what happened and what to do: “Discount above 12% needs manager approval.”

## Colour: one green, plus black, white and greys

The brand manual defines two primary colours, **Emerald Fall** `#108652` and **Pure Black** `#000000`, and two secondary ones, **Young Green** `#97DF67` and **Full White** `#FFFFFF`. The interface is built from Emerald Fall (`green-700`) in five steps — `green-950`, `green-800`, `green-700`, `green-100`, `green-50` — and a scale of slightly green-tinted greys (`gray-900` … `gray-100`).

- **Frame:** the sidebar is `nav-bg` (`green-950`, the darkest green) with `nav-ink`; the current item is `nav-active` (the brand green) with white `nav-ink-active`. The main content area, top bar and cards are white (`bg`, `surface`). Cards are set apart by a `line` border, not by a grey page.
- **Text:** `ink` for content, `ink-muted` for secondary text, units, hints and icons. Never set text in `line` or `line-strong`.
- **Green means action or “good”.** `primary` (with `on-primary`) is the main button, links, checked boxes, the current step, the active tab, focus, and the Available / Accepted states. One primary button per area.
- **Soft fills:** `surface-sunken` (light grey) behind table headers, totals, search and spec cells; `surface-hover` on hover; `surface-selected` / `primary-soft` (light green) for selected rows and soft highlights. Text on a light-green fill is `green-800`, because the brand green on `green-100` is only 4.0:1.
- **Black and Young Green are for brand surfaces**, not for the app frame: marketing pages, social posts, slides and printed material. Young Green is an accent on `black` or `green-950` only (highlighted words, rules, small marks); it never sits on white or on Emerald Fall.
- **Amber and red are functional only.** `warning` (Reserved, Expiring) and `danger` (errors, Rejected, Discontinued, destructive buttons) appear only in badges, field errors and confirmations — never as decoration. Neutral states (Draft, Sent, On order) are grey `info`.
- **Borders:** `line` is a hairline between rows and around cards; inputs, selects, checkboxes and secondary buttons use `line-strong` (3:1).
- **Charts** use the same green in steps: `chart-1` (brand green) for the main series, `chart-2` and `chart-3` lighter greens, `chart-4` grey for baselines. Label series directly.
- **No orange.** The old orange logo is retired; the logo is Emerald Fall, white or black.
- **The quotation file is always light** and uses only theme-invariant tokens: `paper` and the palette.

Every text token's note lists the grounds it reads on; all those pairs pass 4.5:1 in both themes.

## Typography

Two families, as in the brand manual:

- **Helvetica Now Display** (`display`) — titles, highlights and calls to action: `display-xl`, `display`, `h1`–`h3`, `kpi` and `price`. It is a commercial font and is not bundled; install it where you have a licence. Until then the stack falls back to Helvetica Neue, Helvetica and Arial.
- **Be Vietnam Pro** (`sans`, files in `fonts/BeVietnamPro-*.woff2`, OFL) — supporting text, paragraphs, captions, labels and buttons.

The logo keeps its own lettering; never retype "Maqgest" in a font, use the logo files.

- `display-xl` 40/48 800 — the quotation file title, login and empty states. `display` 28/36 700 — page titles from 768px.
- `h1` 24/32 (page title on mobile, detail headings), `h2` 19/26 (sections), `h3` 16/24 (card and dialog titles, machine names) — all 700.
- `body` 15/24 is the default; `body-strong` 600 for client names and the first column of tables; `body-sm` 13/20 for metadata and helper text; `caption` 12/16 for footnotes and axis labels.
- `label` 13/18 600, sentence case — field labels, table headers, spec names, nav section titles.
- `button` 15/20 600 (13px in small buttons).
- `kpi` 30/36 700 and `price` 18/24 700 for figures. **All numbers use tabular figures** (`font-variant-numeric: tabular-nums`, or the `mg-num` class) so columns of prices line up.
- Use weights 400, 500, 600, 700 and 800 only. Display titles look best at 700 with slightly tight tracking (−0.01 to −0.02em).

## Shape: soft and rounded

- **Corners are generous:** `radius-sm` (6px) for checkboxes and small controls, `radius-md` (10px) for buttons, inputs and nav items, `radius-lg` (14px) for cards, tables and dialogs. `radius-full` makes badges, counts, avatars, step dots and the search field into pills and circles.
- **Elevation is barely there:** cards are a `line` border plus `shadow-sm`; hover and menus `shadow-md`; dialogs and the mobile drawer `shadow-lg` over `overlay`. No gradients, no patterns, no glass.
- Icons in stat cards sit in soft green circles; machine photos sit inset in a rounded frame inside the card.

## Layout and responsive behaviour

Mobile-first, on a 4px grid (`space-1` … `space-12`). Breakpoints `bp-sm` 640, `bp-md` 768, `bp-lg` 1024, `bp-xl` 1280 (copy the numbers into media queries).

| width | navigation | page gutter | catalog grid | tables | quote builder |
| --- | --- | --- | --- | --- | --- |
| < 768 | white top bar with green M symbol + green drawer (`AppShell`) | `space-4` | 1 col (2 from 640) | stacked cards | summary below the steps, sticky footer button at `control-lg` |
| 768–1023 | green icon rail `sidebar-rail` with the white M | `space-6` | 2 cols | table | summary below |
| ≥ 1024 | green sidebar `sidebar-width` with the white wordmark | `space-8` | 3 cols (4 from 1280) | table | summary as a sticky right column (`z-sticky`) |

- Content never exceeds `content-max`. The top bar is white, `topbar-height`, with a hairline below, and sticky.
- Card padding is `space-4` on mobile and `space-5` from 768px; gaps between cards `space-4`, between sections `space-8`. Let white space do the separating.
- Controls are `control-md` (40px); `control-sm` only in dense desktop toolbars and table rows; anything tapped on a phone is at least `control-lg` (48px).

## Interaction states

- Hover darkens a green fill (`primary-hover`) or adds `surface-hover` (a whisper of green) behind quiet controls and rows.
- **Focus** is always visible: 2px solid `focus`, 2px offset (`nav-ink` inside the sidebar). Inputs also turn their border green.
- Disabled is 45–50% opacity and `not-allowed`; never hide a disabled “Add to quote” — show why (e.g. Discontinued badge).
- Selected rows and machines already in the quote use `surface-selected` or a green outline.
- Motion is short (150–200ms) colour and position transitions only; respect `prefers-reduced-motion`.

## Iconography

Icons are **Lucide** outline icons (ISC licence) at 2px stroke with round caps and joins — the brand supplied no icon set, and their rounded ends sit well next to Be Vietnam Pro. Use the `Icon` component (`name`, `size`); it draws in `currentColor`, so colour it with the text beside it: `ink-muted` next to labels, `on-primary` inside a primary button, `primary` in a soft green circle. Sizes: 14 in badges and specs, 16–18 in buttons and fields, 20 in navigation, 32–48 in empty states and image placeholders. Machine categories have fixed icons: Tractors `tractor`, Harvesters `wheat`, Sprayers `droplets`, Planters `sprout`, Implements / accessories `package`, Logistics `truck`. No emoji, no filled icons.

## Logo

Use the files in `assets/brand/`, never a redraw. There are two forms: the **horizontal** logo (symbol + "aqgest" lettering) and the **symbol** alone (the M).

| Ground | Horizontal | Symbol |
| --- | --- | --- |
| Light (white, light grey) | `maqgest-logo-verde.svg` | `maqgest-icone-verde.svg` |
| Brand green (`green-700`) or dark (`black`, `green-950`) | `maqgest-logo-branca.svg` | `maqgest-icone-branca.svg` |
| One-colour print, fax, stamps | `maqgest-logo-preta.svg` | `maqgest-icone-preta.svg` |

PNG copies and a vertical version (`maqgest-vertical-*.png`) sit next to them for tools that don't take SVG.

- **Sidebar:** white horizontal logo on `nav-bg`; the icon rail uses the white symbol.
- **White surfaces** (mobile top bar, login, quotation file): green horizontal logo, or the green symbol where space is tight.
- The symbol alone is for app icons, social avatars, favicons and merchandise; it can also be used very large and cropped as a graphic on brand surfaces, as in the manual's billboard.
- Keep clear space of at least the height of the "a"; minimum height 24px on screen, 12mm in print. Don't recolour outside the three versions, stretch, outline or add effects.
- The old orange files (`magest-*.png`) are retired and kept only in `assets/brand/obsoleto/`.

## Imagery

Machine photos are product shots: the whole machine, three-quarter front view facing right, on a plain light background, 4:3, at least 1200px wide. Never crop the cab or the implement. Until a photo exists, `MachineCard` shows the category icon on light grey — don't use stock farm scenes as stand-ins.

## Screens

- **Dashboard:** `PageHeader` + a row of `StatCard`s (open quotations, pipeline value, win rate, expiring soon) + recent quotes in a `DataTable`.
- **Machine catalog:** `PageHeader`, a filter column of `Checkbox`es with counts (a drawer below 1024px), `Tabs` or a grid/list toggle, a `MachineCard` grid or `DataTable` list. “Add to quote” is the card's only primary button.
- **Machine detail:** photo, `h1` model name, `price`, `StatusBadge`, a `SpecList` with 3–4 columns, and “Add to quote”.
- **Quote builder:** `Stepper` (Client → Machines → Conditions → Review & send), forms with `TextField` and `Select`, and `QuoteSummary` with `QuantityStepper`s. The primary “Generate quotation” button lives in the summary.
- **Quotation file:** `QuoteDocument`, an A4 page that prints and exports to PDF exactly as shown: green horizontal logo, a pale-green title panel with the quote number and dates, client and seller, line items under a dark-green header, commercial conditions (payment, delivery, warranty, freight) and totals with the grand total in brand green.

## Using the components

Components are in `components/bundle.js` as `window.Magest` (React 18 on the page, `tokens.css` and `components/bundle.css` loaded). Pass logo images to `Sidebar`, `TopBar` and `QuoteDocument` by URL. Class names are prefixed `mg-`; don't restyle them with raw colours — change tokens instead.
