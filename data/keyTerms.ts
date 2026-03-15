/**
 * Key terms for ECOSOC 2027 agenda topics.
 * 20 terms per topic: title, desc, tag, links.
 */
export interface KeyTermLink {
  label: string;
  url: string;
}

export interface KeyTerm {
  title: string;
  desc: string;
  tag: string;
  links: KeyTermLink[];
}

export interface KeyTermsByTopic {
  t1: KeyTerm[];
  t2: KeyTerm[];
}

export const keyTermsByTopic: KeyTermsByTopic = {
  t1: [
    {
      title: "Universal Basic Income (UBI)",
      desc: "Regular unconditional cash transfer paid to all eligible residents.",
      tag: "Social Protection",
      links: [
        { label: "World Bank - UBI explainer", url: "https://www.worldbank.org/en/topic/socialprotection/brief/ubiquitous-basic-income" },
      ],
    },
    {
      title: "Poverty Line",
      desc: "Income threshold used to determine whether individuals live in poverty.",
      tag: "Measurement",
      links: [{ label: "World Bank - Poverty", url: "https://www.worldbank.org/en/topic/poverty" }],
    },
    {
      title: "Social Protection Floor",
      desc: "Minimum set of social security guarantees for basic income and services.",
      tag: "Social Protection",
      links: [
        { label: "ILO - Social protection floors", url: "https://www.ilo.org/global/topics/social-security/WCMS_503646/lang--en/index.htm" },
      ],
    },
    {
      title: "Targeted Cash Transfer",
      desc: "Income support directed to specific populations based on eligibility criteria.",
      tag: "Social Protection",
      links: [{ label: "UNICEF - Cash transfers", url: "https://www.unicef.org/social-policy/cash-transfers" }],
    },
    {
      title: "Means Testing",
      desc: "Assessing income or assets to determine eligibility for a social benefit.",
      tag: "Implementation",
      links: [{ label: "OECD - Social spending", url: "https://www.oecd.org/social/expenditure.htm" }],
    },
    {
      title: "Fiscal Sustainability",
      desc: "Ability of public finances to remain stable without unsustainable debt growth.",
      tag: "Economics",
      links: [{ label: "IMF - Fiscal policy", url: "https://www.imf.org/en/Topics/fiscal-policies" }],
    },
    {
      title: "Budget Deficit",
      desc: "When government spending exceeds government revenue in a fiscal year.",
      tag: "Economics",
      links: [{ label: "IMF Data", url: "https://www.imf.org/en/Data" }],
    },
    {
      title: "Public Debt-to-GDP Ratio",
      desc: "Indicator comparing a country's debt stock to its annual economic output.",
      tag: "Economics",
      links: [{ label: "World Bank Data", url: "https://data.worldbank.org/" }],
    },
    {
      title: "Progressive Taxation",
      desc: "Tax system where higher-income groups pay higher effective tax rates.",
      tag: "Economics",
      links: [{ label: "OECD - Tax policy", url: "https://www.oecd.org/tax/" }],
    },
    {
      title: "Inflationary Pressure",
      desc: "Upward price pressure that can reduce the real value of cash benefits.",
      tag: "Economics",
      links: [{ label: "IMF - Inflation", url: "https://www.imf.org/en/Topics/inflation" }],
    },
    {
      title: "Labor Market Participation",
      desc: "Share of the population actively working or seeking employment.",
      tag: "Labor",
      links: [{ label: "ILOSTAT", url: "https://ilostat.ilo.org/" }],
    },
    {
      title: "Informal Economy",
      desc: "Economic activity not fully regulated, taxed, or protected by formal systems.",
      tag: "Labor",
      links: [
        {
          label: "ILO - Informal economy",
          url: "https://www.ilo.org/global/topics/employment-promotion/informal-economy/lang--en/index.htm",
        },
      ],
    },
    {
      title: "Administrative Capacity",
      desc: "Institutional ability to deliver programs effectively and at scale.",
      tag: "Implementation",
      links: [{ label: "UNDP - Governance", url: "https://www.undp.org/governance" }],
    },
    {
      title: "Digital Public Infrastructure (DPI)",
      desc: "Digital ID, payments, and data-exchange systems enabling public service delivery.",
      tag: "Implementation",
      links: [
        {
          label: "UNDP - Digital public infrastructure",
          url: "https://www.undp.org/digital/transformations/digital-public-infrastructure",
        },
      ],
    },
    {
      title: "Financial Inclusion",
      desc: "Access to affordable, useful financial services for individuals and firms.",
      tag: "Economics",
      links: [
        { label: "World Bank - Financial inclusion", url: "https://www.worldbank.org/en/topic/financialinclusion" },
      ],
    },
    {
      title: "Household Consumption Smoothing",
      desc: "Maintaining stable household spending during income shocks or crises.",
      tag: "Social Protection",
      links: [
        { label: "World Bank - Social protection", url: "https://www.worldbank.org/en/topic/socialprotection" },
      ],
    },
    {
      title: "Conditionality",
      desc: "Policy rule requiring beneficiaries to meet specific conditions for support.",
      tag: "Implementation",
      links: [{ label: "UNICEF - Social policy", url: "https://www.unicef.org/social-policy" }],
    },
    {
      title: "Policy Pilot",
      desc: "Limited trial implementation used to test outcomes before national rollout.",
      tag: "Implementation",
      links: [
        { label: "OECD - Policy experimentation", url: "https://www.oecd.org/gov/innovative-government/" },
      ],
    },
    {
      title: "Monitoring and Evaluation (M&E)",
      desc: "Processes to track implementation quality and measure program outcomes.",
      tag: "Implementation",
      links: [
        {
          label: "UNDP - Results based management",
          url: "https://www.undp.org/publications/handbook-planning-monitoring-and-evaluating-development-results",
        },
      ],
    },
    {
      title: "Macroeconomic Stability",
      desc: "Stable growth, inflation, and employment conditions across the economy.",
      tag: "Economics",
      links: [{ label: "IMF - Macroeconomic policy", url: "https://www.imf.org/en/Topics" }],
    },
  ],
  t2: [
    {
      title: "Military Expenditure",
      desc: "Government spending on armed forces, defense operations, and military systems.",
      tag: "Defense",
      links: [{ label: "SIPRI - Military expenditure", url: "https://www.sipri.org/databases/milex" }],
    },
    {
      title: "Budget Reallocation",
      desc: "Shifting resources from one spending area to another through fiscal policy.",
      tag: "Finance",
      links: [
        {
          label: "IMF - Public financial management",
          url: "https://www.imf.org/en/Topics/Public-Financial-Management",
        },
      ],
    },
    {
      title: "Opportunity Cost",
      desc: "Value of alternatives forgone when resources are used for a different purpose.",
      tag: "Economics",
      links: [{ label: "OECD - Economics glossary", url: "https://www.oecd.org/" }],
    },
    {
      title: "Public Health Systems",
      desc: "Institutions and services that prevent disease and provide population health care.",
      tag: "Health",
      links: [
        { label: "WHO - Health systems", url: "https://www.who.int/health-topics/health-systems-strengthening" },
      ],
    },
    {
      title: "Primary Health Care (PHC)",
      desc: "First-contact, community-based care forming the foundation of health systems.",
      tag: "Health",
      links: [
        { label: "WHO - Primary health care", url: "https://www.who.int/health-topics/primary-health-care" },
      ],
    },
    {
      title: "Universal Health Coverage (UHC)",
      desc: "Access to needed health services without financial hardship.",
      tag: "Health",
      links: [
        { label: "WHO - UHC", url: "https://www.who.int/health-topics/universal-health-coverage" },
      ],
    },
    {
      title: "Health Workforce Capacity",
      desc: "Availability and competency of doctors, nurses, and allied health professionals.",
      tag: "Health",
      links: [
        { label: "WHO - Health workforce", url: "https://www.who.int/health-topics/health-workforce" },
      ],
    },
    {
      title: "Pandemic Preparedness",
      desc: "Planning and systems required to detect and respond to disease outbreaks.",
      tag: "Health",
      links: [{ label: "WHO - Preparedness", url: "https://www.who.int/emergencies/preparedness" }],
    },
    {
      title: "Surveillance Systems",
      desc: "Data systems used to monitor disease patterns and public health threats.",
      tag: "Health",
      links: [
        {
          label: "WHO - Disease outbreaks",
          url: "https://www.who.int/health-topics/disease-outbreaks",
        },
      ],
    },
    {
      title: "Essential Medicines Access",
      desc: "Reliable availability of safe, effective, affordable priority medicines.",
      tag: "Health",
      links: [
        {
          label: "WHO - Essential medicines",
          url: "https://www.who.int/teams/health-product-policy-and-standards/essential-medicines-and-health-products",
        },
      ],
    },
    {
      title: "Health Equity",
      desc: "Fair access to health services and outcomes across different populations.",
      tag: "Health",
      links: [{ label: "WHO - Health equity", url: "https://www.who.int/health-topics/health-equity" }],
    },
    {
      title: "Disarmament for Development",
      desc: "Concept linking reduced armament burdens to socio-economic development gains.",
      tag: "Governance",
      links: [{ label: "UNODA - Disarmament", url: "https://disarmament.unoda.org/" }],
    },
    {
      title: "Dual-Use Spending",
      desc: "Expenditures that can serve both security and civilian resilience outcomes.",
      tag: "Defense",
      links: [{ label: "UN - Peace and development", url: "https://www.un.org/en/" }],
    },
    {
      title: "Budget Transparency",
      desc: "Public access to government spending plans, data, and reporting.",
      tag: "Governance",
      links: [
        { label: "Open Budget Survey", url: "https://internationalbudget.org/open-budget-survey/" },
      ],
    },
    {
      title: "Accountability Framework",
      desc: "Set of rules and review processes that track commitments and performance.",
      tag: "Governance",
      links: [{ label: "UN SDG follow-up", url: "https://sdgs.un.org/" }],
    },
    {
      title: "Sovereignty Concern",
      desc: "State sensitivity about external influence over domestic spending decisions.",
      tag: "Governance",
      links: [{ label: "UN Charter", url: "https://www.un.org/en/about-us/un-charter" }],
    },
    {
      title: "Development Assistance",
      desc: "International aid and cooperation to support long-term socio-economic progress.",
      tag: "Finance",
      links: [
        { label: "OECD - Development co-operation", url: "https://www.oecd.org/dac/" },
      ],
    },
    {
      title: "Health Financing",
      desc: "How countries raise, pool, and spend funds for health services.",
      tag: "Finance",
      links: [
        { label: "WHO - Health financing", url: "https://www.who.int/health-topics/health-financing" },
      ],
    },
    {
      title: "Resilient Infrastructure",
      desc: "Facilities and systems designed to withstand shocks and disruptions.",
      tag: "Health",
      links: [{ label: "UNDRR - Resilience", url: "https://www.undrr.org/" }],
    },
    {
      title: "Outcome Indicators",
      desc: "Measurable results used to assess policy impact over time.",
      tag: "Governance",
      links: [{ label: "World Bank indicators", url: "https://data.worldbank.org/indicator" }],
    },
  ],
};
