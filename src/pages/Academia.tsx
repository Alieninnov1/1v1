
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Briefcase, 
  Building2, 
  ArrowRight, 
  GraduationCap,
  LineChart,
  Users,
  Lightbulb
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { useNavigate } from "react-router-dom";

const Academia = () => {
  const navigate = useNavigate();
  
  return (
    <Layout>
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-8 md:mb-0 md:mr-10">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="h-24 w-24 rounded-full bg-white/20 flex items-center justify-center"
              >
                <BookOpen className="h-12 w-12" />
              </motion.div>
            </div>
            
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-satoshi"
              >
                Academia
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg md:text-xl text-blue-100 max-w-3xl"
              >
                Empowering educational institutions to develop future-ready curricula through data-driven insights and partnerships with industry and government.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollAnimation type="fade" direction="up">
          <h2 className="text-3xl font-bold mb-12 text-center">The Triple Helix Approach</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="border-none shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                  Academia
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Educational institutions providing knowledge, research, and future workforce development.
                </p>
                <Button variant="outline" className="mt-4 w-full" onClick={() => navigate("/academia")}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="h-5 w-5 mr-2 text-amber-600" />
                  Industry
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Businesses providing real-world challenges, market insights, and employment opportunities.
                </p>
                <Button variant="outline" className="mt-4 w-full" onClick={() => navigate("/industry")}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building2 className="h-5 w-5 mr-2 text-helix-purple" />
                  Government
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Policy makers providing frameworks, funding, and strategic direction for growth.
                </p>
                <Button variant="outline" className="mt-4 w-full" onClick={() => navigate("/government")}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation type="fade" direction="up" delay={0.2}>
          <h2 className="text-2xl font-bold mb-6">Academia Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2 text-blue-600" />
                  Curriculum Development
                </CardTitle>
                <CardDescription>Design future-ready educational programs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Access tools and insights to develop curricula that align with industry needs and government policies.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Access Tools
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <LineChart className="h-5 w-5 mr-2 text-blue-600" />
                  Skills Gap Analysis
                </CardTitle>
                <CardDescription>Identify and address emerging workforce needs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Explore comprehensive data on skills gaps and workforce trends to inform educational strategies.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  View Analytics
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-blue-600" />
                  Industry Partnerships
                </CardTitle>
                <CardDescription>Connect with businesses for real-world learning</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Discover opportunities for collaboration with industry partners for internships, research, and more.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Find Partners
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2 text-blue-600" />
                  Policy Engagement
                </CardTitle>
                <CardDescription>Participate in shaping educational policies</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Contribute to policy discussions and access government initiatives relevant to educational institutions.
                </p>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => navigate("/government")}
                >
                  Engage with Policies
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation type="fade" direction="up" delay={0.4}>
          <div className="mt-16 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Education?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-3xl">
              Join our network of educational institutions, industry partners, and government agencies to create a more responsive and effective educational ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Join HelixHub
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">
                Request Demo
              </Button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </Layout>
  );
};

export default Academia;
