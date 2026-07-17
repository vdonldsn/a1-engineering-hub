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
  // ── POST 10 — newest first ────────────────────────────────────────────────
  {
    slug: "zoning-vs-building-code-two-different-sets-of-rules",
    title: "Zoning vs Building Code: Two Different Sets of Rules That Both Govern Your Project",
    titleAccent: "Two Different Sets of Rules That Both Govern Your Project",
    deck: "Most developers assume one approval means they're good to go. It doesn't. Zoning and building code are two completely separate regulatory systems, administered by different departments, enforced at different stages — and failing to understand both is one of the most common and expensive mistakes in land development.",
    category: "Permitting & Land Development",
    readTime: "6 min read",
    date: "July 15, 2026",
    states: ["TX", "TN", "AZ", "FL"],
    sections: [
      {
        type: "lead",
        content:
          "Here's a scenario that plays out constantly across Texas, Tennessee, Arizona, and Florida: a developer buys a piece of land, gets the building plans approved by the building department, starts construction — and then gets stopped by the planning department because the project violates a zoning requirement nobody caught during design. The building plans were fine. The zoning wasn't. Two different departments, two different approvals, and a project on hold.",
      },
      {
        type: "paragraph",
        content:
          "The root cause is a misconception that's remarkably common even among experienced builders: that 'getting a permit' is a single thing. It isn't. A building permit and zoning compliance are two separate regulatory tracks that run in parallel, answer different questions, and can independently stop a project at any phase. Understanding the difference between them — and knowing which questions each one answers — is foundational to keeping any development project on schedule.",
      },
      {
        type: "h2",
        content: "What Zoning Actually Governs",
      },
      {
        type: "paragraph",
        content:
          "Zoning is land-use law. It's the set of rules that governs what can be built on a given piece of land — not how it's built, but what it's used for, how big it can be, how close it can sit to the property lines, and how much of the lot it can cover. Zoning is administered by the local planning and zoning department, and it derives from the jurisdiction's master plan and zoning ordinance — documents that assign every parcel in the city or county to a zoning district with specific development standards.",
      },
      {
        type: "paragraph",
        content:
          "When you look up a property's zoning classification — R-1, C-2, MF-3, I-1, and so on — you're looking at a code that maps to a set of use permissions and development standards in the zoning ordinance. The use permissions tell you what's allowed on the land: single-family residential, multi-family residential, retail, office, industrial, or mixed use. The development standards tell you how development on that land must be configured: minimum lot size, minimum lot width, front and side and rear setbacks, maximum building height, maximum lot coverage, maximum impervious cover, parking requirements, and landscaping requirements.",
      },
      {
        type: "callout-info",
        label: "What zoning controls",
        items: [
          {
            bold: "Land use.",
            text: " What the property can be used for — residential, commercial, industrial, agricultural, or mixed use. A building that's structurally perfect still can't be built if the proposed use isn't permitted in the zoning district.",
          },
          {
            bold: "Setbacks.",
            text: " Minimum distances from property lines, rights-of-way, and easements within which no structure can be built. These vary by zoning district, lot size, and sometimes by street classification.",
          },
          {
            bold: "Building height.",
            text: " Maximum allowable height in feet or stories. In some districts this is absolute; in others it varies based on proximity to adjacent uses.",
          },
          {
            bold: "Lot coverage and impervious cover.",
            text: " The maximum percentage of a lot that can be covered by structures and paved surfaces. This is a zoning control, not a building code control — and it's checked at the planning department, not the building department.",
          },
          {
            bold: "Parking requirements.",
            text: " Minimum number of parking spaces based on use and square footage. A restaurant has different parking requirements than an office, which has different requirements than a medical clinic.",
          },
          {
            bold: "Density.",
            text: " For residential development, the maximum number of dwelling units per acre. This controls how many units can be built on a multi-family site regardless of how the building is designed.",
          },
        ],
      },
      {
        type: "h2",
        content: "What Building Code Actually Governs",
      },
      {
        type: "paragraph",
        content:
          "Building code is construction law. It governs how a building is built — the structural systems, fire resistance, means of egress, mechanical systems, electrical systems, plumbing systems, energy performance, and accessibility features. Building code doesn't care about land use or setbacks or parking. It cares about whether the building is safe for the people inside it.",
      },
      {
        type: "paragraph",
        content:
          "In Texas, Tennessee, Arizona, and Florida, building code is based on the International Building Code (IBC) for commercial construction and the International Residential Code (IRC) for single-family and duplex construction, each adopted with state-specific amendments. The building code is administered by the local building department, and compliance is verified through plan review of the construction drawings and inspection at multiple phases of construction. The building department issues the building permit, conducts inspections, and ultimately issues the Certificate of Occupancy.",
      },
      {
        type: "callout-info",
        label: "What building code controls",
        items: [
          {
            bold: "Structural systems.",
            text: " Foundation design, framing, load paths, connections, and material specifications. Governed by the IBC structural provisions and referenced standards like ASCE 7.",
          },
          {
            bold: "Fire resistance and protection.",
            text: " Fire-rated assemblies between occupancies, sprinkler systems, fire alarm systems, and means of egress. Occupancy classification drives these requirements.",
          },
          {
            bold: "Means of egress.",
            text: " Exit locations, corridor widths, travel distances, door hardware, and emergency lighting. The IBC specifies these based on occupancy type and building size.",
          },
          {
            bold: "Mechanical, electrical, and plumbing systems.",
            text: " HVAC design, electrical service sizing, plumbing fixture counts, and system installation requirements. Each trade has its own code chapter and inspection track.",
          },
          {
            bold: "Energy performance.",
            text: " Insulation values, window performance, mechanical system efficiency, and air sealing requirements. Governed by the IECC (or Florida's own energy code) with state amendments.",
          },
          {
            bold: "Accessibility.",
            text: " ADA and state accessibility standards for commercial construction. In Texas, TAS compliance is a separate state-level review administered by TDLR in addition to the local building code review.",
          },
        ],
      },
      {
        type: "pullquote",
        content:
          "Zoning asks: can you build it here? Building code asks: can you build it this way? You need both answers to be yes before a project is legally buildable.",
      },
      {
        type: "h2",
        content: "Why They're Administered Separately — and Why That Matters",
      },
      {
        type: "paragraph",
        content:
          "The planning department and the building department are separate city departments with separate staff, separate review processes, and separate approval authority. In most jurisdictions, a project that needs both zoning approval and a building permit goes through two distinct review tracks that may run sequentially or in parallel depending on the municipality.",
      },
      {
        type: "paragraph",
        content:
          "In many Texas cities, for example, a site plan must be approved by the planning department before a building permit application can even be submitted to the building department. The planning department reviews the site plan for zoning compliance — setbacks, lot coverage, use, parking, and landscaping. Only after the site plan is approved does the building department review the construction drawings for code compliance. A project that submits to the building department before clearing planning will either be rejected at intake or will receive a building permit that's later invalidated when planning flags the zoning issue.",
      },
      {
        type: "paragraph",
        content:
          "In other jurisdictions, both reviews happen simultaneously — the site plan goes to planning and the construction drawings go to building at the same time, with each department reviewing independently. The building permit isn't issued until both departments sign off. This parallel track approach is faster when it works, but it means a zoning correction and a structural correction can both come back at the same time, requiring coordinated revisions to multiple document sets.",
      },
      {
        type: "h2",
        content: "The Most Common Zoning Mistakes That Delay Projects",
      },
      {
        type: "h3",
        stepNum: "1",
        content: "Building a Use That Isn't Permitted By Right",
      },
      {
        type: "paragraph",
        content:
          "The most fundamental zoning mistake is proposing a use that the zoning district doesn't allow. This sounds obvious, but it happens regularly because zoning ordinances are complex documents and uses don't always map intuitively to district classifications. A medical office and a general office may have different use permissions in the same district. A restaurant with a drive-through may be prohibited where a restaurant without one is permitted. A short-term rental in a residential zone may require a specific permit or may be prohibited entirely depending on the jurisdiction and recent ordinance updates.",
      },
      {
        type: "paragraph",
        content:
          "In Texas, short-term rental regulations have been in flux across most major metros as cities have adopted, amended, and in some cases reversed STR ordinances. A property that was legal as an STR under last year's ordinance may not be legal under this year's. Zoning research needs to be done at the time of the transaction or development decision, not at the time of permit application.",
      },
      {
        type: "h3",
        stepNum: "2",
        content: "Setback Violations That Emerge During Plan Review",
      },
      {
        type: "paragraph",
        content:
          "Setback violations are the most common zoning correction on permit submittals. The building fits on the lot — the dimensions work out on paper — but when the planning department measures the distance from the proposed structure to the property line, an easement, or the right-of-way, the setback is short. Sometimes by inches. The cause is almost always one of two things: an outdated or inaccurate property boundary being used as the basis for the site plan, or a setback requirement that changed under a recent zoning ordinance amendment that the designer wasn't aware of.",
      },
      {
        type: "h3",
        stepNum: "3",
        content: "Parking Calculations That Don't Account for All Uses",
      },
      {
        type: "paragraph",
        content:
          "Mixed-use projects and projects with multiple tenant types frequently run into parking calculation errors because the designer applied a single parking ratio to the entire building rather than calculating required parking for each use separately and adding them together. A building with ground-floor retail and upper-floor office space has different parking requirements for each component, and the total parking required is the sum of both — not a blended average. Getting this wrong produces a site plan with insufficient parking that gets flagged by the planning department and requires a redesign of the parking layout.",
      },
      {
        type: "h3",
        stepNum: "4",
        content: "Variances That Could Have Been Avoided With Better Site Planning",
      },
      {
        type: "paragraph",
        content:
          "A variance is a formal request for permission to deviate from a zoning standard — a reduced setback, a reduced parking count, an increased height limit. Variances require a public hearing before the zoning board of adjustment, a finding that the property has a unique hardship that makes strict compliance unreasonable, and a decision by the board that can be appealed. The process takes weeks to months and has no guaranteed outcome. Most variances that get applied for could have been avoided if the site planning process had identified the constraint early enough to design around it.",
      },
      {
        type: "callout-warning",
        label: "Variances are a last resort, not a planning strategy",
        content:
          "Some developers treat variance applications as a standard part of the development process — a way to get a little more building on a constrained site. This is a high-risk strategy. Variance approvals depend on board composition, neighborhood opposition, and political factors that have nothing to do with the quality of the project. A development plan that depends on a variance approval is a development plan that may not be buildable. Identify zoning constraints before the site plan is designed, not after.",
      },
      {
        type: "h2",
        content: "How the Engineering Team Fits Into Both Tracks",
      },
      {
        type: "paragraph",
        content:
          "The engineering team's role spans both regulatory tracks — and that's precisely why coordination between the site plan (which addresses zoning) and the construction drawings (which address building code) matters so much. A setback shown on the site plan has to match the foundation placement shown on the structural drawings. A parking count on the site plan has to align with the accessible parking spaces shown on the civil drawings. An impervious cover calculation on the site plan has to account for the same surfaces that appear in the drainage design.",
      },
      {
        type: "paragraph",
        content:
          "When the site plan and the construction drawings are produced by the same coordinated team, these consistencies are built in from the start. When they're produced by different firms working from different base documents, the inconsistencies surface at plan review — sometimes in both departments simultaneously, requiring parallel corrections to both document sets. That's the scenario that turns a four-week permit process into a twelve-week one.",
      },
      {
        type: "paragraph",
        content:
          "A1 Engineering handles the engineering and design documentation for both tracks — PE-stamped site plans that satisfy zoning review and PE-stamped construction drawings that satisfy building code review — across Texas, Tennessee, Arizona, and Florida. Starting from a current survey and a thorough zoning analysis, we produce documents that are internally consistent and jurisdiction-specific from the first submission.",
      },
      { type: "states" },
      { type: "rule" },
      {
        type: "paragraph",
        content:
          "If you're starting a project and want to make sure both the zoning and building code tracks are covered before design begins, upload your project details and we'll respond within 24 hours. For time-sensitive submittals, call us directly at (214) 382-9584.",
      },
      {
        type: "tags",
        items: [
          { text: "Zoning" },
          { text: "Building Code" },
          { text: "Land Development" },
          { text: "Building Permits" },
          { text: "Site Planning" },
          { text: "Variances" },
          { text: "Setbacks" },
          { text: "Parking Requirements" },
          { text: "IBC" },
          { text: "Texas" },
          { text: "Tennessee" },
          { text: "Arizona" },
          { text: "Florida" },
        ],
      },
      { type: "cta" },
    ],
  },

  // ── POST 9 — newest first ─────────────────────────────────────────────────
  {
    slug: "certificate-of-occupancy-what-it-takes-and-why-projects-get-stuck",
    title: "The Certificate of Occupancy: What It Takes to Get One and Why Projects Get Stuck",
    titleAccent: "What It Takes to Get One and Why Projects Get Stuck",
    deck: "The CO is the finish line of every construction project — and it's where more projects stall than most people expect. Here's exactly what inspectors are checking, what holds things up, and what you can do before construction starts to make sure the finish line doesn't move on you.",
    category: "Permitting & Land Development",
    readTime: "7 min read",
    date: "July 6, 2026",
    states: ["TX", "TN", "AZ", "FL"],
    sections: [
      {
        type: "lead",
        content:
          "You're done building. The crew has cleared out. The paint is dry. And somewhere between your finished building and the moment you can legally occupy it sits a document — the Certificate of Occupancy — that the city hasn't issued yet. For some projects, getting the CO is a formality that takes a few days. For others, it turns into a weeks-long back-and-forth that nobody planned for, carrying costs keep running, and tenants or buyers are waiting. The difference almost always comes down to what was — or wasn't — done during design and construction.",
      },
      {
        type: "paragraph",
        content:
          "A Certificate of Occupancy is the legal document issued by the local building authority that certifies a building is safe for its intended use and has been constructed in accordance with the approved permit documents, applicable building codes, and all required inspections. Without it, a building cannot be legally occupied — not by tenants, not by owners, not for any commercial purpose. Lenders won't disburse final loan draws. Property cannot be sold as improved. Businesses cannot open. The CO is the legal handshake between the jurisdiction and the project, and jurisdictions don't issue it until they're satisfied that everything checks out.",
      },
      {
        type: "paragraph",
        content:
          "What most builders and developers underestimate is how many independent systems the CO process touches simultaneously — structural, mechanical, electrical, plumbing, fire protection, energy compliance, accessibility, and civil site work all have to be signed off before a final CO is issued. Each one is its own inspection track. Each one can produce its own hold. And because they often run in parallel rather than sequentially, a problem discovered in one track doesn't just delay that track — it delays the whole project.",
      },
      {
        type: "h2",
        content: "What Inspectors Are Actually Checking at Final",
      },
      {
        type: "paragraph",
        content:
          "The final inspection for a CO isn't a single visit from a single inspector. It's a coordinated series of trade inspections — each conducted by an inspector with specific authority over their discipline — that all have to pass before the building official will issue the CO. Understanding what each trade inspector is looking for is the first step toward making sure none of them have a reason to come back a second time.",
      },
      {
        type: "callout-info",
        label: "What each final inspection covers",
        items: [
          {
            bold: "Building / structural final.",
            text: " Confirms the structure was built per the approved architectural and structural drawings. Checks that all framing, insulation, fireblocking, and finish work is complete and code-compliant. The building inspector typically signs off last, after all trade inspections are complete.",
          },
          {
            bold: "Mechanical final.",
            text: " HVAC equipment installed per approved mechanical drawings, ductwork complete and properly supported, exhaust fans functional, equipment access panels in place. In most jurisdictions a duct leakage test result is required at this stage.",
          },
          {
            bold: "Electrical final.",
            text: " Panel is complete with all breakers labeled, all outlets and fixtures installed and functional, GFCI and AFCI protection in required locations, smoke and CO detector placement per code. The electrical inspector will also verify that any EV chargers, solar systems, or generators were installed per the approved electrical drawings.",
          },
          {
            bold: "Plumbing final.",
            text: " All fixtures installed and functional, no visible leaks, water heater properly installed and protected, grease interceptor accessible and functional for food service occupancies. A final pressure test may be required.",
          },
          {
            bold: "Energy compliance / green sign-off.",
            text: " Blower door test result documented, HERS rating certificate on file if required by the jurisdiction, duct leakage test passing, and any required third-party energy inspection completed. In Texas this must be documented before the building final.",
          },
          {
            bold: "Fire / life safety.",
            text: " Smoke detectors, carbon monoxide detectors, fire sprinkler systems (where required), exit signage, emergency lighting, and fire-rated assemblies all verified. Commercial projects require a separate fire marshal inspection in most jurisdictions.",
          },
          {
            bold: "Site / civil.",
            text: " Driveway approach complete, accessible parking per approved site plan, stormwater controls in place, landscaping installed if required by the permit, and site grading draining away from the structure as designed.",
          },
        ],
      },
      {
        type: "h2",
        content: "The Seven Most Common Reasons COs Get Held Up",
      },
      {
        type: "h3",
        stepNum: "1",
        content: "Open Permit Inspections From Earlier Phases",
      },
      {
        type: "paragraph",
        content:
          "One of the most frustrating CO holds — and one of the most preventable — is an open inspection from a rough-in or mid-construction phase that was never called in and signed off. The framing inspection that got missed when the crew moved on. The underground plumbing that was covered before the inspector came out. The electrical rough-in that passed but was never documented in the permit system. Building departments track every required inspection on the permit record, and a final CO cannot be issued until every prior inspection on that record shows a passing result.",
      },
      {
        type: "paragraph",
        content:
          "The fix is straightforward but requires discipline: keep a running inspection log throughout construction, call inspections at the right phases, and don't cover work until you have a documented pass. On larger projects this is worth assigning to a dedicated project manager or superintendent whose job includes tracking inspection status against the permit's required inspection list.",
      },
      {
        type: "h3",
        stepNum: "2",
        content: "Energy Compliance Documentation Missing or Incomplete",
      },
      {
        type: "paragraph",
        content:
          "In Texas, Tennessee, Arizona, and Florida, energy compliance documentation isn't just a permit submittal requirement — it's a CO requirement. The blower door test result, the HERS rating certificate, the duct leakage test documentation, and any required third-party energy inspection reports all have to be on file with the jurisdiction before the CO is issued. Projects that treat energy compliance as a design-phase checkbox and then don't follow through with the required field testing and documentation consistently hit this wall at the end.",
      },
      {
        type: "callout-warning",
        label: "Florida's separate energy compliance track",
        content:
          "In Florida, energy compliance for residential construction is governed by the Florida Building Code — Energy Conservation chapter, and compliance must be documented using EnergyGauge USA software specifically. The compliance report has to be on file before the final building inspection. Projects that used REScheck or COMcheck for the permit submittal (because that's what the designer was familiar with from other states) discover at CO time that Florida doesn't accept those reports — and they have to commission a new EnergyGauge analysis on the completed building. That takes time and delays the CO.",
      },
      {
        type: "h3",
        stepNum: "3",
        content: "Accessibility Items That Weren't Caught at Plan Review",
      },
      {
        type: "paragraph",
        content:
          "ADA and state accessibility code requirements generate CO holds on commercial projects with remarkable consistency. The most common scenario is accessibility items that weren't flagged at plan review — either because the jurisdiction's plan reviewer didn't catch them or because the project changed during construction in ways that affect accessible routes — showing up as failed inspection items at the final. Accessible route continuity from the public way to the building entrance, parking space dimensions and slopes, restroom clearances, and service counter heights are the items that come up most often.",
      },
      {
        type: "paragraph",
        content:
          "In Texas, commercial projects must go through a separate TAS (Texas Accessibility Standards) review administered by TDLR before construction begins on accessibility-related elements. If the TAS certificate was obtained but construction deviated from the approved drawings, the project has to go through a TAS amendment before the CO can issue. This is a state-level review process, not a local one, and it takes time — time that wasn't in the schedule.",
      },
      {
        type: "h3",
        stepNum: "4",
        content: "Site Work That Isn't Complete at Final",
      },
      {
        type: "paragraph",
        content:
          "The building itself is done. But the site plan that was approved with the permit showed landscaping, accessible parking stripes and signage, a completed driveway approach meeting the city's sight-line requirements, and stormwater controls properly installed and stabilized. If any of those items aren't complete at the time of the site inspection, the CO is held until they are. Landscaping in particular gets underestimated — many jurisdictions require a minimum percentage of the site to be landscaped per an approved landscape plan, and drought conditions, late-season planting windows, or simple scheduling oversights leave sites without required vegetation at CO time.",
      },
      {
        type: "h3",
        stepNum: "5",
        content: "PE Sign-Off Letters That Weren't Ordered Until the End",
      },
      {
        type: "paragraph",
        content:
          "Some jurisdictions require a letter from the engineer of record — or from a third-party PE — confirming that the structural work was completed in accordance with the approved engineering drawings. This might be a foundation certification letter after the slab is poured, a framing inspection letter after the structure is complete, or a general letter of compliance at project close. These letters require a PE to physically inspect the work, review the documentation, and produce a stamped letter. That takes scheduling time and turnaround time — neither of which exists if the CO hold comes as a surprise on the day of the final inspection.",
      },
      {
        type: "h3",
        stepNum: "6",
        content: "Utility Connections Not Finalized",
      },
      {
        type: "paragraph",
        content:
          "A building that isn't connected to permanent utility services — permanent electrical service from the utility (not temporary construction power), permanent water and sewer connections, and gas service if applicable — typically can't receive a CO. Utility service connections have their own timeline that's entirely outside the jurisdiction's control. In high-growth markets like DFW and the Phoenix metro, utility service connection lead times can run eight to twelve weeks from application to energization. Projects that don't initiate the utility service application early in construction consistently find themselves in a finished building waiting on the utility company while the CO sits on hold.",
      },
      {
        type: "h3",
        stepNum: "7",
        content: "Changes During Construction That Weren't Permitted",
      },
      {
        type: "paragraph",
        content:
          "Field modifications happen on every project. A wall moved a few feet for layout reasons. An HVAC unit upgraded to a larger size. A window added that wasn't on the approved drawings. When those modifications affect structural, mechanical, electrical, or energy compliance elements and weren't submitted as a revised permit, the final inspector sees work that doesn't match the approved drawings — and issues a correction notice requiring either a revised permit or a PE letter documenting that the change is code-compliant. Either path adds time.",
      },
      {
        type: "pullquote",
        content:
          "The CO is where every decision made during design and construction either pays off or comes due. Projects that planned for it get there cleanly. Projects that didn't have a list of things to fix with a meter running.",
      },
      {
        type: "h2",
        content: "How to Plan for a Clean CO From Day One",
      },
      {
        type: "paragraph",
        content:
          "The CO timeline is entirely predictable if you work backwards from it during design. Every required inspection, every required document, every required third-party certification can be identified at the start of the project from the approved permit documents and the jurisdiction's CO checklist. Most jurisdictions publish their CO requirements — or will tell you exactly what's required if you ask before you submit. The projects that hit CO holds are almost never surprised by what the holds are — they just didn't plan for them.",
      },
      {
        type: "paragraph",
        content:
          "Practically, this means identifying energy compliance testing requirements at design, not at rough-in. It means applying for permanent utility service the week permits are pulled, not the week construction is done. It means scheduling the TAS review in Texas at the same time the local permit is submitted, not after. It means tracking every required inspection against the permit inspection list throughout construction, not reviewing it for the first time when the final is called.",
      },
      {
        type: "h2",
        content: "Where A1 Engineering Fits In",
      },
      {
        type: "paragraph",
        content:
          "A1 Engineering handles the engineering side of CO readiness across Texas, Tennessee, Arizona, and Florida — PE-stamped energy compliance documentation, foundation and structural certification letters, green code sign-off, and engineering inspection reports that jurisdictions require as part of the CO package. Because we're involved from the permit submittal phase, we're tracking what documentation the CO will require from day one rather than discovering it at the end.",
      },
      {
        type: "paragraph",
        content:
          "For projects that are already built and stuck at CO — whether it's an energy compliance gap, a missing PE letter, a failed blower door test, or a structural field modification that needs documentation — we diagnose the specific hold and produce the documentation or inspection report that resolves it. Getting a CO unstuck is a well-defined problem once you know exactly what the jurisdiction is waiting for.",
      },
      { type: "states" },
      { type: "rule" },
      {
        type: "paragraph",
        content:
          "If you're approaching CO on a project and need PE-stamped documentation, a certification letter, or energy compliance sign-off — or if your CO is already on hold and you need to figure out why — upload your project details and we'll respond within 24 hours. For time-sensitive situations, call us directly at (214) 382-9584.",
      },
      {
        type: "tags",
        items: [
          { text: "Certificate of Occupancy" },
          { text: "Building Permits" },
          { text: "Final Inspection" },
          { text: "Energy Compliance" },
          { text: "ADA Accessibility" },
          { text: "PE Sign-Off" },
          { text: "Construction Closeout" },
          { text: "Texas" },
          { text: "Tennessee" },
          { text: "Arizona" },
          { text: "Florida" },
        ],
      },
      { type: "cta" },
    ],
  },

  // ── POST 8 — newest first ─────────────────────────────────────────────────
  {
    slug: "hers-ratings-explained-what-the-number-means-and-who-tests-it",
    title: "HERS Ratings Explained: What the Number Actually Means and Who Has to Test It",
    titleAccent: "What the Number Actually Means and Who Has to Test It",
    deck: "Your new home has a HERS score of 52. Your neighbor's is 68. Your lender is asking for proof of HERS compliance before closing. If you're nodding along while quietly having no idea what any of that means — this post is for you.",
    category: "Green & Energy",
    readTime: "7 min read",
    date: "June 12, 2026",
    states: ["TX", "TN", "AZ", "FL"],
    sections: [
      {
        type: "lead",
        content:
          "Energy efficiency used to be a vague selling point — good insulation, a high-efficiency HVAC unit, maybe some double-pane windows. Today it's a number. A single score that shows up on closing documents, permit packages, appraisals, and mortgage conditions. That number is the HERS Index, and whether you're a homeowner, a builder, or a developer, understanding what it measures — and what it takes to certify it — is increasingly non-negotiable.",
      },
      {
        type: "paragraph",
        content:
          "HERS stands for Home Energy Rating System. It's the nationally recognized standard for measuring the energy performance of residential buildings, developed and administered by RESNET — the Residential Energy Services Network. The score is calculated by a certified HERS rater who models the home's energy systems and compares the result against a reference home built to a standardized baseline. The lower the score, the more energy efficient the home.",
      },
      {
        type: "paragraph",
        content:
          "That sounds straightforward enough. Where it gets complicated — and where builders, buyers, and developers run into real problems — is in understanding the difference between what a HERS rater does and what a PE energy engineer does, which states require a HERS score before you can occupy a new home, and what happens when the blower door test at the end of construction reveals that the home doesn't perform the way the design predicted. This post covers all of it.",
      },
      {
        type: "h2",
        content: "What the HERS Scale Actually Means",
      },
      {
        type: "paragraph",
        content:
          "The HERS Index is built around a reference point of 100 — a home built to the 2006 IECC energy code. A home that scores 100 uses exactly as much energy as that reference home. A home that scores 50 uses half as much. A home that scores 0 uses no net energy at all — the definition of a net-zero home. Most new construction today targets a score somewhere between 50 and 70, depending on the jurisdiction's energy code requirements and the builder's goals.",
      },
      {
        type: "paragraph",
        content:
          "The practical implication is that every point lower on the HERS scale represents measurable energy savings and real dollar impact over the life of the home. A home that scores 55 instead of 75 will have meaningfully lower utility bills, better thermal comfort, and a more defensible appraisal value in markets where energy performance is factored into valuations. In Texas, where summer cooling loads are extreme, the difference between a HERS 55 and a HERS 75 home can translate to hundreds of dollars annually in electricity costs.",
      },
      {
        type: "callout-info",
        label: "HERS score benchmarks at a glance",
        items: [
          {
            bold: "HERS 100.",
            text: " The reference home — built to 2006 IECC. Most existing homes built before 2010 score in this range or higher.",
          },
          {
            bold: "HERS 70–85.",
            text: " Typical for homes built to 2009–2012 IECC. Compliant in many jurisdictions but increasingly below current code minimums.",
          },
          {
            bold: "HERS 50–69.",
            text: " The target range for most new construction in TX, TN, AZ, and FL under current energy codes. ENERGY STAR certification typically requires a score at or below 70.",
          },
          {
            bold: "HERS 40–49.",
            text: " High-performance construction. Requires careful envelope design, high-efficiency mechanical systems, and tight air sealing. DOE Zero Energy Ready Home baseline.",
          },
          {
            bold: "HERS 0 or below.",
            text: " Net-zero or net-positive. Requires solar PV or other on-site generation to offset all energy consumption. The home produces as much or more energy than it uses.",
          },
        ],
      },
      {
        type: "h2",
        content: "What Goes Into the Calculation",
      },
      {
        type: "paragraph",
        content:
          "A HERS score isn't a gut-feel estimate or a checklist of features. It's a whole-home energy model, produced using RESNET-approved software, that accounts for every energy-related characteristic of the building. The inputs include the thermal envelope — insulation levels in walls, ceilings, and floors, window U-factors and solar heat gain coefficients, and foundation insulation or slab edge conditions. They also include the mechanical systems — HVAC equipment efficiency ratings, duct location and leakage rates, water heating equipment and distribution losses, and any on-site generation like solar PV.",
      },
      {
        type: "paragraph",
        content:
          "Two of those inputs deserve special attention because they're not assumptions — they're measured values that come from physical testing performed during construction. The duct leakage test quantifies how much conditioned air leaks out of the HVAC distribution system before it reaches the living space. The blower door test quantifies the overall air tightness of the building envelope. Both tests are performed by the HERS rater on the actual completed home, and both results feed directly into the final score calculation. A home that modeled well during design can score significantly worse than predicted if duct sealing or air barrier installation was sloppy during construction.",
      },
      {
        type: "pullquote",
        content:
          "A HERS score isn't just a design target. It's a verified measurement of how the finished home actually performs — not how it was supposed to perform on paper.",
      },
      {
        type: "h2",
        content: "The Blower Door Test: What It Is and Why It Makes Builders Nervous",
      },
      {
        type: "paragraph",
        content:
          "A blower door test is exactly what it sounds like: a calibrated fan is temporarily installed in an exterior door opening, the house is depressurized to a standard test pressure (50 pascals), and the airflow required to maintain that pressure is measured. That number — expressed in cubic feet per minute at 50 pascals, or CFM50 — tells you how leaky the building envelope is. The lower the CFM50 reading relative to the home's floor area, the tighter the envelope.",
      },
      {
        type: "paragraph",
        content:
          "What makes builders nervous about blower door tests is that they're objective. Air leaks don't hide. A house that looks tight — properly installed house wrap, caulked windows, foam-sealed penetrations — can still fail if the electrical boxes weren't sealed, if the attic hatch wasn't gasketed, if the plumbing penetrations through the top plate were left open. The blower door test finds all of it. In Texas under the 2021 IECC, new residential construction must achieve a maximum of 3 air changes per hour at 50 pascals — a requirement that catches a meaningful percentage of homes that weren't built with deliberate air sealing in mind.",
      },
      {
        type: "callout-warning",
        label: "Failing the blower door test after drywall",
        content:
          "The most expensive blower door failure scenario is when the test is performed after drywall is installed. At that point, finding and fixing air leaks requires cutting into finished surfaces to access the problem areas — top plates, electrical boxes, plumbing penetrations — all of which were accessible and easy to seal during framing. Most energy programs and HERS raters recommend a rough-in blower door test before drywall specifically to avoid this. If your builder isn't scheduling that test, ask why.",
      },
      {
        type: "h2",
        content: "HERS Rater vs PE Energy Engineer: Not the Same Role",
      },
      {
        type: "paragraph",
        content:
          "This is the distinction that causes the most confusion on job sites and in permit offices — and it's worth being precise about. A HERS rater is a RESNET-certified professional who models homes, performs field testing (blower door, duct leakage), and issues the official HERS score. They are not required to be engineers. Many HERS raters are building science consultants, energy auditors, or construction professionals with specific RESNET certification. Their role is to verify that the home performs as designed and to issue the rating that certifies compliance.",
      },
      {
        type: "paragraph",
        content:
          "A PE energy engineer plays a different role. They design the energy compliance strategy from the ground up — specifying the insulation assembly, selecting mechanical equipment to meet both load and efficiency requirements, producing the energy compliance documentation required for the permit package, and stamping the drawings that confirm the proposed design meets code. In jurisdictions that require PE-stamped energy compliance documentation as part of the permit submittal — which is increasingly common for commercial projects and for residential projects in jurisdictions with enhanced requirements — the PE is the one who produces that document. The HERS rater then verifies at the end of construction that what was built matches what the PE designed.",
      },
      {
        type: "callout-info",
        label: "When you need a HERS rater vs a PE energy engineer",
        items: [
          {
            bold: "New residential construction in TX, TN, AZ, or FL.",
            text: " Most jurisdictions require a HERS rating for CO. Some also require PE-stamped energy compliance documentation in the permit package — check your jurisdiction before design begins.",
          },
          {
            bold: "ENERGY STAR or DOE Zero Energy Ready certification.",
            text: " Requires a HERS rater certified in that specific program. Not all HERS raters are certified for all programs.",
          },
          {
            bold: "FHA/VA green energy requirements.",
            text: " Some loan programs require HERS documentation at closing. A HERS rater produces this; a PE is not required unless the jurisdiction also requires PE-stamped energy drawings.",
          },
          {
            bold: "Commercial projects.",
            text: " HERS applies to residential only. Commercial energy compliance uses ASHRAE 90.1 or the IECC commercial provisions and requires PE-stamped documentation. A HERS rater cannot certify a commercial building.",
          },
          {
            bold: "Permit-required energy compliance documentation.",
            text: " When a jurisdiction requires a PE stamp on the energy compliance forms in the permit package, only a licensed PE can produce it — regardless of whether a HERS rater is also involved.",
          },
        ],
      },
      {
        type: "h2",
        content: "State-by-State: What TX, TN, AZ, and FL Actually Require",
      },
      {
        type: "paragraph",
        content:
          "Energy code requirements are not uniform across the four states A1 Engineering serves, and the differences are significant enough to matter on every project. Understanding what each state requires — and where local jurisdictions have layered on additional requirements above the state baseline — is part of what A1 Engineering tracks on behalf of every client.",
      },
      {
        type: "h3",
        stepNum: "1",
        content: "Texas",
      },
      {
        type: "paragraph",
        content:
          "Texas adopted the 2021 IECC with state amendments for residential construction. New single-family homes are required to meet a HERS score threshold that varies by climate zone — Texas spans climate zones 2 through 4, and the requirements differ across them. A blower door test at rough-in and a duct leakage test are both required. Some Texas municipalities — particularly in the DFW metro — have adopted local amendments that tighten the state baseline further. The Texas Department of Licensing and Regulation (TDLR) oversees commercial energy code compliance separately from residential.",
      },
      {
        type: "h3",
        stepNum: "2",
        content: "Tennessee",
      },
      {
        type: "paragraph",
        content:
          "Tennessee adopted the 2018 IECC with state amendments. The state spans climate zones 3 and 4 — Eastern Tennessee (the mountains) has significantly different heating load requirements than Middle and West Tennessee. A single set of compliance documentation does not work statewide, and builders expanding from Nashville or Memphis into Eastern Tennessee frequently discover this when their standard energy package fails to meet the climate zone 4 requirements. Duct testing is required; blower door testing is required in climate zone 4.",
      },
      {
        type: "h3",
        stepNum: "3",
        content: "Arizona",
      },
      {
        type: "paragraph",
        content:
          "Arizona adopted the 2018 IECC with state amendments and spans climate zones 2 through 5 — one of the widest climate zone ranges of any single state. Phoenix and Tucson are in climate zone 2, the hottest classification, with extreme cooling loads and minimal heating requirements. Flagstaff is in climate zone 5 with significant heating loads and snow. Most Arizona jurisdictions require a HERS rating for new residential construction. The Phoenix metro has solar-ready requirements that affect both the electrical design and the HERS calculation when solar is planned.",
      },
      {
        type: "h3",
        stepNum: "4",
        content: "Florida",
      },
      {
        type: "paragraph",
        content:
          "Florida does not use the IECC for residential energy compliance. Florida has its own Florida Building Code — Energy Conservation chapter, and compliance must be demonstrated using EnergyGauge USA software specifically. This catches out-of-state designers constantly — submitting an REScheck or COMcheck compliance report instead of an EnergyGauge output is an automatic plan review rejection in Florida. The Florida Building Code is updated on a three-year cycle tied to the state legislature's adoption schedule, not the IECC update cycle, which means Florida's energy requirements can be both more and less stringent than the current IECC depending on the specific provision.",
      },
      {
        type: "h2",
        content: "What A1 Engineering Provides",
      },
      {
        type: "paragraph",
        content:
          "A1 Engineering's green and energy compliance team provides the PE-stamped energy compliance documentation required for permit submittals across Texas, Tennessee, Arizona, and Florida — including green/energy plan review and inspection bundles, green code sign-off letters, and coordination with HERS raters to ensure that what's designed for the permit package is achievable in the field. For projects that have failed an energy inspection or a blower door test, we diagnose the gap between design performance and as-built performance and produce the documentation needed to get the project back on track.",
      },
      {
        type: "paragraph",
        content:
          "The key thing to understand is that energy compliance is most effective — and most cost-efficient — when it's designed in from the start rather than verified at the end. A home that's designed to hit HERS 55 from the first set of drawings, with insulation specs, window specs, and mechanical selections coordinated to reach that target, gets there reliably. A home that's designed to 'be efficient' without a specific target in mind gets wherever the blower door test says it lands.",
      },
      { type: "states" },
      { type: "rule" },
      {
        type: "paragraph",
        content:
          "If you're starting a new residential project and need PE-stamped energy compliance documentation, or if your project has failed an energy inspection and you need to get back on track, upload your project details and we'll respond within 24 hours. For urgent timelines, call us directly at (214) 382-9584.",
      },
      {
        type: "tags",
        items: [
          { text: "HERS Rating" },
          { text: "Energy Code Compliance" },
          { text: "Blower Door Test" },
          { text: "Green Building" },
          { text: "RESNET" },
          { text: "IECC 2021" },
          { text: "Florida Building Code" },
          { text: "Net Zero" },
          { text: "New Construction" },
          { text: "Texas" },
          { text: "Tennessee" },
          { text: "Arizona" },
          { text: "Florida" },
        ],
      },
      { type: "cta" },
    ],
  },

  // ── POST 7 — newest first ─────────────────────────────────────────────────
  {
    slug: "what-is-an-mep-drawing-set-and-why-every-commercial-project-needs-one",
    title: "What Is an MEP Drawing Set — and Why Does Every Commercial Project Need One?",
    titleAccent: "Why Does Every Commercial Project Need One?",
    deck: "If you've ever been handed a permit correction asking for MEP drawings and wondered what that actually means, you're not alone. MEP is one of those industry terms that gets thrown around constantly but rarely explained — and misunderstanding it can stall a commercial project for weeks.",
    category: "Planning & Design",
    readTime: "6 min read",
    date: "April 30, 2026",
    states: ["TX", "TN", "AZ", "FL"],
    sections: [
      {
        type: "lead",
        content:
          "Every commercial building — whether it's a restaurant, a medical office, a retail strip, or a multi-family complex — runs on three invisible systems that most people never think about until something goes wrong: the mechanical system that moves air and controls temperature, the electrical system that powers everything, and the plumbing system that brings water in and takes waste out. MEP stands for Mechanical, Electrical, and Plumbing. And an MEP drawing set is the engineered, PE-stamped documentation that shows exactly how those three systems are designed, sized, and installed in your building.",
      },
      {
        type: "paragraph",
        content:
          "Unlike a structural drawing set — which most builders expect to produce for any permitted project — MEP drawings are frequently treated as an afterthought. They get requested by the permit office, hastily assembled from vendor cut sheets and rough sketches, and submitted without PE stamps or proper coordination with the architectural and structural sets. The result is almost always a correction cycle that pushes the permit timeline out by weeks. This post explains what MEP drawings actually are, what each discipline covers, when they're required, and what goes wrong when they're done incorrectly.",
      },
      {
        type: "h2",
        content: "The M: Mechanical Drawings",
      },
      {
        type: "paragraph",
        content:
          "Mechanical drawings cover the HVAC system — heating, ventilation, and air conditioning. For a commercial building, this is a significantly more complex scope than a residential system. A mechanical engineer calculates the heating and cooling loads for each zone of the building based on the building envelope, occupancy type, internal heat gains from equipment and lighting, and the local climate data for the project location. From those calculations, they size the equipment, design the duct distribution system, specify the diffuser and grille locations, and document the ventilation rates required by code for each occupancy type.",
      },
      {
        type: "paragraph",
        content:
          "What most builders don't realize is that commercial mechanical design is governed by ASHRAE standards — specifically ASHRAE 62.1 for ventilation and ASHRAE 90.1 for energy efficiency — on top of the local mechanical code. These standards dictate minimum outdoor air delivery rates, filtration requirements, exhaust requirements for specific occupancies like kitchens and restrooms, and the energy performance of the overall HVAC system. A mechanical drawing set that doesn't demonstrate compliance with these standards will not pass plan review in any jurisdiction in Texas, Tennessee, Arizona, or Florida.",
      },
      {
        type: "callout-info",
        label: "What mechanical drawings typically include",
        items: [
          {
            bold: "Mechanical floor plans.",
            text: " Showing equipment locations, duct routing, supply and return air locations, and exhaust systems overlaid on the architectural floor plan.",
          },
          {
            bold: "Equipment schedules.",
            text: " Listing each piece of HVAC equipment with its model, capacity, airflow rates, electrical requirements, and efficiency ratings.",
          },
          {
            bold: "Load calculations.",
            text: " The Manual J or ASHRAE-method calculation demonstrating that equipment is sized correctly for the building's actual heating and cooling demand.",
          },
          {
            bold: "Ventilation schedules.",
            text: " Documenting outdoor air delivery rates per occupancy zone to demonstrate ASHRAE 62.1 compliance.",
          },
          {
            bold: "Details and specifications.",
            text: " Installation details for equipment mounting, duct construction standards, insulation requirements, and control sequences.",
          },
        ],
      },
      {
        type: "h2",
        content: "The E: Electrical Drawings",
      },
      {
        type: "paragraph",
        content:
          "Electrical drawings for a commercial project are a different animal from a residential electrical plan. A licensed PE Electrical Engineer produces a full load calculation per NEC Article 220 — accounting for every load in the building including lighting, receptacles, HVAC equipment, kitchen equipment, elevators if applicable, and any special systems. From that calculation, they size the electrical service, design the panel boards and distribution system, produce the panel schedules, and lay out the electrical distribution throughout the building.",
      },
      {
        type: "paragraph",
        content:
          "Commercial electrical drawings also cover systems that simply don't exist in residential projects: emergency and exit lighting with battery backup, fire alarm system power and wiring, mechanical equipment disconnects and motor control, outdoor site lighting with photometric calculations in many jurisdictions, and tenant metering if the building has multiple tenants. Each of these has specific NEC requirements for how it's designed and documented, and each must be shown on the electrical drawings before the permit will issue.",
      },
      {
        type: "callout-warning",
        label: "The tenant build-out trap",
        content:
          "When a commercial building is built as a shell and tenants finish their own spaces, many owners assume the shell electrical drawings cover the tenant spaces. They don't. Each tenant build-out requires its own electrical drawings showing the tenant's specific load, panel modifications or additions, and any special systems that tenant needs. Submitting a tenant permit without updated electrical drawings — or without a PE reviewing how the tenant load affects the building's overall service — is one of the most common commercial permit rejections in the DFW market.",
      },
      {
        type: "h2",
        content: "The P: Plumbing Drawings",
      },
      {
        type: "paragraph",
        content:
          "Plumbing drawings document the water supply, waste, and vent systems throughout the building. For a commercial project, this means showing the domestic cold and hot water distribution from the meter through every fixture, the drainage system from every fixture to the sewer connection, and the vent stack layout that allows the drain system to function properly. In states like Texas, commercial plumbing plans must be stamped by a licensed engineer or a licensed master plumber with plan-drawing authorization — and the requirements vary depending on the building's occupancy and the jurisdiction.",
      },
      {
        type: "paragraph",
        content:
          "What makes commercial plumbing more complex than residential is the fixture count and the occupancy-specific requirements. A restaurant has grease interceptor sizing calculations, a medical office has specific hot water temperature requirements for infection control, a multi-family building has water heater capacity calculations based on peak demand, and any building above a certain size may require a backflow prevention assembly at the meter. Each of these requirements generates specific drawing content that the plan reviewer will check before approving the permit.",
      },
      {
        type: "h2",
        content: "Why Coordination Between M, E, and P Is the Hard Part",
      },
      {
        type: "paragraph",
        content:
          "Here's what makes MEP genuinely difficult to get right: the three systems have to share the same physical space inside the building — the ceiling cavity, the mechanical rooms, the wall cavities, and the utility corridors — and they frequently compete for the same space. A duct trunk that needs to run at one elevation collides with a plumbing drain that needs a certain slope at the same elevation. An electrical conduit chase conflicts with a mechanical equipment access panel. A grease duct that requires fire-rated enclosure takes up space that was assumed to be available for electrical distribution.",
      },
      {
        type: "paragraph",
        content:
          "When MEP drawings are produced by three separate firms who never talk to each other, these conflicts don't get discovered until the systems are being installed — at which point the contractor is in the ceiling with a problem that requires a field modification, a change order, and sometimes a revised permit submittal. When MEP drawings are produced by a coordinated team working from the same architectural base drawing, conflicts are resolved on paper before construction begins. That coordination is the single biggest value of a well-produced MEP drawing set.",
      },
      {
        type: "pullquote",
        content:
          "MEP conflicts discovered in the ceiling during construction cost ten times what they cost to resolve on paper during design. Coordination isn't a luxury — it's the cheapest line item in the project.",
      },
      {
        type: "h2",
        content: "When Are MEP Drawings Required?",
      },
      {
        type: "paragraph",
        content:
          "The short answer for commercial projects: almost always. Any commercial new construction project in TX, TN, AZ, or FL will require mechanical, electrical, and plumbing drawings as part of the permit submittal. The specific requirements vary by jurisdiction and project type, but the baseline expectation is a complete MEP set stamped by licensed engineers before a commercial building permit will be approved.",
      },
      {
        type: "paragraph",
        content:
          "For tenant build-outs and renovations, the threshold is lower but the requirement still applies. Any renovation that touches an MEP system — moving ductwork, adding circuits, relocating plumbing — requires permitted drawings for the affected systems. Jurisdictions differ on exactly where the threshold falls between minor work that can be permitted with simplified drawings and major work that requires a full engineered set, but the safe assumption is that any work affecting a commercial MEP system needs at minimum a PE review and typically a stamped drawing.",
      },
      {
        type: "callout-info",
        label: "Projects that commonly require a full MEP set",
        items: [
          {
            bold: "Commercial new construction.",
            text: " Any building that isn't single-family residential. Restaurants, retail, office, medical, industrial, and multi-family all require full MEP drawings.",
          },
          {
            bold: "Change of occupancy.",
            text: " Converting a building from one occupancy type to another — an office to a restaurant, a warehouse to a gym — triggers MEP review because occupancy-specific requirements change.",
          },
          {
            bold: "Additions over 50% of existing floor area.",
            text: " Many jurisdictions require the entire building's MEP systems to be brought up to current code when an addition exceeds this threshold.",
          },
          {
            bold: "Healthcare and food service facilities.",
            text: " These occupancies have enhanced mechanical ventilation, plumbing fixture, and electrical requirements that require full MEP documentation regardless of project size.",
          },
          {
            bold: "Multi-family projects of three or more units.",
            text: " Most jurisdictions classify these as commercial for permitting purposes, requiring commercial-grade MEP drawings for the entire building.",
          },
        ],
      },
      {
        type: "h2",
        content: "The Most Common MEP Mistakes That Delay Permits",
      },
      {
        type: "h3",
        stepNum: "1",
        content: "Submitting vendor submittals instead of engineering drawings",
      },
      {
        type: "paragraph",
        content:
          "Equipment cut sheets and vendor submittals show what a piece of equipment does — they don't show how it's engineered into the building's systems. Plan reviewers know the difference immediately, and submitting product literature in place of engineering drawings is one of the fastest ways to get a commercial permit package returned at intake. Engineering drawings show the system design, not just the equipment selection.",
      },
      {
        type: "h3",
        stepNum: "2",
        content: "Missing energy compliance documentation",
      },
      {
        type: "paragraph",
        content:
          "Commercial energy compliance in TX, TN, AZ, and FL requires specific documentation showing that the building's mechanical and electrical systems meet the applicable energy code — ASHRAE 90.1, the IECC commercial provisions, or the Florida Building Code Energy Conservation chapter depending on the state. This documentation is a required part of the MEP drawing set, not a separate submission. Omitting it produces a plan review comment on every commercial permit submittal without exception.",
      },
      {
        type: "h3",
        stepNum: "3",
        content: "Wrong PE license type on the stamp",
      },
      {
        type: "paragraph",
        content:
          "Mechanical drawings must be stamped by a mechanical PE. Electrical drawings must be stamped by an electrical PE. Plumbing drawings, depending on the state, must be stamped by either a PE or a licensed master plumber with plan authority. A mechanical PE cannot stamp electrical drawings — the license categories are specific to the discipline, and plan reviewers check the stamp category against the drawing type as a standard step in the review process.",
      },
      {
        type: "h2",
        content: "What A1 Engineering Provides",
      },
      {
        type: "paragraph",
        content:
          "A1 Engineering's PE Electrical team handles the electrical engineering component of commercial MEP packages across Texas, Tennessee, Arizona, and Florida — load calculations, panel schedules, distribution design, lighting layouts, emergency power systems, solar PV integration, and EV charging infrastructure — all PE-stamped and coordinated with the mechanical and architectural drawings. For projects that need the full MEP scope under one roof, we work with coordinated mechanical and plumbing teams to produce a unified drawing set that moves through plan review as a consistent package.",
      },
      {
        type: "paragraph",
        content:
          "Whether you're building new commercial construction, converting an existing space, or navigating a tenant build-out, the right time to get MEP engineering engaged is at the design phase — before the architectural drawings are finalized and before any systems are roughed in. That's when coordination is cheapest and when the engineering has the most influence over how the project gets built.",
      },
      { type: "states" },
      { type: "rule" },
      {
        type: "paragraph",
        content:
          "If you have a commercial project that needs electrical engineering or a full MEP coordination review, upload your plans and project details and we'll respond within 24 hours. For time-sensitive submittals, call us directly at (214) 382-9584.",
      },
      {
        type: "tags",
        items: [
          { text: "MEP Drawings" },
          { text: "Mechanical Engineering" },
          { text: "PE Electrical Engineering" },
          { text: "Plumbing Design" },
          { text: "Commercial Construction" },
          { text: "Building Permits" },
          { text: "ASHRAE Compliance" },
          { text: "Tenant Build-Out" },
          { text: "Energy Code" },
          { text: "Texas" },
          { text: "Tennessee" },
          { text: "Arizona" },
          { text: "Florida" },
        ],
      },
      { type: "cta" },
    ],
  },

  // ── POST 6 — newest first ─────────────────────────────────────────────────
  {
    slug: "survey-vs-site-plan-vs-engineering-drawings-whats-the-difference",
    title: "Survey vs Site Plan vs Engineering Drawings: What's the Difference?",
    titleAccent: "What's the Difference?",
    deck: "Contractors, lenders, and permit offices ask for these documents constantly — often interchangeably. They're not the same thing, they're not produced by the same people, and confusing them is one of the most expensive mistakes you can make on a development project.",
    category: "Planning & Design",
    readTime: "8 min read",
    date: "April 28, 2026",
    states: ["TX", "TN", "AZ", "FL"],
    sections: [
      {
        type: "lead",
        content:
          "At some point in every construction or development project, someone asks for 'the survey' or 'the site plan' or 'the engineering drawings' — and whoever is being asked nods and says they'll get it, while quietly wondering if those are actually three different things or just three names for the same document. They are three different things. Produced by different licensed professionals, serving different legal and technical purposes, and required at different stages of a project. Mixing them up costs time, money, and sometimes the permit itself.",
      },
      {
        type: "paragraph",
        content:
          "This confusion is so common because the documents look similar on paper — they're all drawings of a property with lines, dimensions, and annotations. But the information they contain, the professional credentials required to produce them, and the specific questions they answer are fundamentally different. This post breaks all three down in plain terms, explains where each one fits in the development process, and covers the most common mistakes people make when they mix them up.",
      },
      {
        type: "h2",
        content: "Document 1: The Survey",
      },
      {
        type: "paragraph",
        content:
          "A survey is a legal document produced by a licensed land surveyor that establishes the physical facts of a piece of land. It answers the question: what exactly do I own, and where are the legal boundaries of this property? A surveyor goes to the site, finds or sets property corner monuments, measures distances and angles, and produces a drawing that reflects what is actually on the ground — not what the deed says or what the prior owner believed.",
      },
      {
        type: "paragraph",
        content:
          "Surveys come in several types, each answering a different version of the boundary question. A boundary survey establishes property lines. A topographic survey adds elevation data — contour lines that show how the land rises and falls across the site. An ALTA/NSPS survey (required by most commercial lenders) adds easements, encroachments, rights-of-way, and other title-related features to the boundary information. A construction survey — sometimes called staking — marks the physical locations of proposed improvements on the ground so contractors know exactly where to build.",
      },
      {
        type: "callout-info",
        label: "Survey types and when each is required",
        items: [
          {
            bold: "Boundary survey.",
            text: " Establishes legal property lines. Required for permit submittals, subdivision, and title work. The foundation for every other document on this list.",
          },
          {
            bold: "Topographic survey.",
            text: " Adds elevation data to the boundary. Required for drainage design, grading plans, and any project where site slopes affect construction.",
          },
          {
            bold: "ALTA/NSPS survey.",
            text: " Comprehensive survey combining boundary, easements, encroachments, and title elements. Required by commercial lenders before closing on any commercial real estate transaction.",
          },
          {
            bold: "Construction staking.",
            text: " Translates the approved engineering drawings into physical markers on the ground. Required before grading or foundation work begins on most commercial and many residential projects.",
          },
          {
            bold: "As-built survey.",
            text: " Documents what was actually constructed versus what was designed. Required by some lenders and jurisdictions before Certificate of Occupancy is issued.",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "The critical thing to understand about a survey is that it is a legal record, not a design document. It describes what exists — it doesn't propose what should be built. Only a licensed land surveyor can produce one, and in most states the surveyor stamps the document with their professional seal, making it a legally defensible record of the property's physical characteristics. In Texas, surveyors are licensed by the Texas Board of Professional Land Surveying. In Florida, Tennessee, and Arizona, similar state licensing boards govern the profession.",
      },
      {
        type: "callout-warning",
        label: "The most expensive survey mistake",
        content:
          "Using an old survey — even one from a previous transaction on the same property — is one of the most common and costly mistakes in development. Property boundaries can change through lot splits, re-plats, easement additions, and encroachment settlements. A survey more than five to ten years old may not reflect current legal conditions, and a lender or permit office that discovers this will require a new one. Order a current survey before any design work begins, not after.",
      },
      {
        type: "h2",
        content: "Document 2: The Site Plan",
      },
      {
        type: "paragraph",
        content:
          "A site plan is a design document — it proposes what will be built and where, overlaid on the legal reality established by the survey. While a survey answers 'what is here,' a site plan answers 'what are we going to build, and how does it fit on this property?' It is typically produced by a civil engineer, a landscape architect, or — for simpler residential projects — an architect, and it uses the boundary and topographic survey as its base.",
      },
      {
        type: "paragraph",
        content:
          "A site plan shows the proposed building footprint positioned on the lot with setback dimensions confirmed, the driveway and parking layout, utility connections (water, sewer, electrical, gas, and stormwater), proposed grading to direct drainage away from the structure, landscaping if required by the jurisdiction, and any easements or other encumbrances that affect where improvements can be placed. It is the document that answers whether the project fits within the rules the jurisdiction has set for that piece of land.",
      },
      {
        type: "paragraph",
        content:
          "This is why the sequence matters so much: you cannot produce a reliable site plan without a current survey. Engineers and architects who skip the survey step and draft site plans based on assumed or estimated property dimensions are setting up their clients for permit rejection. If the proposed building footprint sits one foot inside a setback line that turns out to be two feet shorter than assumed, the site plan is wrong and the permit won't issue until it's corrected.",
      },
      {
        type: "pullquote",
        content:
          "A site plan without a current survey underneath it is a design built on assumptions. Assumptions are fine until they're wrong — and they're wrong more often than most designers admit.",
      },
      {
        type: "h3",
        stepNum: "1",
        content: "What Jurisdictions Actually Review on a Site Plan",
      },
      {
        type: "paragraph",
        content:
          "Plan reviewers checking a site plan aren't just looking at whether the building fits on the lot. They're verifying setback compliance from every property line, right-of-way, and easement simultaneously. They're checking impervious cover against the jurisdiction's maximum — which varies by zoning district and often by drainage basin. They're confirming that the driveway approach meets the city's width and sight-line requirements. They're verifying that utility connections are shown at the correct locations and that the proposed stormwater management doesn't shift runoff problems onto adjacent properties.",
      },
      {
        type: "paragraph",
        content:
          "In most Texas municipalities, the site plan review is conducted by the city's planning and development department, separate from the building department that reviews the structural drawings. That means a site plan rejection and a structural drawing rejection can happen independently on the same project — and in sequence, adding weeks to the timeline if the site plan isn't right when it's submitted.",
      },
      {
        type: "h3",
        stepNum: "2",
        content: "When a Site Plan Requires a PE Stamp",
      },
      {
        type: "paragraph",
        content:
          "For simple residential projects in some jurisdictions, a site plan doesn't require a PE stamp — an architect or even a homeowner can produce an acceptable one. But for commercial projects, projects in special flood hazard areas, projects with complex drainage requirements, projects requiring a stormwater pollution prevention plan (SWPPP), or any project where the civil engineering components are non-trivial, a PE-stamped site plan is required. In these cases, the engineer of record is certifying that the grading, drainage, and utility design meets applicable codes and engineering standards — a certification that only a licensed PE can make.",
      },
      {
        type: "h2",
        content: "Document 3: Engineering Drawings",
      },
      {
        type: "paragraph",
        content:
          "Engineering drawings are the technical design documents that tell contractors exactly how to build something so that it performs structurally, mechanically, and electrically as intended. While the survey establishes legal reality and the site plan shows what goes where, engineering drawings show how each component is constructed — the size of every beam, the depth and reinforcement of every footing, the routing and sizing of every electrical circuit, and the specifications for every mechanical system.",
      },
      {
        type: "paragraph",
        content:
          "A full set of engineering drawings for a commercial building includes structural drawings (foundation design, framing plans, connection details), MEP drawings (mechanical, electrical, and plumbing systems), civil drawings (grading, drainage, utility design — which overlap with the site plan but go into greater technical detail), and in some cases fire protection, geotechnical, and special systems drawings. Each discipline is typically handled by a separate licensed engineer who stamps their portion of the drawing set.",
      },
      {
        type: "callout-info",
        label: "What each set of engineering drawings covers",
        items: [
          {
            bold: "Structural drawings.",
            text: " Foundation design, framing plans, load paths, connection details, and material specifications. Stamped by a licensed structural PE. Required for virtually every permitted construction project.",
          },
          {
            bold: "Civil drawings.",
            text: " Detailed grading plans, drainage calculations, utility design, and erosion control. More detailed than a site plan — this is the engineering behind what the site plan shows. Stamped by a licensed civil PE.",
          },
          {
            bold: "Electrical drawings.",
            text: " Panel schedules, circuit layouts, load calculations, service entrance design, and any special systems (solar PV, EV charging, emergency power). Stamped by a licensed electrical PE.",
          },
          {
            bold: "Mechanical drawings.",
            text: " HVAC system design, duct layouts, equipment schedules, and energy compliance documentation. Typically produced by a mechanical engineer and coordinated with the electrical drawings.",
          },
          {
            bold: "Geotechnical report.",
            text: " Not a drawing set, but an engineering document that supports the foundation design. Produced by a geotechnical engineer from soil boring and testing data. Required on most commercial projects and increasingly on residential projects in clay-heavy markets like DFW.",
          },
        ],
      },
      {
        type: "h2",
        content: "How the Three Documents Work Together",
      },
      {
        type: "paragraph",
        content:
          "The relationship between these three documents isn't just sequential — it's cumulative. Each one builds on the one before it, and errors that aren't caught early compound forward into the next document. A boundary error in the survey creates a setback error in the site plan. A setback error in the site plan creates a foundation placement error in the structural drawings. A foundation placement error in the structural drawings causes a failed inspection — after construction has already started.",
      },
      {
        type: "paragraph",
        content:
          "This is why the sequence of a properly run project looks like this: boundary and topographic survey first, site plan second using the survey as the base, engineering drawings third using the approved site plan as the context. When projects skip steps — particularly when they start engineering drawings before the survey is complete, or produce a site plan from assumed dimensions — they're building coordination risk into the project from the beginning.",
      },
      {
        type: "h3",
        stepNum: "3",
        content: "The Coordination Problem That Causes Most Permit Rejections",
      },
      {
        type: "paragraph",
        content:
          "The most common scenario that delays permits isn't one bad document — it's two documents that don't agree with each other. The site plan shows the building in one location. The structural drawings show the foundation in a slightly different location. The electrical drawings reference equipment that isn't shown on the mechanical drawings. The civil drainage design assumes a grade that's different from what the topographic survey shows.",
      },
      {
        type: "paragraph",
        content:
          "Plan reviewers are trained to find these inconsistencies because inconsistent drawings can produce dangerous construction — a contractor who doesn't know which drawing to follow may choose incorrectly. When reviewers find them, the entire permit package is returned for correction, even if the individual documents are technically correct within their own discipline. The only way to prevent coordination failures is to have all three document types produced by a team that's actively communicating — or by a single PE-led firm that owns the coordination across all disciplines.",
      },
      {
        type: "h2",
        content: "Who Produces Each Document — and Why It Matters",
      },
      {
        type: "paragraph",
        content:
          "The licensing requirements for each document type are specific and non-negotiable. Only a licensed land surveyor can produce a survey — an engineer cannot do this, and an architect cannot do this. A PE can produce engineering drawings in their licensed discipline — a structural PE cannot stamp electrical drawings, and a civil PE cannot stamp structural drawings. A site plan for a commercial project typically requires a civil PE stamp for the drainage and utility components, even if an architect produced the building footprint portion.",
      },
      {
        type: "paragraph",
        content:
          "In practice, the most efficient project teams have a surveyor, a civil PE, and the relevant engineering PEs all working from the same base file, with a coordinating engineer — often the civil PE — owning the integration between documents. When these professionals work independently and hand off files to each other without active coordination, the gaps between documents are where permit delays are born.",
      },
      {
        type: "callout-warning",
        label: "The unlicensed production gotcha",
        content:
          "Online tools and non-licensed designers can produce documents that look like surveys, site plans, and engineering drawings. Plan reviewers in TX, TN, AZ, and FL are trained to check for professional stamps on documents that require them. A site plan submitted without a required PE stamp, or a drawing that claims to be a survey without a licensed surveyor's seal, will be rejected at intake — before the plan review even begins. The time and cost of redoing these documents almost always exceeds what it would have cost to hire the right professional from the start.",
      },
      {
        type: "h2",
        content: "What A1 Engineering Covers in This Stack",
      },
      {
        type: "paragraph",
        content:
          "A1 Engineering provides the full engineering and design layer of this document stack — site plans, civil drawings, structural engineering drawings, electrical engineering drawings, and energy compliance documentation — all stamped by licensed PEs across Texas, Tennessee, Arizona, and Florida. For projects in the DFW area, we also provide land survey services directly, meaning the survey and the engineering documents come from the same coordinated team rather than being handed off between separate firms.",
      },
      {
        type: "paragraph",
        content:
          "The practical result is that the survey data, the site plan, and the engineering drawings are internally consistent from the start — produced by people who are talking to each other rather than working from whatever the previous firm handed over. That consistency is what plan reviewers are checking for, and it's what gets permit packages approved on the first submission instead of the third.",
      },
      { type: "states" },
      { type: "rule" },
      {
        type: "paragraph",
        content:
          "If you're starting a project and aren't sure which documents you need or in what order, upload your project details and we'll walk you through it. For DFW projects that need survey and engineering under one roof, call us directly at (214) 382-9584.",
      },
      {
        type: "tags",
        items: [
          { text: "Land Survey" },
          { text: "Site Plans" },
          { text: "Engineering Drawings" },
          { text: "Planning & Design" },
          { text: "Building Permits" },
          { text: "Civil Engineering" },
          { text: "Structural Engineering" },
          { text: "PE Stamped Plans" },
          { text: "DFW" },
          { text: "Texas" },
          { text: "Tennessee" },
          { text: "Arizona" },
          { text: "Florida" },
        ],
      },
      { type: "cta" },
    ],
  },

  // ── POST 5 — newest first ─────────────────────────────────────────────────
  {
    slug: "hidden-engineering-issues-that-delay-building-permits",
    title: "The Hidden Engineering Issues That Delay Building Permits",
    titleAccent: "That Delay Building Permits",
    deck: "Most permit delays aren't caused by the obvious things. They're caused by technical engineering problems buried in the submittal that nobody flagged during design — problems that inspectors and plan reviewers catch immediately. Here's the insider list.",
    category: "Permitting & Land Development",
    readTime: "6 min read",
    date: "April 14, 2026",
    states: ["TX", "TN", "AZ", "FL"],
    sections: [
      {
        type: "lead",
        content:
          "Every developer and contractor has a story about a permit that took twice as long as it should have. The frustrating part isn't the wait — it's that the delay was almost always caused by something that a qualified engineer would have caught in the first pass. Plan reviewers aren't looking to fail submittals. They're working through a checklist, and when something doesn't check out, the whole package comes back.",
      },
      {
        type: "paragraph",
        content:
          "After working through hundreds of permit submittals across Texas, Tennessee, Arizona, and Florida, we've seen the same engineering problems surface repeatedly — problems that are invisible to a non-engineer but obvious to a plan reviewer. This post covers the ones that cause the most delays, why they're easy to miss, and what it takes to get them right before you submit.",
      },
      {
        type: "h2",
        content: "The Industry Gotchas Nobody Warns You About",
      },
      {
        type: "h3",
        stepNum: "1",
        content: "Soils Data That Doesn't Match the Foundation Design",
      },
      {
        type: "paragraph",
        content:
          "One of the most common — and most avoidable — permit delays is a foundation design that was engineered without current, site-specific geotechnical data. Engineers use soil bearing capacity values to size footings and determine foundation type. When those values are assumed, borrowed from a nearby project, or pulled from outdated surveys, the foundation design is technically invalid — and a thorough plan reviewer will ask for the geotechnical report that supports the numbers in the drawing.",
      },
      {
        type: "paragraph",
        content:
          "Texas expansive clay soils are particularly unforgiving here. The same subdivision can have dramatically different soil conditions from lot to lot depending on depth to bedrock, moisture content, and prior grading history. A foundation designed for one lot's soil profile will not automatically work on the lot next door. Each lot needs its own GeoTechnical soil survey, and that data needs to be explicitly referenced in the foundation design documents.",
      },
      {
        type: "callout-warning",
        label: "The borrowed soils report gotcha",
        content:
          "Using a geotechnical report from an adjacent lot or a previous phase of the same development is one of the fastest ways to get a permit placed on hold. Plan reviewers in most TX, TN, AZ, and FL jurisdictions are trained to check that the report address matches the project address. If it doesn't, the submittal is flagged immediately — even if the soil conditions are genuinely similar.",
      },
      {
        type: "h3",
        stepNum: "2",
        content: "Setback Violations Hidden in Scaled Drawings",
      },
      {
        type: "paragraph",
        content:
          "Setback violations are the permit killer that nobody sees coming because the drawings look fine at a glance. The building fits on the lot. The dimensions are labeled. But when the plan reviewer scales the drawing against the current plat, the actual distances to property lines don't match what's shown — because the drawing was produced at a slightly off scale, or the lot dimensions were taken from an old survey that didn't reflect a recorded easement or a boundary adjustment.",
      },
      {
        type: "paragraph",
        content:
          "The fix is a current boundary survey from a licensed surveyor, with the foundation footprint overlaid by the engineer of record to verify setback compliance before the site plan is finalized. In the DFW market specifically, lot boundary discrepancies between older recorded plats and current conditions are extremely common — particularly in infill development where lots have been subdivided, re-platted, or had utilities relocated.",
      },
      {
        type: "h3",
        stepNum: "3",
        content: "Impervious Cover Calculations That Don't Account for All Surfaces",
      },
      {
        type: "paragraph",
        content:
          "Most jurisdictions cap the percentage of a lot that can be covered by impervious surfaces — pavement, concrete, rooftops, and any material that prevents stormwater from percolating into the ground. What catches builders off guard is that impervious cover calculations include more than just the building footprint and driveway. Covered patios, pool decks, walkways, AC pads, and even some types of pavers all count, depending on the municipality.",
      },
      {
        type: "paragraph",
        content:
          "A project that's right at the impervious cover limit on paper can easily tip over when a reviewer accounts for surfaces the designer didn't include. Arizona municipalities around Phoenix and Tucson are particularly strict about this due to the 100-year flood plain calculations that govern development across much of the metro. Florida's stormwater requirements add another layer — the quantity and quality of stormwater runoff must both be addressed in the civil engineering documents.",
      },
      {
        type: "callout-warning",
        label: "The pool deck calculation nobody does",
        content:
          "In most jurisdictions, a pool deck — even a permeable paver deck — counts toward impervious cover unless the permeability rate is specifically documented and the surface is listed on the jurisdiction's approved materials list. Builders who add pool scopes after the site plan is approved frequently find themselves over the impervious limit when the pool permit is reviewed. The time to calculate this is before the site plan is submitted, not after the pool is contracted.",
      },
      {
        type: "h3",
        stepNum: "4",
        content: "Energy Code Compliance Gaps in the Mechanical Design",
      },
      {
        type: "paragraph",
        content:
          "The intersection of the building envelope and the mechanical system is where energy code compliance most often breaks down — and where plan reviewers spend serious time. The issue is that energy compliance calculations are frequently produced by whoever draws the plans rather than by an engineer who actually understands the interaction between insulation R-values, window U-factors, infiltration rates, and HVAC system sizing.",
      },
      {
        type: "paragraph",
        content:
          "A building that passes the envelope calculation on paper can still fail the overall energy compliance check if the HVAC system is oversized — which is common when contractors size equipment conservatively for comfort rather than optimally for code compliance. Manual J load calculations, when they exist at all, are frequently produced without accounting for the actual window specifications or the correct local design temperatures. In Tennessee and Florida specifically, design temperature assumptions vary significantly by region and directly affect the Manual J output.",
      },
      {
        type: "callout-info",
        label: "What energy code compliance actually requires in TX, TN, AZ & FL",
        items: [
          {
            bold: "Texas (IECC 2021 with amendments).",
            text: " Blower door test required at rough-in and final. Duct leakage testing mandatory. Some jurisdictions require a HERS rating by a certified rater before CO is issued.",
          },
          {
            bold: "Tennessee (IECC 2018 with state amendments).",
            text: " Manual J required for HVAC sizing. Duct testing required. Eastern TN has different climate zone requirements than Middle and West TN — a single compliance calculation doesn't work statewide.",
          },
          {
            bold: "Arizona (IECC 2018 with amendments).",
            text: " Prescriptive or performance path available. Phoenix metro jurisdictions often require third-party energy inspection. Solar-ready requirements apply to new residential in most counties.",
          },
          {
            bold: "Florida (Florida Building Code Energy Conservation).",
            text: " Florida Energy Code is not the IECC — it's a separate document with different compliance paths. EnergyGauge USA is the required compliance software. Incorrect software means an automatic plan review rejection.",
          },
        ],
      },
      {
        type: "h3",
        stepNum: "5",
        content: "Structural Drawings That Reference the Wrong Code Edition",
      },
      {
        type: "paragraph",
        content:
          "Building codes are adopted at the state level and amended locally — and the edition in force varies not just by state but sometimes by municipality within the same state. A structural drawing set that references IBC 2018 when the jurisdiction has adopted IBC 2021 will be flagged immediately. So will drawings that don't reference the correct seismic or wind speed maps for the project location, or that use ASCE 7 load combinations from a prior edition.",
      },
      {
        type: "paragraph",
        content:
          "This sounds like a paperwork problem, but it isn't — the code edition matters because structural load requirements, especially wind and seismic, change between editions. A wall bracing design valid under IBC 2018 may be insufficient under IBC 2021. Plan reviewers are required to verify code edition compliance, and structural drawings that reference the wrong edition trigger a correction cycle that can take weeks to resolve.",
      },
      {
        type: "h3",
        stepNum: "6",
        content: "Accessibility Requirements Missed on Commercial Projects",
      },
      {
        type: "paragraph",
        content:
          "ADA and TAS (Texas Accessibility Standards) compliance reviews happen at the state level for commercial projects in Texas, separate from and in addition to the local building permit review. A commercial project in Texas must receive a TAS review certificate before construction can begin on accessibility-related elements — and that review is conducted by a registered accessibility consultant, not the local building department.",
      },
      {
        type: "paragraph",
        content:
          "The most common missed items are accessible route continuity from the public way to the building entrance, accessible parking space dimensions and slopes, restroom fixture clearances that changed under the 2012 TAS updates, and service counter heights. In Florida, similar requirements exist under the Florida Accessibility Code, which was updated in 2020 and differs from the ADA in several specific requirements that frequently catch out-of-state designers.",
      },
      {
        type: "h3",
        stepNum: "7",
        content: "Drainage Plans That Don't Model the 100-Year Storm Event",
      },
      {
        type: "paragraph",
        content:
          "Civil engineering for drainage is where residential and commercial projects most frequently underinvest, and where the consequences show up most visibly at plan review. Most jurisdictions require that the proposed development not increase the peak runoff rate to adjacent properties for the 100-year storm event. Meeting this requirement requires hydrologic and hydraulic modeling — not just a grading plan with swales shown.",
      },
      {
        type: "paragraph",
        content:
          "The gotcha here is that the calculation method matters as much as the result. Some jurisdictions require the Rational Method. Others require TR-55 or TR-20. Using the wrong method — even if the numbers happen to work — produces a calculation that the reviewer can't compare against their standard, which means a correction request regardless of whether the design is actually adequate.",
      },
      {
        type: "pullquote",
        content:
          "Plan reviewers aren't trying to fail your submittal. They're working through a checklist. Every item on this list is something that checklist catches — and that a qualified PE catches first.",
      },
      {
        type: "h2",
        content: "The Common Thread",
      },
      {
        type: "paragraph",
        content:
          "Every issue on this list shares the same root cause: the engineering was either produced by someone who didn't specialize in that discipline, coordinated by someone who wasn't tracking all of the requirements simultaneously, or reviewed internally by someone without the technical background to catch the problem before submittal. Plan review is the first time a qualified engineer with jurisdiction knowledge looks at the package — and when that's also the first time these issues are caught, the delay is built in.",
      },
      {
        type: "paragraph",
        content:
          "A PE-led firm that handles structural, civil, electrical, and energy compliance under one roof eliminates most of these problems before the package leaves the office. The soils data matches the foundation design because the same team produced both. The impervious cover is correct because the civil engineer checked it against the site plan the structural team produced. The energy code reference is current because the PE knows which edition is adopted in that jurisdiction this month, not last year.",
      },
      {
        type: "paragraph",
        content:
          "That's the practical value of coordination — not just efficiency, but the elimination of the gaps between disciplines where permit delays are born.",
      },
      { type: "states" },
      { type: "rule" },
      {
        type: "paragraph",
        content:
          "If you have a submittal that's been flagged or a project you want to get right before it goes to plan review, upload your documents and project details and we'll respond within 24 hours. For urgent timelines, call (214) 382-9584.",
      },
      {
        type: "tags",
        items: [
          { text: "Building Permits" },
          { text: "Plan Review" },
          { text: "Permit Delays" },
          { text: "Geotechnical" },
          { text: "Energy Code" },
          { text: "Impervious Cover" },
          { text: "Setback Violations" },
          { text: "Drainage Engineering" },
          { text: "ADA Compliance" },
          { text: "Texas" },
          { text: "Tennessee" },
          { text: "Arizona" },
          { text: "Florida" },
        ],
      },
      { type: "cta" },
    ],
  },

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