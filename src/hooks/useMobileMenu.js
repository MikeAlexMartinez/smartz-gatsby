import { useState, useEffect } from "react";
// Undocumented dependency of gatsby
import { globalHistory } from '@reach/router'

function getWindowDimensions() {
  const {innerWidth: width, innerHeight: height} = window;
  return {
    width,
    height,
  };
}

export default function useMobileMenu(resetWidth) {
  const [mobileMenuIsVisible, setMobileMenu] = useState(false);

  useEffect(() => {
    return globalHistory.listen(({ action }) => {
      if (action === 'PUSH') setMobileMenu(false);
    });
  }, []);

  useEffect(() => {
    function handleResize() {
      const {width} = getWindowDimensions();
      if (width >= resetWidth) {
        setMobileMenu(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [resetWidth]);

  return [mobileMenuIsVisible, setMobileMenu];
}
