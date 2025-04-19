
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface ScenarioToggleProps {
  scenario: string;
  onScenarioChange: (value: string) => void;
}

const ScenarioToggle = ({ scenario, onScenarioChange }: ScenarioToggleProps) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 text-white">Scenario</h3>
      <ToggleGroup 
        type="single" 
        value={scenario} 
        onValueChange={(value) => value && onScenarioChange(value)}
      >
        <ToggleGroupItem value="statusQuo" className="text-sm">Status Quo</ToggleGroupItem>
        <ToggleGroupItem value="rebalanced" className="text-sm">Rebalanced</ToggleGroupItem>
        <ToggleGroupItem value="collapse" className="text-sm">Collapse</ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default ScenarioToggle;
