
import { BookOpen, Server, Shield, Database, Code, FileText, School, Briefcase, Building2, Users, BookMarked, BarChart3, Globe } from "lucide-react";
import React from "react";

export interface KnowledgeSection {
  icon: React.ReactElement;
  title: string;
  description: string;
  iconName: string;
  color: string;
  role: "teacher" | "policy" | "industry" | "admin" | "student";
  contentType: string;
  resourceType: "document" | "tool" | "data" | "guide" | "video";
  actionUrl?: string;
}

// KnowledgeSection data
export const knowledgeSections: KnowledgeSection[] = [
  {
    icon: <FileText size={18} />,
    title: "Curriculum Alignment Guide",
    description: "Best practices for aligning curriculum to industry needs and policy requirements",
    iconName: "fileText",
    color: "#0055E5",
    role: "teacher",
    contentType: "curriculum",
    resourceType: "guide",
    actionUrl: "/knowledge/curriculum-guide"
  },
  {
    icon: <Shield size={18} />,
    title: "Policy Sandbox",
    description: "Simulate and test policy changes in a safe environment",
    iconName: "shield",
    color: "#ED9564",
    role: "policy",
    contentType: "policy",
    resourceType: "tool",
    actionUrl: "/knowledge/policy-sandbox"
  },
  {
    icon: <Database size={18} />,
    title: "Industry Skills Database",
    description: "Comprehensive database of in-demand skills across industries",
    iconName: "database",
    color: "#D24726",
    role: "industry",
    contentType: "industry",
    resourceType: "data",
    actionUrl: "/knowledge/skills-database"
  },
  {
    icon: <Server size={18} />,
    title: "System Administration",
    description: "Platform management tools and settings for administrators",
    iconName: "server",
    color: "#A75ADB",
    role: "admin",
    contentType: "administration",
    resourceType: "tool"
  },
  {
    icon: <BookMarked size={18} />,
    title: "Student Resource Center",
    description: "Learning resources and career guidance for students",
    iconName: "bookMarked",
    color: "#92CD00",
    role: "student",
    contentType: "learning",
    resourceType: "document"
  },
  {
    icon: <Code size={18} />,
    title: "Skill Development Toolkit",
    description: "Interactive tools to build in-demand technical skills",
    iconName: "code",
    color: "#0055E5",
    role: "student",
    contentType: "learning",
    resourceType: "tool"
  },
  {
    icon: <School size={18} />,
    title: "Teaching Resources",
    description: "Downloadable materials for educators implementing new curricula",
    iconName: "school",
    color: "#0055E5",
    role: "teacher",
    contentType: "teaching",
    resourceType: "document"
  },
  {
    icon: <Building2 size={18} />,
    title: "Government Framework",
    description: "Official frameworks and guidelines for education policy",
    iconName: "building2",
    color: "#ED9564",
    role: "policy",
    contentType: "policy",
    resourceType: "document"
  },
  {
    icon: <Briefcase size={18} />,
    title: "Industry Case Studies",
    description: "Real-world examples of successful education-industry partnerships",
    iconName: "briefcase",
    color: "#D24726",
    role: "industry",
    contentType: "casestudies",
    resourceType: "document"
  },
  {
    icon: <BarChart3 size={18} />,
    title: "Analytics Dashboard",
    description: "Interactive data visualization of skill gaps and curriculum impact",
    iconName: "barChart3",
    color: "#A75ADB",
    role: "admin",
    contentType: "analytics",
    resourceType: "tool"
  },
  {
    icon: <Globe size={18} />,
    title: "Regional Analysis",
    description: "Geographic mapping of skill demands and educational resources",
    iconName: "globe",
    color: "#ED9564",
    role: "policy",
    contentType: "mapping",
    resourceType: "data"
  },
  {
    icon: <Users size={18} />,
    title: "Networking Directory",
    description: "Connect with industry partners, educators, and policymakers",
    iconName: "users",
    color: "#92CD00",
    role: "student",
    contentType: "networking",
    resourceType: "tool"
  }
];

export default knowledgeSections;
