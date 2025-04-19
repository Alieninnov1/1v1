
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnalyticsComponent } from '@/utils/analytics';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Discussions from "./pages/Discussions";
import Industry from "./pages/Industry";
import Government from "./pages/Government";
import Academia from "./pages/Academia";
import Knowledge from "./pages/Knowledge";
import PolicySandbox from "./pages/PolicySandbox";
import DaoGovernance from "./pages/DaoGovernance";
import BlockchainExplorer from "./pages/BlockchainExplorer";
import TokenEconomics from "./pages/TokenEconomics";

// Create a client with default options optimized for performance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <SonnerToaster />
      <AnalyticsComponent />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/discussions" element={<Discussions />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/government" element={<Government />} />
          <Route path="/academia" element={<Academia />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/policy-sandbox" element={<PolicySandbox />} />
          <Route path="/dao-governance" element={<DaoGovernance />} />
          <Route path="/blockchain-explorer" element={<BlockchainExplorer />} />
          <Route path="/token-economics" element={<TokenEconomics />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
