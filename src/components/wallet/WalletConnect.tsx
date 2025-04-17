
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Wallet } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const WalletConnect = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [address, setAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    setIsConnecting(true);
    try {
      // For demo purposes, simulate wallet connection
      // In a real app, you would use ethers.js or web3.js here
      await new Promise(resolve => setTimeout(resolve, 1000));
      const mockAddress = "0x" + Math.random().toString(16).slice(2, 42);
      setAddress(mockAddress);
      toast({
        title: "Wallet Connected",
        description: `Connected to ${mockAddress.slice(0, 6)}...${mockAddress.slice(-4)}`,
      });
    } catch (error) {
      toast({
        title: "Connection Failed",
        description: "Could not connect to wallet",
        variant: "destructive",
      });
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setAddress(null);
    toast({
      title: "Wallet Disconnected",
      description: "Your wallet has been disconnected",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {address ? (
        <Button
          variant="outline"
          className="bg-purple-900/20 border-purple-700 text-purple-100 hover:bg-purple-800/30 hover:text-purple-50"
          onClick={disconnectWallet}
        >
          <Wallet className="w-4 h-4 mr-2" />
          {address.slice(0, 6)}...{address.slice(-4)}
        </Button>
      ) : (
        <Button
          variant="outline"
          className="bg-purple-900/20 border-purple-700 text-purple-100 hover:bg-purple-800/30 hover:text-purple-50"
          onClick={connectWallet}
          disabled={isConnecting}
        >
          <Wallet className="w-4 h-4 mr-2" />
          {isConnecting ? "Connecting..." : "Connect Wallet"}
        </Button>
      )}
    </motion.div>
  );
};

export default WalletConnect;
