
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LockIcon, UnlockIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const StakingInterface = () => {
  const [stakeAmount, setStakeAmount] = useState("");
  const { toast } = useToast();

  const handleStake = () => {
    if (!stakeAmount) return;
    toast({
      title: "Staking Initiated",
      description: `Attempting to stake ${stakeAmount} HELIX tokens.`,
    });
    // In a real implementation, this would connect to the smart contract
    setStakeAmount("");
  };

  const handleUnstake = () => {
    toast({
      title: "Unstaking Initiated",
      description: "Attempting to unstake your HELIX tokens.",
    });
    // In a real implementation, this would connect to the smart contract
  };

  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-purple-100">Stake HELIX</h2>
      
      <Card className="bg-purple-900/20 border-purple-700">
        <CardHeader>
          <CardTitle className="text-purple-100">Staking Portal</CardTitle>
          <CardDescription className="text-purple-200/70">
            Stake your HELIX tokens to earn rewards and participate in governance
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-purple-100">Stake Tokens</h3>
              <div className="flex space-x-4">
                <Input
                  type="number"
                  placeholder="Amount to stake"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                  className="bg-purple-900/30 border-purple-700 text-purple-100"
                />
                <Button
                  onClick={handleStake}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  <LockIcon className="w-4 h-4 mr-2" />
                  Stake
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-purple-100">Your Stakes</h3>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-purple-200/70">Currently Staked</p>
                  <p className="text-2xl font-bold text-purple-100">0.00 HELIX</p>
                </div>
                <Button
                  onClick={handleUnstake}
                  variant="outline"
                  className="border-purple-700 text-purple-100 hover:bg-purple-800/30"
                >
                  <UnlockIcon className="w-4 h-4 mr-2" />
                  Unstake
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-purple-900/30 rounded-lg">
            <h4 className="text-sm font-semibold text-purple-100 mb-2">Staking Benefits</h4>
            <ul className="text-sm text-purple-200/70 space-y-1">
              <li>• Earn rewards from network fees</li>
              <li>• Participate in governance decisions</li>
              <li>• Access premium platform features</li>
              <li>• Support network security</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
