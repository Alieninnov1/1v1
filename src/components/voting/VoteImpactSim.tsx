
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Info, PlayCircle, RefreshCcw, XCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Policy {
  id: string;
  name: string;
  description: string;
  positiveImpact: {
    education: number;
    industry: number;
    government: number;
  };
  negativeImpact: {
    education: number;
    industry: number;
    government: number;
  };
}

const mockPolicies: Policy[] = [
  {
    id: "policy1",
    name: "Universal Technical Curriculum",
    description: "Standardize technical education curriculum across all educational institutions.",
    positiveImpact: {
      education: 85,
      industry: 70,
      government: 60,
    },
    negativeImpact: {
      education: 25,
      industry: 15,
      government: 30,
    },
  },
  {
    id: "policy2",
    name: "Industry Placement Program",
    description: "Mandatory industry internships for all technical degree programs.",
    positiveImpact: {
      education: 65,
      industry: 90,
      government: 50,
    },
    negativeImpact: {
      education: 30,
      industry: 20,
      government: 15,
    },
  },
  {
    id: "policy3",
    name: "Research Innovation Grants",
    description: "Increased funding for collaborative academia-industry research projects.",
    positiveImpact: {
      education: 80,
      industry: 75,
      government: 65,
    },
    negativeImpact: {
      education: 10,
      industry: 25,
      government: 40,
    },
  },
];

const VoteImpactSim = () => {
  const [currentPolicy, setCurrentPolicy] = useState<Policy>(mockPolicies[0]);
  const [voteDistribution, setVoteDistribution] = useState({
    education: 33,
    industry: 33,
    government: 34,
  });
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationResults, setSimulationResults] = useState<any | null>(null);
  const { toast } = useToast();

  const handleSliderChange = (stakeholder: "education" | "industry" | "government", values: number[]) => {
    const newValue = values[0];
    const oldValue = voteDistribution[stakeholder];
    const diff = newValue - oldValue;

    // Proportionally adjust the other stakeholders
    const remainingStakeholders = Object.keys(voteDistribution).filter(
      (key) => key !== stakeholder
    ) as Array<"education" | "industry" | "government">;

    const newDistribution = { ...voteDistribution, [stakeholder]: newValue };

    // Distribute the difference proportionally among other stakeholders
    const totalOther = remainingStakeholders.reduce((total, key) => total + voteDistribution[key], 0);
    
    if (totalOther > 0) {
      remainingStakeholders.forEach((key) => {
        const proportion = voteDistribution[key] / totalOther;
        newDistribution[key] = Math.max(0, Math.round(voteDistribution[key] - diff * proportion));
      });
    }

    // Adjust for rounding errors to ensure total is exactly 100
    const total = Object.values(newDistribution).reduce((sum, val) => sum + val, 0);
    if (total !== 100) {
      const diff = 100 - total;
      const lastKey = remainingStakeholders[remainingStakeholders.length - 1];
      newDistribution[lastKey] += diff;
    }

    setVoteDistribution(newDistribution);
  };

  const runSimulation = () => {
    setIsSimulating(true);
    
    // Simulate a complex calculation
    setTimeout(() => {
      const { positiveImpact, negativeImpact } = currentPolicy;
      
      // Calculate weighted impacts
      const weightedPositive = {
        education: (positiveImpact.education * voteDistribution.education) / 100,
        industry: (positiveImpact.industry * voteDistribution.industry) / 100,
        government: (positiveImpact.government * voteDistribution.government) / 100,
      };
      
      const weightedNegative = {
        education: (negativeImpact.education * voteDistribution.education) / 100,
        industry: (negativeImpact.industry * voteDistribution.industry) / 100,
        government: (negativeImpact.government * voteDistribution.government) / 100,
      };
      
      // Calculate net impacts
      const netImpacts = {
        education: weightedPositive.education - weightedNegative.education,
        industry: weightedPositive.industry - weightedNegative.industry, 
        government: weightedPositive.government - weightedNegative.government,
      };
      
      // Calculate overall system health impact
      const totalNetImpact = Object.values(netImpacts).reduce((sum, val) => sum + val, 0);
      const systemHealthChange = totalNetImpact / 3; // Average impact across stakeholders
      
      const results = {
        passed: totalNetImpact > 0,
        netImpacts,
        systemHealthChange,
        recommendation: totalNetImpact > 0 ? "Implement Policy" : "Reconsider Policy",
      };
      
      setSimulationResults(results);
      setIsSimulating(false);
      
      toast({
        title: results.passed ? "Policy Simulation Successful" : "Policy Simulation Warning",
        description: results.passed 
          ? "The policy is projected to have a positive impact on the system." 
          : "The policy may have negative consequences on the system.",
        variant: results.passed ? "default" : "destructive",
      });
    }, 1500);
  };

  const resetSimulation = () => {
    setSimulationResults(null);
    setVoteDistribution({
      education: 33,
      industry: 33,
      government: 34,
    });
  };

  const selectPolicy = (policy: Policy) => {
    setCurrentPolicy(policy);
    setSimulationResults(null);
  };

  return (
    <Card className="shadow-md border-none">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <PlayCircle className="h-5 w-5 text-helix-purple" />
          SignalDAO Vote Impact Simulator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Policy Selection */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {mockPolicies.map((policy) => (
              <div
                key={policy.id}
                className={`p-4 rounded-lg cursor-pointer border transition-all ${
                  currentPolicy.id === policy.id
                    ? "border-helix-purple bg-purple-50 dark:bg-purple-900/20"
                    : "border-gray-200 hover:border-gray-300 dark:border-gray-700"
                }`}
                onClick={() => selectPolicy(policy)}
              >
                <h3 className="font-medium text-sm mb-1">{policy.name}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{policy.description}</p>
              </div>
            ))}
          </div>

          {/* Voting Distribution Controls */}
          <div className="space-y-4 mb-6">
            <h3 className="font-semibold text-sm flex items-center gap-2">
              <Info className="h-4 w-4" />
              Voting Power Distribution
            </h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <label className="text-sm font-medium">Academia</label>
                  <span className="text-sm font-bold">{voteDistribution.education}%</span>
                </div>
                <Slider
                  value={[voteDistribution.education]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={(values) => handleSliderChange("education", values)}
                  className="education-slider"
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <label className="text-sm font-medium">Industry</label>
                  <span className="text-sm font-bold">{voteDistribution.industry}%</span>
                </div>
                <Slider
                  value={[voteDistribution.industry]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={(values) => handleSliderChange("industry", values)}
                  className="industry-slider"
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <label className="text-sm font-medium">Government</label>
                  <span className="text-sm font-bold">{voteDistribution.government}%</span>
                </div>
                <Slider
                  value={[voteDistribution.government]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={(values) => handleSliderChange("government", values)}
                  className="government-slider"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 justify-center">
            <Button 
              variant="default" 
              className="bg-gradient-to-r from-purple-600 to-indigo-600"
              disabled={isSimulating}
              onClick={runSimulation}
            >
              {isSimulating ? (
                <>
                  <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />
                  Simulating...
                </>
              ) : (
                "Run Simulation"
              )}
            </Button>
            
            <Button 
              variant="outline" 
              onClick={resetSimulation}
              disabled={isSimulating}
            >
              Reset
            </Button>
          </div>

          {/* Simulation Results */}
          <AnimatePresence>
            {simulationResults && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">Simulation Results</h3>
                    <Badge 
                      variant={simulationResults.passed ? "default" : "destructive"}
                      className={simulationResults.passed ? "bg-green-500" : ""}
                    >
                      {simulationResults.passed ? (
                        <CheckCircle2 className="mr-1 h-3 w-3" />
                      ) : (
                        <XCircle className="mr-1 h-3 w-3" />
                      )}
                      {simulationResults.recommendation}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-3">
                      {Object.entries(simulationResults.netImpacts).map(([key, value]: [string, any]) => (
                        <div key={key} className="p-3 bg-white dark:bg-gray-700 rounded-lg">
                          <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">{key}</div>
                          <div className={`text-lg font-bold ${
                            value > 0 ? "text-green-500" : value < 0 ? "text-red-500" : "text-gray-500"
                          }`}>
                            {value > 0 ? "+" : ""}{value.toFixed(1)}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="p-3 bg-white dark:bg-gray-700 rounded-lg">
                      <div className="text-xs text-gray-500 dark:text-gray-400">System Health Change</div>
                      <div className={`text-lg font-bold ${
                        simulationResults.systemHealthChange > 0 
                          ? "text-green-500" 
                          : simulationResults.systemHealthChange < 0 
                          ? "text-red-500" 
                          : "text-gray-500"
                      }`}>
                        {simulationResults.systemHealthChange > 0 ? "+" : ""}
                        {simulationResults.systemHealthChange.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </CardContent>
    </Card>
  );
};

export default VoteImpactSim;
