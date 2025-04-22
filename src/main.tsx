
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { trackEvent } from './utils/analytics';

// Performance optimization with asynchronous loading
document.addEventListener('DOMContentLoaded', () => {
  const start = performance.now();

  // Add page transition class for smoother loading
  document.documentElement.classList.add('page-transition', 'ethereum-theme');
  
  // Set body styles directly to avoid FOUC (Flash of Unstyled Content)
  document.body.style.backgroundColor = "#0f1221";
  document.body.style.color = "#f7f8fc";
  
  // Apply GPU acceleration optimization with proper TypeScript syntax
  document.documentElement.style.transform = 'translateZ(0)';
  // Use proper camelCase and type assertion for non-standard CSS properties
  (document.documentElement.style as any).backfaceVisibility = 'hidden';
  (document.documentElement.style as any).WebkitFontSmoothing = 'antialiased';

  // Performance optimization for touch devices
  if ('ontouchstart' in window) {
    document.documentElement.classList.add('touch-device');
  }

  // Create and mount the root component
  const rootElement = document.getElementById("root");

  if (rootElement) {
    // No need to create a loading placeholder - it causes flashing
    
    // Enable faster click response on mobile
    if ('ontouchstart' in window) {
      rootElement.addEventListener('touchstart', () => {}, {passive: true});
    }
    
    // Initialize the React app with error handling
    try {
      const root = createRoot(rootElement);
      root.render(<App />);
      
      // Performance logging
      window.requestAnimationFrame(() => {
        document.documentElement.classList.remove('page-transition');
        
        const loadTime = Math.round(performance.now() - start);
        console.log(`App mounted in ${loadTime}ms`);
        
        // Track app load performance
        trackEvent('appLoaded', { 
          loadTime,
          isMobile: 'ontouchstart' in window,
          viewport: `${window.innerWidth}x${window.innerHeight}`
        });
      });
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
