import { Brain, Building2, FileText, Globe, Landmark, LightbulbIcon, MapPin, Puzzle } from "lucide-react";
import { ReactNode } from "react";

interface KnowledgeSection {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
  role: "student" | "teacher" | "policy" | "industry" | "admin";
  contentType: string;
  actionUrl?: string;
  resourceType: "document" | "tool" | "data" | "guide" | "video";
}

export const knowledgeSections: KnowledgeSection[] = [
  {
    title: "Triple Feedback Loop",
    description: "Real-time 3-way input and reflection from students, industry, and government.",
    icon: <Brain className="h-6 w-6 text-blue-600" />,
    color: "#0055E5",
    role: "teacher",
    contentType: "curriculum",
    resourceType: "tool",
    actionUrl: "#feedback-loop"
  },
  {
    title: "Curriculum AI Engine",
    description: "Dynamically suggests education adjustments using job data and policy trends.",
    icon: <LightbulbIcon className="h-6 w-6 text-yellow-600" />,
    color: "#ED9564",
    role: "teacher",
    contentType: "curriculum",
    resourceType: "tool"
  },
  {
    title: "Innovation Map",
    description: "Visualizes skill voids, SME needs, and policy friction by region.",
    icon: <MapPin className="h-6 w-6 text-green-600" />,
    color: "#92CD00",
    role: "policy",
    contentType: "innovation",
    resourceType: "data"
  },
  {
    title: "Policy Sandbox",
    description: "Simulate and crowdsource feedback on draft policy or curriculum.",
    icon: <Landmark className="h-6 w-6 text-purple-600" />,
    color: "#A75ADB",
    role: "policy",
    contentType: "policy",
    resourceType: "tool"
  },
  {
    title: "Opportunity Zones",
    description: "Location-Based Incentive Hacking to unlock tax incentives + policy pilot collaboration.",
    icon: <Building2 className="h-6 w-6 text-red-600" />,
    color: "#D24726",
    role: "industry",
    contentType: "funding",
    resourceType: "guide"
  },
  {
    title: "Frugal Innovation",
    description: "Do More with Less using minimal infrastructure + open tooling for hyperlocal builds.",
    icon: <Puzzle className="h-6 w-6 text-indigo-600" />,
    color: "#5E2CA5",
    role: "admin",
    contentType: "innovation",
    resourceType: "guide"
  },
  {
    title: "Non-dilutive Grants",
    description: "Apply for SBIR, Horizon Europe, or other R&D funding pools.",
    icon: <FileText className="h-6 w-6 text-emerald-600" />,
    color: "#10B981",
    role: "admin",
    contentType: "funding",
    resourceType: "document"
  },
  {
    title: "Global Datasets",
    description: "Integrate open datasets from UNESCO, OECD, O*NET, LinkedIn Trends.",
    icon: <Globe className="h-6 w-6 text-blue-600" />,
    color: "#0055E5",
    role: "teacher",
    contentType: "data",
    resourceType: "data"
  }
];
