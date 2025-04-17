
export interface Skill {
  name: string;
  category: string;
  growth: number;
}

export interface Industry {
  name: string;
  sector: string;
  priority: number;
}

// Sample skills data for the matchmaking algorithm
export const skillsData: Skill[] = [
  { name: "Data Visualization", category: "Analytics", growth: 72 },
  { name: "Machine Learning Fundamentals", category: "AI", growth: 85 },
  { name: "Cybersecurity Ethics", category: "Security", growth: 68 },
  { name: "Cloud Architecture", category: "Infrastructure", growth: 79 },
  { name: "UX Research Methods", category: "Design", growth: 61 },
  { name: "Sustainability Engineering", category: "Green Tech", growth: 76 },
  { name: "Blockchain Applications", category: "Distributed Systems", growth: 58 },
  { name: "Mobile Development", category: "Software", growth: 63 },
  { name: "Quantum Computing Basics", category: "Advanced Computing", growth: 82 },
  { name: "Digital Marketing Analytics", category: "Marketing", growth: 67 },
  { name: "Technical Writing", category: "Communication", growth: 53 },
  { name: "Biotech Data Science", category: "Healthcare", growth: 88 },
  { name: "AR/VR Development", category: "Immersive Tech", growth: 74 },
  { name: "Supply Chain Management", category: "Operations", growth: 57 },
  { name: "Business Intelligence", category: "Analytics", growth: 65 },
  { name: "API Design", category: "Software", growth: 71 },
  { name: "Financial Technology", category: "Finance", growth: 77 },
  { name: "Renewable Energy Systems", category: "Green Tech", growth: 86 },
  { name: "Network Security", category: "Security", growth: 81 },
  { name: "Natural Language Processing", category: "AI", growth: 83 }
];

// Sample industry needs data for the matchmaking algorithm
export const industriesData: Industry[] = [
  { name: "AI-Driven Analytics", sector: "Technology", priority: 5 },
  { name: "Healthcare Innovation", sector: "Healthcare", priority: 5 },
  { name: "Sustainable Manufacturing", sector: "Manufacturing", priority: 4 },
  { name: "Financial Cybersecurity", sector: "Finance", priority: 5 },
  { name: "Smart Agriculture", sector: "Agriculture", priority: 3 },
  { name: "Digital Retail Experience", sector: "Retail", priority: 4 },
  { name: "Clean Energy Solutions", sector: "Energy", priority: 5 },
  { name: "EdTech Platforms", sector: "Education", priority: 4 },
  { name: "Smart City Infrastructure", sector: "Government", priority: 4 },
  { name: "Autonomous Transportation", sector: "Transportation", priority: 3 },
  { name: "Supply Chain Optimization", sector: "Logistics", priority: 4 },
  { name: "Virtual Workplace Tools", sector: "Enterprise", priority: 5 },
  { name: "Customer Experience Analytics", sector: "Services", priority: 3 },
  { name: "IoT Security", sector: "Technology", priority: 5 },
  { name: "Life Sciences Data", sector: "Biotechnology", priority: 4 },
  { name: "Digital Media Production", sector: "Entertainment", priority: 3 },
  { name: "Space Technology", sector: "Aerospace", priority: 4 },
  { name: "Construction Automation", sector: "Construction", priority: 3 },
  { name: "Insurance Risk Analytics", sector: "Insurance", priority: 4 },
  { name: "Legal Tech Solutions", sector: "Legal", priority: 3 }
];
