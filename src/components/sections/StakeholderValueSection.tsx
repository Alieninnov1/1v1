
import { motion } from "framer-motion";
import { BookOpen, Building2, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stakeholderData = [
  {
    type: "Academic Institutions",
    icon: <BookOpen className="h-8 w-8 text-blue-400" />,
    color: "from-blue-900/20 to-blue-800/5",
    border: "border-blue-500/20",
    benefits: [
      "Real-time curriculum alignment with industry needs",
      "Enhanced student placement metrics and outcomes",
      "Data-driven program development and resource allocation",
      "Seamless integration with existing LMS platforms"
    ],
    quote: {
      text: "HelixHub transformed how we approach curriculum development. We now have a direct line to industry needs and real-time feedback on skill gaps.",
      author: "Dr. Meera Sharma",
      title: "Dean of Computer Science, Metropolitan University"
    }
  },
  {
    type: "Industry Partners",
    icon: <Briefcase className="h-8 w-8 text-indigo-400" />,
    color: "from-indigo-900/20 to-indigo-800/5",
    border: "border-indigo-500/20",
    benefits: [
      "Reduced recruitment costs and time-to-hire metrics",
      "Direct input into educational program development",
      "Access to a pre-qualified talent pipeline",
      "Regional innovation mapping to identify opportunity zones"
    ],
    quote: {
      text: "We've cut onboarding time by 47% by hiring graduates from HelixHub-integrated institutions. Their skills match our needs from day one.",
      author: "Rajiv Mehta",
      title: "CTO, TechInnovate Solutions"
    }
  },
  {
    type: "Government & Policy",
    icon: <Building2 className="h-8 w-8 text-purple-400" />,
    color: "from-purple-900/20 to-purple-800/5",
    border: "border-purple-500/20",
    benefits: [
      "Evidence-based policy formation through real-time data",
      "Targeted regional development and skill enhancement",
      "Reduced unemployment through precise skill matching",
      "Digital sandbox for piloting policy initiatives"
    ],
    quote: {
      text: "HelixHub provides the missing link between education and industry that our policies have been trying to bridge for decades.",
      author: "Anita Desai",
      title: "Secretary, Ministry of Skill Development"
    }
  }
];

const StakeholderValueSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-indigo-950/20 to-purple-950/30">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Stakeholder Value Propositions</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            HelixHub creates unique value for each participant in the innovation ecosystem,
            fostering collaboration and alignment across traditionally siloed sectors.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stakeholderData.map((stakeholder, index) => (
            <motion.div
              key={stakeholder.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`bg-gradient-to-br ${stakeholder.color} backdrop-blur-sm rounded-xl overflow-hidden border ${stakeholder.border}`}
            >
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-gray-900/50 mr-4">
                    {stakeholder.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{stakeholder.type}</h3>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {stakeholder.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <div className="text-green-400 mr-2">✓</div>
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700/50 mb-6">
                  <p className="text-gray-300 italic mb-3">"{stakeholder.quote.text}"</p>
                  <div className="text-sm">
                    <div className="text-white font-semibold">{stakeholder.quote.author}</div>
                    <div className="text-gray-400">{stakeholder.quote.title}</div>
                  </div>
                </div>
                
                <Button variant="ghost" className="text-white hover:text-purple-300 hover:bg-gray-900/30 w-full">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StakeholderValueSection;
