
import { motion } from "framer-motion";
import { Brain, Database, Gauge, Laptop, LineChart, Blocks, Activity } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useSkillTrends, useRegionalData } from "@/services/apiDataService";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

interface XPDemoWindowProps {
  demoType?: 'curriculum' | 'metrics' | 'governance';
}

// Sample system strain historical data
const systemStrainData = [
  { year: '2020', strain: 5.2, buffer: 4.2, threshold: 7.5 },
  { year: '2021', strain: 6.1, buffer: 3.9, threshold: 7.5 },
  { year: '2022', strain: 7.8, buffer: 3.2, threshold: 7.5 },
  { year: '2023', strain: 8.5, buffer: 2.8, threshold: 7.5 },
  { year: '2024', strain: 7.3, buffer: 3.1, threshold: 7.5 },
  { year: '2025', strain: 5.8, buffer: 4.4, threshold: 7.5 },
];

// Sample governance votes
const governanceVotes = [
  { id: 1, title: 'Data Science Curriculum Update', votes: 68, totalVotes: 100, status: 'Active' },
  { id: 2, title: 'Industry Collaboration Framework', votes: 89, totalVotes: 100, status: 'Passed' },
  { id: 3, title: 'Regional Apprenticeship Program', votes: 42, totalVotes: 100, status: 'Active' },
];

const XPDemoWindow = ({ demoType = 'curriculum' }: XPDemoWindowProps) => {
  const [strain, setStrain] = useState(7.3);
  const [placement, setPlacement] = useState(68);
  const { toast } = useToast();
  
  const { data: skillTrends, isLoading: isLoadingSkills } = useSkillTrends();
  const { data: regionalData, isLoading: isLoadingRegional } = useRegionalData();
  
  useEffect(() => {
    if (demoType === 'curriculum') {
      setStrain(7.3);
      setPlacement(68);
    }
  }, [demoType]);
  
  const handleOptimize = () => {
    setStrain(2.8);
    setPlacement(94);
    toast({
      title: "System Optimized",
      description: "Curriculum alignment complete. Placement rates improved!"
    });
  };

  const renderCurriculumDemo = () => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-4 border border-blue-200 shadow-lg">
          <div className="flex items-center mb-4">
            <Gauge className="h-5 w-5 text-blue-500 mr-2" />
            <h3 className="font-bold">System Strain</h3>
          </div>
          <div className="text-3xl font-bold text-blue-600 mb-2">{strain}/10</div>
          <div className="text-sm text-gray-600">Current system pressure index</div>
        </Card>

        <Card className="p-4 border border-green-200 shadow-lg">
          <div className="flex items-center mb-4">
            <Database className="h-5 w-5 text-green-500 mr-2" />
            <h3 className="font-bold">Placement Rate</h3>
          </div>
          <div className="text-3xl font-bold text-green-600 mb-2">{placement}%</div>
          <div className="text-sm text-gray-600">Graduate employment success</div>
        </Card>
      </div>

      <motion.div 
        className="mt-6 p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg border border-blue-200"
        whileHover={{ scale: 1.01 }}
      >
        <div className="flex items-center mb-4">
          <Brain className="h-6 w-6 text-purple-500 mr-2" />
          <h2 className="text-xl font-bold">AI Curriculum Guide</h2>
        </div>
        
        <ul className="space-y-2 mb-4">
          <li className="flex items-center text-sm">
            <span className="h-2 w-2 bg-green-400 rounded-full mr-2" />
            Add Python for Data Science (6-week module)
          </li>
          <li className="flex items-center text-sm">
            <span className="h-2 w-2 bg-blue-400 rounded-full mr-2" />
            Integrate Cloud ML Operations
          </li>
          <li className="flex items-center text-sm">
            <span className="h-2 w-2 bg-purple-400 rounded-full mr-2" />
            Launch Industry Capstone Projects
          </li>
          <li className="flex items-center text-sm">
            <span className="h-2 w-2 bg-indigo-400 rounded-full mr-2" />
            Add Quantum Computing Fundamentals
          </li>
        </ul>

        <Button 
          onClick={handleOptimize}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
          <Brain className="mr-2 h-4 w-4" />
          Optimize Curriculum
        </Button>
      </motion.div>
      
      {!isLoadingSkills && skillTrends && (
        <div className="mt-6">
          <Card className="p-4 border border-purple-200 shadow-lg">
            <div className="flex items-center mb-4">
              <Activity className="h-5 w-5 text-purple-500 mr-2" />
              <h3 className="font-bold">Top Trending Skills</h3>
            </div>
            <div className="space-y-3">
              {skillTrends.slice(0, 3).map((skill, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{skill.name}</p>
                    <p className="text-xs text-gray-500">{skill.relevance} relevance</p>
                  </div>
                  <div className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {skill.growth}% growth
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}
    </>
  );
  
  const renderMetricsDemo = () => (
    <>
      <Card className="p-6 border border-blue-200 shadow-lg">
        <div className="flex items-center mb-4">
          <LineChart className="h-5 w-5 text-blue-500 mr-2" />
          <h3 className="font-bold">System Strain Index (5-Year Trend)</h3>
        </div>
        
        <div className="h-64 mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={systemStrainData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorStrain" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorBuffer" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="strain" stroke="#8884d8" fillOpacity={1} fill="url(#colorStrain)" />
              <Area type="monotone" dataKey="buffer" stroke="#82ca9d" fillOpacity={1} fill="url(#colorBuffer)" />
              <Area type="monotone" dataKey="threshold" stroke="#ff7300" strokeDasharray="5 5" fill="none" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="p-3 bg-purple-50 rounded-lg text-center">
            <p className="text-xs text-gray-500 mb-1">Civic Load</p>
            <p className="text-lg font-bold text-purple-700">3.2M</p>
          </div>
          <div className="p-3 bg-blue-50 rounded-lg text-center">
            <p className="text-xs text-gray-500 mb-1">Resource Buffer</p>
            <p className="text-lg font-bold text-blue-700">3.1</p>
          </div>
          <div className="p-3 bg-green-50 rounded-lg text-center">
            <p className="text-xs text-gray-500 mb-1">Usage per Citizen</p>
            <p className="text-lg font-bold text-green-700">2.4</p>
          </div>
        </div>
        
        <p className="text-sm text-gray-500 mt-4">
          The System Strain Index tracks the relationship between population demands and available resources,
          with alerts triggered when approaching the crisis threshold.
        </p>
      </Card>
      
      {!isLoadingRegional && regionalData && (
        <div className="mt-6">
          <Card className="p-4 border border-indigo-200 shadow-lg">
            <div className="flex items-center mb-4">
              <Activity className="h-5 w-5 text-indigo-500 mr-2" />
              <h3 className="font-bold">Regional Innovation Hotspots</h3>
            </div>
            <div className="space-y-3">
              {regionalData.slice(0, 3).map((region, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{region.name}</p>
                    <p className="text-xs text-gray-500">{region.industries.join(', ')}</p>
                  </div>
                  <div className="text-sm bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
                    {region.opportunities} opportunities
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}
    </>
  );
  
  const renderGovernanceDemo = () => (
    <>
      <Card className="p-6 border border-indigo-200 shadow-lg">
        <div className="flex items-center mb-4">
          <Blocks className="h-5 w-5 text-indigo-500 mr-2" />
          <h3 className="font-bold">SignalDAO Voting System</h3>
        </div>
        
        <div className="space-y-4">
          {governanceVotes.map((vote) => (
            <div key={vote.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">{vote.title}</h4>
                <span className={`text-xs px-2 py-1 rounded ${
                  vote.status === 'Passed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {vote.status}
                </span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div 
                  className={`h-2.5 rounded-full ${
                    vote.votes > 75 ? 'bg-green-500' : vote.votes > 50 ? 'bg-blue-500' : 'bg-amber-500'
                  }`}
                  style={{ width: `${vote.votes}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between text-xs text-gray-500">
                <span>{vote.votes}% support</span>
                <span>{vote.votes}/{vote.totalVotes} votes</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6">
          <Button 
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
          >
            <Blocks className="mr-2 h-4 w-4" />
            Cast Your Vote
          </Button>
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            HelixHub's SignalDAO voting system allows stakeholders to participate in 
            decisions that shape education-industry alignment policies.
          </p>
        </div>
      </Card>
    </>
  );

  return (
    <div className="xp-window max-w-4xl mx-auto">
      <div className="xp-title-bar bg-gradient-to-r from-blue-700 to-blue-900 flex items-center justify-between p-2">
        <div className="flex items-center">
          <Laptop className="h-4 w-4 text-blue-100 mr-2" />
          <span className="text-white text-sm">HelixHub Enterprise Explorer</span>
        </div>
        <div className="flex space-x-1">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
      </div>

      <div className="xp-window-content bg-gray-100 p-6">
        {demoType === 'curriculum' && renderCurriculumDemo()}
        {demoType === 'metrics' && renderMetricsDemo()}
        {demoType === 'governance' && renderGovernanceDemo()}
      </div>
    </div>
  );
};

export default XPDemoWindow;
