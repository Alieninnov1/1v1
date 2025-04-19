
import { useState } from "react";
import { Wallet, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Transaction {
  id: string;
  amount: number;
  type: "funding" | "spending";
  description: string;
  date: string;
}

const MicroFundingWallet = () => {
  const [balance] = useState(500);
  const [transactions] = useState<Transaction[]>([
    {
      id: "1",
      amount: 500,
      type: "funding",
      description: "Initial MVP funding",
      date: new Date().toISOString(),
    }
  ]);

  return (
    <Card className="bg-black/40 backdrop-blur-sm border-purple-500/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-white">
          <Wallet className="h-5 w-5" />
          Innovation Wallet
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-3xl font-bold text-white">
            ${balance.toFixed(2)}
          </div>
          
          <div className="space-y-2">
            {transactions.map((tx) => (
              <motion.div
                key={tx.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center justify-between p-2 rounded-lg bg-purple-900/20"
              >
                <div className="flex items-center gap-2">
                  {tx.type === "funding" ? (
                    <ArrowUpRight className="h-4 w-4 text-green-400" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 text-red-400" />
                  )}
                  <span className="text-sm text-gray-300">{tx.description}</span>
                </div>
                <span className={`font-medium ${
                  tx.type === "funding" ? "text-green-400" : "text-red-400"
                }`}>
                  {tx.type === "funding" ? "+" : "-"}${tx.amount}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MicroFundingWallet;
