
import Layout from "@/components/layout/Layout";
import PolicySandbox from "@/components/policy/PolicySandbox";
import { motion } from "framer-motion";
import { FileText, LightbulbIcon, Lightbulb, BarChart3, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PolicySandboxPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block p-2 bg-purple-100 rounded-full mb-4">
            <Shield className="h-8 w-8 text-helix-purple" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-satoshi mb-6">
            Policy <span className="text-helix-purple">Sandbox</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Simulate and test policy changes to see their potential impact on skills, employment, and education outcomes before implementation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            {
              icon: <FileText className="h-6 w-6 text-blue-600" />,
              title: "Evidence-Based Policy",
              description: "Use data-driven simulations to inform policy decisions with projected outcomes."
            },
            {
              icon: <BarChart3 className="h-6 w-6 text-green-600" />,
              title: "Measure Impact",
              description: "Quantify the potential effects of your policy changes across multiple variables."
            },
            {
              icon: <Lightbulb className="h-6 w-6 text-amber-600" />,
              title: "Experiment Safely",
              description: "Test innovative approaches without real-world consequences before implementation."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <Card className="border-none shadow-card h-full">
                <CardHeader>
                  <div className="mb-2">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Policy Simulator</h2>
          <PolicySandbox />
        </section>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-helix-purple rounded-xl p-8 text-center mt-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white font-satoshi mb-6">
            Ready to Implement Your Policy?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Connect with policy experts and education stakeholders to move your simulated policy into real-world action.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              size="lg" 
              variant="secondary" 
              className="button-hover bg-white text-helix-purple hover:bg-gray-100"
            >
              Contact Experts
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="button-hover border-white text-white hover:bg-white/10"
            >
              Export Results
            </Button>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default PolicySandboxPage;
