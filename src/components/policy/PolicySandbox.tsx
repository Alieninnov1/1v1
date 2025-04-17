
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { BarChart3, FileText, Network, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";

interface PolicyParameter {
  id: string;
  name: string;
  value: number;
  min: number;
  max: number;
  step: number;
  description: string;
}

const PolicySandbox = () => {
  const [policyName, setPolicyName] = useState("Education Funding Reallocation");
  const [policyDescription, setPolicyDescription] = useState(
    "Simulating the impact of reallocating education funding to prioritize emerging skills and technologies."
  );
  const [parameters, setParameters] = useState<PolicyParameter[]>([
    {
      id: "funding",
      name: "Funding Allocation",
      value: 50,
      min: 0,
      max: 100,
      step: 5,
      description: "Percentage of budget allocated to emerging technology education"
    },
    {
      id: "timeline",
      name: "Implementation Timeline",
      value: 24,
      min: 1,
      max: 60,
      step: 1,
      description: "Months required for full implementation"
    },
    {
      id: "coverage",
      name: "Regional Coverage",
      value: 70,
      min: 10,
      max: 100,
      step: 10,
      description: "Percentage of educational institutions covered"
    }
  ]);
  
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationResults, setSimulationResults] = useState<null | {
    skillGapReduction: number;
    employmentIncrease: number;
    timeToMarket: number;
    costEffectiveness: number;
  }>(null);

  const updateParameter = (id: string, value: number) => {
    setParameters(params => 
      params.map(param => param.id === id ? { ...param, value } : param)
    );
  };

  const runSimulation = () => {
    setIsSimulating(true);
    toast({
      title: "Running Simulation",
      description: "Calculating policy impacts across sectors...",
    });

    // Simulate API call delay
    setTimeout(() => {
      // Calculate "results" based on parameters
      const fundingParam = parameters.find(p => p.id === "funding")?.value || 50;
      const timelineParam = parameters.find(p => p.id === "timeline")?.value || 24;
      const coverageParam = parameters.find(p => p.id === "coverage")?.value || 70;
      
      const results = {
        skillGapReduction: Math.round((fundingParam * 0.15 + coverageParam * 0.05) * (60 / timelineParam) * 0.1),
        employmentIncrease: Math.round((fundingParam * 0.08 + coverageParam * 0.12) * 0.1),
        timeToMarket: Math.round(12 - (timelineParam * 0.1)),
        costEffectiveness: Math.round((fundingParam * 0.5 + coverageParam * 0.3) / (timelineParam * 0.1))
      };

      setSimulationResults(results);
      setIsSimulating(false);
      
      toast({
        title: "Simulation Complete",
        description: "Policy impact analysis is now available.",
      });
    }, 2000);
  };

  const resetSimulation = () => {
    setParameters([
      {
        id: "funding",
        name: "Funding Allocation",
        value: 50,
        min: 0,
        max: 100,
        step: 5,
        description: "Percentage of budget allocated to emerging technology education"
      },
      {
        id: "timeline",
        name: "Implementation Timeline",
        value: 24,
        min: 1,
        max: 60,
        step: 1,
        description: "Months required for full implementation"
      },
      {
        id: "coverage",
        name: "Regional Coverage",
        value: 70,
        min: 10,
        max: 100,
        step: 10,
        description: "Percentage of educational institutions covered"
      }
    ]);
    setSimulationResults(null);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Policy Configuration */}
      <Card className="shadow-card border-none rounded-xl">
        <CardHeader>
          <CardTitle className="text-xl font-satoshi">Policy Configuration</CardTitle>
          <CardDescription>Adjust parameters to simulate different policy scenarios</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="policyName" className="text-sm font-medium">Policy Name</label>
            <Input 
              id="policyName"
              value={policyName}
              onChange={(e) => setPolicyName(e.target.value)}
              className="w-full"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="policyDescription" className="text-sm font-medium">Description</label>
            <Textarea
              id="policyDescription"
              value={policyDescription}
              onChange={(e) => setPolicyDescription(e.target.value)}
              className="w-full min-h-[80px]"
            />
          </div>
          
          <div className="space-y-4 mt-6">
            <h3 className="font-medium">Policy Parameters</h3>
            {parameters.map((param) => (
              <div key={param.id} className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor={param.id} className="text-sm font-medium">{param.name}</label>
                  <span className="text-sm font-mono">{param.value}{param.id === "timeline" ? " months" : "%"}</span>
                </div>
                <Slider
                  id={param.id}
                  min={param.min}
                  max={param.max}
                  step={param.step}
                  value={[param.value]}
                  onValueChange={(value) => updateParameter(param.id, value[0])}
                />
                <p className="text-xs text-muted-foreground">{param.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={resetSimulation}>Reset</Button>
          <Button 
            onClick={runSimulation}
            disabled={isSimulating}
            className="bg-helix-purple hover:bg-helix-purple/90"
          >
            {isSimulating ? "Simulating..." : "Run Simulation"}
          </Button>
        </CardFooter>
      </Card>

      {/* Simulation Results */}
      <Card className="shadow-card border-none rounded-xl">
        <CardHeader>
          <CardTitle className="text-xl font-satoshi">Simulation Results</CardTitle>
          <CardDescription>
            Projected outcomes based on current parameters
          </CardDescription>
        </CardHeader>
        <CardContent>
          {simulationResults ? (
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <h4 className="font-medium">Skill Gap Reduction</h4>
                  </div>
                  <p className="text-2xl font-bold">{simulationResults.skillGapReduction}%</p>
                  <p className="text-xs text-muted-foreground mt-1">Expected decrease in targeted skill gaps</p>
                </div>
                
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <h4 className="font-medium">Employment</h4>
                  </div>
                  <p className="text-2xl font-bold">+{simulationResults.employmentIncrease}%</p>
                  <p className="text-xs text-muted-foreground mt-1">Projected increase in sector employment</p>
                </div>
                
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Network className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    <h4 className="font-medium">Time to Market</h4>
                  </div>
                  <p className="text-2xl font-bold">{simulationResults.timeToMarket} mo.</p>
                  <p className="text-xs text-muted-foreground mt-1">Average time savings for workforce readiness</p>
                </div>
                
                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                    <h4 className="font-medium">Cost Effectiveness</h4>
                  </div>
                  <p className="text-2xl font-bold">{simulationResults.costEffectiveness}/100</p>
                  <p className="text-xs text-muted-foreground mt-1">Return on investment rating</p>
                </div>
              </motion.div>
              
              <div className="p-4 border rounded-lg mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-5 w-5 text-gray-600" />
                  <h4 className="font-medium">Analysis Summary</h4>
                </div>
                <p className="text-sm">
                  Based on a {parameters.find(p => p.id === "funding")?.value}% funding allocation over 
                  {parameters.find(p => p.id === "timeline")?.value} months with 
                  {parameters.find(p => p.id === "coverage")?.value}% regional coverage, the policy is projected 
                  to deliver moderate to strong improvements in skill alignment and employment outcomes.
                </p>
              </div>
            </div>
          ) : (
            <div className="h-[300px] flex flex-col items-center justify-center text-center p-6">
              <Network className="h-16 w-16 text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-500">No Simulation Data</h3>
              <p className="text-sm text-gray-400 max-w-xs mt-2">
                Adjust policy parameters and run a simulation to see projected outcomes
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PolicySandbox;
