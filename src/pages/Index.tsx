
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  // Animation variants for staggered section appearance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };
  
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    }
  };

  return (
    <Layout>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="overflow-hidden"
      >
        <motion.div variants={sectionVariants}>
          <Hero />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <Features />
        </motion.div>
        
        <motion.section 
          className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-800"
          variants={sectionVariants}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white font-satoshi mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                How HelixHub Works
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Our platform creates a dynamic ecosystem where education, workforce, 
                and policy makers collaborate to bridge skill gaps.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  step: 1,
                  title: "Connect",
                  description: "Join the platform as academia, industry, or government and connect with other stakeholders."
                },
                {
                  step: 2,
                  title: "Collaborate",
                  description: "Share insights, provide feedback on curriculum, and discuss skills and policy ideas."
                },
                {
                  step: 3,
                  title: "Evolve",
                  description: "Implement AI recommendations and data-driven insights to close skill gaps and improve outcomes."
                }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  className="text-center px-4"
                >
                  <motion.div 
                    className="w-16 h-16 bg-helix-purple rounded-full flex items-center justify-center text-white mx-auto mb-6"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(94, 44, 165, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-2xl font-bold">{item.step}</span>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        
        <motion.div variants={sectionVariants}>
          <CallToAction />
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default Index;
