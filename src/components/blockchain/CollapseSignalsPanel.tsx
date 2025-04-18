
import { AlertTriangle, TrendingDown, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { trackEvent } from "@/utils/analytics";

interface Signal {
  type: string;
  value: number;
  trend: "up" | "down" | "stable";
  severity: "low" | "medium" | "high";
}

const CollapseSignalsPanel = () => {
  const signals: Signal[] = [
    { type: "System Strain", value: 0.85, trend: "up", severity: "high" },
    { type: "Resource Buffer", value: 0.42, trend: "down", severity: "medium" },
    { type: "Trust Score", value: 0.67, trend: "stable", severity: "low" },
  ];

  const handleSignalClick = (signal: Signal) => {
    trackEvent("signalDaoVote", { type: signal.type, severity: signal.severity });
  };

  return (
    <Card className="border-none shadow-xl bg-black/40 backdrop-blur-sm">
      <CardHeader className="border-b border-purple-500/20">
        <CardTitle className="text-lg font-bold flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-orange-400" />
          Collapse Signals Monitor
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="grid gap-4">
          {signals.map((signal) => (
            <div
              key={signal.type}
              onClick={() => handleSignalClick(signal)}
              className="flex items-center justify-between p-3 rounded-lg bg-gray-900/50 border border-purple-500/20 hover:bg-gray-900/70 cursor-pointer transition-all"
            >
              <div className="flex items-center gap-3">
                <div className={`h-3 w-3 rounded-full animate-pulse ${
                  signal.severity === "high" ? "bg-red-500" :
                  signal.severity === "medium" ? "bg-yellow-500" :
                  "bg-green-500"
                }`} />
                <span className="font-medium">{signal.type}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`${
                  signal.trend === "up" ? "text-red-400" :
                  signal.trend === "down" ? "text-green-400" :
                  "text-blue-400"
                }`}>
                  {signal.value.toFixed(2)}
                </span>
                {signal.trend === "down" ? (
                  <TrendingDown className="h-4 w-4" />
                ) : (
                  <Activity className="h-4 w-4" />
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CollapseSignalsPanel;
