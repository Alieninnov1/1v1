
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

interface FeedbackFormProps {
  onSubmit: (content: string) => boolean;
  onCancel: () => void;
}

const FeedbackForm = ({ onSubmit, onCancel }: FeedbackFormProps) => {
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (onSubmit(content)) {
      setContent("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="mb-4"
    >
      <div className="xp-window">
        <div className="xp-title-bar student">
          <div className="flex items-center">
            <User size={14} />
            <span className="ml-2">New Feedback</span>
          </div>
        </div>
        <div className="xp-window-content">
          <textarea 
            className="w-full border rounded p-2 mb-3 h-24"
            placeholder="Share your thoughts, ideas or feedback..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="flex justify-end gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                onCancel();
                setContent("");
              }}
            >
              Cancel
            </Button>
            <Button size="sm" onClick={handleSubmit}>Post Feedback</Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeedbackForm;
