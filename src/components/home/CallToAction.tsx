
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="bg-helix-purple py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-satoshi mb-6">
            Ready to Transform Education and Workforce Development?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Join HelixHub today and become part of the movement to bridge the gap between education, industry, and policy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              size="lg" 
              variant="secondary" 
              className="button-hover bg-white text-helix-purple hover:bg-gray-100"
            >
              Join HelixHub
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="button-hover border-white text-white hover:bg-white/10"
            >
              Schedule a Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
