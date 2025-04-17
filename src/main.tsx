
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Add page transition class for smoother loading
document.documentElement.classList.add('page-transition');

// Set up blockchain theme configuration
document.documentElement.classList.add('ethereum-theme');
document.body.classList.add('bg-dark');

// Performance optimization for touch devices
if ('ontouchstart' in window) {
  document.documentElement.classList.add('touch-device');
}

// Create and mount the root component with error boundary
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  
  // Enable faster click response on mobile
  if ('ontouchstart' in window) {
    rootElement.addEventListener('touchstart', () => {}, {passive: true});
  }
  
  // Remove transition class after mount
  root.render(<App />);
  setTimeout(() => {
    document.documentElement.classList.remove('page-transition');
  }, 300);
}
