
interface ProgressBarProps {
  label: string;
  value: number;
  max: number;
  color?: string;
}

export const ProgressBar = ({ label, value, max, color = "bg-blue-500" }: ProgressBarProps) => (
  <div className="flex items-center text-xs">
    <span className="w-16 text-gray-400">{label}:</span>
    <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden ml-2">
      <div className={`h-full ${color}`} style={{ width: `${(value / max) * 100}%` }}></div>
    </div>
    <span className="ml-2">{value}%</span>
  </div>
);
