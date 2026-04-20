import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Strona główna" },
  { to: "/obszary", label: "Obszary działania" },
  { to: "/gabinet", label: "Gabinet" },
  { to: "/o-mnie", label: "O mnie" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  const goToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/#kontakt");
    } else {
      const el = document.getElementById("kontakt");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const goHome = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl"
          : "bg-background/0"
      )}
    >
      <div className="container-prose flex h-20 items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <img src={new URL("../assets/logo-placeholder.svg", import.meta.url).href} alt="Logo" className="h-12" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={l.to === "/" ? goHome : undefined}
              className={({ isActive }) =>
                cn(
                  "link-underline text-sm font-medium tracking-wide transition-colors",
                  isActive ? "text-primary" : "text-foreground/70 hover:text-foreground"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href="/#kontakt"
            onClick={goToContact}
            className="link-underline text-sm font-medium tracking-wide text-foreground/70 hover:text-foreground"
          >
            Kontakt
          </a>
        </nav>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden animate-fade-in">
          <nav className="container-prose flex flex-col gap-1 py-6">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={l.to === "/" ? goHome : undefined}
                className={({ isActive }) =>
                  cn(
                    "py-3 text-base font-medium",
                    isActive ? "text-primary" : "text-foreground/80"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href="/#kontakt"
              onClick={goToContact}
              className="py-3 text-base font-medium text-foreground/80"
            >
              Kontakt
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
