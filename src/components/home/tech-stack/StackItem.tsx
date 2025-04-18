
import { motion } from "framer-motion";

interface StackItemProps {
  title: string;
  description: string;
  color: string;
}

const StackItem = ({ title, description, color }: StackItemProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-800/50 p-6 rounded-xl border border-purple-500/20 shadow-lg"
    >
      <h3 className={`text-lg font-bold ${color} mb-2`}>{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </motion.div>
  );
};

export default StackItem;
