
import { motion } from "framer-motion";
import { BookOpen, Brain, Briefcase, Computer, FileText, PanelLeft, Settings, Shield, Wrench } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import DesktopIcon from "./DesktopIcon";

interface DesktopIconGridProps {
  onKnowledgeBaseClick: () => void;
  onFeedbackClick: () => void;
  onDialogOpen: (title: string, content: string) => void;
}

const DesktopIconGrid = ({ onKnowledgeBaseClick, onFeedbackClick, onDialogOpen }: DesktopIconGridProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const desktopIcons = [
    { name: "Dashboard", icon: Computer, color: "blue", action: () => navigate('/dashboard') },
    { name: "Knowledge Base", icon: BookOpen, color: "purple", action: () => onKnowledgeBaseClick() },
    { name: "Curriculum", icon: FileText, color: "yellow", action: () => onDialogOpen("Curriculum Alignment", "Connect curriculum to industry needs and policy requirements in real-time.") },
    { name: "Policy Sandbox", icon: Shield, color: "green", action: () => navigate('/policy-sandbox') },
    { name: "AI Assistant", icon: Brain, color: "indigo", action: () => onDialogOpen("AI Curriculum Assistant", "Get AI-powered recommendations to align curriculum with industry needs and future skills.") },
    { name: "Feedback Wall", icon: PanelLeft, color: "orange", action: () => onFeedbackClick() },
    { name: "Tools", icon: Wrench, color: "red", action: () => onDialogOpen("HelixHub Tools", "Access tools for analyzing curriculum-industry alignment and regional skill gaps.") },
    { name: "Settings", icon: Settings, color: "gray", action: () => toast({ title: "Settings", description: "Configure your HelixHub experience" }) },
  ];

  const firstRowIcons = desktopIcons.slice(0, 4);
  const secondRowIcons = desktopIcons.slice(4);

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2
            }
          }
        }}
        className="mb-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
      >
        {firstRowIcons.map((icon, index) => (
          <DesktopIcon
            key={`row1-${index}`}
            name={icon.name}
            icon={icon.icon}
            color={icon.color}
            onClick={icon.action}
          />
        ))}
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.3
            }
          }
        }}
        className="mb-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
      >
        {secondRowIcons.map((icon, index) => (
          <DesktopIcon
            key={`row2-${index}`}
            name={icon.name}
            icon={icon.icon}
            color={icon.color}
            onClick={icon.action}
          />
        ))}
      </motion.div>
    </>
  );
};

export default DesktopIconGrid;
