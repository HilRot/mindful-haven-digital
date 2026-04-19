import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Handles scroll behavior on route changes:
 * - If URL has a hash (#kontakt), scroll to that element.
 * - Otherwise scroll to top.
 * Using useLayoutEffect-like timing via rAF to ensure the target exists after render.
 */
const ScrollToTop = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait for DOM to render the target
      const id = hash.replace("#", "");
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo({ top: 0, left: 0 });
        }
      });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [pathname, hash, key]);

  return null;
};

export default ScrollToTop;
