
import WindowDialog from "@/components/dialog/WindowDialog";

interface WelcomeDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const WelcomeDialog = ({ isOpen, onClose }: WelcomeDialogProps) => {
  return (
    <WindowDialog
      title="Welcome to HelixHub: Collaborative Innovation Network"
      content="HelixHub is a dynamic platform that unites academia, industry, and government through a powerful Triple Helix model. 

Our mission is to drive innovation by creating real-time connections between educational institutions, businesses, and policymakers. Explore how collaboration can address skill gaps, accelerate learning, and create meaningful societal impact.

Key Features:
• Interactive 3D Visualization of Sector Interconnections
• Real-time Feedback and Skill Alignment
• AI-Powered Curriculum and Grant Recommendations
• Policy Impact Simulations

Start exploring and be part of the innovation ecosystem!"
      isOpen={isOpen}
      onClose={onClose}
    />
  );
};

export default WelcomeDialog;

