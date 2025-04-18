import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Share2, Brain, BarChart3, Shield, Zap } from "lucide-react";
const features = [{
  icon: <MessageSquare className="h-10 w-10 text-helix-purple" />,
  title: "Live Feedback Loop",
  description: "Post, respond, and rate curriculum, skills, and policy ideas in real-time."
}, {
  icon: <Brain className="h-10 w-10 text-helix-purple" />,
  title: "AI Recommendations",
  description: "Get AI-powered curriculum suggestions based on the latest labor market trends."
}, {
  icon: <BarChart3 className="h-10 w-10 text-helix-purple" />,
  title: "Skill Gap Analysis",
  description: "Visualize regional skill gaps with interactive dashboards and data visualizations."
}, {
  icon: <Share2 className="h-10 w-10 text-helix-purple" />,
  title: "Cross-Sector Collaboration",
  description: "Break down silos and foster collaboration between education, industry, and policymakers."
}, {
  icon: <Shield className="h-10 w-10 text-helix-purple bg-indigo-300" />,
  title: "Data-Driven Decisions",
  description: "Make informed decisions backed by real-world data and stakeholder feedback."
}, {
  icon: <Zap className="h-10 w-10 text-helix-purple" />,
  title: "Rapid Implementation",
  description: "Accelerate the pace of innovation with streamlined communication and feedback channels."
}];
const Features = () => {
  return <section className="py-16 sm:py-24 bg-indigo-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
        }}>
            <h2 className="text-3xl font-satoshi mb-6 sm:text-3xl font-bold text-indigo-800">
              Powerful Features to Drive Collaboration
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-slate-950 font-thin">
              HelixHub provides tools and insights to bridge the gap between education, workforce needs, and policy making.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-indigo-300">
          {features.map((feature, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }}>
              <Card className="h-full card-hover border-none shadow-card rounded-xl overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl font-satoshi text-indigo-950 font-medium">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-blue-900 text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default Features;