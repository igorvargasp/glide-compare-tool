import { LessonSection } from "./lessonSections";

export const oldSnackShopLessonSections: LessonSection[] = [
  {
    title: "Lesson Details",
    defaultOpen: true,
    content: `| Field | Value |
|-------|-------|
| **Grade Level** | 8th Grade |
| **Subject** | Math / Economics |
| **State** | Georgia |
| **Duration** | 60 minutes |`,
  },
  {
    title: "Learning Objectives",
    content: `- Design a product mix and set prices to meet a stated budget and profit goal, modeling revenue, cost, and profit (MGSE8.EE.8; SS8E3).
- Create and interpret a table/graph showing price, expected quantity, revenue, cost, and profit to justify a pricing decision (MGSE8.F.1, MGSE8.F.3).
- Determine a break-even point and compare two pricing strategies using a system of linear equations or tabular reasoning (MGSE8.EE.8; SMP4).
- Communicate a brief business pitch that explains trade-offs among price, demand, and fairness to customers (SS8E3, SS8E5; SMP1, SMP6).`,
  },
  {
    title: "Standards Alignment",
    content: `- **MGSE8.EE.8** — Analyze and solve pairs of simultaneous linear equations; students model revenue and cost, find break-even, and compare pricing plans.
- **MGSE8.F.1, MGSE8.F.3** — Define and interpret functions; describe linear relationships from tables and graphs. Price–quantity–revenue relationships are functions represented in tables/graphs for pricing decisions.
- **MGSE8.SP.1** — Investigate patterns of association in bivariate data. Students look for a relationship between price and quantity sold to inform pricing choices.
- **SMP1, SMP4, SMP6** — Make sense of problems, model with mathematics, attend to precision. Students model a real-world shop, calculate precisely, and iterate solutions.
- **SS8E3 (Georgia Studies—Economics)** — Analyze how producers decide what to produce, how to produce, and for whom; consider profit and pricing.
- **SS8E5 (Personal Finance within Georgia Studies)** — Evaluate budgeting and decision-making to meet financial goals.`,
  },
  {
    title: "Materials",
    content: `- Printed "Snack Catalog" sheets (cost per unit, suggested demand at sample prices)
- Team planning sheet (budget, profit goal, tables for scenarios, graph grid)
- Calculators or scratch paper
- Sticky notes or index cards (for pricing tags)
- Markers/pencils
- Timer
- Optional: a few empty snack packages/props for display`,
  },
  {
    title: "Assessing Prior Knowledge",
    duration: "3 min",
    content: `- Quick Write: "What happens to demand when price goes up? Give a real example." Collect 2–3 verbal responses to surface ideas about price–quantity trade-offs.`,
  },
  {
    title: "Introduction",
    duration: "5 min",
    content: `- Welcome: "Today you're running a pretend after-school snack shop. Your mission: pick snacks, set prices, stay on budget, and make a fair profit."
- Share goals and success criteria: hit budget, find break-even, justify prices with math, and keep prices student-friendly.`,
  },
  {
    title: "Hook",
    duration: "5 min",
    content: `- **Price Pulse:** Post two prices for the same snack ($1 vs. $3). Students stand by the price they'd actually pay. Rapid debrief: "What changed and why?" Highlight demand and trade-offs.`,
  },
  {
    title: "Background Information",
    duration: "7 min",
    content: `### Mini-lesson with board visuals

- **Key terms:** budget (limit), cost (money out), revenue (money in), profit (revenue − cost), break-even (profit = 0).
- **Linear models:** Revenue = price × quantity; Cost = fixed + variable × quantity.
- Show a quick example table and graph; point out intersection for break-even and how steeper lines reflect different prices/costs.
- Emphasize fairness: profitable but not predatory.`,
  },
  {
    title: "Activity",
    duration: "30 min",
    content: `### Snack Shop Simulation

Teams of 3–4 receive:
- **Budget:** $40; **Profit goal:** at least $15.
- **Snack Catalog** with 6–8 items (e.g., granola bars: cost $0.50 each; fruit cups $0.60; chips $0.45; water $0.25; cookies $0.40; trail mix $0.70; with sample demand guides).
- **Constraint:** Prices must be in $0.25 increments; "Fairness check"—no single item may exceed $2.00.

### Task

- Choose 3–4 products and order quantities within budget.
- Propose two pricing strategies (Strategy A and B), predict quantity sold using demand guide, compute revenue, cost, profit for each, and graph revenue and cost to find/estimate break-even for a key item or the bundle.
- Select the better strategy and prepare a 60-second pitch.`,
  },
  {
    title: "How To (Step-by-Step)",
    duration: "10 min",
    content: `1. **Set your product mix** — Pick 3–4 items and decide how many to order so total cost ≤ $40.
2. **Draft Strategy A prices** — Choose a price per item (in $0.25 steps). Use the demand guide to estimate quantity sold.
3. **Compute A** — For each item: Revenue = price × quantity sold; Cost = unit cost × quantity ordered. Total Revenue (sum), Total Cost (sum), Profit = Total Revenue − Total Cost.
4. **Draft Strategy B** — Adjust at least one price up/down; re-estimate quantities; recompute totals.
5. **Find break-even** — For one representative item or the whole set, graph Cost and Revenue lines (use slope = price or unit cost; include any fixed cost if given). Estimate intersection; or solve p·q = fixed + unit_cost·q if applicable.
6. **Compare and choose** — Which strategy meets budget, hits ≥ $15 profit, and passes fairness? Justify with the table/graph.
7. **Make your pitch** — In 60 seconds: state your prices, predicted sales, profit, break-even insight, and why your prices are fair.`,
  },
  {
    title: "Assessment",
    content: `### Formative (ongoing)

- Circulate with quick checks: "Show me your Revenue and Cost equations," "Where is break-even on your graph?" Provide spot feedback.
- Strategy A vs. B comparison check: teams must show both tables and a decision statement.

### Summative — Exit Ticket (3 prompts)

1. Write your chosen profit calculation (numbers included).
2. Identify your break-even point (quantity or intersection description).
3. One sentence on why your prices are fair to customers.`,
  },
  {
    title: "Differentiation",
    content: `- **Supports:** Provide a scaffolded table template with formulas written. Offer pre-plotted axes with one point labeled for each line. Supply a demand "slider" card to help estimate quantities.
- **Extensions:** Add a fixed cost (e.g., $5 table fee) and recompute break-even. Introduce a combo discount and analyze its impact on revenue. Compare two items using a system to reach a target revenue.`,
  },
  {
    title: "Closure",
    duration: "5 min",
    content: `- 2–3 rapid team pitches.
- Class quick reflection: "Name one move that increased profit without raising prices too high." Collect 3 ideas and highlight modeling choices.`,
  },
  {
    title: "Materials Checklist for Teacher",
    content: `- Snack Catalog sheets
- Team planning/graphing sheets
- Calculators/pencils/markers
- Sticky notes or price tags
- Timer
- Optional props`,
  },
  {
    title: "Reflection and Revision (Teacher)",
    content: `- Note timing of the simulation and clarity of demand guides.
- Record common errors (e.g., mixing ordered vs. sold quantities) to address next lesson.
- Plan follow-up mini-lesson on systems and fixed costs based on exit tickets.`,
  },
];
