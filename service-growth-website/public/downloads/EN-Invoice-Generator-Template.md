# 🧾 Professional Invoice Generator — AI Prompt Template

### By ServiceGrowth.ai | AI Tools for Service Businesses

---

## 📖 What Is This?

This is an AI prompt template. You paste it into **Claude** (a free AI tool), fill in your business details, and it instantly generates a premium, interactive invoice for your company — with glassmorphism effects, dark/light mode, logo upload, and Print-to-PDF.

**No coding. No design skills. No subscriptions.** Just copy, paste, fill in your info, and download.

---

## 🤖 Step 1: Get Access to Claude (FREE)

1. Go to **claude.ai** on your computer or phone
2. Click **"Sign Up"** — it's free (you can use Google, email, or Apple to sign up)
3. Once you're logged in, you'll see a chat box — that's where you paste the prompt below

> **What is Claude?** It's an AI assistant made by Anthropic. Think of it like ChatGPT, but it's really good at generating code and documents. The free plan gives you enough messages to generate your invoice.

---

## ✂️ Step 2: Copy the Prompt Below

Copy **EVERYTHING** inside the box below — from the first line to the last line.

~~~
You are a senior frontend developer. Build me a single self-contained HTML file (NOT React, NOT JSX — pure HTML/CSS/JS) that is a premium glassmorphism invoice generator. This must work by simply opening the HTML file in a browser — no build tools, no npm, no frameworks.

<business_info>
Company Name: [YOUR COMPANY NAME IN ALL CAPS — e.g. "APEX"]
Company Subtitle: [YOUR SUBTITLE IN ALL CAPS — e.g. "ROOFING & RESTORATION"]
Address Line 1: [YOUR ADDRESS — e.g. "8900 Westheimer Rd"]
Address Line 2: [CITY, STATE, ZIP — e.g. "Houston, TX 77063"]
Country: [e.g. "United States"]
Phone: [YOUR PHONE — e.g. "(713) 555-0234"]
Email: [YOUR EMAIL — e.g. "info@apexroofing.com"]
Website: [YOUR WEBSITE — e.g. "www.apexroofing.com"]
</business_info>

<default_services>
These are my typical services/phases of work, in order. Each has a default price:

1. [SERVICE — e.g. "Initial Inspection & Assessment"] — Price: [e.g. 0]
2. [SERVICE — e.g. "Design & Material Selection"] — Price: [e.g. 1500]
3. [SERVICE — e.g. "Material Procurement & Delivery"] — Price: [e.g. 4800]
4. [SERVICE — e.g. "Tear-Off & Preparation"] — Price: [e.g. 3200]
5. [SERVICE — e.g. "Installation"] — Price: [e.g. 12000]
6. [SERVICE — e.g. "Cleanup & Final Inspection"] — Price: [e.g. 500]

(Add or remove lines as needed.)
</default_services>

<process_steps>
For the "Our Process" section below the invoice, list each phase:

1. [TITLE — e.g. "Inspection"] — [ONE SENTENCE — e.g. "Thorough on-site roof assessment and damage documentation."]
2. [TITLE — e.g. "Planning"] — [ONE SENTENCE — e.g. "Material selection, timeline, and detailed project proposal."]
3. [TITLE — e.g. "Procurement"] — [ONE SENTENCE — e.g. "Premium materials sourced and delivered to the job site."]
4. [TITLE — e.g. "Tear-Off"] — [ONE SENTENCE — e.g. "Old roofing removed with full debris cleanup."]
5. [TITLE — e.g. "Installation"] — [ONE SENTENCE — e.g. "Expert crew installs your new roof to manufacturer specs."]
6. [TITLE — e.g. "Walkthrough"] — [ONE SENTENCE — e.g. "Final inspection with client and warranty documentation."]
</process_steps>

<payment_info>
Payment methods and details:
- [e.g. "Zelle: payments@apexroofing.com"]
- [e.g. "Check: Payable to Apex Roofing Solutions LLC"]
- [e.g. "Venmo: @ApexRoofing"]

Tax rate: [e.g. "7.5" for 7.5%, or "0" for no tax]
</payment_info>

<sample_client>
Default example client shown on the invoice:
Client Name: [e.g. "Sarah Johnson"]
Client Address Line 1: [e.g. "2200 Elm Creek Dr"]
Client Address Line 2: [e.g. "Katy, TX 77494"]
Client Country: [e.g. "USA"]
</sample_client>

<design_spec>
This is a STRICT design specification. Follow it exactly.

FILE FORMAT:
- Single self-contained .html file
- No React, no JSX, no npm — pure HTML + CSS + vanilla JavaScript
- Load Google Font 'Nunito Sans' via <link> tag (weights: 300,400,500,600,700,800,900)
- Must work by simply opening the file in a browser

FONT:
- 'Nunito Sans' for EVERYTHING — it's a rounded, modern sans-serif with soft terminals
- No serif fonts, no pointy/angular fonts anywhere
- Company name: 48px, weight 900, letter-spacing -0.5px
- Subtitle: 11px, weight 600, letter-spacing 5px, uppercase
- Section labels: 9.5px, weight 700, letter-spacing 1.8px, uppercase
- Body text: 12-13px
- Table header: 9px, weight 800, letter-spacing 1.8px, uppercase

COLOR — BLACK AND CREAM ONLY, controlled via CSS custom properties on :root (dark) and .cream class (light):
- DARK MODE (default):
  --bg: #0A0A0A; --glass: rgba(18,18,18,0.55); --glass-border: rgba(255,255,255,0.06); --glass-hi: rgba(255,255,255,0.03); --tx: #E8E5DF; --tx2: #8A8780; --stripe: rgba(255,255,255,0.015); --foot: rgba(12,12,12,0.6); --inp: rgba(255,255,255,0.04); --accent: #E8E5DF; --orb1: rgba(120,100,60,0.12); --orb2: rgba(80,70,50,0.08); --orb3: rgba(60,55,45,0.1); --grid: rgba(255,255,255,0.02); --tool: rgba(16,16,16,0.7); --tbl-rule: rgba(232,229,223,0.25)
- CREAM MODE (.cream class on body):
  --bg: #E4E0D7; --glass: rgba(245,243,237,0.5); --glass-border: rgba(0,0,0,0.06); --glass-hi: rgba(255,255,255,0.5); --tx: #1A1916; --tx2: #7A776F; --stripe: rgba(0,0,0,0.018); --foot: rgba(230,227,220,0.6); --inp: rgba(0,0,0,0.03); --accent: #C13B2A; --orb1: rgba(193,59,42,0.07); --orb2: rgba(180,160,120,0.1); --orb3: rgba(160,140,100,0.08); --grid: rgba(0,0,0,0.03); --tool: rgba(245,243,237,0.65); --tbl-rule: rgba(26,25,22,0.2)

BACKGROUND EFFECTS (behind the invoice card):
1. GRID PATTERN — 80px grid lines using --grid color, fixed, full viewport
2. THREE FLOATING ORBS — Large radial gradient circles (500-600px), --orb colors, blur(80-100px), slow CSS keyframe drift animations (18s, 22s, 15s infinite)
3. GRAIN TEXTURE — SVG feTurbulence noise overlay, fixed, low opacity
4. DIAGONAL LINES — Faint SVG lines crossing viewport

INVOICE CARD — GLASSMORPHISM:
- background: var(--glass); backdrop-filter: blur(40px) saturate(1.5); border: 1px solid var(--glass-border); border-radius: 16px
- box-shadow: 0 24px 80px rgba(0,0,0,0.4), inset 0 1px 0 var(--glass-hi) for dark; lighter for cream
- Max-width 820px centered
- SHIMMER: gradient sweep across top 120px, 8s infinite animation
- EDGE HIGHLIGHT: 1px gradient line at top
- Fade-up entrance animation

TOOLBAR: Frosted glass bar above invoice with: "Invoice Generator" label, "Upload Logo" button, "Edit" toggle, theme toggle (sun/moon), "Print / PDF" button. All buttons glass-styled.

LAYOUT inside the card, in this exact order:
1. HEADER: Logo (hidden until uploaded, 56x56 glass-framed) + company name (48px 900wt) + subtitle. "INVOICE" label right side.
2. COMPANY INFO: Address left, contact right, small text.
3. META BAND: 4-column — Due Amount, Due Date, Invoice #, Invoice Date. Tiny uppercase labels. Glass-border top/bottom.
4. CLIENT ROW: "Invoice To" left, "Shipped To" right.
5. SERVICES TABLE: #, Description, Qty, Rate, Discount, Tax, Total. 2px header border, 1px row borders, alternating stripes. Edit mode: inputs + delete/add buttons.
6. PAYMENT + TOTALS: Payment method + amount in words left. Sub/Tax/Total right with 2px border on total.
7. SIGNATURES: "Accepted By" left, "Signature" right with lines.
8. FOOTER: Frosted glass. Payment info left. Company name + logo small right.

BELOW INVOICE: "Our Process" with 3-column grid of glass cards — step number (28px light), title (bold), description (muted).

FUNCTIONALITY: Dark/cream toggle via .cream class + CSS vars. Logo upload to header+footer. Edit mode with contenteditable + table inputs. Auto-recalculate totals. Number-to-words. Print/PDF via window.print() with clean print CSS.

MOBILE: Below 700px stack layout, 2-col meta, 1-col process cards.
</design_spec>
~~~

---

## ✂️ STOP COPYING HERE ✂️

---

## 📋 Step 3: Paste It Into Claude

1. Open **claude.ai**
2. Click into the chat box
3. **Paste everything** you just copied
4. **Replace every `[BRACKET FIELD]`** with your real info — company name, address, services, etc.
5. Press **Enter**
6. Wait about 30-60 seconds — Claude will generate your complete invoice

---

## 📥 Step 4: Download and Use It

1. Claude will show you an **HTML file** — click the **download button** to save it
2. **Open the file** in any browser (Chrome, Safari, Edge)
3. Click **"Upload Logo"** to add your logo image
4. Click **"Edit"** to change client name, dates, services, prices
5. Toggle **☀/☽** to switch between dark and cream themes
6. Click **"Print / PDF"** to save a clean PDF — send that to your client

---

## 💡 Example: Filled-In Version (Roofing Company)

~~~
Company Name: APEX
Company Subtitle: ROOFING & RESTORATION
Address Line 1: 8900 Westheimer Rd
Address Line 2: Houston, TX 77063
Country: United States
Phone: (713) 555-0234
Email: hello@apexroofing.com
Website: www.apexroofing.com

Services:
1. Free Roof Inspection — Price: 0
2. Estimate & Material Selection — Price: 0
3. Insurance Claim Assistance — Price: 500
4. Material Delivery — Price: 3200
5. Roof Installation — Price: 14500
6. Final Walkthrough & Warranty — Price: 0

Process Steps:
1. Inspection — Thorough on-site roof assessment and damage documentation.
2. Planning — Material selection, timeline, and detailed project proposal.
3. Claims — Insurance paperwork handled and filed on your behalf.
4. Procurement — Premium materials sourced and delivered to job site.
5. Installation — Expert crew installs your new roof to manufacturer specs.
6. Walkthrough — Final inspection with client and warranty documentation.

Payment:
- Zelle: payments@apexroofing.com
- Check: Payable to Apex Roofing & Restoration LLC
Tax rate: 8.25

Sample Client:
Sarah Johnson, 2200 Elm Creek Dr, Katy, TX 77494, USA
~~~

---

## 🏗️ Works for Any Service Business

| Industry | Example Services |
|----------|-----------------|
| Paving / Hardscaping | Consultation, Design, Material Procurement, Installation, Sealing, Walkthrough |
| Roofing | Inspection, Planning, Insurance Claims, Material Delivery, Installation, Walkthrough |
| Cleaning | Assessment, Quote, Deep Clean, Regular Service, Quality Check, Follow-Up |
| Landscaping | Site Survey, Design, Plant Sourcing, Installation, Irrigation, Maintenance |
| Plumbing | Diagnostic, Quote, Parts Ordering, Repair/Install, Testing, Warranty |
| Painting | Color Consultation, Surface Prep, Priming, Painting, Touch-Up, Final Walk |
| HVAC | System Inspection, Load Calculation, Equipment Selection, Installation, Testing, Maintenance Plan |
| Electrical | Safety Inspection, Design, Permits, Wiring/Install, Testing, Certification |
| Auto Detailing | Assessment, Exterior Wash, Paint Correction, Interior Detail, Ceramic Coat, Final Inspection |
| Pool Service | Inspection, Water Test, Chemical Balance, Equipment Check, Cleaning, Report |

---

## 🔄 Want Changes After Generating?

Just type in the same Claude conversation:

- *"Make the company name bigger"*
- *"Change the tax rate to 10%"*
- *"Add a 7th service called 'Annual Maintenance Plan' at $300"*
- *"Remove the process section"*
- *"Translate everything to Portuguese"*
- *"Add a notes/terms section before the signatures"*

---

**Built with 🤖 by ServiceGrowth.ai** — AI-powered growth for service businesses.

📱 DM @matthews.ai on Instagram | 🌐 servicegrowth.ai
