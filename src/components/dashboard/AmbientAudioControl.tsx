
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const AmbientAudioControl = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio("/ambient-tech.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = volume;
    
    // Cleanup
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => {
        console.error("Audio playback error:", err);
      });
    }
    
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div 
      className="fixed bottom-8 right-8 z-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
    >
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="rounded-full bg-black/50 backdrop-blur-sm border border-purple-500/30 w-10 h-10 flex items-center justify-center text-purple-300 hover:bg-black/70 transition-colors"
        onClick={toggleAudio}
        aria-label={isPlaying ? "Mute ambient sound" : "Play ambient sound"}
      >
        {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
      </motion.button>
      
      {isPlaying && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-32 h-6 bg-black/50 backdrop-blur-sm rounded-full p-1"
        >
          <input 
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-full h-full appearance-none bg-transparent [&::-webkit-slider-runnable-track]:h-1 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-purple-900/50 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-400 [&::-webkit-slider-thumb]:mt-[-6px] [&::-moz-range-track]:h-1 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-purple-900/50 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-purple-400"
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default AmbientAudioControl;
