
import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from "@/hooks/use-toast";

interface XPFeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const XPFeedbackModal = ({ isOpen, onClose }: XPFeedbackModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await fetch("https://script.google.com/macros/s/AKfycby0GnoHmLw28fsgXi3NOi6vJBvUgC9bEY7NL2Xm8i3cefKtYJbqrKtwZ_QFZr4pGAP2TQ/exec", {
        method: "POST",
        body: JSON.stringify(formData)
      });

      toast({
        title: "Success",
        description: "Your feedback has been sent successfully!",
      });

      setFormData({ name: '', type: '', message: '' });
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send feedback. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            className="w-[90%] max-w-md font-['Press_Start_2P'] bg-[#ececec] border-2 border-black shadow-[4px_4px_0_#000] rounded overflow-hidden"
          >
            <div className="bg-[#015ccc] text-white p-2 text-xs flex justify-between items-center">
              <span>HelixHub Feedback</span>
              <button 
                onClick={onClose}
                className="bg-white text-black px-2 border border-black text-[10px] hover:bg-gray-100"
              >
                <X size={12} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-4 text-xs text-gray-900 space-y-4">
              <div>
                <label className="block">Name:</label>
                <input
                  className="w-full mt-2 p-2 font-mono text-xs border border-black bg-white"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>
              
              <div>
                <label className="block">Type (Student/SME/Gov):</label>
                <input
                  className="w-full mt-2 p-2 font-mono text-xs border border-black bg-white"
                  value={formData.type}
                  onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
                  required
                />
              </div>
              
              <div>
                <label className="block">Message:</label>
                <textarea
                  className="w-full mt-2 p-2 font-mono text-xs border border-black bg-white"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full mt-4 bg-[#ececec] border-2 border-black p-2 text-xs hover:bg-gray-200 transition-colors"
              >
                Send
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default XPFeedbackModal;
