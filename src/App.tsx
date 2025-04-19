
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Index from "@/pages/Index";
import ErrorPage from "@/pages/ErrorPage";
import Academia from "@/pages/Academia";
import Industry from "@/pages/Industry";
import Government from "@/pages/Government";
import Dashboard from "@/pages/Dashboard";
import Discussions from "@/pages/Discussions";
import Knowledge from "@/pages/Knowledge";
import PolicySandbox from "@/pages/PolicySandbox";
import TokenEconomics from "@/pages/TokenEconomics";
import DaoGovernance from "@/pages/DaoGovernance";
import BlockchainExplorer from "@/pages/BlockchainExplorer";
import NotFound from "@/pages/NotFound";
import Landing from "@/pages/Landing";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    errorElement: <ErrorPage />
  },
  {
    path: '/academia',
    element: <Academia />
  },
  {
    path: '/industry',
    element: <Industry />
  },
  {
    path: '/government',
    element: <Government />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/discussions',
    element: <Discussions />
  },
  {
    path: '/knowledge',
    element: <Knowledge />
  },
  {
    path: '/policy-sandbox',
    element: <PolicySandbox />
  },
  {
    path: '/token-economics',
    element: <TokenEconomics />
  },
  {
    path: '/dao-governance',
    element: <DaoGovernance />
  },
  {
    path: '/blockchain',
    element: <BlockchainExplorer />
  },
  {
    path: '/landing',
    element: <Landing />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

function App() {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
      </QueryClientProvider>
    </React.StrictMode>
  );
}

export default App;
