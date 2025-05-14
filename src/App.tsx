
import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";

// Pages
import Index from "@/pages/Index";
import Dashboard from "@/pages/Dashboard";
import Academia from "@/pages/Academia";
import Industry from "@/pages/Industry";
import Government from "@/pages/Government";
import PolicySandbox from "@/pages/PolicySandbox";
import TokenEconomics from "@/pages/TokenEconomics";
import DaoGovernance from "@/pages/DaoGovernance";
import BlockchainExplorer from "@/pages/BlockchainExplorer";
import Discussions from "@/pages/Discussions";
import Knowledge from "@/pages/Knowledge";
import KnowledgeBasePage from "@/pages/KnowledgeBase";
import NotFound from "@/pages/NotFound";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60000,
      retry: 1
    },
  },
});

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => setLoading(false), 2000);
    
    // Performance optimization - preload critical resources
    const preloadAssets = ['/logo.png'];
    preloadAssets.forEach(asset => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = asset;
      link.as = asset.endsWith('.png') || asset.endsWith('.jpg') ? 'image' : 'script';
      document.head.appendChild(link);
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <BrowserRouter>
          <Analytics />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/academia" element={<Academia />} />
            <Route path="/industry" element={<Industry />} />
            <Route path="/government" element={<Government />} />
            <Route path="/policy-sandbox" element={<PolicySandbox />} />
            <Route path="/token-economics" element={<TokenEconomics />} />
            <Route path="/dao-governance" element={<DaoGovernance />} />
            <Route path="/blockchain-explorer" element={<BlockchainExplorer />} />
            <Route path="/discussions" element={<Discussions />} />
            <Route path="/knowledge" element={<Knowledge />} />
            <Route path="/knowledge-base" element={<KnowledgeBasePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
