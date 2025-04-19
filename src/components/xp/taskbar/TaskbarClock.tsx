
import { useState, useEffect } from 'react';
import { Clock } from "lucide-react";
import { motion } from "framer-motion";

const TaskbarClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date: Date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;

    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${formattedMinutes} ${ampm}`;
  };

  return (
    <motion.div 
      className="xp-clock flex items-center px-3 py-1 bg-helix-purple/30 backdrop-blur-md text-white border-l border-helix-purple/50"
      whileHover={{ backgroundColor: 'rgba(94, 44, 165, 0.5)' }}
    >
      <Clock size={14} className="mr-2" />
      <span className="font-mono text-sm">{formatTime(time)}</span>
    </motion.div>
  );
};

export default TaskbarClock;
