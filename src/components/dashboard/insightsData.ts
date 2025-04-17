
import { BarChart, Brain, Globe } from "lucide-react";

export const insightsData = [
  {
    title: "Data-Driven Learning",
    description: "Curriculum adjustments based on real-time industry skill demands and market trends.",
    icon: BarChart,
    color: "#3B82F6"
  },
  {
    title: "AI Curriculum Engine",
    description: "ML-powered recommendations to keep educational content relevant and future-ready.",
    icon: Brain,
    color: "#8B5CF6"
  },
  {
    title: "Regional Innovation",
    description: "Localized skill gap analysis to foster regional economic development and growth.",
    icon: Globe,
    color: "#10B981"
  }
] as const;
