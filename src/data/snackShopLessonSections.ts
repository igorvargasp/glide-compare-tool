import { LessonSection } from "./lessonSections";

export const snackShopLessonSections: LessonSection[] = [
  {
    title: "Lesson Details",
    content: `| Field | Value |
|-------|-------|
| **Grade Level** | 8th Grade (Age 13) |
| **Subject** | Math / Financial Literacy |
| **State** | Georgia |
| **Duration** | 60 minutes |
| **Group Size** | small-group |
| **Energy Level** | medium |
| **Delivery Mode** | in-person |
| **Theme** | Entrepreneurship and Financial Literacy |`,
    duration: "60 min total",
    defaultOpen: true,
  },
  {
    title: "Learning Objectives",
    content: `- Calculate revenue, cost, and profit margins for chosen products using operations with decimals and percents
- Select products and set selling prices within a given budget to maximize profit and justify decisions with calculations
- Model profit as a linear relationship (profit = revenue − cost) and analyze how price changes affect profit`,
    defaultOpen: false,
  },
  {
    title: "Standards Alignment",
    content: `- **MGSE8.F.B.4 / CCSS.MATH.CONTENT.8.F.B.4** — Construct a function to model a linear relationship between two quantities; interpret the rate of change and initial value in context.
  *Students will model profit as a linear function of number sold (profit = (price × quantity) − cost) and interpret rate of change as profit per item.*

- **MGSE8.EE.C.7 / CCSS.MATH.CONTENT.8.EE.C.7** — Solve linear equations in one variable and use them to solve real-world problems.
  *Students will set up and solve equations for break-even points and solve for quantities or price given target profit goals.*

- **Georgia Personal Financial Literacy Standard (Grade 6–8)** — Apply strategies for managing money, including budgeting, pricing, and basic profit calculations.
  *The simulated shop requires students to manage a budget, set prices, and compute profits—directly addressing middle-school financial literacy expectations in Georgia.*`,
    defaultOpen: false,
  },
  {
    title: "Lesson Overview",
    content: `The lesson opens with a fast, real-world hook showing a familiar snack purchase to activate prior knowledge about cost and value. After a quick setup and materials check, students form small shop teams, receive budgets and product cards, and plan pricing on their worksheets. The hands-on simulation runs multiple short sales rounds where groups apply math to compute revenue and profit; periodic engagement checks let the teacher diagnose understanding and nudge strategy. The lesson closes with group reflections comparing outcomes and a short synthesis connecting calculations to entrepreneurial decision-making, then a brief cleanup and an alternate solo pricing challenge if time or materials limit the simulation.

### Key Activity

In small groups students run a simulated after-school snack shop: they choose product cards from a catalog, allocate a limited start-up budget to purchase inventory, set selling prices using provided price cards or create their own, then simulate sales rounds using play money and calculators to compute revenue, costs, profit, and profit margin.

### Differentiation

Struggling students receive a guided worksheet with step-by-step prompts, smaller product sets, and calculator-friendly templates; teacher or aide circulates for one-on-one coaching. Advanced students are challenged to compute break-even points, test multiple pricing strategies across sales scenarios, and calculate percent markup and margin; provide extension prompt cards (bulk discounts, promotional pricing). Groups may assign roles (manager, cashier, accountant, marketer) to leverage strengths.`,
    defaultOpen: false,
  },
  {
    title: "Hook",
    content: `**0:00–1:00 — Set the scene and show the snack**
- Walk to the front holding a familiar snack (e.g., a granola bar) and its product price card (cost to buy: $0.60).
- "Take a look at this granola bar. Imagine you're walking into the hallway after school and you're a little hungry. How much would you pay for this?"

**1:00–3:00 — Quick individual think, then partner share**
- Give students 30 seconds to think silently and pick a price. Then: "Turn to a partner and share the price you chose and one reason why."
- Sentence starters: "I would pay $___ because ___."

**3:00–4:00 — Whole-class quick share and reveal the 'cost to buy'**
- Invite 3–4 volunteers to share. Then reveal: "The cost for us to buy this granola bar is $0.60. If we sell for less than $0.60 we lose money. If we sell for more, we make money."
- "If the cost is $0.60 and you sell it for $1.25, how much profit do we make on one bar?"

**4:00–6:00 — Introduce the challenge**
- "You will work in small groups to run an after-school snack shop. Every group gets a startup budget of $20.00. Your job is to use that $20 to buy inventory, set selling prices, and run sales rounds. Your goal: turn the $20 into the largest possible profit."
- Rules:
  - Each group starts with $20.00 (play money)
  - Products have a cost-to-buy (on their product cards)
  - You set your own selling prices (decimals/cents allowed)
  - You will run timed sales rounds and record calculations

**Differentiation:**
- Support: Remind students to think in dollars and cents; provide quick subtraction reminder.
- Challenge: Ask students to estimate percent markup (e.g., cost $0.60, price $1.50 — what's the markup percent?).`,
    duration: "6 min",
    defaultOpen: false,
  },
  {
    title: "Setup",
    content: `**Teacher instructions (3 minutes)**

- Form groups quickly (2–4 students). At each table place: 1 startup budget worksheet, product price cards, play money, 1 calculator, and 1 sales-log sheet.

**Student script (read aloud):**
"Team partners, decide roles now: **Manager** (announces choices), **Cashier** (handles play money), **Accountant** (records sales and computes profit), and **Marketer** (suggests price changes). You have $25 to spend on inventory. Choose items from the product cards and record the cost and quantity on your budget worksheet. Then set a selling price for each item."

**Quick demo (30 seconds):**
Pick one product card, place play money to buy one unit at its cost, write it on the worksheet, set a selling price, and show how to record one sale on the sales-log.

**Rules (one sentence each):**
- Budget limit: You may not spend more than the startup budget on inventory.
- No borrowing between groups.
- Price freeze during a round: prices stay fixed for the entire selling round.
- Record everything: every sale must be logged immediately.

**Teacher checklist (scan each group):**
- Budget worksheet with names and starting amount recorded
- Product cards available and face-up
- Play money stack present
- Calculator present
- Sales-log sheet visible
- Roles written on the worksheet

**Differentiation:**
- Struggling groups: hand them the guided worksheet with step-by-step prompts and fewer product cards (4 only).
- Advanced groups: give extension prompt card (e.g., "compute break-even price for one product").`,
    duration: "3 min",
    defaultOpen: false,
  },
  {
    title: "Materials List",
    content: `**Per small group (3–4 students):**
- 1 Startup Budget Worksheet
- 1 Pricing Worksheet / Sales Log
- Product Price Cards (6–10 different products). Example: "Granola Bar — Cost $0.75 — Suggested Retail $1.25"
- Play Money Kit: $1 bills (×20), $5 bills (×10), $10 bills (×5), coin tokens for 25¢, 10¢, 5¢ (×20 each)
- 1 Calculator (handles decimals and percent)
- 2 pencils + 1 eraser + scrap paper
- Optional Scenario Cards (bulk-buy discount, 10% off coupon, supply shortage)

**Teacher kit (front of room):**
- Answer key/sample solutions for exit mini-quiz
- Extra calculators, pencils
- Timer
- Folder for returned worksheets
- Extra communal bank for change

**Differentiation materials:**
- Guided worksheet version with step-by-step prompts and formula templates
- Extension pricing worksheet for break-even and percent markup calculations
- Scenario cards for advanced groups

**Cleanup:**
- Play-money tray for returns
- Product-card box
- Calculator basket
- Group folders for paperwork collection`,
    duration: "1 min",
    defaultOpen: false,
  },
  {
    title: "Activity Steps",
    content: `**Time breakdown (27 minutes total)**
- 6 min — Inventory selection and price-setting
- 3 × (5 min sales + 1 min post-round math) = 18 min — Three timed sales rounds
- 3 min — Final tally and prepare for Reflection

**Step 1 — Buy inventory and record purchases (6 min)**
- Choose product cards. Record each product name, purchase cost per unit, and quantity bought.
- Keep total purchases at or below the startup budget. Subtract purchases from budget.
- Manager confirms purchases; Accountant records total cost and remaining cash.

**Step 2 — Set and record selling prices**
- Write selling price for each product. Use calculator for decimals.
- Teacher prompt: "Tell me one reason you set your price that way."
- Advanced extension: Record percent markup = (selling price − cost) ÷ cost × 100

**Step 3 — Sales Round protocol (repeat 3 times)**
Each round: 5 minutes selling + 1 minute post-round math.
- Cashier handles play money and gives change
- Accountant records each sale on the sales-log
- Manager monitors inventory
- Marketer may pitch to customers

**Step 4 — Post-round math (1 min after each round)**
- Revenue = Σ(selling price × units sold)
- Cost of goods sold = Σ(purchase cost × units sold)
- Profit = Revenue − COGS
- Profit margin (%) = (Profit ÷ Revenue) × 100

**Example:** 10 bags of chips at $1.25, cost $0.50 each:
- Revenue = $12.50, Cost = $5.00, Profit = $7.50, Margin = 60%

**Step 5 — Adjust prices between rounds**
- Consider: Did the product sell out? Were sales slow? Which product had highest margin?
- Projected Profit = new price × estimated units − (cost × estimated units)

**Step 7 — Final tally (3 min)**
- Compute cumulative totals: Total revenue, total COGS, total profit
- Prepare statement: "Our final profit was $____. One pricing decision we made was ____."`,
    duration: "27 min",
    defaultOpen: false,
  },
  {
    title: "Engagement Checks",
    content: `**Minute-by-minute plan (6 minutes total)**

**Minutes 0–2: Sample check (teacher-led, one group)**
- "Show me your sales log. Walk me through one product: how many sold, selling price, cost per item, revenue, and profit."
- Quick checklist:
  1. Count sold items vs. inventory — do numbers match?
  2. Revenue: quantity × selling price (decimals correct?)
  3. Cost: quantity × cost per item (not cost × selling price!)
  4. Profit: revenue − cost (subtraction correct?)
  5. Profit margin: (profit ÷ revenue) × 100 as percent

**Minute 2–3: Thumbs confidence check**
- "Thumbs up if your prices will make profit, thumbs down if not confident, flat hand if unsure."
- If < 60% thumbs up: call a 30-second troubleshooting pause.

**Minutes 3–6: Two-question mini-quiz**
1. A group sold 8 bags of chips at $1.50 each, cost $0.90 each. What is revenue, total cost, and profit?
   *(Revenue = $12.00; Cost = $7.20; Profit = $4.80)*
2. What is the profit margin as a percent?
   *(4.80 ÷ 12.00 = 0.4 → 40%)*

**Scoring thresholds:**
- ≥ 80% correct: continue simulation
- 50–79%: pause for 1–2 min whole-class mini-lesson
- < 50%: pull 2–3 small groups for guided correction

**Common misconceptions:**
- Using cost instead of selling price for revenue → "Which number did customers pay?"
- Treating revenue as profit → "Revenue − cost = profit"
- Margin as profit ÷ cost → "Use profit ÷ revenue × 100"`,
    duration: "6 min",
    defaultOpen: false,
  },
  {
    title: "Reflection",
    content: `**Timing (8 minutes total)**

**0:00–0:30 — Prep index cards**
- Each group writes: final profit, one pricing decision, and the calculation that justifies it.

**0:30–4:30 — Group presentations**
- 4 or fewer groups: 1 min each (40s present, 20s question)
- 5–8 groups: 30s each (profit, decision, one change)
- 8+ groups: lightning round with posted cards

**Student sentence stem:**
"Our final profit was $____. We set the price of ____ at $____ because ____. Revenue = $____. Cost = $____. Profit = $____."

**4:30–7:30 — Class discussion**
- Write on board: **profit = revenue − cost**
- "Which part did your pricing decision affect most — revenue or cost?"
- "Did anyone raise price and earn less revenue but more profit?"
- "Which group had the highest profit margin? What did they do differently?"

**7:30–8:00 — Closing takeaway**
- "Entrepreneurs must balance price and sales volume and watch their cost. Today's profit = revenue − cost is the same idea businesses use every day."

**Differentiation:**
- Struggling: Provide sentence stems and filled template on board
- Advanced: State break-even price for one product; compute percent markup vs. margin`,
    duration: "8 min",
    defaultOpen: false,
  },
  {
    title: "Cleanup",
    content: `**Quick checklist (3 minutes):**

1. Count and return play money to the tray. Stack bills by value. (Cleanup Manager)
2. Stack product price cards face down and return to box.
3. Hand calculators to the Runner; stack in calculator basket, turned off.
4. Assemble paperwork into group folder: budget sheet → pricing worksheet → sales logs → exit quiz/reflection.
5. Accountant checks all columns (revenue, cost, profit, margin) are filled. Note any missing numbers.
6. Leave folder open on table with group name on top.

**Timing:**
- 0:00–1:00: Collect and count play money and product cards
- 1:00–2:00: Stack and order worksheets into folder; Accountant checks calculations
- 2:00–3:00: Runner places calculators and folder in collection area

**Teacher actions:**
- Circulate and scan: green dot = folder complete, yellow dot = needs follow-up
- Spot-check one group's math: verify revenue − cost = profit for one round
- Collect calculators and play money into labeled bins

**For groups who finish early:**
- Verify a break-even calculation or annotate one pricing change they would make and why`,
    duration: "3 min",
    defaultOpen: false,
  },
  {
    title: "Backup Plan",
    content: `**Individual Pricing Challenge (6 minutes)**

When groups can't run the full simulation, students work individually on pricing scenarios.

**Setup:** $15.00 fixed budget. Available items:
- Chips: cost $0.50 each; max 12 units
- Granola bar: cost $0.75 each; max 10 units
- Fruit cup: cost $1.25 each; max 8 units

**Formulas:**
- Revenue = selling price × units sold
- Cost = unit cost × units bought
- Profit = revenue − cost
- Profit margin (%) = (profit ÷ revenue) × 100

**Scenario 1 — Quick Sales at a Club Meeting**
- 30 students, ~30% buy one snack (~9 expected sales)
- Choose which items to stock, set prices, compute expected profit

**Scenario 2 — After-School Rush**
- Higher traffic, price-sensitive buyers
- Test a lower-price/higher-volume strategy

**Scenario 3 — Premium Event**
- Fewer buyers willing to pay more
- Test a higher-price/lower-volume strategy

**For each scenario:** (1) decide selling price per unit, (2) show calculations for revenue, cost, profit, and margin, (3) justify your price in one sentence.

**Differentiation:**
- Support: Guided template with formula blanks to fill in; work with 2 products only
- Challenge: Compute break-even units; compare markup vs. margin across scenarios`,
    duration: "6 min",
    defaultOpen: false,
  },
];
