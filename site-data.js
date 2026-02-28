const ecosocContent = {
  conference: {
    name: "SEAMUN I 2027",
    committee: "Economic and Social Council (ECOSOC)",
    subtitle:
      "Committee portal for topic preparation, chair applications, and conference readiness.",
    location: "Bangkok",
    dates: "January 23-24, 2027"
  },
  conferenceInfo: {
    slogan: "Policies with a Purpose",
    format: "2-day conference",
    delegateCapacity: "200 delegates",
    committeeCount: "10 committees total",
    fees: [
      "Delegate fee (2-day): 1,800 THB",
      "Delegate fee (1-day): 1,200 THB",
      "Chair staff package fee: 800 THB",
      "One-day chair fee listed in planning notes: 500 THB"
    ],
    sessionPlan: [
      "Day 1: three committee sessions, total 4.5 hours",
      "Day 2: three committee sessions, total 4.5 hours",
      "Total committee debate time across conference: 9 hours"
    ]
  },
  about: {
    mission:
      "ECOSOC coordinates the UN's economic, social, and development work, connecting policy to implementation through specialized agencies and regional commissions.",
    focus:
      "At conference, delegates balance macro-level policy tradeoffs with practical outcomes, emphasizing equitable growth, resilience, and measurable impact."
  },
  topics: [
    {
      id: "t1",
      title:
        "The Question of Implementing a Globally Coordinated Universal Basic Income (UBI) Programme as a Strategy for Poverty Eradication and Economic Stability",
      summary:
        "Debate whether a globally coordinated UBI framework can reduce extreme poverty while preserving fiscal sustainability, labor incentives, and macroeconomic stability across diverse national contexts.",
      guidingQuestions: [
        "Should ECOSOC recommend universal design principles for UBI or region-specific implementation models?",
        "What financing mechanisms can support UBI pilots without destabilizing national budgets?",
        "How should states measure poverty-reduction outcomes and labor market effects?"
      ],
      prepIdeas: [
        "Compare at least two national cash-transfer or income-support models.",
        "Prepare evidence on fiscal trade-offs, inflation concerns, and social protection outcomes.",
        "Draft implementation clauses with timelines, safeguards, and monitoring indicators."
      ]
    },
    {
      id: "t2",
      title:
        "The Question of Exploring International Mechanisms for Reallocating Military Expenditures Towards the Development and Strengthening of Global Public Health Systems",
      summary:
        "Examine policy pathways for redirecting a portion of military expenditure toward resilient and equitable public health systems, especially in low- and middle-income settings.",
      guidingQuestions: [
        "What international accountability mechanisms could govern reallocation commitments?",
        "How can states balance sovereignty and security concerns with global health obligations?",
        "Which public-health investments should be prioritized for measurable long-term impact?"
      ],
      prepIdeas: [
        "Collect military spending and public-health spending trend data for your assigned country.",
        "Map feasible national pathways for partial budget reallocation or dual-use investments.",
        "Write clauses that include funding transparency, implementation oversight, and reporting benchmarks."
      ]
    }
  ],
  allocationExamples: {
    notes:
      "Examples below are for ECOSOC preparation and are illustrative only. Final country allocations are released by Delegate Affairs.",
    matrixSummary: [
      "ECOSOC allocation target: 22 delegates",
      "ECOSOC dais target: 2 chairs",
      "ECOSOC total room size: 24 participants"
    ],
    sampleCountryAllocations: [
      "Example A (balanced regional representation): United States, China, India, Brazil, Germany, South Africa, Indonesia, Mexico, Nigeria, Japan, France",
      "Example B (development-finance heavy): Bangladesh, Kenya, Ethiopia, Vietnam, Philippines, Colombia, Egypt, Pakistan, Peru, Morocco, Ghana",
      "Example C (health-systems and fiscal policy mix): Norway, Sweden, Canada, Rwanda, Thailand, Chile, Turkiye, United Arab Emirates, Argentina, Malaysia, Senegal"
    ]
  },
  keyTermsByTopic: {
    t1: [
      {
        term: "Universal Basic Income (UBI)",
        meaning: "Regular unconditional cash transfer paid to all eligible residents.",
        links: [
          {
            label: "World Bank - UBI explainer",
            url: "https://www.worldbank.org/en/topic/socialprotection/brief/ubiquitous-basic-income"
          }
        ]
      },
      {
        term: "Poverty Line",
        meaning: "Income threshold used to determine whether individuals live in poverty.",
        links: [{ label: "World Bank - Poverty", url: "https://www.worldbank.org/en/topic/poverty" }]
      },
      {
        term: "Social Protection Floor",
        meaning: "Minimum set of social security guarantees for basic income and services.",
        links: [
          {
            label: "ILO - Social protection floors",
            url: "https://www.ilo.org/global/topics/social-security/WCMS_503646/lang--en/index.htm"
          }
        ]
      },
      {
        term: "Targeted Cash Transfer",
        meaning: "Income support directed to specific populations based on eligibility criteria.",
        links: [{ label: "UNICEF - Cash transfers", url: "https://www.unicef.org/social-policy/cash-transfers" }]
      },
      {
        term: "Means Testing",
        meaning: "Assessing income/assets to determine eligibility for a social benefit.",
        links: [{ label: "OECD - Social spending", url: "https://www.oecd.org/social/expenditure.htm" }]
      },
      {
        term: "Fiscal Sustainability",
        meaning: "Ability of public finances to remain stable without unsustainable debt growth.",
        links: [{ label: "IMF - Fiscal policy", url: "https://www.imf.org/en/Topics/fiscal-policies" }]
      },
      {
        term: "Budget Deficit",
        meaning: "When government spending exceeds government revenue in a fiscal year.",
        links: [{ label: "IMF Data", url: "https://www.imf.org/en/Data" }]
      },
      {
        term: "Public Debt-to-GDP Ratio",
        meaning: "Indicator comparing a country's debt stock to annual economic output.",
        links: [{ label: "World Bank Data", url: "https://data.worldbank.org/" }]
      },
      {
        term: "Progressive Taxation",
        meaning: "Tax system where higher-income groups pay higher effective tax rates.",
        links: [{ label: "OECD - Tax policy", url: "https://www.oecd.org/tax/" }]
      },
      {
        term: "Inflationary Pressure",
        meaning: "Upward price pressure that can reduce the real value of cash benefits.",
        links: [{ label: "IMF - Inflation", url: "https://www.imf.org/en/Topics/inflation" }]
      },
      {
        term: "Labor Market Participation",
        meaning: "Share of population actively working or seeking employment.",
        links: [{ label: "ILOSTAT", url: "https://ilostat.ilo.org/" }]
      },
      {
        term: "Informal Economy",
        meaning: "Economic activity not fully regulated, taxed, or protected by formal systems.",
        links: [{ label: "ILO - Informal economy", url: "https://www.ilo.org/global/topics/employment-promotion/informal-economy/lang--en/index.htm" }]
      },
      {
        term: "Administrative Capacity",
        meaning: "Institutional ability to deliver programs effectively and at scale.",
        links: [{ label: "UNDP - Governance", url: "https://www.undp.org/governance" }]
      },
      {
        term: "Digital Public Infrastructure (DPI)",
        meaning: "Digital ID, payments, and data-exchange systems enabling public service delivery.",
        links: [{ label: "UNDP - Digital public infrastructure", url: "https://www.undp.org/digital/transformations/digital-public-infrastructure" }]
      },
      {
        term: "Financial Inclusion",
        meaning: "Access to affordable, useful financial services for individuals and firms.",
        links: [{ label: "World Bank - Financial inclusion", url: "https://www.worldbank.org/en/topic/financialinclusion" }]
      },
      {
        term: "Household Consumption Smoothing",
        meaning: "Maintaining stable household spending during income shocks or crises.",
        links: [{ label: "World Bank - Social protection", url: "https://www.worldbank.org/en/topic/socialprotection" }]
      },
      {
        term: "Conditionality",
        meaning: "Policy rule requiring beneficiaries to meet specific conditions for support.",
        links: [{ label: "UNICEF - Social policy", url: "https://www.unicef.org/social-policy" }]
      },
      {
        term: "Policy Pilot",
        meaning: "Limited trial implementation used to test outcomes before national rollout.",
        links: [{ label: "OECD - Policy experimentation", url: "https://www.oecd.org/gov/innovative-government/" }]
      },
      {
        term: "Monitoring and Evaluation (M&E)",
        meaning: "Processes to track implementation quality and measure program outcomes.",
        links: [{ label: "UNDP - Results based management", url: "https://www.undp.org/publications/handbook-planning-monitoring-and-evaluating-development-results" }]
      },
      {
        term: "Macroeconomic Stability",
        meaning: "Stable growth, inflation, and employment conditions across the economy.",
        links: [{ label: "IMF - Macroeconomic policy", url: "https://www.imf.org/en/Topics" }]
      }
    ],
    t2: [
      {
        term: "Military Expenditure",
        meaning: "Government spending on armed forces, defense operations, and military systems.",
        links: [{ label: "SIPRI - Military expenditure", url: "https://www.sipri.org/databases/milex" }]
      },
      {
        term: "Budget Reallocation",
        meaning: "Shifting resources from one spending area to another through fiscal policy.",
        links: [{ label: "IMF - Public financial management", url: "https://www.imf.org/en/Topics/Public-Financial-Management" }]
      },
      {
        term: "Opportunity Cost",
        meaning: "Value of alternatives forgone when resources are used for a different purpose.",
        links: [{ label: "OECD - Economics glossary", url: "https://www.oecd.org/" }]
      },
      {
        term: "Public Health Systems",
        meaning: "Institutions and services that prevent disease and provide population health care.",
        links: [{ label: "WHO - Health systems", url: "https://www.who.int/health-topics/health-systems-strengthening" }]
      },
      {
        term: "Primary Health Care (PHC)",
        meaning: "First-contact, community-based care forming the foundation of health systems.",
        links: [{ label: "WHO - Primary health care", url: "https://www.who.int/health-topics/primary-health-care" }]
      },
      {
        term: "Universal Health Coverage (UHC)",
        meaning: "Access to needed health services without financial hardship.",
        links: [{ label: "WHO - UHC", url: "https://www.who.int/health-topics/universal-health-coverage" }]
      },
      {
        term: "Health Workforce Capacity",
        meaning: "Availability and competency of doctors, nurses, and allied professionals.",
        links: [{ label: "WHO - Health workforce", url: "https://www.who.int/health-topics/health-workforce" }]
      },
      {
        term: "Pandemic Preparedness",
        meaning: "Planning and systems required to detect and respond to disease outbreaks.",
        links: [{ label: "WHO - Preparedness", url: "https://www.who.int/emergencies/preparedness" }]
      },
      {
        term: "Surveillance Systems",
        meaning: "Data systems used to monitor disease patterns and public health threats.",
        links: [{ label: "WHO - Surveillance", url: "https://www.who.int/health-topics/disease-outbreaks#tab=tab_1" }]
      },
      {
        term: "Essential Medicines Access",
        meaning: "Reliable availability of safe, effective, affordable priority medicines.",
        links: [{ label: "WHO - Essential medicines", url: "https://www.who.int/teams/health-product-policy-and-standards/essential-medicines-and-health-products" }]
      },
      {
        term: "Health Equity",
        meaning: "Fair access to health services and outcomes across different populations.",
        links: [{ label: "WHO - Equity", url: "https://www.who.int/health-topics/health-equity" }]
      },
      {
        term: "Disarmament for Development",
        meaning: "Concept linking reduced armament burdens to socio-economic development gains.",
        links: [{ label: "UNODA - Disarmament and development", url: "https://disarmament.unoda.org/" }]
      },
      {
        term: "Dual-Use Spending",
        meaning: "Expenditures that can serve both security and civilian resilience outcomes.",
        links: [{ label: "UN - Peace and development", url: "https://www.un.org/en/" }]
      },
      {
        term: "Budget Transparency",
        meaning: "Public access to government spending plans, data, and reporting.",
        links: [{ label: "Open Budget Survey", url: "https://internationalbudget.org/open-budget-survey/" }]
      },
      {
        term: "Accountability Framework",
        meaning: "Set of rules and review processes that track commitments and performance.",
        links: [{ label: "UN SDG follow-up", url: "https://sdgs.un.org/" }]
      },
      {
        term: "Sovereignty Concern",
        meaning: "State sensitivity about external influence over domestic spending decisions.",
        links: [{ label: "UN Charter", url: "https://www.un.org/en/about-us/un-charter" }]
      },
      {
        term: "Development Assistance",
        meaning: "International aid and cooperation to support long-term socio-economic progress.",
        links: [{ label: "OECD - Development co-operation", url: "https://www.oecd.org/dac/" }]
      },
      {
        term: "Health Financing",
        meaning: "How countries raise, pool, and spend funds for health services.",
        links: [{ label: "WHO - Health financing", url: "https://www.who.int/health-topics/health-financing" }]
      },
      {
        term: "Resilient Infrastructure",
        meaning: "Facilities and systems designed to withstand shocks and disruptions.",
        links: [{ label: "UNDRR - Resilience", url: "https://www.undrr.org/" }]
      },
      {
        term: "Outcome Indicators",
        meaning: "Measurable results used to assess policy impact over time.",
        links: [{ label: "World Bank indicators", url: "https://data.worldbank.org/indicator" }]
      }
    ]
  },
  chairApplications: {
    overview:
      "Chair applications are open to experienced MUN delegates who can facilitate rigorous, balanced, and inclusive debate for SEAMUN I 2027.",
    eligibility: [
      "At least 3 prior conference experiences (chairing preferred but not required).",
      "Strong familiarity with UN procedure and substantive issue research.",
      "Ability to provide timely delegate feedback and procedural guidance.",
      "Commitment to complete chair training and full 2-day moderation responsibilities."
    ],
    process: [
      "Submit online form with committee preference and statement of interest.",
      "Upload CV and a background guide sample aligned to your preferred topic area.",
      "Complete short interview focused on moderation, procedure, and crisis handling.",
      "Finalize staff package payment after study guide approval."
    ],
    timeline: [
      "Applications Open: TBA",
      "Priority Deadline: TBA",
      "Interviews: TBA",
      "Decisions Released: TBA",
      "Conference Dates: January 23-24, 2027"
    ],
    applyLink: "mailto:secretariat@seamun.example?subject=ECOSOC%20Chair%20Application"
  },
  resources: [
    {
      type: "UN",
      title: "UN ECOSOC Official Portal",
      description: "Mandates, sessions, subsidiary bodies, and official documentation.",
      url: "https://www.un.org/ecosoc/"
    },
    {
      type: "UN",
      title: "UN SDG Knowledge Platform",
      description: "Data, reports, and implementation updates across SDG pillars.",
      url: "https://sdgs.un.org/"
    },
    {
      type: "Data",
      title: "World Bank Open Data",
      description: "Country-level development indicators for evidence-based speeches.",
      url: "https://data.worldbank.org/"
    },
    {
      type: "Data",
      title: "UN Data",
      description: "Cross-system UN statistics to support policy benchmarking.",
      url: "https://data.un.org/"
    },
    {
      type: "Policy",
      title: "OECD Development Co-operation Directorate",
      description: "Insights on aid effectiveness and financing policy design.",
      url: "https://www.oecd.org/dac/"
    },
    {
      type: "Policy",
      title: "IMF Policy Papers",
      description: "Macro-fiscal frameworks, debt analyses, and resilience financing.",
      url: "https://www.imf.org/en/Publications/Policy-Papers"
    }
  ],
  delegateHelp: [
    "Bring a one-page policy brief with 3 concrete deliverables your delegation supports.",
    "Prepare at least 6 moderated caucus speaking points and 2 unmoderated goals.",
    "Use data in every speech: baseline, target, and implementation mechanism.",
    "Coordinate blocs early but keep room for cross-regional compromise."
  ],
  faq: [
    {
      q: "Will background guides be released here?",
      a: "Yes. Topic guides and update briefs will be posted in this portal as they are finalized."
    },
    {
      q: "Are first-time delegates allowed in ECOSOC?",
      a: "Yes. ECOSOC is open to first-time delegates who are willing to prepare with policy depth."
    },
    {
      q: "How formal should draft resolutions be?",
      a: "Use standard UN-style operative and preambulatory clauses with clear implementation language."
    }
  ]
};

module.exports = { ecosocContent };
