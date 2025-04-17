
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <div className="flex items-center justify-center h-10 w-10 rounded-md bg-helix-purple text-white font-bold">
                H
              </div>
              <span className="ml-2 text-xl font-bold text-helix-purple font-satoshi">HelixHub</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              Uniting academia, industry, and government to shape the future of education and workforce development.
            </p>
          </div>

          {/* Links - First column */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">Platform</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/dashboard" className="text-base text-gray-600 dark:text-gray-300 hover:text-helix-purple dark:hover:text-helix-purple300 transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/discussions" className="text-base text-gray-600 dark:text-gray-300 hover:text-helix-purple dark:hover:text-helix-purple300 transition-colors">
                  Discussions
                </Link>
              </li>
              <li>
                <Link to="/ai-recommendations" className="text-base text-gray-600 dark:text-gray-300 hover:text-helix-purple dark:hover:text-helix-purple300 transition-colors">
                  AI Recommendations
                </Link>
              </li>
            </ul>
          </div>

          {/* Links - Second column */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">Stakeholders</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/academia" className="text-base text-gray-600 dark:text-gray-300 hover:text-helix-purple dark:hover:text-helix-purple300 transition-colors">
                  Academia
                </Link>
              </li>
              <li>
                <Link to="/industry" className="text-base text-gray-600 dark:text-gray-300 hover:text-helix-purple dark:hover:text-helix-purple300 transition-colors">
                  Industry
                </Link>
              </li>
              <li>
                <Link to="/government" className="text-base text-gray-600 dark:text-gray-300 hover:text-helix-purple dark:hover:text-helix-purple300 transition-colors">
                  Government
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact/Legal */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/privacy" className="text-base text-gray-600 dark:text-gray-300 hover:text-helix-purple dark:hover:text-helix-purple300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-base text-gray-600 dark:text-gray-300 hover:text-helix-purple dark:hover:text-helix-purple300 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-base text-gray-600 dark:text-gray-300 hover:text-helix-purple dark:hover:text-helix-purple300 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            &copy; {currentYear} HelixHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
