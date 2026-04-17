import { Link, useNavigate, useLocation } from "react-router-dom";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import KineticText from "@/components/KineticText";
import Marquee from "@/components/Marquee";
import { useParallax } from "@/hooks/useParallax";
import { ASSETS, PERSON, CONTACT, OBSZARY } from "@/data/site";

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const portraitRef = useParallax<HTMLDivElement>(0.06);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-soft">
        {/* Animowany ornament w tle */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div className="absolute -left-24 top-1/4 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl animate-blob" />
          <div className="absolute -right-32 bottom-0 h-[520px] w-[520px] rounded-full bg-primary/15 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
          <svg
            className="absolute -right-40 top-10 h-[640px] w-[640px] animate-spin-slow text-primary/20"
            viewBox="0 0 200 200"
            fill="none"
          >
            <circle cx="100" cy="100" r="98" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 4" />
            <circle cx="100" cy="100" r="78" stroke="currentColor" strokeWidth="0.3" />
            <circle cx="100" cy="100" r="58" stroke="currentColor" strokeWidth="0.3" strokeDasharray="1 3" />
          </svg>
        </div>

        <div className="container-prose relative grid items-center gap-14 py-20 md:grid-cols-12 md:gap-10 md:py-28">
          <div className="md:col-span-7 md:pr-8">
            <p className="eyebrow animate-fade-in">Gabinet psychologiczny</p>
            <h1 className="mt-6 font-display text-5xl font-light leading-[1.02] tracking-tight md:text-7xl animate-fade-up">
              {PERSON.name}
            </h1>

            {/* Kinetyczna typografia: słowo po słowie */}
            <h2 className="mt-8 max-w-3xl font-display text-2xl font-light leading-snug tracking-tight text-foreground/90 md:text-4xl lg:text-[2.75rem]">
              <KineticText
                text={PERSON.title}
                delayStart={400}
                staggerMs={120}
                splitBy="word"
              />
            </h2>

            <p
              className="mt-8 max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg animate-fade-up"
              style={{ animationDelay: "1400ms" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tworzę przestrzeń
              spokoju, w której można w bezpieczny sposób przyjrzeć się temu, co trudne —
              i odnaleźć własne zasoby.
            </p>
            <div
              className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up"
              style={{ animationDelay: "1600ms" }}
            >
              <button
                onClick={() => {
                  if (location.pathname !== "/") navigate("/#kontakt");
                  else document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all duration-500 hover:shadow-elegant hover:-translate-y-0.5"
              >
                Umów spotkanie
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </button>
              <Link to="/o-mnie" className="link-underline text-sm font-medium text-foreground/80">
                Poznaj mnie
              </Link>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative animate-scale-in">
              <div className="absolute -left-6 -top-6 h-full w-full rounded-sm bg-primary/10" />
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-primary/15 blur-2xl" />
              <div ref={portraitRef} className="will-change-transform">
                <img
                  src={ASSETS.heroPortrait}
                  alt={`Portret — ${PERSON.name}, psycholog`}
                  width={1024}
                  height={1280}
                  className="relative z-10 aspect-[4/5] w-full rounded-sm object-cover shadow-elegant"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE — wartości */}
      <Marquee items={["spokój", "uważność", "bezpieczeństwo", "zrozumienie", "obecność", "zaufanie"]} />

      {/* INTRO / O DZIAŁALNOŚCI */}
      <section className="container-narrow py-24 md:py-32">
        <Reveal>
          <p className="eyebrow">O gabinecie</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-6 font-display text-3xl font-light leading-tight tracking-tight md:text-5xl">
            Spokojne miejsce na rozmowę o tym,
            <br className="hidden md:block" /> co naprawdę ważne.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Pracuję z osobami dorosłymi,
            które doświadczają kryzysu, choroby przewlekłej, lęku, straty lub po prostu
            potrzebują uważnego wsparcia.
          </p>
        </Reveal>
      </section>

      {/* OBSZARY */}
      <section className="bg-gradient-soft border-y border-border/60">
        <div className="container-prose py-24 md:py-32">
          <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Reveal><p className="eyebrow">Obszary działania</p></Reveal>
              <Reveal delay={80}>
                <h2 className="mt-4 font-display text-3xl font-light leading-tight md:text-5xl">
                  W czym mogę pomóc
                </h2>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <Link to="/obszary" className="link-underline text-sm font-medium text-foreground/80">
                Zobacz wszystkie obszary →
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-2 lg:grid-cols-3">
            {OBSZARY.slice(0, 5).map((o, i) => (
              <Reveal key={o.title} delay={i * 80}>
                <article className="group flex h-full flex-col justify-between bg-background p-8 transition-colors duration-500 hover:bg-primary/5 md:p-10">
                  <div>
                    <span className="font-display text-xs font-medium tracking-[0.2em] text-primary">
                      0{i + 1}
                    </span>
                    <h3 className="mt-6 font-display text-xl font-medium leading-snug">
                      {o.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {o.short}
                    </p>
                  </div>
                  <ArrowRight className="mt-10 h-4 w-4 text-primary opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFEST */}
      <section className="relative overflow-hidden bg-background">
        <div className="container-prose py-32 md:py-44">
          <Reveal><p className="eyebrow">Manifest</p></Reveal>
          <div className="mt-10">
            <Reveal delay={80}>
              <p className="font-display text-3xl font-light leading-[1.15] tracking-tight md:text-6xl lg:text-[5rem]">
                Wierzę, że <em className="not-italic text-primary">rozmowa</em> potrafi
                więcej niż słowa.
                <br className="hidden md:block" />
                Że <em className="not-italic text-primary">cisza</em> bywa początkiem
                zrozumienia,
                <br className="hidden md:block" />
                a <em className="not-italic text-primary">obecność</em> — formą troski.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* O MNIE */}
      <section className="container-prose py-24 md:py-32">
        <div className="grid items-center gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="relative">
              <div className="absolute -right-5 -top-5 h-full w-full rounded-sm border border-primary/30" />
              <img
                src={ASSETS.aboutPortrait}
                alt="Portret psychologa"
                loading="lazy"
                width={1024}
                height={1280}
                className="relative z-10 aspect-[4/5] w-full rounded-sm object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="md:col-span-7 md:pl-10">
            <p className="eyebrow">O mnie</p>
            <h2 className="mt-6 font-display text-3xl font-light leading-tight tracking-tight md:text-5xl">
              Towarzyszę w drodze do zrozumienia siebie.
            </h2>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Pracuję w nurcie
              integracyjnym, łącząc rzetelność kliniczną z uważnością na to, co
              indywidualne.
            </p>
            <Link
              to="/o-mnie"
              className="mt-10 inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm font-medium text-foreground transition-all duration-500 hover:border-primary hover:text-primary"
            >
              Czytaj więcej
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="bg-foreground text-background scroll-mt-24">
        <div className="container-prose py-24 md:py-32">
          <Reveal><p className="eyebrow !text-primary-muted">Kontakt</p></Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 max-w-3xl font-display text-3xl font-light leading-tight md:text-5xl">
              Dziękuję, że chcesz się skontaktować. Odpiszę najszybciej, jak to możliwe.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-12 md:grid-cols-3">
            <Reveal delay={120}>
              <div>
                <Phone className="h-5 w-5 text-primary-muted" />
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-background/60">Telefon</p>
                <a href={CONTACT.phoneHref} className="mt-2 block font-display text-xl font-light hover:text-primary-muted transition-colors">
                  {CONTACT.phone}
                </a>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div>
                <Mail className="h-5 w-5 text-primary-muted" />
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-background/60">E-mail</p>
                <a href={CONTACT.emailHref} className="mt-2 block font-display text-xl font-light hover:text-primary-muted transition-colors break-all">
                  {CONTACT.email}
                </a>
              </div>
            </Reveal>
            <Reveal delay={280}>
              <div>
                <MapPin className="h-5 w-5 text-primary-muted" />
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-background/60">Gabinety</p>
                <Link to="/gabinet" className="mt-2 block font-display text-xl font-light hover:text-primary-muted transition-colors">
                  Warszawa · Kraków
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
