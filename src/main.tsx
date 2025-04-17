
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Set up blockchain theme configuration
document.documentElement.classList.add('ethereum-theme');
document.body.classList.add('bg-dark');

createRoot(document.getElementById("root")!).render(<App />);
