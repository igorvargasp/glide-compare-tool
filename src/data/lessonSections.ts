export interface LessonSection {
  title: string;
  content: string;
  duration?: string;
  defaultOpen?: boolean;
}

export const lessonSections: LessonSection[] = [
  {
    title: "Lesson Details",
    defaultOpen: true,
    content: `| Field | Value |
|-------|-------|
| **Grade Level** | 1st Grade (Age 6) |
| **Subject** | Math / ELA / Health |
| **State** | California |
| **Duration** | 45 minutes |
| **Group Size** | small-group |
| **Energy Level** | medium |
| **Delivery Mode** | in-person |
| **Theme** | Farmers Market |`,
  },
  {
    title: "Learning Objectives",
    content: `- Sort play fruits and vegetables into correct categories and explain one reason for each classification
- Create and label simple price tags with numbers and use play money to count and exchange amounts up to 20
- Describe aloud a healthy food from home using a full sentence and explain one reason it is healthy`,
  },
  {
    title: "Standards Alignment",
    content: `- **CCSS.Math.Content.1.NBT.A.1** — Count to 120, starting at any number less than 120.
  *Students practice counting play money and counting items when pricing and totaling purchases, which builds fluent counting skills within early grade ranges.*

- **CCSS.Math.Content.1.OA.A.1** — Use addition and subtraction within 20 to solve word problems.
  *When students add item prices or count out money to make a purchase, they apply basic addition (combining amounts) in contextual problems.*

- **CCSS.ELA-LITERACY.SL.1.1** — Participate in collaborative conversations with diverse partners about grade 1 topics and texts.
  *Small-group market role-play and partner sharing require students to take turns, ask and answer questions, and follow conversation rules.*

- **CCSS.ELA-LITERACY.SL.1.4** — Describe people, places, things, and events with relevant details, expressing ideas clearly.
  *Students will describe a healthy food from their family and explain why it is healthy using descriptive vocabulary and full sentences.*

- **California Health Education Content Standards — Grade 1, Standard 1** — Students demonstrate basic concepts related to health promotion and disease prevention (recognize healthy foods and behaviors).
  *Discussion about healthy foods from families and identifying fruits/vegetables connects directly to recognizing nutritious choices and health-related vocabulary.*`,
  },
  {
    title: "Lesson Overview",
    content: `Begin with a lively market hook to activate curiosity, then quickly set up clear stations and roles so students know what to do. The central hands-on portion has two short cycles—sorting/classifying and then pricing/market play—so students apply vocabulary, counting, and social skills in context. Formative engagement checks are woven through (teacher observations, quick thumbs checks, and one-on-one counting prompts). The lesson closes with structured reflection where each child speaks about a healthy food from home, reinforcing vocabulary and social communication before a brief cleanup and an optional backup micro-activity if time or materials change.

### Key Activity

Students run a small-group farmers market: first they sort play fruits and vegetables into fruit/vegetable baskets, then create sticky-note price tags, and finally role-play shoppers and cashiers using play money to buy items while counting amounts and sharing one healthy-food fact from home.

### Differentiation

Struggling students: provide pre-written price tags with numbers and pictorial cues, pair with a peer or adult for counting support, and use a simple 1–10 number line. Advanced students: challenge them to add two item prices to find totals or calculate simple change, invite them to write a short price list or create a 2-item special and advertise it to the group.`,
  },
  {
    title: "Hook",
    duration: "5 min",
    content: `Teacher prep (before students arrive): place the play fruits and vegetables into a covered or fabric-wrapped "mystery basket." Have the basket on a low table so all children can see. Keep one or two items in your hand to reveal first. Have a small bell or clap pattern ready as an attention-getter.

Step-by-step teacher actions and exact language (5 minutes total):

1) **Gather and engage** (30 seconds)
- Teacher: "Friends, come sit in a circle for a special surprise! If you hear my bell (or clap), that means quiet listening time. Ready?"
- Use a quick attention-getter (ring bell once / clap twice) to focus the group.

2) **Mystery basket reveal** (2 minutes)
- Teacher (with excitement): "I found a colorful mystery basket! I'm going to show you some things from the basket. When I pull an item out, I want you to tell me two quick things: Is it a fruit or a vegetable? And would you like to buy it at our market? Give me a thumbs-up if yes, thumbs-down if no!"
- Pull out one bright item (e.g., apple). Hold it up so everyone sees.
  - Teacher: "What is this? Is it a fruit or a vegetable?" Pause for answers; accept one or two responses.
  - If students need support: prompt with a simple cue, "Does it have seeds inside? Is it sweet?" to nudge toward 'fruit.'
  - Teacher: "Show me—thumbs up if you would buy an apple at our market, thumbs down if you wouldn't." Do the thumbs check, smile, and count quick responses out loud: "I see 8 thumbs up!"
- Repeat with 2–3 more items (e.g., carrot, banana, tomato). For each item: ask "Fruit or vegetable?" then "Thumbs up if you would buy it!" Keep answers short and energetic.

3) **Quick pair-share for reasoning** (45 seconds)
- Teacher: "Turn to your partner next to you and tell them: 'I think ___ is a fruit/vegetable because ___.'" (Give 10 seconds.)
- After 10 seconds, ask one or two pairs to share one sentence aloud. Accept short answers: "It's a vegetable because it grows in the ground," or "It's a fruit because it's sweet."

4) **Tie to learning goals and set excitement for the day** (45 seconds)
- Teacher (enthusiastic): "Great guesses! Today we're opening our very own farmers market. At the market you will sort fruits and vegetables, make price tags, and use play money to buy and sell. We will also tell the group one healthy food from our home when we finish."
- Student-facing summary (short and clear): "Today you will: sort, price, and play. Sort = put fruits and vegetables in the right basket. Price = write number price tags. Play = be shoppers and cashiers and count money."

5) **Quick differentiation notes** to use during the hook (embedded, teacher reminder):
- For students who need extra support: when you hold up an item, quietly offer a short hint (e.g., "It is crunchy and grows in the ground") and ask them to point to the correct basket later. Use yes/no choices if needed.
- For advanced students: after their thumbs-up, ask one student to say a short reason why the food is healthy (e.g., "I would buy the apple because it helps my body") to preview the reflection step.

**Transition to Setup** (15 seconds)
- Teacher: "Okay, market people—keep that excitement! We'll move to our market stations next where I'll show you how to set up the Sorting Table and the Market Table. Ready to open the market?" Use the bell/clap as a transition signal and lead students to the stations.

**Teacher tips for timing and tone:**
- Keep the energy lively but brief—each reveal should be 20–30 seconds.
- Use enthusiastic, simple language and repeat key words (fruit, vegetable, price, buy) so vocabulary is clear and memorable.
- Watch for students who need support and note them for pairing during the activity (e.g., who will get a pre-written price tag or a counting partner).`,
  },
  {
    title: "Setup",
    duration: "2 min",
    content: `Teacher steps (what you do in the 2-minute setup)

- Quickly announce the transition from the Hook: "Great guessing! Now we'll open our farmers market. I need your help setting up two stations so we can sort, price, and play." Say this in a bright, calm voice to match the medium energy level.

- Set up the two stations within reach of one small group (3–5 students):
  - **Sorting Table** (left side): lay out two small baskets or cloths labeled FRUIT and VEGETABLE (use a quick sticky-note label or picture if helpful). Place the full basket of mixed play produce within easy reach of this table.
  - **Market Table** (right side): place a cloth or small basket to act as the stall. Put sticky notes, markers, and a stack of blank price tags here. Place the play money in one shallow tray between the two tables so both stations can access it.

- Place role labels (optional) where each child can pick one up: SHOPPER, CASHIER, SORTER. If you use picture icons (cart, register, basket), tape them to the table edge. If you don't have labels, point and assign verbally.

- Arrange materials so every child can reach something without crowding: one marker per two students, one small pile of sticky-note price tags per group, and the play produce near the Sorting Table. Keep a spare set of pre-written price tags and a 1–10 number strip (or simple number line) near you for students who need support.

- Give very brief role instructions in kid-friendly language and assign roles now. Use a quick script and keep it under 30 seconds:
  - To the whole group: "We are a small farmers market team. One person will be the Sorter (puts produce in fruit or vegetable basket). One person will be the Cashier (writes the price and checks money). One person will be the Shopper (picks what to buy and hands money). We will switch roles after each play turn so everyone practices."
  - While you point to the labels: "Please pick a role or I will gently choose for you." (Choose quickly to keep the momentum.)

- Place differentiation supports where visible:
  - For students who need help: put 3–4 pre-written price tags (1–10) and a number strip next to the Market Table labeled "I can use these." Offer to pair the student with a peer or adult helper.
  - For advanced students: place a small extra sticky-note titled "Challenge" and a marker so they can write a two-item special or add two prices later.

**Teacher models one quick transaction** (30–40 seconds)

- Stand at the Market Table and invite two volunteers or use puppets/props. Use this exact short script so students hear vocabulary and see actions:
  - Teacher (as Cashier, holding an apple): "I will put a sticky-note price on the apple. I choose $3." (Write 3 on a sticky note, stick it to the apple.)
  - Shopper child: "I want to buy the apple."
  - Teacher (cashier): "Great! Count out $3 using the play money." (Wait as child counts; if they struggle, show the number strip or hand them three $1 play bills.)
  - Shopper: counts and hands money. Teacher (cashier) counts the money aloud and says, "Thank you—$3 received. Here is your apple."
  - Teacher adds healthy-food language: "What is one reason apples are healthy?" Prompt: "They help our bodies because they have vitamins." Praise the child's sentence: "Nice full sentence!"

- While modeling, emphasize two learning goals: sorting vocabulary (fruit/vegetable) and counting money to pay the price. Use clear labels: "price," "cost," "buy," "sell."

**Final quick logistics before students begin** (15–20 seconds)

- Tell students the order of play: "First we sort at the Sorting Table, then we make price tags and move to the Market Table, then we role-play buying and selling. I will walk around and listen. We will switch roles after each turn."
- Give behavior expectations in one short line: "Use gentle hands with the toys, use your counting voice when you pay, and take turns."
- Start signal: "When I say 'Market open!', Sorters get the basket, Cashiers get sticky notes, and Shoppers choose one item to buy." Then say: "Market open!" and immediately begin circulating.`,
  },
  {
    title: "Materials List",
    duration: "1 min",
    content: `These materials are chosen to support the lesson's hands-on farmers‑market arc: a quick hook, two short learning cycles (sorting then pricing/market play), formative checks, and a short reflection.

**Materials per small group (4 students recommended):**

- **Play fruits and vegetables:** 10–14 items total (aim for about 6 fruits and 6–8 vegetables). Choose clearly recognizable items (apple, banana, orange, carrot, tomato, broccoli, etc.).
- **Sticky notes for price tags:** 12–20 notes (3"×3" work well). Provide a few extra for mistakes or special signs.
- **Play money:** one set of play coins/bills that allows amounts up to 20 (include ones and fives; if possible include tens). Make sure each child can access at least 10–15 units of 1s or a mix so they can count to 20.
- **Markers:** 2–3 washable markers per group (different colors help—one for numbers, one for decoration).
- **Two small baskets or cloths:** 2 per group (one labeled FRUITS, one labeled VEGETABLES). If you don't have baskets, use folded cloths, paper plates, or taped table outlines.
- **Role labels (optional):** simple sticky-name tags or index cards labeled SHOPPER, CASHIER, SORTER.

**Teacher prep (5 minutes before lesson starts):**

1. Count and group play produce into small-group sets. Put each set in a tray so groups can grab them quickly during Setup.
2. Pre-stack sticky notes with a small pile of markers and a handful of play money in a shallow tray for each group.
3. Prepare two baskets/cloths per group and place FRUIT/VEGETABLE labels on them.
4. Make one teacher demo item set (3–4 pieces) with example price tags (e.g., apple $2, carrot $1).
5. If using role labels, write or print them now and clip together.

**Contingency substitutions (if some items are missing):**
- No baskets? Use a cloth, a paper plate, or draw two circles on the table with tape and label them.
- No role labels? Write roles on sticky notes and hand them directly to students.`,
  },
  {
    title: "Activity Steps",
    duration: "20 min",
    content: `### Step 1 — Sorting (~7 minutes)

- Teacher: "Remember our hook? We saw a mystery basket and guessed items. Now we will sort them like a real market!"
- **Student routine:** Take turns picking one play food. Say its name, put it in the fruit or vegetable basket, and tell us one reason why.
- Sentence frame: "This is a ____. I put it in ___ because ____."
- **Differentiation:** Struggling students get two-choice cues and sentence starters. Advanced students explain additional details.

### Step 2 — Pricing (~6 minutes)

- Set price range: $1–$5 (or $1–$10 if students are ready)
- **Student routine:** Pick an item, choose a number price, write it on a sticky note, say the price aloud and stick it on.
- Language: "This costs ___ dollars."
- **Differentiation:** Pre-written price tags for struggling students. Advanced students make two-item specials.

### Step 3 — Market Play (~7 minutes)

- Roles: SHOPPER, CASHIER, SORTER — rotate after each turn.
- **Shopper script:** "I want to buy the ___. It costs $___. Here is $___ (counting)."
- **Cashier script:** "You gave me $___. That is the right amount. Thank you!"
- **Differentiation:** Struggling students get paired with peer/adult. Advanced students buy two items and add prices or calculate change.

### Step 4 — Share (quick wrap-up ~1 min)

- Prompt: "My healthy food is ____. It is healthy because ___."
- Quick round-robin: 2–3 students share before full reflection.`,
  },
  {
    title: "Engagement Checks",
    duration: "5 min",
    content: `Circulate with purpose: spend this 5-minute window actively listening and doing three short checks at each small-group station.

**Quick entry script:** "Hi market team! I'm going to listen to one sorting idea, check your price tag numbers with a thumbs check, and watch one quick sale where someone counts money. Ready?"

**Check 1 — Sorting vocabulary and reasoning** (~15–20 seconds)
- Listen for target words: "fruit," "vegetable," and a simple reason
- Teacher prompt: "Show me one thing you sorted. Is that a fruit or a vegetable? Tell me one reason."

**Check 2 — Price-tag number accuracy** (~10–15 seconds)
- Ask group to hold up one item with its sticky-note price tag
- "Thumbs up if the number is written clearly and the price is between 1 and 20."

**Check 3 — One representative counting exchange** (~20–30 seconds)
- "Can I watch one quick sale? Please count out the play money like you would when buying this."
- Observation focus: buyer counts correctly, cashier confirms aloud

**Quick formative notes:** Use shorthand — S = sorting (OK / needs support), P = pricing (OK / fix), C = counting exchange (OK / prompt needed).`,
  },
  {
    title: "Reflection",
    duration: "6 min",
    content: `**Transition** (30 seconds)
- "Market's closing time! Let's put our stalls away for a minute and sit in our circle for a quick share."

**Teacher model** (30 seconds)
- "My favorite healthy food from home is apples because they give me energy to play."
- Show sentence frame: **My favorite healthy food from home is ___ because ___.**

**Student sharing** (3 minutes 30 seconds)
- Invite each child by name to complete the sentence frame
- Repeat each child's sentence with praise
- Write a short note for each response

**Differentiation:**
- Struggling: picture cue or pre-written choice card, allow pointing
- Shy/nonverbal: whisper to teacher, who repeats aloud
- Advanced: quick math follow-up ("How much would you pay?")

**Vocabulary reinforcement** (45 seconds)
- Echo key words: "fruit," "vegetable," "price," "cost," "buy," "sell"
- Quick thumbs-up/down check on "price"

**Closure** (30 seconds)
- "Great sharing! Today we sorted fruits and vegetables, made price tags, practiced counting money, and told one healthy food from home."`,
  },
  {
    title: "Cleanup",
    duration: "2 min",
    content: `**Teacher script:** "Okay market helpers—hands on your knees and eyes on me. We have two minutes to put everything away."

**Quick roles:**
- **Basket Helper:** Return play fruits and vegetables to the two big baskets
- **Note & Marker Helper:** Stack sticky notes and cap all markers
- **Money Helper:** Put all play money into the labeled tray

**Teacher actions while students clean:**
- Circulate quickly, prompt vocabulary: "Is that a fruit or a vegetable?"
- Give 30-second warning
- Pair struggling students with peers for one-item tasks
- Ask advanced students to check price tags

**Completion checks:**
- ✅ All play fruits/vegetables are in their baskets
- ✅ Sticky notes stacked and markers capped
- ✅ Play money in the tray
- ✅ Students seated and ready`,
  },
  {
    title: "Backup Plan",
    duration: "4 min",
    content: `This quick 4-minute backup keeps us on the lesson arc when full role-play isn't possible.

**Quick Setup** (30 seconds)
- Place play produce on table in mixed order
- Give each child one sticky-note price (face-up)
- Put play money tray in the middle

**Market Match Activity:**

1) **Match** (45–60 seconds)
- Student finds a play item that could cost the price on their sticky note
- Teacher prompts: "Is that a fruit or a vegetable? Why did you choose this?"

2) **Count the money** (60–75 seconds)
- Student counts out play money to match the sticky-note price
- Teacher gives thumbs-up/down and corrects gently if needed

3) **Paired share about family foods** (45 seconds)
- "Tell your partner: 'A healthy food from my family is ___ because ___.'"

**Differentiation:**
- Struggling: pre-written tags with picture cues, pre-counted coin piles, 1–10 number line
- Advanced: pick two items that add to their price, explain extra health details

**Transition out** (15 seconds)
- "Five-second clean-up! Put money back in the tray and leave your sticky on the item."`,
  },
];
