import { Link } from "react-router-dom";
import { Github, Twitter, MessagesSquare } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1F2C]/95 backdrop-blur-md border-t border-purple-900/30">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <div className="flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-br from-purple-600 to-blue-500 text-white font-bold">
                H
              </div>
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">HelixHub</span>
            </Link>
            <p className="mt-4 text-sm text-purple-200/70">
              Uniting academia, industry, and government through decentralized collaboration and blockchain innovation.
            </p>
          </div>

          {/* Links - First column */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-purple-300 uppercase tracking-wider">Platform</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/dashboard" className="text-base text-purple-200/70 hover:text-purple-100 transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/blockchain-explorer" className="text-base text-purple-200/70 hover:text-purple-100 transition-colors">
                  Explorer
                </Link>
              </li>
              <li>
                <Link to="/dao-governance" className="text-base text-purple-200/70 hover:text-purple-100 transition-colors">
                  Governance
                </Link>
              </li>
            </ul>
          </div>

          {/* Links - Second column */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-purple-300 uppercase tracking-wider">Stakeholders</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/academia" className="text-base text-purple-200/70 hover:text-purple-100 transition-colors">
                  Academia
                </Link>
              </li>
              <li>
                <Link to="/industry" className="text-base text-purple-200/70 hover:text-purple-100 transition-colors">
                  Industry
                </Link>
              </li>
              <li>
                <Link to="/government" className="text-base text-purple-200/70 hover:text-purple-100 transition-colors">
                  Government
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-purple-300 uppercase tracking-wider">Community</h3>
            <div className="mt-4 flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-purple-200/70 hover:text-purple-100">
                <Github size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-purple-200/70 hover:text-purple-100">
                <Twitter size={24} />
              </a>
              <a href="https://discord.gg/sxYscnTv" target="_blank" rel="noopener noreferrer" className="text-purple-200/70 hover:text-purple-100">
                <MessagesSquare size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-purple-900/30 pt-8">
          <p className="text-sm text-purple-200/50 text-center">
            &copy; {currentYear} HelixHub. Built with Ethereum technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
