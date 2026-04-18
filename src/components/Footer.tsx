import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-gradient-soft">
      <div className="container-prose grid gap-12 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-sm font-semibold">
              LI
            </span>
            <span className="font-display text-base font-medium">Lorem Ipsum</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Gabinet psychologiczny. Spokój, dyskrecja, profesjonalne wsparcie.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Nawigacja</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-foreground/80 hover:text-primary transition-colors">Strona główna</Link></li>
            <li><Link to="/obszary" className="text-foreground/80 hover:text-primary transition-colors">Obszary działania</Link></li>
            <li><Link to="/gabinet" className="text-foreground/80 hover:text-primary transition-colors">Gabinet</Link></li>
            <li><Link to="/o-mnie" className="text-foreground/80 hover:text-primary transition-colors">O mnie</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Kontakt</p>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li><a href="tel:+48000000000" className="hover:text-primary transition-colors">+48 000 000 000</a></li>
            <li><a href="mailto:kontakt@example.com" className="hover:text-primary transition-colors">kontakt@example.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-prose flex flex-col items-start justify-between gap-2 py-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Lorem Ipsum. Wszelkie prawa zastrzeżone.</p>
          <p>Projekt minimalistyczny · Made with care</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
