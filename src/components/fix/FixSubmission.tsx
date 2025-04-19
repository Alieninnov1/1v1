
import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Mic, Camera, Check, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const FixSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mediaType, setMediaType] = useState<"voice" | "image" | "video" | null>(null);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Simulate submission process
      await new Promise(resolve => setTimeout(resolve, 1500));
      const timestamp = new Date().toISOString();
      toast({
        title: "Fix Submitted Successfully",
        description: `Your fix has been timestamped at ${timestamp}`,
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      setMediaType(null);
    }
  };

  return (
    <div className="space-y-4 p-4 bg-black/40 backdrop-blur-sm rounded-lg border border-purple-500/20">
      <h2 className="text-xl font-bold text-white">Submit a Fix</h2>
      
      <div className="grid grid-cols-3 gap-4">
        <Button
          variant="outline"
          className="flex flex-col items-center gap-2 p-4 h-auto"
          onClick={() => setMediaType("voice")}
        >
          <Mic className="h-6 w-6" />
          <span>Voice Note</span>
        </Button>
        
        <Button
          variant="outline"
          className="flex flex-col items-center gap-2 p-4 h-auto"
          onClick={() => setMediaType("image")}
        >
          <Camera className="h-6 w-6" />
          <span>Sketch/Photo</span>
        </Button>
        
        <Button
          variant="outline"
          className="flex flex-col items-center gap-2 p-4 h-auto"
          onClick={() => setMediaType("video")}
        >
          <Upload className="h-6 w-6" />
          <span>Video</span>
        </Button>
      </div>

      {mediaType && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-end"
        >
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="bg-purple-600 hover:bg-purple-700"
          >
            {isSubmitting ? (
              <>
                <Loader className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Check className="mr-2 h-4 w-4" />
                Submit Fix
              </>
            )}
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default FixSubmission;
