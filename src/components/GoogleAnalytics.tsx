import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Extend Window interface to include gtag
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
  }
}

export const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Only track if gtag is loaded (from index.html script)
    if (typeof window.gtag !== 'undefined') {
      // Send page view event to Google Analytics
      window.gtag('config', 'G-GQBQ2S2PJR', {
        page_path: location.pathname + location.search,
      });

      // Debug log in development (remove in production if desired)
      if (process.env.NODE_ENV === 'development') {
        console.log('GA Page View:', location.pathname + location.search);
      }
    }
  }, [location]); // Fires every time the route changes

  // This component doesn't render any UI
  return null;
};

