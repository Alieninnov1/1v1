
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { trackEvent } from './utils/analytics.ts';

// Performance optimization with asynchronous loading
document.addEventListener('DOMContentLoaded', () => {
  const start = performance.now();

  // Add page transition class for smoother loading
  document.documentElement.classList.add('page-transition', 'ethereum-theme');
  document.body.classList.add('bg-dark');

  // Performance optimization for touch devices
  if ('ontouchstart' in window) {
    document.documentElement.classList.add('touch-device');
  }

  // Create and mount the root component
  const rootElement = document.getElementById("root");

  if (rootElement) {
    // Show loading indicator while the app is initializing
    const loadingPlaceholder = document.createElement('div');
    loadingPlaceholder.className = 'fixed inset-0 flex items-center justify-center bg-[#151823] text-white';
    loadingPlaceholder.innerHTML = `
      <div class="flex flex-col items-center">
        <div class="w-16 h-16 border-4 border-t-purple-600 border-r-transparent border-b-blue-600 border-l-transparent rounded-full animate-spin"></div>
        <p class="mt-4 font-medium">Loading HelixHub...</p>
      </div>
    `;
    
    // Only show placeholder if the app takes longer than 200ms to load
    const placeholderTimeout = setTimeout(() => {
      rootElement.appendChild(loadingPlaceholder);
    }, 200);
    
    // Enable faster click response on mobile
    if ('ontouchstart' in window) {
      rootElement.addEventListener('touchstart', () => {}, {passive: true});
    }
    
    // Initialize the React app with error handling
    try {
      const root = createRoot(rootElement);
      root.render(<App />);
      
      // Cleanup and performance logging
      setTimeout(() => {
        document.documentElement.classList.remove('page-transition');
        clearTimeout(placeholderTimeout);
        if (rootElement.contains(loadingPlaceholder)) {
          rootElement.removeChild(loadingPlaceholder);
        }
        const loadTime = Math.round(performance.now() - start);
        console.log(`App mounted in ${loadTime}ms`);
        
        // Track app load performance
        trackEvent('appLoaded', { 
          loadTime,
          isMobile: 'ontouchstart' in window,
          viewport: `${window.innerWidth}x${window.innerHeight}`
        });
      }, 300);
    } catch (error) {
      console.error('Failed to initialize app:', error);
      
      // Track app initialization error
      trackEvent('appInitError', { 
        error: String(error)
      });
      
      // Show error message if the app fails to load
      rootElement.innerHTML = `
        <div class="fixed inset-0 flex items-center justify-center bg-[#151823] text-white p-4">
          <div class="max-w-md text-center">
            <h2 class="text-xl font-bold text-red-400 mb-2">Something went wrong</h2>
            <p class="text-gray-300 mb-4">We're having trouble loading HelixHub. Please try refreshing the page.</p>
            <button 
              class="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md text-white"
              onclick="window.location.reload()"
            >
              Refresh Page
            </button>
          </div>
        </div>
      `;
    }
  }
});
