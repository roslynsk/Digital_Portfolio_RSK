import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Resets scroll to the top on every route change.
// React Router preserves scroll position by default, which meant opening a
// project card kept the previous page's scroll offset instead of showing the
// top of the new page.
const ScrollToTop = (): null => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
