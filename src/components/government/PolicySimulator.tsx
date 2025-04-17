
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { BarChart2, LineChart, PieChart, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Simulated data visualization component
const SimulationChart = ({ type }: { type: string }) => {
  return (
    <div className="h-60 border border-gray-200 dark:border-gray-700 rounded-lg flex items-center justify-center bg-gray-50 dark:bg-gray-800">
      {type === "bar" && <BarChart2 className="h-16 w-16 text-gray-300 dark:text-gray-600" />}
      {type === "line" && <LineChart className="h-16 w-16 text-gray-300 dark:text-gray-600" />}
      {type === "pie" && <PieChart className="h-16 w-16 text-gray-300 dark:text-gray-600" />}
      {type === "column" && <BarChart3 className="h-16 w-16 text-gray-300 dark:text-gray-600" />}
    </div>
  );
};

// Parameter adjustment component
const PolicyParameter = ({ 
  name, 
  value, 
  onChange, 
  min = 0, 
  max = 100 
}: { 
  name: string; 
  value: number; 
  onChange: (value: number) => void; 
  min?: number; 
  max?: number; 
}) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-sm text-gray-500">{value}%</p>
      </div>
      <Slider
        value={[value]}
        min={min}
        max={max}
        step={1}
        onValueChange={(values) => onChange(values[0])}
      />
    </div>
  );
};

const PolicySimulator = () => {
  const navigate = useNavigate();
  
  // Parameter state
  const [fundingAllocation, setFundingAllocation] = useState(50);
  const [regulationLevel, setRegulationLevel] = useState(30);
  const [publicPrivateBalance, setPublicPrivateBalance] = useState(60);
  const [implementationSpeed, setImplementationSpeed] = useState(40);
  
  // Simulated impact scores
  const economicImpact = Math.round(
    (fundingAllocation * 0.3 + (100 - regulationLevel) * 0.4 + publicPrivateBalance * 0.2 + implementationSpeed * 0.1)
  );
  
  const socialImpact = Math.round(
    (fundingAllocation * 0.2 + regulationLevel * 0.3 + publicPrivateBalance * 0.3 + (100 - implementationSpeed) * 0.2)
  );
  
  const innovationImpact = Math.round(
    (fundingAllocation * 0.4 + (100 - regulationLevel) * 0.2 + (100 - publicPrivateBalance) * 0.2 + implementationSpeed * 0.2)
  );
  
  return (
    <ScrollAnimation type="fade" direction="up">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Policy Impact Simulator</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Adjust policy parameters below to simulate potential impacts across economic, social, and innovation dimensions.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <Card className="border-none shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Policy Parameters</CardTitle>
                <CardDescription>Adjust sliders to modify policy parameters</CardDescription>
              </CardHeader>
              <CardContent>
                <PolicyParameter 
                  name="Funding Allocation" 
                  value={fundingAllocation} 
                  onChange={setFundingAllocation} 
                />
                <PolicyParameter 
                  name="Regulation Level" 
                  value={regulationLevel} 
                  onChange={setRegulationLevel} 
                />
                <PolicyParameter 
                  name="Public-Private Partnership" 
                  value={publicPrivateBalance} 
                  onChange={setPublicPrivateBalance} 
                />
                <PolicyParameter 
                  name="Implementation Timeline" 
                  value={implementationSpeed} 
                  onChange={setImplementationSpeed} 
                />
                
                <div className="mt-6">
                  <Button className="w-full bg-helix-purple hover:bg-helix-purple/90">
                    Save Simulation
                  </Button>
                </div>
                
                <div className="mt-4">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => navigate("/policy-sandbox")}
                  >
                    Advanced Sandbox
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card className="border-none shadow-card h-full">
              <CardHeader>
                <CardTitle className="text-lg">Simulated Impact</CardTitle>
                <CardDescription>Projected outcomes based on policy parameters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-medium mb-2">Economic Impact Score</h3>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded h-4">
                        <motion.div 
                          className={`h-4 rounded ${economicImpact > 70 ? 'bg-green-500' : economicImpact > 40 ? 'bg-yellow-500' : 'bg-red-500'}`}
                          initial={{ width: '0%' }}
                          animate={{ width: `${economicImpact}%` }}
                          transition={{ duration: 1 }}
                        />
                      </div>
                      <span className="ml-3 font-medium">{economicImpact}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {economicImpact > 70 ? 'Strong economic growth projected' : 
                       economicImpact > 40 ? 'Moderate economic impact' : 'Limited economic benefit'}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Social Impact Score</h3>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded h-4">
                        <motion.div 
                          className={`h-4 rounded ${socialImpact > 70 ? 'bg-green-500' : socialImpact > 40 ? 'bg-yellow-500' : 'bg-red-500'}`}
                          initial={{ width: '0%' }}
                          animate={{ width: `${socialImpact}%` }}
                          transition={{ duration: 1 }}
                        />
                      </div>
                      <span className="ml-3 font-medium">{socialImpact}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {socialImpact > 70 ? 'Highly positive social outcomes' : 
                       socialImpact > 40 ? 'Moderate social benefits' : 'Limited social improvement'}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Innovation Impact Score</h3>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded h-4">
                        <motion.div 
                          className={`h-4 rounded ${innovationImpact > 70 ? 'bg-green-500' : innovationImpact > 40 ? 'bg-yellow-500' : 'bg-red-500'}`}
                          initial={{ width: '0%' }}
                          animate={{ width: `${innovationImpact}%` }}
                          transition={{ duration: 1 }}
                        />
                      </div>
                      <span className="ml-3 font-medium">{innovationImpact}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {innovationImpact > 70 ? 'High innovation potential' : 
                       innovationImpact > 40 ? 'Moderate innovation boost' : 'Limited innovation impact'}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Overall Performance</h3>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded h-4">
                        <motion.div 
                          className={`h-4 rounded ${(economicImpact + socialImpact + innovationImpact)/3 > 70 ? 'bg-green-500' : (economicImpact + socialImpact + innovationImpact)/3 > 40 ? 'bg-yellow-500' : 'bg-red-500'}`}
                          initial={{ width: '0%' }}
                          animate={{ width: `${(economicImpact + socialImpact + innovationImpact)/3}%` }}
                          transition={{ duration: 1 }}
                        />
                      </div>
                      <span className="ml-3 font-medium">{Math.round((economicImpact + socialImpact + innovationImpact)/3)}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {(economicImpact + socialImpact + innovationImpact)/3 > 70 ? 'Excellent policy balance' : 
                       (economicImpact + socialImpact + innovationImpact)/3 > 40 ? 'Good policy framework' : 'Needs significant improvement'}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <SimulationChart type="bar" />
                  <SimulationChart type="line" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default PolicySimulator;
