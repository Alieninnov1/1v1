
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import CollapseSignalsPanel from "@/components/blockchain/CollapseSignalsPanel";
import { DataScraper } from "@/components/ui/data-scraper";

const BlockchainExplorer = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          <div className="lg:col-span-2">
            <DataScraper />
          </div>
          <div className="lg:col-span-1">
            <CollapseSignalsPanel />
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default BlockchainExplorer;
