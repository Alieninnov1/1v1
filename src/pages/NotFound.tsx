
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-helix-purple50 dark:from-gray-900 dark:to-helix-purple900">
      <div className="text-center px-6">
        <h1 className="text-7xl font-bold text-helix-purple mb-4 font-satoshi">404</h1>
        <p className="text-2xl text-gray-700 dark:text-gray-300 mb-6">Oops! Page not found</p>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          We couldn't find the page you were looking for. The page might have been moved, deleted, or never existed.
        </p>
        <Link to="/">
          <Button size="lg" className="button-hover">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
