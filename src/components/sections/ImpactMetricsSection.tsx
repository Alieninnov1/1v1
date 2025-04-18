
import { motion } from "framer-motion";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Sparkles, TrendingUp, Users, BookOpen, Briefcase, Building2 } from "lucide-react";

// Sample data for charts
const educationImpactData = [
  { name: "Q1", current: 40, projected: 65 },
  { name: "Q2", current: 45, projected: 72 },
  { name: "Q3", current: 53, projected: 80 },
  { name: "Q4", current: 58, projected: 88 }
];

const industryAdoptionData = [
  { name: "SMEs", value: 65 },
  { name: "Startups", value: 85 },
  { name: "Large Corps", value: 45 },
  { name: "Gov Agencies", value: 55 }
];

const ImpactMetricsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black/40 to-indigo-950/30">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full mb-4">
            <span className="text-sm font-medium text-purple-300 flex items-center">
              <Sparkles size={16} className="mr-2" />
              Measurable Impact
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-white">ROI & Success Metrics</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            HelixHub drives quantifiable improvement in education relevance, industry readiness, 
            and policy effectiveness through our triple helix approach.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Impact Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
          >
            <div className="flex items-center mb-4">
              <BookOpen className="h-6 w-6 text-blue-400 mr-3" />
              <h3 className="text-xl font-bold text-white">Educational Relevance</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Students with HelixHub-aligned curriculum find jobs 3x faster and report 85% higher satisfaction with their education.
            </p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={educationImpactData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="name" stroke="#aaa" />
                  <YAxis stroke="#aaa" />
                  <Tooltip contentStyle={{ backgroundColor: '#1e1e2e', borderColor: '#6e56cf' }} />
                  <Legend />
                  <Line type="monotone" dataKey="current" stroke="#8884d8" name="Standard Curriculum" />
                  <Line type="monotone" dataKey="projected" stroke="#82ca9d" name="HelixHub Curriculum" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
          
          {/* Industry Adoption Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
          >
            <div className="flex items-center mb-4">
              <Briefcase className="h-6 w-6 text-purple-400 mr-3" />
              <h3 className="text-xl font-bold text-white">Industry Adoption Rate</h3>
            </div>
            <p className="text-gray-300 mb-6">
              HelixHub reduces employee onboarding time by 47% and improves skill-job matching by 65%.
            </p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={industryAdoptionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="name" stroke="#aaa" />
                  <YAxis stroke="#aaa" />
                  <Tooltip contentStyle={{ backgroundColor: '#1e1e2e', borderColor: '#6e56cf' }} />
                  <Legend />
                  <Bar dataKey="value" name="Adoption %" fill="#6e56cf" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
        
        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 p-6 rounded-xl border border-blue-500/20"
          >
            <div className="flex items-center mb-3">
              <div className="bg-blue-500/20 p-3 rounded-lg mr-4">
                <BookOpen size={24} className="text-blue-400" />
              </div>
              <div>
                <div className="text-sm text-blue-300">Curriculum Alignment</div>
                <div className="text-3xl font-bold text-white">94%</div>
              </div>
            </div>
            <p className="text-sm text-gray-300">Industry-aligned course content with real-time updates</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-indigo-900/30 to-indigo-800/10 p-6 rounded-xl border border-indigo-500/20"
          >
            <div className="flex items-center mb-3">
              <div className="bg-indigo-500/20 p-3 rounded-lg mr-4">
                <Briefcase size={24} className="text-indigo-400" />
              </div>
              <div>
                <div className="text-sm text-indigo-300">Talent Match Rate</div>
                <div className="text-3xl font-bold text-white">86%</div>
              </div>
            </div>
            <p className="text-sm text-gray-300">Successful job placements through skill-matching</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-br from-purple-900/30 to-purple-800/10 p-6 rounded-xl border border-purple-500/20"
          >
            <div className="flex items-center mb-3">
              <div className="bg-purple-500/20 p-3 rounded-lg mr-4">
                <Building2 size={24} className="text-purple-400" />
              </div>
              <div>
                <div className="text-sm text-purple-300">Policy Effectiveness</div>
                <div className="text-3xl font-bold text-white">73%</div>
              </div>
            </div>
            <p className="text-sm text-gray-300">Improved governance through data-driven decision making</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-br from-green-900/30 to-green-800/10 p-6 rounded-xl border border-green-500/20"
          >
            <div className="flex items-center mb-3">
              <div className="bg-green-500/20 p-3 rounded-lg mr-4">
                <TrendingUp size={24} className="text-green-400" />
              </div>
              <div>
                <div className="text-sm text-green-300">ROI for Institutions</div>
                <div className="text-3xl font-bold text-white">328%</div>
              </div>
            </div>
            <p className="text-sm text-gray-300">Return on investment for platform adoption</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetricsSection;
