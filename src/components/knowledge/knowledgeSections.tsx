
import { Brain, Building2, FileText, Globe, Landmark, LightbulbIcon, MapPin, Puzzle } from "lucide-react";
import { ReactNode } from "react";
import sectionsData from "@/data/knowledgeSections.json";

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

const iconMap = {
  Brain,
  Building2,
  FileText,
  Globe,
  Landmark,
  LightbulbIcon,
  MapPin,
  Puzzle,
};

export const knowledgeSections: KnowledgeSection[] = sectionsData.sections.map(section => {
  const IconComponent = iconMap[section.iconName as keyof typeof iconMap];
  return {
    ...section,
    icon: <IconComponent className="h-6 w-6" style={{ color: section.color }} />,
    role: section.role as KnowledgeSection["role"]
  };
});
