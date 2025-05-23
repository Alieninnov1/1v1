import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
const CallToAction = () => {
  return <section className="bg-gradient-to-br from-[#1A1F2C]/90 to-helix-purple/20 backdrop-blur-md border-t border-purple-900/20 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }} className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-satoshi mb-6">We need change, not another band-aid.</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 text-slate-950 font-extralight">Help us help you.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white border border-purple-500/30 shadow-lg shadow-purple-900/20">
              Join HelixHub
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-purple-500 hover:bg-purple-900/20 text-slate-800">
              Schedule a Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default CallToAction;