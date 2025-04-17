
import { Layout } from "@/components/layout/Layout";
import { TokenOverview } from "@/components/token/TokenOverview";
import { TokenDistribution } from "@/components/token/TokenDistribution";
import { StakingInterface } from "@/components/token/StakingInterface";

const TokenEconomics = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        <TokenOverview />
        <TokenDistribution />
        <StakingInterface />
      </div>
    </Layout>
  );
};

export default TokenEconomics;
