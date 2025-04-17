
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { 
  Building2, 
  BookOpen, 
  Briefcase, 
  FileText, 
  BarChart3, 
  TrendingUp,
  Lightbulb,
  Award,
  ArrowRight,
} from "lucide-react";

const Government = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-helix-purple to-indigo-800 text-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <motion.h1 
                className="text-4xl sm:text-5xl font-bold font-satoshi mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Government & Policy Integration
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-100 mb-8 max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Join the Triple Helix Model and bridge the gap between policy, education, and industry.
                HelixHub empowers policymakers to create forward-thinking regulatory frameworks
                informed by real-time data from academia and industry.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button size="lg" className="button-hover">
                  Join the Ecosystem
                </Button>
                <Button variant="outline" size="lg" className="bg-white/20 text-white hover:bg-white/30">
                  Explore Policy Sandbox
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Policy Sandbox Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white font-satoshi mb-6">
                  Policy Sandbox
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Simulate the impact of new policies before implementation. Gather real-time feedback
                  from educational institutions and industry partners to refine your approach.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Create policy drafts and share for collaborative feedback",
                    "Track sentiment analysis and quantitative impact projections",
                    "Visualize regional disparities in policy effects",
                    "Compare against global policy benchmarks"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="mt-1 bg-helix-purple rounded-full p-1 text-white">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-200">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <Button className="button-hover">
                  Launch Policy Sandbox <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative rounded-xl overflow-hidden shadow-2xl"
              >
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-8 sm:p-10 rounded-xl">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                    <h3 className="text-xl font-semibold mb-2">Draft Policy Simulator</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      Workforce Development Initiative 2025
                    </p>
                    <div className="space-y-4">
                      <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                        <p className="text-sm font-medium">Projected Impact</p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xs text-gray-600 dark:text-gray-400">Low</span>
                          <div className="w-full mx-2 bg-gray-300 dark:bg-gray-600 rounded-full h-2">
                            <div className="bg-helix-purple h-2 rounded-full" style={{ width: "75%" }}></div>
                          </div>
                          <span className="text-xs text-gray-600 dark:text-gray-400">High</span>
                        </div>
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Stakeholder Feedback</span>
                          <span className="text-sm text-helix-purple">24 responses</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center text-xs mt-2">
                          <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded">
                            <p>Academia</p>
                            <p className="font-semibold">72% +</p>
                          </div>
                          <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded">
                            <p>Industry</p>
                            <p className="font-semibold">68% +</p>
                          </div>
                          <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded">
                            <p>Students</p>
                            <p className="font-semibold">87% +</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <Button variant="outline" className="mx-auto">View Full Simulation</Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Triple Helix Interaction Cards */}
        <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white font-satoshi mb-6">
                The Triple Helix Model in Action
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                See how governments around the world are collaborating with academia and industry
                to drive innovation and workforce development.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Building2 className="h-12 w-12 text-helix-purple" />,
                  title: "Government",
                  description: "Create policy frameworks and funding initiatives based on real-time economic and educational data.",
                  action: "Develop Policy"
                },
                {
                  icon: <BookOpen className="h-12 w-12 text-helix-purple" />,
                  title: "Academia",
                  description: "Adapt curriculum and research priorities to align with policy objectives and industry needs.",
                  action: "View Academic Insights"
                },
                {
                  icon: <Briefcase className="h-12 w-12 text-helix-purple" />,
                  title: "Industry",
                  description: "Communicate skill requirements and collaborate on workforce development programs.",
                  action: "Industry Partnerships"
                }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full card-hover border-t-4 border-t-helix-purple">
                    <CardHeader className="pb-3">
                      <div className="mb-4">{card.icon}</div>
                      <CardTitle>{card.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {card.description}
                      </p>
                      <Button variant="outline" className="w-full">
                        {card.action}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white font-satoshi mb-12 text-center">
              Government Success Stories
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  region: "Northern Europe",
                  title: "Digital Skills Initiative",
                  description: "A collaborative program that reduced digital skill gaps by 34% in just 18 months through targeted policy intervention.",
                  impact: "34% reduction in skill gap",
                  icon: <TrendingUp />
                },
                {
                  region: "Southeast Asia",
                  title: "SmartCity Workforce Program",
                  description: "Municipal government partnership with universities to create specialized urban technology curriculum tracks.",
                  impact: "12 new specialized courses",
                  icon: <Lightbulb />
                },
                {
                  region: "North America",
                  title: "Cross-Border Innovation Zones",
                  description: "Regional policy framework allowing skills and certification portability across state/provincial lines.",
                  impact: "65% increase in regional mobility",
                  icon: <Award />
                }
              ].map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-hover"
                >
                  <Card className="h-full overflow-hidden border-0 shadow-md">
                    <div className="h-2 bg-helix-purple"></div>
                    <CardHeader>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">{story.region}</div>
                      <CardTitle className="text-xl">{story.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600 dark:text-gray-300">
                        {story.description}
                      </p>
                      <div className="flex items-center gap-2 text-helix-purple">
                        {story.icon}
                        <span className="font-medium">{story.impact}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" className="button-hover">
                View All Case Studies
              </Button>
            </div>
          </div>
        </section>

        {/* Resources & Tools */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-helix-purple/10 to-indigo-500/10 dark:from-helix-purple/20 dark:to-indigo-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white font-satoshi mb-4">
                Policy Resources & Tools
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Access specialized tools and resources designed to help government agencies
                make data-driven decisions and policies.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <FileText className="h-10 w-10 mb-4 text-helix-purple" />,
                  title: "Policy Templates",
                  description: "Ready-to-use policy frameworks based on global best practices."
                },
                {
                  icon: <BarChart3 className="h-10 w-10 mb-4 text-helix-purple" />,
                  title: "Data Visualizations",
                  description: "Interactive dashboards showing skill gaps and education outcomes."
                },
                {
                  icon: <Building2 className="h-10 w-10 mb-4 text-helix-purple" />,
                  title: "Regulatory Sandbox",
                  description: "Test policy implementations in a controlled environment."
                },
                {
                  icon: <BookOpen className="h-10 w-10 mb-4 text-helix-purple" />,
                  title: "Research Repository",
                  description: "Curated research on education-industry alignment strategies."
                }
              ].map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-hover"
                >
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Card className="text-center p-6 bg-white/80 backdrop-blur-sm dark:bg-black/30 h-full flex flex-col items-center justify-center">
                        {resource.icon}
                        <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {resource.description}
                        </p>
                      </Card>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="space-y-2">
                        <h4 className="font-semibold">{resource.title}</h4>
                        <p className="text-sm">{resource.description}</p>
                        <div className="pt-2">
                          <Button variant="outline" size="sm" className="w-full">
                            Access Resource
                          </Button>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-helix-purple rounded-2xl overflow-hidden shadow-xl">
              <div className="px-6 py-12 sm:px-12 sm:py-16 text-center text-white">
                <h2 className="text-3xl sm:text-4xl font-bold font-satoshi mb-6">
                  Join the Policy Innovation Network
                </h2>
                <p className="text-lg text-gray-100 mb-8 max-w-3xl mx-auto">
                  Connect with other government agencies, academic institutions, and industry partners
                  to collaboratively shape the future of education and workforce development.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="bg-white text-helix-purple hover:bg-gray-100">
                    Request Access
                  </Button>
                  <Button variant="outline" size="lg" className="border-white hover:bg-white/20">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </Layout>
  );
};

export default Government;
