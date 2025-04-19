
import { Analytics } from '@vercel/analytics/react';
import { track as vercelTrack } from '@vercel/analytics';

// Define allowed event names for type safety
export type EventName = 
  | 'appLoaded' 
  | 'pageView' 
  | 'buttonClick' 
  | 'formSubmission' 
  | 'simulationStarted' 
  | 'simulationStopped'
  | 'matchesReset'
  | 'settingsOpened'
  | 'contentExported'
  | 'dashboardRefreshed'
  | 'modelInteraction'
  | 'curriculumRecommendation'
  | 'skillGapIdentified'
  | 'appInitError'
  | 'voteImpactSimulation'
  | 'grantMatchRequested'
  | 'signalDaoVote'
  | 'strainIndexAlert'
  | 'feedbackSubmitted'
  | 'navigation'        // Added for navigation events
  | 'startMenuToggle'   // Added for start menu interactions
  | 'systemTrayClick'   // Added for system tray clicks
  | 'desktopInteraction'; // Added for desktop interactions

// Define event properties interface
export interface EventProperties {
  [key: string]: string | number | boolean | null | undefined;
}

// Track custom events with properties
export const trackEvent = (event: EventName, properties?: EventProperties): void => {
  try {
    console.log(`Analytics: ${event}`, properties);
    vercelTrack(event, properties);
  } catch (err) {
    console.error('Analytics error:', err);
  }
};

// For compatibility with the usage in the MatchmakingEngine component
export const trackMatchAttempt = (urgencyRate: number, result: string): void => {
  trackEvent('skillGapIdentified', { urgencyRate, result });
};

// Track vote impact simulation
export const trackVoteImpact = (proposalId: string, impact: number): void => {
  trackEvent('voteImpactSimulation', { proposalId, impact });
};

// Track grant match operations
export const trackGrantMatch = (category: string, amount: number): void => {
  trackEvent('grantMatchRequested', { category, amount });
};

// Analytics component for React usage
export const AnalyticsComponent = (): JSX.Element => {
  return <Analytics />;
};
