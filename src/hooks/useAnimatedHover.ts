
import { useState } from "react";
import type { MotionProps, TargetAndTransition, VariantLabels, Transition } from "framer-motion";

type AnimatedHoverProps = {
  initial?: MotionProps["initial"];
  whileHover?: TargetAndTransition | VariantLabels;
  animate?: MotionProps["animate"];
  whileTap?: MotionProps["whileTap"];
  whileInView?: MotionProps["whileInView"];
  transition?: Transition;
  viewport?: {
    once?: boolean;
    margin?: string;
  };
  xpStyle?: boolean; // Special Windows XP style animations
  role?: "student" | "teacher" | "policy" | "industry" | "admin"; // Role-specific animations
};

export const useAnimatedHover = (props?: AnimatedHoverProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  
  // Role-specific styling
  let roleSpecificEffects = {};
  
  if (props?.role) {
    switch(props.role) {
      case "student":
        roleSpecificEffects = {
          borderColor: "#92CD00", // XP green for students
          backgroundColor: "#F6FFEA"
        };
        break;
      case "teacher":
        roleSpecificEffects = {
          borderColor: "#0055E5", // XP blue for teachers
          backgroundColor: "#F0F7FD"
        };
        break;
      case "policy":
        roleSpecificEffects = {
          borderColor: "#ED9564", // Orange for policy makers
          backgroundColor: "#FFF8F5" 
        };
        break;
      case "industry":
        roleSpecificEffects = {
          borderColor: "#D24726", // Red for industry
          backgroundColor: "#FFF5F3"
        };
        break;
      case "admin":
        roleSpecificEffects = {
          borderColor: "#A75ADB", // Purple for admins
          backgroundColor: "#FAF5FF"
        };
        break;
    }
  }

  const xpHoverEffects = props?.xpStyle ? {
    whileHover: { 
      boxShadow: "inset 0 0 0 1px rgba(0, 85, 229, 0.9), 0 0 3px rgba(0, 85, 229, 0.6)",
      backgroundColor: "#F0F7FD",
      ...roleSpecificEffects
    },
    whileTap: { 
      scale: 0.97, 
      boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.2)"
    },
  } : {};

  const defaultAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    whileHover: { scale: 1.03, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)" },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.3 },
    viewport: { once: true },
    ...xpHoverEffects,
    ...props
  };

  const hoverHandlers = {
    onHoverStart: () => setIsHovered(true),
    onHoverEnd: () => setIsHovered(false),
    onTapStart: () => setIsClicked(true),
    onTapCancel: () => setIsClicked(false),
    onTap: () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 300);
    },
  };

  return {
    isHovered,
    isClicked,
    hoverHandlers,
    animationProps: defaultAnimation,
    roleStyle: roleSpecificEffects,
  };
};

// Special XP effects for Windows XP styled components
export const useXPAnimation = () => {
  const [isPressed, setIsPressed] = useState(false);
  
  const buttonHandlers = {
    onMouseDown: () => setIsPressed(true),
    onMouseUp: () => setIsPressed(false),
    onMouseLeave: () => setIsPressed(false),
  };
  
  const buttonClasses = isPressed 
    ? "active:shadow-[inset_-1px_-1px_0_white,_inset_1px_1px_0_#888]"
    : "shadow-[inset_1px_1px_0_white,_inset_-1px_-1px_0_#888]";
  
  return {
    isPressed,
    buttonHandlers,
    buttonClasses
  };
};

// Knowledge base content organizer
export const useKnowledgeContent = (contentType?: string) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Predefined content sections for knowledge base
  const contentSections = {
    "curriculum": {
      title: "Curriculum Resources",
      description: "Tools and resources for curriculum development and alignment",
      tags: ["education", "teaching", "learning"],
    },
    "policy": {
      title: "Policy Sandbox",
      description: "Test and simulate policy changes before implementation",
      tags: ["governance", "planning", "regulation"],
    },
    "industry": {
      title: "Industry Connections",
      description: "Connect with businesses and industry partners",
      tags: ["business", "jobs", "economy"],
    },
    "innovation": {
      title: "Innovation Map",
      description: "Regional opportunities and innovation zones",
      tags: ["startups", "research", "development"],
    },
    "funding": {
      title: "Grant Opportunities",
      description: "Non-dilutive funding and partnership resources",
      tags: ["finance", "grants", "funding"],
    },
  };
  
  const selectedContent = contentType && contentSections[contentType] 
    ? contentSections[contentType] 
    : {
        title: "Knowledge Hub",
        description: "Explore our resources and tools",
        tags: ["education", "policy", "industry"],
      };
      
  const toggleExpand = () => setIsExpanded(!isExpanded);
  
  return {
    content: selectedContent,
    isExpanded,
    toggleExpand,
  };
};
