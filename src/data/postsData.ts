// =============================================================================
// src/data/postsData.ts
//
// Single source of truth for all blog post content.
// Import `posts` into any page that needs post data:
//   import { posts } from "@/data/postsData";
//
// To add a new post: add a new object to the TOP of the array (newest first).
// =============================================================================

export interface CalloutItem {
  text: string;
  bold?: string;
}

export interface PostSection {
  type:
    | "paragraph"
    | "h2"
    | "h3"
    | "lead"
    | "rule"
    | "callout-info"
    | "callout-warning"
    | "pullquote"
    | "process"
    | "services"
    | "states"
    | "tags"
    | "cta";
  content?: string;
  stepNum?: string;
  items?: CalloutItem[];
  label?: string;
}

export interface Post {
  slug: string;
  title: string;
  titleAccent: string;
  deck: string;
  category: string;
  readTime: string;
  date: string;
  states: string[];
  sections: PostSection[];
}

export const posts: Post[] = [
  // ── POST 4 — newest first ─────────────────────────────────────────────────
  {
    slug: "electrical-load-calculations-why-panels-fail-inspection",
    title: "Electrical Load Calculations: Why Panels Fail Inspection",
    titleAccent: "Why Panels Fail Inspection",
    deck: "A failed electrical inspection doesn't always mean bad wiring. More often it means the panel was sized without a proper load calculation — and no one caught it until the inspector did. Here's what PE electrical engineers actually check, and why it matters before you build.",
    category: "PE Electrical Engineering",
    readTime: "6 min read",
    date: "April 9, 2026",
    states: ["TX", "TN", "AZ", "FL"],
    sections: [
      {
        type: "lead",
        content:
          "The electrician pulls the permit, installs the panel, and calls for inspection. The inspector shows up, reviews the load calculation — and fails it. Not because anything was wired wrong. Because the panel is undersized for what the building actually demands, and nobody ran the math before the work started.",
      },
      {
        type: "paragraph",
        content:
          "This scenario plays out constantly across residential and commercial construction in Texas, Tennessee, Arizona, and Florida. The electrical work itself is fine. The panel schedule looks reasonable. But without a proper load calculation stamped by a licensed PE Electrical Engineer, the inspector has no verified basis for approving the service size — and in an increasing number of jurisdictions, that's grounds for a failed inspection regardless of what's physically installed.",
      },
      {
        type: "paragraph",
        content:
          "Understanding why panels fail inspection starts with understanding what a load calculation actually is, what it covers, and why the number on the breaker panel isn't the whole story.",
      },
      {
        type: "h2",
        content: "What an Electrical Load Calculation Actually Is",
      },
      {
        type: "paragraph",
        content:
          "A load calculation is a formal engineering analysis — governed by NEC Article 220 — that determines the total electrical demand a building places on its service. It accounts for every load in the building: lighting, receptacles, HVAC equipment, appliances, water heaters, EV chargers, solar inverters, generators, and any special equipment. The result tells you the minimum service amperage the building requires to operate safely and code-compliantly.",
      },
      {
        type: "paragraph",
        content:
          "The NEC provides two primary methods: the Standard Method, which calculates each load individually at full demand, and the Optional Method, which applies demand factors that recognize not every load runs simultaneously at full power. Both are legitimate. Neither is a guess, and neither can be skipped. The method used affects the outcome significantly — and choosing the wrong one, or applying demand factors incorrectly, produces a calculation that looks reasonable but doesn't satisfy code.",
      },
      {
        type: "pullquote",
        content:
          "The panel size is the conclusion of an engineering calculation — not the starting point. When you size the panel first and calculate second, you're almost always working backwards.",
      },
      {
        type: "h2",
        content: "The Four Reasons Panels Fail Inspection",
      },
      {
        type: "h3",
        stepNum: "1",
        content: "No Calculation on File",
      },
      {
        type: "paragraph",
        content:
          "Many jurisdictions — particularly across Texas and Tennessee — now require a PE-stamped load calculation as part of the permit submittal for new construction and additions. If the permit was pulled without one, or if the calculation was done informally and never documented, the inspector arrives with no verified basis for the service size. The panel may be perfectly adequate, but without documentation proving it, the inspection fails.",
      },
      {
        type: "paragraph",
        content:
          "This is increasingly common on projects where the electrical contractor sized the panel based on experience and past projects rather than running the formal NEC calculation. Experience is valuable, but it isn't a PE stamp — and inspectors in most TX, TN, AZ, and FL jurisdictions know the difference.",
      },
      {
        type: "h3",
        stepNum: "2",
        content: "The Panel Is Genuinely Undersized",
      },
      {
        type: "paragraph",
        content:
          "When the calculation is run correctly and the panel still fails, it's usually because the building's actual demand exceeds what was planned for. The most common culprits are EV charging stations, added HVAC equipment, electric water heaters replacing gas, or solar PV systems with battery backup — all of which add significant load that wasn't in the original design. Each of these changes the load calculation meaningfully, and each requires a PE to recalculate service requirements before the upgrade is permitted.",
      },
      {
        type: "callout-warning",
        label: "Adding an EV charger or solar system? Read this first",
        content:
          "A Level 2 EV charger adds 40–50 amps of continuous load to your electrical service. A solar PV system with battery storage affects both import and export calculations. Either one can push a 200-amp residential service into undersized territory — and both require a PE load calculation update before the permit for the addition can be issued in most TX, TN, AZ, and FL jurisdictions.",
      },
      {
        type: "h3",
        stepNum: "3",
        content: "Panel Schedule Doesn't Match the Drawings",
      },
      {
        type: "paragraph",
        content:
          "Even when the load calculation is correct, a common inspection failure is a panel schedule that doesn't reconcile with the architectural or mechanical drawings. If the drawings show a 5-ton HVAC unit but the panel schedule lists the circuit breaker sized for a 3-ton unit, the inspector flags it as a discrepancy. The solution isn't rewiring — it's producing coordinated documents where the electrical design matches what's actually being built.",
      },
      {
        type: "paragraph",
        content:
          "This coordination problem is almost always the result of electrical plans being produced in isolation from the architectural and mechanical set. A PE Electrical Engineer working from the full drawing set — not just the electrical scope — catches these mismatches before submittal instead of at inspection.",
      },
      {
        type: "h3",
        stepNum: "4",
        content: "Demand Factors Applied Incorrectly",
      },
      {
        type: "paragraph",
        content:
          "NEC demand factors allow engineers to reduce the calculated load for certain systems based on the statistical likelihood that not all loads operate simultaneously. Applied correctly, they let a building use a smaller service panel than the sum of all connected loads would suggest. Applied incorrectly — or applied to load types that don't qualify — they produce a calculation that appears to justify an undersized service but doesn't actually satisfy the code.",
      },
      {
        type: "paragraph",
        content:
          "This is one of the most common errors in calculations produced by non-engineers. The math works. The formatting looks professional. But the demand factors are misapplied, and a knowledgeable inspector — or a utility engineer during interconnection review — will catch it.",
      },
      {
        type: "callout-info",
        label: "What a PE-Stamped Load Calculation Covers",
        items: [
          {
            bold: "General lighting and receptacle loads.",
            text: " Calculated per square footage using NEC Article 220 unit load values, applied correctly for the occupancy type.",
          },
          {
            bold: "HVAC and mechanical equipment.",
            text: " Sized from the equipment nameplate data or mechanical schedules — not estimated. Includes the largest motor load calculated at 125% per NEC requirements.",
          },
          {
            bold: "Kitchen and laundry appliances.",
            text: " Residential and commercial kitchens have specific NEC demand factors and fixed appliance rules that must be applied correctly for each occupancy classification.",
          },
          {
            bold: "EV charging, solar PV, and generators.",
            text: " Each has specific NEC article requirements for how they're counted in the service calculation and how they interact with the utility interconnection.",
          },
          {
            bold: "Total demand load and service size confirmation.",
            text: " The final output: the minimum service amperage required, confirmed against the proposed panel size, with PE stamp and license number.",
          },
        ],
      },
      {
        type: "h2",
        content: "Why Multi-Family and Commercial Projects Are Higher Risk",
      },
      {
        type: "paragraph",
        content:
          "The stakes scale up significantly for multi-family and commercial projects. A miscalculated service on a 20-unit apartment building doesn't just affect one panel — it affects the entire building's utility interconnection, the utility transformer sizing, and every tenant's service quality. Utilities in Texas, Tennessee, Arizona, and Florida all require a load calculation as part of the service application. If the engineer's calculation and the utility's calculation don't agree, the service application is rejected and construction stalls.",
      },
      {
        type: "paragraph",
        content:
          "Commercial projects add another layer: specific occupancy-based load requirements under NEC Table 220.12, demand factors for commercial kitchen equipment, emergency and standby power calculations, and in many cases a separate utility coordination study. These are not tasks for a general electrician or a residential-focused designer — they require a PE Electrical Engineer with commercial project experience.",
      },
      {
        type: "h2",
        content: "What A1 Engineering Provides",
      },
      {
        type: "paragraph",
        content:
          "A1 Engineering's PE Electrical team produces load calculations for residential, multi-family, and commercial projects across Texas, Tennessee, Arizona, and Florida. Every calculation is stamped by a licensed PE Electrical Engineer, coordinated against the architectural and mechanical drawings, and formatted to satisfy the permit submittal requirements of the specific jurisdiction.",
      },
      {
        type: "paragraph",
        content:
          "Beyond the base load calculation, we design panel schedules, size solar PV systems, engineer EV charging infrastructure, specify generator and backup power systems, and produce the HVAC electrical requirements that your mechanical contractor needs. Everything in one coordinated set — no gaps between what the electrical plans show and what every other trade is building.",
      },
      { type: "states" },
      { type: "rule" },
      {
        type: "paragraph",
        content:
          "If you need a PE-stamped load calculation, a panel schedule review, or electrical engineering for a new build, addition, or system upgrade — upload your project details and we'll respond within 24 hours. For time-sensitive inspections, call us directly at (214) 382-9584.",
      },
      {
        type: "tags",
        items: [
          { text: "PE Electrical Engineering" },
          { text: "Load Calculations" },
          { text: "Panel Schedule" },
          { text: "Electrical Inspection" },
          { text: "NEC Compliance" },
          { text: "Solar PV" },
          { text: "EV Charging" },
          { text: "Multi-Family" },
          { text: "Texas" },
          { text: "Tennessee" },
          { text: "Arizona" },
          { text: "Florida" },
        ],
      },
      { type: "cta" },
    ],
  },

  // ── POST 3 — newest first ─────────────────────────────────────────────────
  {
    slug: "foundation-letters-explained-what-lenders-and-cities-require",
    title: "Foundation Letters Explained: What Lenders and Cities Actually Require",
    titleAccent: "What Lenders and Cities Actually Require",
    deck: "You're closing on a loan or pulling a permit and suddenly someone asks for a 'foundation letter.' What does that mean, who has to write it, and what happens if you skip it? A licensed PE breaks it down.",
    category: "Engineering & Structural",
    readTime: "5 min read",
    date: "April 2, 2026",
    states: ["TX", "TN", "AZ", "FL"],
    sections: [
      {
        type: "lead",
        content:
          "You're two weeks from closing on a construction loan — or trying to pull a building permit for a new addition — and your lender or city inspector asks for a 'foundation letter from a licensed engineer.' You've never heard this term. Your contractor hasn't mentioned it. Now everything is on hold.",
      },
      {
        type: "paragraph",
        content:
          "Foundation letters are one of the most commonly requested — and least understood — documents in residential and commercial construction. They go by different names depending on who's asking: a foundation compliance letter, an engineering letter, a structural letter of certification, or simply a PE letter. The name changes. The requirement doesn't. A licensed Professional Engineer has to write it, stamp it, and stand behind it.",
      },
      {
        type: "h2",
        content: "Why Foundation Letters Exist",
      },
      {
        type: "paragraph",
        content:
          "Lenders and municipalities don't have structural engineers on staff. When a bank is financing a property or a city is issuing a permit, they need independent, credentialed verification that the foundation meets code, was built as designed, or is structurally sound for the intended use. A PE letter provides that assurance — and it comes with professional liability attached. If an engineer signs off incorrectly, their license is on the line. That accountability is exactly what lenders and jurisdictions are paying for when they require it.",
      },
      {
        type: "pullquote",
        content:
          "A foundation letter isn't a formality. It's a licensed engineer staking their professional credentials on the condition of your structure.",
      },
      {
        type: "h2",
        content: "The Three Most Common Scenarios",
      },
      {
        type: "h3",
        stepNum: "1",
        content: "FHA, VA, and HUD Loan Requirements",
      },
      {
        type: "paragraph",
        content:
          "Federal lending programs have specific foundation requirements that conventional loans don't always enforce. FHA and VA loans on manufactured or modular homes — and in many cases site-built homes — require a foundation inspection and letter from a licensed PE confirming the foundation meets HUD Permanent Foundation Guide standards. Without it, the loan won't close. This requirement catches many buyers off guard because it surfaces late in the transaction, after the appraisal is already done.",
      },
      {
        type: "callout-warning",
        label: "Don't wait until closing week",
        content:
          "FHA/VA foundation letters need to be ordered early — ideally at the same time as the appraisal. A PE inspection takes time to schedule, and lenders typically require the letter before they'll issue a clear to close. Ordering it late is the single most common cause of delayed closings on FHA and VA transactions.",
      },
      {
        type: "h3",
        stepNum: "2",
        content: "Building Permits for Additions and New Construction",
      },
      {
        type: "paragraph",
        content:
          "Most jurisdictions in TX, TN, AZ, and FL require a PE-stamped foundation design as part of any new construction permit package. For additions — a second story, a room addition, an ADU — the permit office typically wants confirmation that the existing foundation can carry the added load. That confirmation comes in the form of a PE letter or stamped drawings that document the analysis. Submitting without it results in an incomplete submittal and a permit hold.",
      },
      {
        type: "paragraph",
        content:
          "The engineering behind this isn't cosmetic. Adding a story to a home increases the load on every wall, beam, and footing below it. A PE verifies that the existing foundation was built with enough capacity to support what's being added — or specifies what reinforcement is needed before construction begins.",
      },
      {
        type: "h3",
        stepNum: "3",
        content: "Post-Repair Certification and Insurance Claims",
      },
      {
        type: "paragraph",
        content:
          "After foundation repair work is completed — whether pier installation, underpinning, or drainage remediation — some lenders, insurers, and jurisdictions require a post-repair certification letter. This confirms that the repair was performed correctly and that the foundation is now structurally adequate. Without it, the repair itself may not satisfy a lender's conditions or an insurer's requirements for restoring coverage.",
      },
      {
        type: "callout-info",
        label: "What a Foundation Letter Typically Covers",
        items: [
          {
            bold: "Foundation type and construction.",
            text: " Documenting whether the foundation is slab-on-grade, post-tension, pier-and-beam, or another system, and how it was built.",
          },
          {
            bold: "Code compliance confirmation.",
            text: " Verifying the foundation meets the applicable building code for the jurisdiction and use — residential, commercial, or manufactured housing standards.",
          },
          {
            bold: "Structural adequacy for intended use.",
            text: " For additions and load changes, confirming the existing foundation has sufficient capacity for the proposed scope.",
          },
          {
            bold: "Post-repair or post-construction certification.",
            text: " Confirming completed work meets engineering standards and any previously issued repair recommendations.",
          },
          {
            bold: "PE stamp and license number.",
            text: " The document must carry the wet or digital stamp of a PE licensed in the state where the property is located — not just any engineer.",
          },
        ],
      },
      {
        type: "h2",
        content: "What the Inspection Actually Involves",
      },
      {
        type: "paragraph",
        content:
          "A foundation letter isn't produced from a desk. It requires a physical inspection of the property — a licensed PE visiting the site, observing the foundation condition, taking measurements, and reviewing any available construction documents. For FHA/VA transactions, the engineer will specifically be checking for compliance with HUD Permanent Foundation Guide criteria, which includes things like the foundation being properly anchored, continuous and load-bearing, and meeting minimum depth requirements.",
      },
      {
        type: "paragraph",
        content:
          "For permit-related letters, the PE may also review the geotechnical data for the site, the original foundation design documents, and any evidence of prior movement or repair. All of that feeds into the letter itself, which is a professional opinion document — meaning the engineer is stating a conclusion supported by observation and analysis, not just checking a box.",
      },
      {
        type: "callout-warning",
        label: "Home inspectors cannot write foundation letters",
        content:
          "A general home inspection report is not a substitute for a PE foundation letter. Home inspectors are not licensed engineers and cannot produce documents that satisfy lender or permit requirements. If your lender or city asks for a PE letter, it must come from a licensed Professional Engineer — specifically one licensed in the state where the property is located.",
      },
      {
        type: "h2",
        content: "What A1 Engineering Provides",
      },
      {
        type: "paragraph",
        content:
          "A1 Engineering provides PE-stamped foundation letters for residential and commercial properties across Texas, Tennessee, Arizona, and Florida. Our engineers perform on-site inspections, review construction documentation, and produce letters that satisfy FHA, VA, and HUD requirements, municipal permit offices, lenders, and insurance underwriters.",
      },
      {
        type: "paragraph",
        content:
          "Because we're licensed in all four states, we can handle properties across your entire portfolio without coordinating with multiple engineering firms — one engagement, consistent documentation, and PE stamps that are valid wherever the property sits.",
      },
      { type: "states" },
      { type: "rule" },
      {
        type: "paragraph",
        content:
          "If you need a foundation letter for a loan closing, permit submittal, or post-repair certification, upload your project details and we'll respond within 24 hours. For time-sensitive closings, call us directly at (214) 382-9584.",
      },
      {
        type: "tags",
        items: [
          { text: "Foundation Letters" },
          { text: "FHA VA HUD" },
          { text: "PE Stamped Plans" },
          { text: "Structural Engineering" },
          { text: "Foundation Inspection" },
          { text: "Building Permits" },
          { text: "Loan Closing" },
          { text: "Texas" },
          { text: "Tennessee" },
          { text: "Arizona" },
          { text: "Florida" },
        ],
      },
      { type: "cta" },
    ],
  },

  // ── POST 2 — newest first ─────────────────────────────────────────────────
  {
    slug: "do-you-need-an-engineer-to-remove-a-load-bearing-wall",
    title: "Do You Need an Engineer to Remove a Load-Bearing Wall?",
    titleAccent: "a Load-Bearing Wall?",
    deck: "Most homeowners and contractors assume any wall can come down with a permit and a good contractor. Here's what actually happens structurally when you remove a load-bearing wall — and why a PE stamp is the difference between a clean inspection and a costly failure.",
    category: "Engineering & Structural",
    readTime: "3 min read",
    date: "March 26, 2026",
    states: ["TX", "TN", "AZ", "FL"],
    sections: [
      {
        type: "lead",
        content:
          "You want to open up the floor plan — knock out a wall between the kitchen and living room, or remove that dividing wall to create a larger primary suite. The contractor says it's straightforward. The permit office wants engineering. Who's right?",
      },
      {
        type: "paragraph",
        content:
          "Both, actually. The work itself may be straightforward for an experienced crew — but only if someone with a PE license has already determined what that wall is carrying and engineered the beam that replaces it. Skip that step and you're not just risking a failed inspection. You're risking a structural failure that shows up months or years later.",
      },
      {
        type: "h2",
        content: "What a Load-Bearing Wall Is Actually Doing",
      },
      {
        type: "paragraph",
        content:
          "Load-bearing walls transfer weight from the roof and upper floors down through the structure to the foundation. When you remove one without a proper replacement beam, that load doesn't disappear — it redistributes, often unevenly, into adjacent framing that wasn't designed to carry it. The result is deflection, cracking, stuck doors and windows, and in serious cases, structural movement that's expensive to reverse.",
      },
      {
        type: "pullquote",
        content:
          "The beam size isn't a guess. It's a calculation based on span, load, lumber species, and what's sitting above. That calculation requires a licensed structural PE.",
      },
      {
        type: "h2",
        content: "What the Engineering Actually Covers",
      },
      {
        type: "callout-info",
        label: "What a Structural PE Assessment Includes",
        items: [
          {
            bold: "Load path analysis.",
            text: " Tracing exactly what weight the wall carries — roof load, floor load, point loads from above — and confirming where it needs to go after removal.",
          },
          {
            bold: "Beam sizing calculation.",
            text: " Determining the correct header or flush beam size, material (LVL, steel, dimensional lumber), and connection requirements based on the actual span and load.",
          },
          {
            bold: "Post and foundation check.",
            text: " The beam has to land somewhere. A PE confirms the posts and footings at the beam ends can handle the concentrated load — a common oversight in DIY plans.",
          },
          {
            bold: "PE-stamped drawings.",
            text: " The document your permit office, inspector, and contractor all need to proceed. Without it, most jurisdictions won't issue a structural permit for wall removal.",
          },
        ],
      },
      {
        type: "callout-warning",
        label: "Don't rely on online beam calculators",
        content:
          "Online span tables and beam calculators can give ballpark numbers, but they don't account for your specific load path, existing framing conditions, or local code amendments. A beam that's undersized by even one size can deflect visibly under load — and that's after the drywall is back up.",
      },
      {
        type: "h2",
        content: "When You Definitely Need a PE",
      },
      {
        type: "paragraph",
        content:
          "Any wall removal that requires a structural permit — which in TX, TN, AZ, and FL is most of them — requires PE-stamped drawings to pull that permit. Beyond the permit requirement, you should always bring in a licensed structural engineer if: the wall runs parallel to your floor joists and you're not sure whether it's bearing, if there's a wall directly above the one you're removing, if the span exceeds 10 feet, or if the home is older and the original framing isn't documented.",
      },
      {
        type: "paragraph",
        content:
          "At A1 Engineering, our residential engineering inspections and structural assessments cover exactly this scope — confirming whether a wall is load-bearing, sizing the replacement beam, and producing the PE-stamped drawings your contractor and permit office need to move forward cleanly.",
      },
      { type: "rule" },
      {
        type: "paragraph",
        content:
          "If you're planning a wall removal and need a structural assessment or PE-stamped drawings, upload your floor plan and project details and we'll get back to you within 24 hours.",
      },
      {
        type: "tags",
        items: [
          { text: "Structural Engineering" },
          { text: "Load-Bearing Walls" },
          { text: "Residential Engineering" },
          { text: "PE Stamped Plans" },
          { text: "Building Permits" },
          { text: "Beam Design" },
          { text: "Texas" },
          { text: "Tennessee" },
          { text: "Arizona" },
          { text: "Florida" },
        ],
      },
      { type: "cta" },
    ],
  },

  // ── POST 1 — archive ──────────────────────────────────────────────────────
  {
    slug: "why-projects-stall-at-permitting",
    title: "Why Your Project Stalls at Permitting",
    titleAccent: "at Permitting",
    deck: "Permit delays rarely come from bad luck. They come from missing stamps, mismatched plans, and coordination gaps that a PE-led team catches before submittal.",
    category: "Permitting & Land Development",
    readTime: "3 min read",
    date: "March 19, 2026",
    states: ["TX", "TN", "AZ", "FL"],
    sections: [
      {
        type: "lead",
        content:
          "You've secured the land, lined up the contractor, and the clock is running on your construction loan. Then the permit comes back rejected — and a 6-week delay quietly costs you thousands before a single nail is driven. We see it constantly, and it's almost always the same root causes.",
      },
      {
        type: "paragraph",
        content:
          "The permit process isn't unpredictable. Every jurisdiction has a checklist. The problem is that most builders assemble their permit package from multiple vendors — a designer here, an electrical consultant there, a geotech firm separately — with nobody owning the whole picture. Documents come back mismatched, missing stamps, or non-compliant with the specific energy code of the state the project is in.",
      },
      {
        type: "pullquote",
        content:
          "One unstamped document in a package stops the entire submittal. It doesn't matter how good everything else is.",
      },
      {
        type: "h2",
        content: "The Three Things That Cause Most Rejections",
      },
      {
        type: "callout-info",
        label: "Most Common Permit Rejection Causes",
        items: [
          {
            bold: "Missing or wrong PE stamp.",
            text: " Engineering documents — foundation design, electrical load calcs, structural plans — must be stamped by a PE licensed in that specific state. An architect's stamp does not substitute for a structural PE stamp. Ever.",
          },
          {
            bold: "Energy code mismatch.",
            text: " Texas, Tennessee, Arizona, and Florida each have different IECC amendments. Plans that passed in one state routinely fail in another. HERS index compliance and blower door test results need to be designed in from the start — not retrofitted at the end.",
          },
          {
            bold: "Incomplete site plans.",
            text: " Jurisdictions need to see property boundaries, setbacks, utility connections, grading, and drainage — all current. A site plan drafted without a fresh boundary or topographic survey leads to setback miscalculations and a resubmit cycle that averages 3–6 weeks.",
          },
        ],
      },
      {
        type: "h2",
        content: "What Changes When One Team Owns It All",
      },
      {
        type: "paragraph",
        content:
          "When the same PE-led team handles your survey, foundation design, electrical load calculations, energy compliance, and permit submittal, the documents are coordinated from day one. There's no gap between what the site plan shows and what the electrical plan calls for. No mismatched stamps. No energy code surprises at final inspection.",
      },
      {
        type: "paragraph",
        content:
          "That's the model we built A1 Engineering around — licensed PEs covering structural, electrical, and green/energy compliance across TX, TN, AZ, and FL, handling every phase from initial soil survey to Certificate of Occupancy.",
      },
      { type: "states" },
      {
        type: "callout-warning",
        label: "Expanding into a new state?",
        content:
          "PE licensure is state-specific. A PE licensed in Texas cannot legally stamp documents for a Florida or Tennessee project. If you're growing your portfolio across state lines, confirm your engineering team holds active licenses in every state you're building in — before you submit anything.",
      },
      { type: "rule" },
      {
        type: "paragraph",
        content:
          "If you have a project in the works — or you've already hit a rejection and need to get back on track — upload your plans and project details and we'll respond within 24 hours.",
      },
      {
        type: "tags",
        items: [
          { text: "Building Permits" },
          { text: "PE Stamped Plans" },
          { text: "Land Development" },
          { text: "Green Code Compliance" },
          { text: "Foundation Design" },
          { text: "Texas" },
          { text: "Tennessee" },
          { text: "Arizona" },
          { text: "Florida" },
        ],
      },
      { type: "cta" },
    ],
  },
];