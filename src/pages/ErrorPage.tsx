
import React from 'react';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ErrorPage = () => {
  const error = useRouteError();
  
  const errorMessage = isRouteErrorResponse(error)
    ? error.statusText || error.data
    : error instanceof Error
    ? error.message
    : 'Unknown error occurred';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-helix-purple50 dark:from-gray-900 dark:to-helix-purple900">
      <div className="text-center px-6">
        <h1 className="text-7xl font-bold text-helix-purple mb-4 font-satoshi">Error</h1>
        <p className="text-2xl text-gray-700 dark:text-gray-300 mb-6">Oops! Something went wrong</p>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          {errorMessage}
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

export default ErrorPage;
