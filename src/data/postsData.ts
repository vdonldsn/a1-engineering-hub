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
  // ── POST 3 — newest first ─────────────────────────────────────────────────
  {
    slug: "foundation-letters-explained-what-lenders-and-cities-require",
    title: "Foundation Letters Explained: What Lenders and Cities Actually Require",
    titleAccent: "What Lenders and Cities Actually Require",
    deck: "You're closing on a loan or pulling a permit and suddenly someone asks for a 'foundation letter.' What does that mean, who has to write it, and what happens if you skip it? A licensed PE breaks it down.",
    category: "Engineering & Structural",
    readTime: "5 min read",
    date: "April 2026",
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
    date: "March 2026",
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
    date: "March 2026",
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
