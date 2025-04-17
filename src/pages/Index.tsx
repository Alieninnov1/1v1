
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <Features />
        
        <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white font-satoshi mb-6">
                How HelixHub Works
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our platform creates a dynamic ecosystem where education, workforce, 
                and policy makers collaborate to bridge skill gaps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center px-4"
              >
                <div className="w-16 h-16 bg-helix-purple rounded-full flex items-center justify-center text-white mx-auto mb-6">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Connect</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Join the platform as academia, industry, or government and connect with other stakeholders.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center px-4"
              >
                <div className="w-16 h-16 bg-helix-purple rounded-full flex items-center justify-center text-white mx-auto mb-6">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Collaborate</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Share insights, provide feedback on curriculum, and discuss skills and policy ideas.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center px-4"
              >
                <div className="w-16 h-16 bg-helix-purple rounded-full flex items-center justify-center text-white mx-auto mb-6">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Evolve</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Implement AI recommendations and data-driven insights to close skill gaps and improve outcomes.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        <CallToAction />
      </motion.div>
    </Layout>
  );
};

export default Index;
