
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
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
      <RouterProvider router={routes} />
    </React.StrictMode>
  );
}

export default App;
