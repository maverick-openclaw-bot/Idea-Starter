export interface WTPSignal {
  strength: "strong" | "moderate" | "weak";
  quote: string;
  source: string;
}

export interface PainPoint {
  rank: number;
  title: string;
  severity: "critical" | "high" | "medium" | "low";
  score: number;
  verdict: "BUILD" | "SKIP" | "RESEARCH MORE";
  wtpScore: number;
  description: string;
  mentionCount: number;
  subreddits: string[];
  userQuotes: string[];
  existingSolutions: string;
  wtpSignals: WTPSignal[];
  solutionIdeas: string[];
}

export interface DemoData {
  query: string;
  generatedAt: string;
  painPoints: PainPoint[];
}

export const demoData: DemoData = {
  query: "entrepreneur / startup pain points",
  generatedAt: "2026-03-29",
  painPoints: [
    {
      rank: 1,
      title: "SaaS Subscription Overload for Small Businesses",
      severity: "critical",
      score: 91,
      verdict: "BUILD",
      wtpScore: 82,
      description:
        "Small business owners are drowning in software subscriptions. A 12-person company reports paying $4,100/mo ($50K/yr) across 23 separate tools — up from $1,200/mo just five years ago. Founders feel trapped: each tool solves one problem but the total cost is unsustainable.",
      mentionCount: 147,
      subreddits: ["r/Entrepreneur", "r/smallbusiness", "r/SaaS", "r/startups"],
      userQuotes: [
        "We are paying for 23 separate software subscriptions right now, everything from accounting to project management to CRM to email marketing... the total monthly spend is $4,100 which is almost $50,000 a year for a 12 person company.",
        "Five years ago that number was about $1,200/month. Every single one of these tools has raised prices, some of them multiple times. And we keep adding new ones because each tool does one thing and nothing talks to anything else.",
        "I genuinely don't know how small businesses with tight margins are supposed to survive the software tax that keeps going up every year with no end in sight.",
      ],
      existingSolutions:
        "Bundled suites (Google Workspace, Zoho One), all-in-one tools (Monday.com, ClickUp), integration platforms (Zapier, Make)",
      wtpSignals: [
        {
          strength: "strong",
          quote:
            "I would mass cancel everything and pay $200/mo for an all-in-one that actually works for a small team.",
          source: "r/Entrepreneur",
        },
        {
          strength: "strong",
          quote:
            "About 7% of all 'wish there was an app' requests specifically asked for offline-first or privacy-focused tools. People are getting subscription fatigue.",
          source: "r/SaaS",
        },
        {
          strength: "moderate",
          quote:
            "We switched to Zoho One to save money but the UX is terrible. Would pay more for something that doesn't feel like a 2010 product.",
          source: "r/smallbusiness",
        },
      ],
      solutionIdeas: [
        "Curated small-biz software bundle with integrated billing",
        "AI-powered software audit tool that finds redundant subscriptions",
        "Open-source all-in-one for teams under 20 people",
      ],
    },
    {
      rank: 2,
      title: "Building Products Nobody Wants (Validation Failure)",
      severity: "critical",
      score: 88,
      verdict: "BUILD",
      wtpScore: 75,
      description:
        "Indie hackers and first-time founders keep building products without talking to customers first. The pattern is universal: spend months coding, launch to crickets, repeat. The root cause is that validation tools are either too expensive or don't exist — so founders default to building blindly.",
      mentionCount: 134,
      subreddits: [
        "r/indiehackers",
        "r/SaaS",
        "r/SideProject",
        "r/Entrepreneur",
      ],
      userQuotes: [
        "I keep seeing posts about people reaching $10K MRR or getting their first 100 users. Instead, let me show you how to build six products and still end up with nothing.",
        "Spend 6 months building before talking to a single human. You have a vision, so don't let potential customers mess it up with their feedback or needs.",
        "I've built 30+ MVPs for founders. I can tell within 5 minutes of a call whether someone is actually building a business or just hiding from the job market behind a Figma file and a domain name.",
      ],
      existingSolutions:
        "GummySearch (shut down Nov 2025), BigIdeasDB ($29/mo), PainRadar (new), Google Trends, manual Reddit browsing",
      wtpSignals: [
        {
          strength: "strong",
          quote:
            "I keep a spreadsheet of every 'why doesn't this exist' post I find online. The word 'overkill' is the strongest buying signal on the internet — they're currently paying and would switch to something simpler.",
          source: "r/SideProject",
        },
        {
          strength: "strong",
          quote:
            "I analyzed 9,300+ 'I wish there was an app for this' posts on Reddit. The data on what people actually want is completely counter-intuitive.",
          source: "r/SaaS",
        },
        {
          strength: "moderate",
          quote:
            "If someone built a tool that automatically found me validated problems to solve instead of me spending weeks on Reddit, I'd pay in a heartbeat.",
          source: "r/indiehackers",
        },
      ],
      solutionIdeas: [
        "Pain point aggregator with WTP signal detection (← this is Idea Starter!)",
        "Automated customer interview scheduling + analysis tool",
        "Idea validation scorecard with real market data",
      ],
    },
    {
      rank: 3,
      title: "SaaS Pricing: Too Low Kills Conversions",
      severity: "high",
      score: 84,
      verdict: "BUILD",
      wtpScore: 85,
      description:
        "Founders consistently underprice their SaaS products and lose customers because of it. Low prices signal low value, attract tire-kickers, and make the product feel disposable. Multiple founders report that raising prices 2-3x with zero product changes led to better conversion and retention.",
      mentionCount: 89,
      subreddits: [
        "r/Entrepreneur",
        "r/SaaS",
        "r/indiehackers",
        "r/microsaas",
      ],
      userQuotes: [
        "My SaaS had zero conversions at $9/mo. I raised to $29 and people started paying. Same product, nothing else changed.",
        "$9 made it look disposable. Nobody took it seriously enough to put it into their workflow. At $29, people treat it like a business tool, not a toy.",
        "The ones who stuck around at $9 kept asking for features instead of paying. At $29, people treat it like a business tool, not a toy.",
      ],
      existingSolutions:
        "ProfitWell (pricing analytics), Paddle (billing), Stripe pricing experiments, manual A/B testing",
      wtpSignals: [
        {
          strength: "strong",
          quote:
            "Raised from $9 to $29, same product. Fewer signups but actual paying customers. Revenue went from $0 to covering my costs in 2 months.",
          source: "r/Entrepreneur",
        },
        {
          strength: "strong",
          quote:
            "My SaaS makes $23K MRR. 284 customers at $81/mo average. Everyone tells me to scale but I work 25 hours a week. What would I be optimizing for?",
          source: "r/SaaS",
        },
        {
          strength: "moderate",
          quote:
            "I'd pay for a tool that tells me exactly what price point maximizes revenue for my niche. Right now I'm just guessing.",
          source: "r/microsaas",
        },
      ],
      solutionIdeas: [
        "AI-powered pricing advisor based on competitor and niche analysis",
        "Dynamic pricing A/B testing platform for micro-SaaS",
        "Pricing psychology course + toolkit for indie founders",
      ],
    },
    {
      rank: 4,
      title: "Freelancer Platform Trust & Safety Crisis",
      severity: "high",
      score: 79,
      verdict: "RESEARCH MORE",
      wtpScore: 62,
      description:
        "Freelancers on Upwork and Fiverr are getting hit with sophisticated scams — malware disguised as client projects, fake job postings, and payment fraud. Platforms aren't protecting them. The trust infrastructure for freelance work is fundamentally broken.",
      mentionCount: 72,
      subreddits: [
        "r/freelance",
        "r/webdev",
        "r/Entrepreneur",
        "r/SideProject",
      ],
      userQuotes: [
        "First 'client' I get sends me a Next.js project and says 'just run it locally.' They sent malware — deliberately hidden obfuscated JavaScript buried at the bottom of nextjs.config.js under a massive wall of blank lines.",
        "Once I de-obfuscated it: full file system access, detecting the user's OS, stealing browser cookies and crypto wallets. This was 100% intentional.",
        "How do I price a client who left me for a larger company? He was one of my first clients. Within a year we dominated his core local area. Then he left for a bigger agency and now he's back because they couldn't deliver.",
      ],
      existingSolutions:
        "Upwork SafePay, Fiverr Resolution Center, Deel (contracts), virtual machines for testing",
      wtpSignals: [
        {
          strength: "moderate",
          quote:
            "I'd pay $20/mo for a sandbox tool that automatically scans client code for malicious patterns before I run it.",
          source: "r/freelance",
        },
        {
          strength: "moderate",
          quote:
            "Would gladly pay for a verified freelance platform where both sides go through identity verification. The scam rate on Upwork is getting insane.",
          source: "r/webdev",
        },
        {
          strength: "weak",
          quote:
            "Someone should build an escrow service specifically for freelance dev work that actually protects the developer, not just the client.",
          source: "r/freelance",
        },
      ],
      solutionIdeas: [
        "Code sandbox / malware scanner for freelancers receiving client code",
        "Verified freelance marketplace with mutual identity checks",
        "Smart escrow service with milestone-based payouts",
      ],
    },
    {
      rank: 5,
      title: "Finding First Customers Is Harder Than Building",
      severity: "high",
      score: 82,
      verdict: "BUILD",
      wtpScore: 71,
      description:
        "Technical founders can build anything but have zero idea how to find their first 10 paying customers. The gap between 'product exists' and 'product has users' is where most indie projects die. Founders with $5K-$10K budgets are paralyzed by too many options and no clear acquisition playbook.",
      mentionCount: 112,
      subreddits: [
        "r/Entrepreneur",
        "r/SaaS",
        "r/indiehackers",
        "r/SideProject",
      ],
      userQuotes: [
        "I'm a developer with someone willing to invest $5k. What I don't want is to spend 3 months building something clever that nobody needs.",
        "They have a landing page but no users. They've been 'refining the product' for 4 months but haven't shown it to a single stranger. They spend 6 hours in their code editor and zero minutes talking to people who might pay.",
        "I had 17 business ideas in my notes app. Never built any of them. The problem isn't ideas — it's that I have no clue how to get from idea to first dollar.",
      ],
      existingSolutions:
        "YC Startup School (free), Indie Hackers community, Twitter/X building in public, cold outreach tools",
      wtpSignals: [
        {
          strength: "strong",
          quote:
            "If someone built a step-by-step customer acquisition playbook with templates specifically for solo technical founders, I'd buy it today.",
          source: "r/indiehackers",
        },
        {
          strength: "moderate",
          quote:
            "I have a developer + $5k + a goal to build something small but profitable. Would pay for a validated idea + go-to-market plan instead of guessing.",
          source: "r/Entrepreneur",
        },
        {
          strength: "moderate",
          quote:
            "Solo founders are winning faster than ever right now. But most of them figured out distribution before product. Nobody teaches that.",
          source: "r/indiehackers",
        },
      ],
      solutionIdeas: [
        "First-10-customers playbook tool with templates per niche",
        "AI co-founder for go-to-market strategy",
        "Matchmaking platform: founders with products ↔ founders with distribution",
      ],
    },
  ],
};
