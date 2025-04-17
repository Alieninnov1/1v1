
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleDollarSign, Coins, Shield } from "lucide-react";

export const TokenOverview = () => {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
          HELIX Token Economics
        </h1>
        <p className="text-lg text-purple-200/70">
          The HELIX token powers the HelixHub ecosystem, enabling decentralized collaboration between academia, industry, and government.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-purple-900/20 border-purple-700">
          <CardHeader>
            <CircleDollarSign className="w-8 h-8 text-purple-400" />
            <CardTitle className="text-purple-100">Governance</CardTitle>
            <CardDescription className="text-purple-200/70">
              Vote on proposals and shape the future of HelixHub
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-purple-200/70">
              1 HELIX = 1 vote in the DAO governance system
            </p>
          </CardContent>
        </Card>

        <Card className="bg-purple-900/20 border-purple-700">
          <CardHeader>
            <Coins className="w-8 h-8 text-purple-400" />
            <CardTitle className="text-purple-100">Utility</CardTitle>
            <CardDescription className="text-purple-200/70">
              Access premium features and services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-purple-200/70">
              Stake HELIX to unlock advanced platform capabilities
            </p>
          </CardContent>
        </Card>

        <Card className="bg-purple-900/20 border-purple-700">
          <CardHeader>
            <Shield className="w-8 h-8 text-purple-400" />
            <CardTitle className="text-purple-100">Security</CardTitle>
            <CardDescription className="text-purple-200/70">
              Secure the network through staking
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-purple-200/70">
              Earn rewards for contributing to network security
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
