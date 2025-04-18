
import { track as vercelTrack } from '@vercel/analytics';

type EventName = 
  | 'matchCreated' 
  | 'matchSaved' 
  | 'simulationStarted' 
  | 'feedbackSubmitted'
  | 'matchAttempt';

interface EventProperties {
  [key: string]: string | number | boolean | undefined;
}

/**
 * Track custom events with Vercel Analytics
 * @param event The name of the event to track
 * @param properties Optional properties to include with the event
 */
export const trackEvent = (event: EventName, properties?: EventProperties) => {
  try {
    vercelTrack(event, properties);
    console.log(`Event tracked: ${event}`, properties);
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};

/**
 * Track a page view with Vercel Analytics
 * @param pageName The name of the page being viewed
 */
export const trackPageView = (pageName: string) => {
  trackEvent('page_view' as EventName, { pageName });
};

/**
 * Track a match attempt with Vercel Analytics
 * @param urgencyRate The urgency rate of the match attempt
 * @param result The result of the match attempt
 */
export const trackMatchAttempt = (urgencyRate: number, result: string) => {
  trackEvent('matchAttempt', {
    urgencyRate,
    result,
  });
};
