
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
  | 'skillGapIdentified';

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

// Analytics component for React usage
export const AnalyticsComponent = (): JSX.Element => {
  return <Analytics />;
};
