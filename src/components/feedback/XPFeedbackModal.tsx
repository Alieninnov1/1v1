
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.type || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill out all fields in the form",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
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
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 backdrop-blur-[2px]"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            className="w-[90%] max-w-md font-['Press_Start_2P'] bg-gradient-to-b from-[#ececec] to-[#dfdfdf] border-2 border-black shadow-[4px_4px_0_#000] rounded overflow-hidden"
          >
            <div className="bg-gradient-to-r from-[#0155b7] to-[#036ffc] text-white p-2 text-xs flex justify-between items-center">
              <div className="flex items-center">
                <div className="bg-[#92CD00] mr-1.5 h-3 w-3 rounded-full inline-block"></div>
                <span>HelixHub Feedback</span>
              </div>
              <button 
                onClick={onClose}
                className="bg-[#ec5650] hover:bg-[#d13c37] transition-colors text-white w-5 h-5 rounded-sm flex items-center justify-center"
                aria-label="Close"
              >
                <X size={12} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-4 text-xs text-gray-900 space-y-4">
              <div>
                <label className="block mb-1.5">Name:</label>
                <input
                  className="w-full p-2 font-mono text-xs border-[1.5px] border-[#7b9ebd] rounded-sm focus:ring-2 focus:ring-[#92cdff] shadow-inner bg-white"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>
              
              <div>
                <label className="block mb-1.5">Type (Student/SME/Gov):</label>
                <select
                  className="w-full p-2 font-mono text-xs border-[1.5px] border-[#7b9ebd] rounded-sm focus:ring-2 focus:ring-[#92cdff] shadow-inner bg-white"
                  value={formData.type}
                  onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
                  required
                >
                  <option value="">Select a type...</option>
                  <option value="Student">Student</option>
                  <option value="SME">Industry (SME)</option>
                  <option value="Gov">Government</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block mb-1.5">Message:</label>
                <textarea
                  className="w-full p-2 font-mono text-xs border-[1.5px] border-[#7b9ebd] rounded-sm focus:ring-2 focus:ring-[#92cdff] shadow-inner bg-white"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  required
                />
              </div>
              
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-[#ececec] border-2 border-[#7b9ebd] px-4 py-1 text-[10px] rounded-sm hover:bg-gray-200 transition-colors shadow"
                >
                  Cancel
                </button>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-[#92CD00] border-2 border-[#5d8b00] text-white px-4 py-1 text-[10px] rounded-sm hover:bg-[#7DB600] transition-colors shadow ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Feedback'}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default XPFeedbackModal;
