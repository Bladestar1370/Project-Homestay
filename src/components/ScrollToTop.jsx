// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Most reliable for v6 (scrolls the root scrolling element)
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'   // 'smooth' if you want animated scroll
    });

    // Alternative (also works in most cases):
    // window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}