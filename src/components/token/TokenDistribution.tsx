
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "Community Treasury", value: 30, color: "#9b87f5" },
  { name: "Team & Advisors", value: 20, color: "#7E69AB" },
  { name: "Initial Liquidity", value: 15, color: "#6E59A5" },
  { name: "Ecosystem Growth", value: 35, color: "#D6BCFA" },
];

export const TokenDistribution = () => {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-purple-100">Token Distribution</h2>
      <Card className="bg-purple-900/20 border-purple-700">
        <CardHeader>
          <CardTitle className="text-purple-100">HELIX Token Allocation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
