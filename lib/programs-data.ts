// ─── Shared program data layer ──────────────────────────────────────────────
// Single source of truth consumed by the homepage featured-causes, the
// /programs listing, and the /programs/[id] detail page.

export type ProgramCategory =
  | "Education"
  | "Water & Sanitation"
  | "Healthcare"
  | "Environment"
  | "Community"
  | "Emergency"

export type ProgramUrgency = "normal" | "high" | "critical"

export interface ProgramImpact {
  stat: string
  label: string
}

export interface ProgramTestimonial {
  quote: string
  author: string
  role: string
}

export interface Program {
  id: number
  title: string
  tagline: string
  description: string
  longDescription: string
  image: string
  gallery: string[]
  category: ProgramCategory
  urgency: ProgramUrgency
  raised: number
  goal: number
  donors: number
  daysLeft: number
  impact: ProgramImpact[]
  testimonial: ProgramTestimonial
  location: string
  featured: boolean
  /** Name of the local NGO that independently verified this program */
  verifiedBy: string
}

// ─── Mock data ──────────────────────────────────────────────────────────────

export const programs: Program[] = [
  {
    id: 1,
    title: "Education for Every Child",
    tagline: "Breaking the cycle of poverty through learning",
    description:
      "Providing school supplies, scholarships, and teacher training to underserved communities so that every child has a chance to learn.",
    longDescription: `Access to quality education is one of the most powerful tools for breaking the cycle of poverty. Yet millions of children around the world still lack basic educational resources — from textbooks and school supplies to trained teachers and safe classrooms.

Our Education for Every Child program works directly with local communities to build sustainable educational infrastructure. We fund scholarships for children who would otherwise drop out, provide teacher training workshops that improve classroom outcomes, and distribute essential supplies to schools in need.

Since inception, this program has helped over 3,200 children stay in school and graduate. Our teacher training workshops have reached 450+ educators, improving learning outcomes across 85 schools in 12 countries.`,
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Education",
    urgency: "high",
    raised: 42500,
    goal: 60000,
    donors: 312,
    daysLeft: 28,
    impact: [
      { stat: "3,200+", label: "Children in School" },
      { stat: "450", label: "Teachers Trained" },
      { stat: "85", label: "Schools Supported" },
      { stat: "12", label: "Countries Reached" },
    ],
    testimonial: {
      quote:
        "Before this program, I had to walk two hours to the nearest school. Now there\u2019s a school in our village, and I\u2019m the first girl in my family to learn to read.",
      author: "Amina K.",
      role: "Student, age 12",
    },
    location: "Sub-Saharan Africa & South Asia",
    featured: true,
    verifiedBy: "African Education Trust",
  },
  {
    id: 2,
    title: "Clean Water Initiative",
    tagline: "Safe water for every family, every day",
    description:
      "Building wells and water purification systems in rural villages to provide safe, accessible drinking water for families.",
    longDescription: `Nearly 2 billion people worldwide lack access to safely managed drinking water. Contaminated water is one of the leading causes of preventable disease, disproportionately affecting children and vulnerable communities.

The Clean Water Initiative partners with local engineers and community leaders to design and install sustainable water systems — from deep bore-hole wells to solar-powered purification units. Every installation is paired with community maintenance training so the infrastructure lasts for decades.

Each well we build serves an average of 500 people and reduces waterborne illness by up to 80% in the surrounding area. We also integrate hygiene education programs to maximize health impact.`,
    image:
      "https://images.pexels.com/photos/14325728/pexels-photo-14325728.jpeg",
    gallery: [
      "https://images.unsplash.com/photo-1538300342682-cf57afb97285?w=800&q=80&auto=format&fit=crop",
      "https://images.pexels.com/photos/28101466/pexels-photo-28101466.jpeg",
      "https://images.pexels.com/photos/3079978/pexels-photo-3079978.jpeg",
    ],
    category: "Water & Sanitation",
    urgency: "critical",
    raised: 78000,
    goal: 100000,
    donors: 548,
    daysLeft: 14,
    impact: [
      { stat: "15,000+", label: "People Served" },
      { stat: "42", label: "Wells Built" },
      { stat: "80%", label: "Disease Reduction" },
      { stat: "8", label: "Regions Covered" },
    ],
    testimonial: {
      quote:
        "Our children used to get sick every rainy season from the river water. Since the well was built, we haven\u2019t had a single case of cholera in our village.",
      author: "Grace M.",
      role: "Village Elder, Makueni County",
    },
    location: "East Africa & Southeast Asia",
    featured: true,
    verifiedBy: "WaterAid Kenya",
  },
  {
    id: 3,
    title: "Community Health Clinics",
    tagline: "Bringing healthcare to those who need it most",
    description:
      "Establishing mobile clinics and training local health workers to bring preventive care and essential medicine to remote areas.",
    longDescription: `In many rural and remote communities, the nearest hospital is hours — sometimes days — away. Preventable conditions go untreated, maternal mortality rates remain high, and children miss out on life-saving vaccinations.

Our Community Health Clinics program deploys mobile medical units staffed by trained health workers to reach underserved populations. We provide primary care, prenatal services, immunizations, and health education, often serving as the only healthcare access point for entire villages.

Each clinic serves 200–400 patients per month and operates on a sustainable model that trains local community health workers to continue delivering care between visits.`,
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Healthcare",
    urgency: "high",
    raised: 31200,
    goal: 50000,
    donors: 189,
    daysLeft: 35,
    impact: [
      { stat: "8,400+", label: "Patients Treated" },
      { stat: "6", label: "Mobile Clinics" },
      { stat: "120", label: "Health Workers Trained" },
      { stat: "95%", label: "Vaccination Coverage" },
    ],
    testimonial: {
      quote:
        "The mobile clinic saved my daughter\u2019s life. She had a high fever for three days, and the nearest hospital was a full day\u2019s travel. The clinic arrived just in time.",
      author: "Maria S.",
      role: "Mother of three, rural Guatemala",
    },
    location: "Central America & West Africa",
    featured: true,
    verifiedBy: "Médicos Sin Fronteras MX",
  },
  {
    id: 4,
    title: "Reforestation Project",
    tagline: "Restoring ecosystems, one tree at a time",
    description:
      "Planting native trees to restore ecosystems, combat climate change, and provide sustainable livelihoods for local communities.",
    longDescription: `Deforestation destroys habitats, accelerates climate change, and strips communities of the natural resources they depend on for food, medicine, and income. Our Reforestation Project takes a community-first approach to restoring degraded landscapes.

We work with indigenous communities and local farmers to plant native tree species that restore biodiversity while creating economic opportunity. Our agroforestry model integrates fruit and nut trees with timber species, giving communities a long-term revenue stream that incentivizes forest stewardship.

Every tree planted sequesters an average of 48 lbs of CO₂ per year. Our goal is to plant 500,000 trees by 2028, creating green corridors that connect fragmented habitats and protect endangered species.`,
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Environment",
    urgency: "normal",
    raised: 18700,
    goal: 35000,
    donors: 134,
    daysLeft: 60,
    impact: [
      { stat: "125K+", label: "Trees Planted" },
      { stat: "2,400", label: "Acres Restored" },
      { stat: "6M lbs", label: "CO₂ Offset/Year" },
      { stat: "340", label: "Families Supported" },
    ],
    testimonial: {
      quote:
        "The forest was gone when I was a boy. Now my grandchildren play under the trees we planted together. The birds have come back, and so has our livelihood.",
      author: "Carlos R.",
      role: "Community Farmer, Amazonia",
    },
    location: "Amazon Basin & Southeast Asia",
    featured: true,
    verifiedBy: "Amazon Conservation Assoc.",
  },
  {
    id: 5,
    title: "Women's Empowerment Hub",
    tagline: "Skills, confidence, and opportunity for women",
    description:
      "Micro-loans, vocational training, and mentorship programs that equip women with the tools to build independent livelihoods.",
    longDescription: `When women thrive, entire communities are lifted. Yet in many regions, women face systemic barriers to education, employment, and financial independence. Our Women's Empowerment Hub removes those barriers through a holistic three-pillar approach.

First, we provide micro-loans of $200–$1,000 to women entrepreneurs starting or growing small businesses. Second, we offer vocational training in high-demand skills like tailoring, digital literacy, and sustainable agriculture. Third, we pair each participant with a local mentor who provides ongoing guidance and support.

Over 85% of our micro-loan recipients successfully repay their loans within 18 months, and the average participant sees a 3× increase in household income within two years.`,
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Community",
    urgency: "normal",
    raised: 22400,
    goal: 40000,
    donors: 201,
    daysLeft: 45,
    impact: [
      { stat: "1,200+", label: "Women Trained" },
      { stat: "850", label: "Micro-Loans Issued" },
      { stat: "3×", label: "Avg Income Increase" },
      { stat: "85%", label: "Loan Repayment Rate" },
    ],
    testimonial: {
      quote:
        "With my micro-loan, I started a tailoring business. Now I employ three other women from my village. My daughters will never have to depend on anyone.",
      author: "Fatima N.",
      role: "Entrepreneur, Dhaka",
    },
    location: "South Asia & East Africa",
    featured: false,
    verifiedBy: "BRAC Bangladesh",
  },
  {
    id: 6,
    title: "Disaster Relief Fund",
    tagline: "Immediate aid when communities need it most",
    description:
      "Rapid-response fund providing emergency shelter, food, and medical care to communities affected by natural disasters.",
    longDescription: `When disaster strikes — hurricanes, earthquakes, floods, or wildfires — the first 72 hours are critical. Our Disaster Relief Fund maintains a rapid-response reserve that deploys within 24 hours of a declared emergency.

We partner with local organizations already embedded in affected communities to distribute emergency supplies: clean water, food rations, temporary shelters, hygiene kits, and first-aid materials. Our model prioritizes local procurement to support the affected economy and ensure cultural appropriateness.

Beyond immediate relief, we fund medium-term recovery — rebuilding schools, restoring water systems, and providing psychosocial support to help communities rebuild stronger and more resilient than before.`,
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Emergency",
    urgency: "critical",
    raised: 95000,
    goal: 120000,
    donors: 723,
    daysLeft: 7,
    impact: [
      { stat: "25K+", label: "People Aided" },
      { stat: "14", label: "Disasters Responded" },
      { stat: "24hrs", label: "Avg Response Time" },
      { stat: "5,000+", label: "Shelters Provided" },
    ],
    testimonial: {
      quote:
        "We lost everything in the flood. Within 24 hours, relief teams were here with food, water, and shelter. They gave us the strength to rebuild.",
      author: "Raj P.",
      role: "Flood survivor, Bihar",
    },
    location: "Global",
    featured: false,
    verifiedBy: "IFRC Relief Network",
  },
  {
    id: 7,
    title: "Youth Sports & Recreation",
    tagline: "Building character through teamwork and play",
    description:
      "Funding sports equipment, coaching programs, and safe recreational spaces for youth in underserved neighborhoods.",
    longDescription: `Sports and recreation are more than just games — they build discipline, teamwork, confidence, and community. Yet many young people in underserved neighborhoods lack access to safe spaces to play, quality coaching, and basic equipment.

Our Youth Sports & Recreation program transforms vacant lots into community sports fields, provides equipment and uniforms to youth leagues, and trains volunteer coaches in positive youth development practices. We focus on inclusive programming that welcomes all skill levels and backgrounds.

Participants show measurable improvements in school attendance (up 18%), self-reported confidence, and community engagement. Our after-school sports programs also serve as safe havens, keeping young people engaged during high-risk afternoon hours.`,
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Community",
    urgency: "normal",
    raised: 12300,
    goal: 25000,
    donors: 98,
    daysLeft: 50,
    impact: [
      { stat: "2,800+", label: "Youth Enrolled" },
      { stat: "18%", label: "Attendance Increase" },
      { stat: "45", label: "Coaches Trained" },
      { stat: "12", label: "Fields Built" },
    ],
    testimonial: {
      quote:
        "Soccer practice kept me off the streets. Coach Martinez believed in me when nobody else did. Now I'm mentoring younger kids in the same program.",
      author: "Diego L.",
      role: "Youth mentor, age 17",
    },
    location: "United States & Latin America",
    featured: false,
    verifiedBy: "YouthBuild International",
  },
  {
    id: 8,
    title: "Sustainable Agriculture Training",
    tagline: "Growing food, growing futures",
    description:
      "Teaching regenerative farming techniques that improve yields, restore soil health, and secure food sovereignty for rural families.",
    longDescription: `Smallholder farmers produce over 70% of the world's food, yet many struggle with depleted soil, water scarcity, and the effects of climate change. Our Sustainable Agriculture Training program equips farming families with regenerative techniques that work with nature rather than against it.

We teach composting, crop rotation, rainwater harvesting, integrated pest management, and seed saving — practices that reduce input costs while improving yields. Our demonstration farms serve as living classrooms where farmers learn by doing, and our peer educator model ensures knowledge spreads organically through farming communities.

Participants report an average 40% increase in crop yields within two growing seasons, along with significant improvements in soil health and water retention.`,
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80&auto=format&fit=crop",
    ],
    category: "Environment",
    urgency: "normal",
    raised: 15800,
    goal: 30000,
    donors: 112,
    daysLeft: 42,
    impact: [
      { stat: "960+", label: "Farmers Trained" },
      { stat: "40%", label: "Avg Yield Increase" },
      { stat: "18", label: "Demo Farms" },
      { stat: "6,500", label: "Acres Improved" },
    ],
    testimonial: {
      quote:
        "I used to barely grow enough to feed my family. After learning composting and crop rotation, my harvest doubled and I now sell surplus at the market.",
      author: "Samuel O.",
      role: "Smallholder farmer, Kenya",
    },
    location: "Sub-Saharan Africa & Central America",
    featured: false,
    verifiedBy: "GreenAfrica Foundation",
  },
]

// ─── Helpers ────────────────────────────────────────────────────────────────

export const categories: ProgramCategory[] = [
  "Education",
  "Water & Sanitation",
  "Healthcare",
  "Environment",
  "Community",
  "Emergency",
]

export function getProgramById(id: number): Program | undefined {
  return programs.find((p) => p.id === id)
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function getPercentage(raised: number, goal: number): number {
  return Math.min(Math.round((raised / goal) * 100), 100)
}
