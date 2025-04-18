
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const SignalVault = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="my-10"
    >
      <Card className="p-4 bg-black/50 backdrop-blur-md border-0 shadow-2xl overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800/10 via-blue-900/5 to-indigo-900/10 z-0"></div>
        <div className="relative z-10">
          <h2 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
            Signal Vault: Governance Memory
          </h2>
          <div className="space-y-4">
            {[
              "No one's listening to us.",
              "My teacher left without saying goodbye.",
              "The funding priorities shift every quarter, we can't plan.",
              "We need more stability in the curriculum.",
              "Industry partnerships are inconsistent."
            ].map((quote, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + idx * 0.2 }}
                className="p-3 bg-black/30 backdrop-blur-sm rounded-md border border-indigo-500/20 shadow-lg text-sm font-medium text-indigo-100"
              >
                {quote}
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default SignalVault;
