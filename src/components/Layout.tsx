import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ASSETS } from "@/data/site";

const Layout = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <div
        aria-hidden
        className="relative w-full overflow-hidden border-t border-border/60 bg-gradient-soft"
        style={{ height: "clamp(220px, 26vw, 340px)" }}
      >
        <img
          src={ASSETS.footerPlaceholder}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
