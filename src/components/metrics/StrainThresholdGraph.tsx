
import { useState } from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, HelpCircle } from "lucide-react";

// Mock data for the chart
const generateMockData = (days: number = 30) => {
  const data = [];
  let civicLoad = 2.2;
  let resourceBuffer = 9.0;
  let usagePerCitizen = 4.0;
  let strainIndex = 0.65;

  for (let i = 0; i < days; i++) {
    // Simulate realistic data changes with some random fluctuation
    civicLoad += (Math.random() - 0.3) * 0.05;
    resourceBuffer += (Math.random() - 0.5) * 0.15;
    usagePerCitizen += (Math.random() - 0.5) * 0.08;
    
    // Calculate strain index based on the relationship between the other metrics
    strainIndex = (civicLoad * usagePerCitizen) / resourceBuffer;
    
    // Clamp values to prevent unrealistic numbers
    civicLoad = Math.max(1.8, Math.min(3.0, civicLoad));
    resourceBuffer = Math.max(7.0, Math.min(10.0, resourceBuffer));
    usagePerCitizen = Math.max(3.5, Math.min(4.5, usagePerCitizen));
    strainIndex = Math.max(0.6, Math.min(1.2, strainIndex));

    data.push({
      day: i + 1,
      civicLoad: civicLoad.toFixed(2),
      resourceBuffer: resourceBuffer.toFixed(2),
      usagePerCitizen: usagePerCitizen.toFixed(2),
      strainIndex: strainIndex.toFixed(2),
    });
  }
  return data;
};

const timeRanges = [
  { label: "Last 30 Days", value: "30days", days: 30 },
  { label: "Last 90 Days", value: "90days", days: 90 },
  { label: "Last 6 Months", value: "6months", days: 180 },
  { label: "Last 12 Months", value: "12months", days: 365 },
];

const StrainThresholdGraph = () => {
  const [timeRange, setTimeRange] = useState("30days");
  const [isHelpVisible, setIsHelpVisible] = useState(false);
  
  const selectedRange = timeRanges.find((range) => range.value === timeRange);
  const data = generateMockData(selectedRange?.days);
  
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-4 border rounded-lg shadow-lg">
          <p className="font-semibold mb-2">Day {label}</p>
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex justify-between gap-4 text-sm">
              <span style={{ color: entry.color }}>{entry.name}:</span>
              <span className="font-medium">{entry.value}</span>
            </div>
          ))}
          {payload.some((p: any) => p.dataKey === "strainIndex" && parseFloat(p.value) > 1) && (
            <div className="mt-2 text-xs flex items-center text-red-500">
              <AlertTriangle size={12} className="mr-1" />
              <span>System strain above threshold</span>
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="shadow-card border-none overflow-hidden">
      <CardHeader className="pb-2 flex flex-row justify-between items-center">
        <CardTitle className="text-xl font-satoshi">System Strain Threshold Graph</CardTitle>
        <div className="flex items-center">
          <button 
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            onClick={() => setIsHelpVisible(!isHelpVisible)}
          >
            <HelpCircle size={18} />
          </button>
        </div>
      </CardHeader>
      
      {isHelpVisible && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="px-6 py-2 bg-gray-50 dark:bg-gray-800 border-t border-b border-gray-200 dark:border-gray-700"
        >
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <strong>Blue Line:</strong> Civic Load (Adjusted Population in millions)<br />
            <strong>Orange Line:</strong> Resource Buffer (Biocapacity in million hectares)<br />
            <strong>Green Line:</strong> Usage per Citizen (Per Capita Consumption in hectares/person)<br />
            <strong>Red Line:</strong> System Strain Index (Crisis threshold at 1.0)
          </p>
        </motion.div>
      )}
      
      <CardContent>
        <Tabs defaultValue="30days" value={timeRange} onValueChange={setTimeRange} className="mb-4">
          <TabsList>
            {timeRanges.map((range) => (
              <TabsTrigger key={range.value} value={range.value}>
                {range.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 10,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="day" 
                label={{ 
                  value: `Days (${selectedRange?.label})`, 
                  position: 'insideBottom', 
                  offset: -5 
                }} 
              />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line
                type="monotone"
                dataKey="civicLoad"
                name="Civic Load"
                stroke="#3B82F6"
                dot={false}
                strokeWidth={2}
                activeDot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="resourceBuffer"
                name="Resource Buffer"
                stroke="#F97316"
                dot={false}
                strokeWidth={2}
                activeDot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="usagePerCitizen"
                name="Usage per Citizen"
                stroke="#22C55E"
                dot={false}
                strokeWidth={2}
                strokeDasharray="5 5"
                activeDot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="strainIndex"
                name="System Strain Index"
                stroke="#EF4444"
                dot={false}
                strokeWidth={2}
                activeDot={{ r: 4 }}
              />
              
              {/* Crisis threshold reference line */}
              <ReferenceLine 
                y={1} 
                stroke="#EF4444" 
                strokeDasharray="3 3" 
                label={{ 
                  value: 'Crisis Threshold', 
                  position: 'insideTopRight',
                  fill: '#EF4444',
                  fontSize: 12
                }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4">
          <p className="text-xs text-gray-500">
            * The System Strain Index indicates pressure on resources. Values above 1.0 indicate that consumption exceeds sustainable capacity.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StrainThresholdGraph;
