import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Check both React Router's location.hash and window.location.hash
    // When navigating from another page, window.location.hash is more reliable
    const hasHash = window.location.hash && window.location.hash.length > 1;
    
    // Only scroll to top if there's no hash in the URL
    // If there's a hash, let the page handle the scroll to that section
    if (!hasHash) {
      // Scroll to top immediately
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });

      // Also set a timeout to ensure it scrolls even if content loads after
      const timeoutId = setTimeout(() => {
        // Double-check hash hasn't been added in the meantime
        const stillNoHash = !window.location.hash || window.location.hash.length <= 1;
        if (stillNoHash) {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
          });
        }
      }, 0);

      return () => clearTimeout(timeoutId);
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;
