
import { motion } from "framer-motion";
import { Building2, Briefcase, TrendingUp, Users, ChartBar, FileSpreadsheet } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Industry = () => {
  // Industry success metrics
  const metrics = [
    { id: 1, title: "Talent Pipeline Gap Closed", value: "68%", icon: <Users className="h-8 w-8 text-helix-purple" /> },
    { id: 2, title: "Skills Alignment Increase", value: "47%", icon: <ChartBar className="h-8 w-8 text-helix-purple" /> },
    { id: 3, title: "Curriculum Recommendations", value: "256", icon: <FileSpreadsheet className="h-8 w-8 text-helix-purple" /> },
  ];

  // Industry use cases
  const useCases = [
    {
      title: "Talent Pipeline Development",
      description: "Connect directly with educational institutions to shape curriculum based on your industry's evolving needs.",
      icon: <TrendingUp className="h-10 w-10 text-helix-purple" />,
    },
    {
      title: "Skills Gap Analysis",
      description: "Access real-time data on regional skill gaps and collaborate with educators to address shortfalls.",
      icon: <ChartBar className="h-10 w-10 text-helix-purple" />,
    },
    {
      title: "Policy Influence",
      description: "Provide input on workforce development policies that affect your industry's growth and competitiveness.",
      icon: <Building2 className="h-10 w-10 text-helix-purple" />,
    },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-block p-2 bg-helix-purple100 rounded-full mb-4">
              <Briefcase className="h-8 w-8 text-helix-purple" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-satoshi mb-6">
              Industry <span className="text-helix-purple">Partners</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Shape the future workforce by directly influencing education and policy in real-time. 
              Close skills gaps and build your talent pipeline with data-driven insights.
            </p>
          </motion.div>

          {/* Metrics Row */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
              >
                <Card className="text-center shadow-card rounded-xl border-none h-full">
                  <CardHeader>
                    <div className="mx-auto mb-2">{metric.icon}</div>
                    <CardTitle className="text-lg font-satoshi">{metric.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl font-bold text-helix-purple">{metric.value}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Use Cases Section */}
        <section className="py-12 bg-gray-50 dark:bg-gray-800 rounded-xl mb-12">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 dark:text-white font-satoshi"
            >
              How Industry Partners Use HelixHub
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full card-hover border-none shadow-card">
                  <CardHeader className="pb-2">
                    <div className="mb-4">{useCase.icon}</div>
                    <CardTitle className="text-xl font-satoshi">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                      {useCase.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-helix-purple rounded-xl p-8 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white font-satoshi mb-6">
              Ready to Shape the Future Workforce?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Join leading companies already using HelixHub to close skills gaps and build their talent pipelines.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                variant="secondary" 
                className="button-hover bg-white text-helix-purple hover:bg-gray-100"
              >
                Partner with Us
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="button-hover border-white text-white hover:bg-white/10"
              >
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Testimonial Section */}
        <section className="py-12 mb-12">
          <Card className="shadow-card rounded-xl border-none overflow-hidden">
            <CardContent className="p-8">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <blockquote className="text-lg text-gray-700 dark:text-gray-300 italic">
                  "HelixHub has transformed how we engage with educational institutions. We now have direct input into curriculum development, ensuring graduates have the skills our industry needs. The real-time feedback loop and data insights have been invaluable."
                </blockquote>
                <div className="mt-6 flex items-center">
                  <div className="h-12 w-12 rounded-full bg-helix-purple200 flex items-center justify-center text-helix-purple font-bold">
                    SP
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold">Sarah Parker</p>
                    <p className="text-sm text-gray-500">Chief HR Officer, TechInnovate Inc.</p>
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

export default Industry;
