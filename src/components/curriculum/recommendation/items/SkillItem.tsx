
import { motion } from "framer-motion";
import { ProgressBar } from "./ProgressBar";

interface SkillItemProps {
  name: string;
  demand: number;
  growth: number;
}

export const SkillItem = ({ name, demand, growth }: SkillItemProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="p-4 rounded-lg bg-gray-800/40 border border-gray-700"
  >
    <h4 className="font-bold text-purple-400">{name}</h4>
    <div className="mt-2 space-y-1">
      <ProgressBar label="Demand" value={demand} max={100} />
      <ProgressBar label="Growth" value={growth} max={100} color="bg-green-500" />
    </div>
  </motion.div>
);
