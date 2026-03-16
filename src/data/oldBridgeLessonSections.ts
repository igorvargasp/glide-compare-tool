import { LessonSection } from "./lessonSections";

export const oldBridgeLessonSections: LessonSection[] = [
  {
    title: "Lesson Details",
    defaultOpen: true,
    content: `| Field | Value |
|-------|-------|
| **Grade Level** | 5th Grade |
| **Subject** | STEM |
| **State** | North Carolina |
| **Duration** | 30 minutes |`,
  },
  {
    title: "Learning Objectives",
    content: `- Predict and explain how forces (tension, compression) affect the strength of a model bridge.
- Design, build, test, and improve a paper-and-tape bridge to maximize the load it can hold.
- Collect and compare test data (maximum load in pennies/grams) and briefly share design choices and results.`,
  },
  {
    title: "Standards Alignment",
    content: `- **5.P.1.3 (Science)** — Students explain how added loads (forces) change a structure's behavior, directly linking force to motion and stability during testing.
- **5.P.1.4 (Science)** — Students make and revise predictions about how changing a design (e.g., adding supports) will change the outcome (motion/failure) under load.
- **NC.5.MD.1 (Math)** — Students may convert weights (e.g., 100 pennies ≈ 250 g; grams to kilograms) to compare results using like units.
- **NC.5.MD.2 (Math)** — Students record test results and compare data points (highest load, range) to discuss patterns and fairness in testing.
- **NC.5.SL.1 (ELA)** — Students engage in collaborative group planning, discussion of predictions, and evidence-based comparison of bridge designs.
- **NC.5.SL.4 (ELA)** — Students briefly present design choices, test results, and reasoning with supporting evidence.`,
  },
  {
    title: "Materials",
    content: `**Per group (3–4 students):**
- 10 index cards OR 10 sheets of copy paper
- 10 craft sticks (optional), 6 straws (optional)
- ~24 in masking tape, 2 paper clips, 1 string (18 in) optional

**Testing rig:**
- Two equal-height stacks of books or desks spaced 20 cm apart
- 1 small plastic cup; pennies or washers (shared)

**Other:**
- Timers, rulers, markers, sticky notes, clipboards or scrap paper for data`,
  },
  {
    title: "Assessing Prior Knowledge",
    duration: "2 min",
    content: `- **Think–Pair–Share:** "What makes a bridge strong?" Students name one idea (triangles, arches, layers, columns, tape placement). Teacher charts top ideas and possible misconceptions (e.g., "more tape always equals stronger").`,
  },
  {
    title: "Introduction",
    duration: "3 min",
    content: `- Welcome and goal: "Today you're engineers! Build the strongest bridge you can with limited supplies and time."
- Success criteria: "You can explain your design, test it fairly, and use results to improve."`,
  },
  {
    title: "Hook",
    duration: "3 min",
    content: `- **Quick demo:** Place a single index card flat over the gap—add 5 pennies until it sags/fails.
- Then fold the same card into a corrugation (accordion) and retest—ask: "What changed and why?"`,
  },
  {
    title: "Background Information",
    duration: "4 min",
    content: `### Key ideas (kid-friendly)

- **Compression** pushes in; **tension** pulls apart.
- **Triangles** help stop wiggling; layers and corrugation spread the push.
- **Fair test:** same gap, add pennies steadily, stop at first collapse.

**Vocabulary:** force, load, compression, tension, support, span, failure.`,
  },
  {
    title: "Activity",
    duration: "15 min",
    content: `### Round 1: Build and Test (7 min)

Build your bridge using allotted supplies and test by adding pennies to a cup hung at center.

### Mini-Analysis (1 min)

Record max load and 1 reason for success/failure.

### Round 2: Improve and Retest (7 min)

Improve one feature (e.g., add a truss, fold beams, better tape joints) and retest.

**Formative checks:** Teacher circulates asking: "Where is compression happening? Where is tension? What changed your prediction?"`,
  },
  {
    title: "How To (Step-by-Step)",
    duration: "5 min",
    content: `1. **Set Up the Test** — Place two book stacks 20 cm apart to form a gap. Put the bridge across the gap—ends may rest on books but cannot be taped to supports.
2. **Plan** (1 min) — Sketch quickly: show where you'll add supports (triangles, layers, corrugation). Make a team prediction: "Our bridge will hold ___ pennies because ___."
3. **Build** (5–6 min) — Use only your allotted supplies. Tips: Fold paper into beams (U, V, or accordion), tape joints neatly, create triangle trusses with sticks or folded paper.
4. **Test** (2 min) — Hang cup at the center with string/paper clips. Add pennies 5 at a time; pause and observe. Record maximum before first clear failure (sagging to touch, snapping, tipping).
5. **Improve** (5–6 min) — Change ONE variable (e.g., add cross-bracing, double the deck, widen base). Retest and record new maximum.
6. **Share** (if time, 1 min per group) — State design change and how it affected results.

**Safety:** Keep faces back during testing; add weights slowly; stop at first failure.`,
  },
  {
    title: "Assessment",
    content: `### Formative

- Teacher questioning during builds connects features to forces ("Which part is under tension?").
- Midpoint prediction check and adjustment after Round 1.

### Summative — Exit Ticket (2 prompts)

1. "Name one design feature that increased your bridge's strength and why."
2. "How did your Round 2 change affect the maximum load?" (More/Same/Less + reason)

**Optional:** Quick data share — identify class high score and discuss what features those bridges had.`,
  },
  {
    title: "Differentiation",
    content: `- **Support:** Provide a mini template card showing triangle truss and an example corrugation fold.
- **Challenge:** Limit tape to 12 inches OR require a span of 25 cm; ask advanced groups to calculate percent improvement from Round 1 to Round 2.`,
  },
  {
    title: "Time Management",
    content: `| Segment | Duration |
|---------|----------|
| Assess Prior Knowledge | 2 min |
| Introduction | 3 min |
| Hook | 3 min |
| Background Information | 4 min |
| Activity (Build–Test–Tweak) | 15 min |
| How To (presented before build) | 5 min |
| **Total** | **30 min** |

- **If ahead:** Create a fast class line plot with each group's max load and identify the mode/highest.
- **If behind:** Skip Round 2 share-out and collect exit tickets verbally.
- **Priority:** Ensure at least one fair test and one design improvement per group.`,
  },
  {
    title: "Reflection and Revision (Teacher)",
    content: `- After class: Note which supports students used most, common failure points (center sag, shear at joints), and timing pinch points.
- Revise for next time: Pre-fold example beams, pre-mark 20 cm gaps, and create a quick results chart to speed comparisons.`,
  },
];
