
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useFadeAnimation } from "@/hooks/animations";

interface StrainChartProps {
  data: any[];
}

const StrainChart = ({ data }: StrainChartProps) => {
  const fadeAnimation = useFadeAnimation(0.2);

  return (
    <motion.div
      {...fadeAnimation}
      className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 h-[500px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="year" stroke="rgba(255,255,255,0.5)" />
          <YAxis stroke="rgba(255,255,255,0.5)" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(0,0,0,0.8)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '4px',
              color: 'white'
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="civicLoad"
            stroke="#3B82F6"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6, stroke: '#3B82F6', strokeWidth: 2 }}
            name="Civic Load"
          />
          <Line
            type="monotone"
            dataKey="resourceBuffer"
            stroke="#10B981"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6, stroke: '#10B981', strokeWidth: 2 }}
            name="Resource Buffer"
          />
          <Line
            type="monotone"
            dataKey="usagePerCitizen"
            stroke="#F59E0B"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6, stroke: '#F59E0B', strokeWidth: 2 }}
            name="Usage per Citizen"
          />
          <Line
            type="monotone"
            dataKey="strainIndex"
            stroke="#EF4444"
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 7, stroke: '#EF4444', strokeWidth: 2 }}
            name="Strain Index"
          />
          <Line
            data={Array(data.length).fill({ threshold: 1 })}
            dataKey="threshold"
            stroke="#EF4444"
            strokeDasharray="5 5"
            strokeWidth={2}
            dot={false}
            name="Crisis Threshold"
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default StrainChart;
