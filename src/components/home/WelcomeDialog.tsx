
import WindowDialog from "@/components/dialog/WindowDialog";

interface WelcomeDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const WelcomeDialog = ({ isOpen, onClose }: WelcomeDialogProps) => {
  return (
    <WindowDialog
      title="Welcome to HelixHub Decentralized Network"
      content="HelixHub connects academia, industry, and government via a triple helix model. Explore how these three sectors collaborate to drive innovation and address skill gaps in real-time. Try our interactive 3D model to visualize these complex relationships."
      isOpen={isOpen}
      onClose={onClose}
    />
  );
};

export default WelcomeDialog;
