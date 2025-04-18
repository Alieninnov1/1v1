
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const AmbientAudioControl = () => {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioRef = useState<HTMLAudioElement | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (audioEnabled && !audioRef[0]) {
      const audio = new Audio('https://freesound.org/data/previews/387/387529_2188-lq.mp3');
      audio.loop = true;
      audio.volume = 0.25;
      audioRef[0] = audio;
    }
    
    return () => {
      if (audioRef[0]) {
        audioRef[0].pause();
        audioRef[0].src = '';
      }
    };
  }, [audioEnabled, audioRef]);

  const handleAudioToggle = () => {
    if (!audioEnabled) {
      setAudioEnabled(true);
      setTimeout(() => {
        if (audioRef[0]) {
          audioRef[0].play().then(() => {
            setAudioPlaying(true);
          }).catch(err => {
            console.error("Audio playback failed:", err);
            toast({
              title: "Audio Playback Failed",
              description: "Please interact with the page first"
            });
          });
        }
      }, 100);
    } else {
      if (audioRef[0]) {
        if (audioPlaying) {
          audioRef[0].pause();
          setAudioPlaying(false);
        } else {
          audioRef[0].play().then(() => {
            setAudioPlaying(true);
          }).catch(console.error);
        }
      }
    }
  };

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
    >
      <Button
        variant="outline"
        size="icon"
        className="rounded-full bg-black/50 backdrop-blur-sm border border-purple-500/30 hover:bg-black/70"
        onClick={handleAudioToggle}
        aria-label={audioPlaying ? "Mute ambient sound" : "Play ambient sound"}
      >
        {audioPlaying ? (
          <Volume2 size={20} className="text-purple-300" />
        ) : (
          <VolumeX size={20} className="text-purple-300" />
        )}
      </Button>
    </motion.div>
  );
};

export default AmbientAudioControl;
