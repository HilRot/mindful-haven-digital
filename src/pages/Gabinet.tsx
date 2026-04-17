import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { GABINETY, CENNIK } from "@/data/site";

const Gabinet = () => {
  return (
    <>
      <PageHeader
        eyebrow="Gabinet"
        title="Dwa miejsca, jedna atmosfera spokoju."
        intro="Lorem ipsum dolor sit amet. Spotykamy się w cichych, kameralnych przestrzeniach, w których łatwo się wyciszyć."
      />

      {/* Lokalizacje */}
      <section className="container-prose py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-2 md:gap-12">
          {GABINETY.map((g, i) => (
            <Reveal key={g.city} delay={i * 100}>
              <article className="group">
                <div className="overflow-hidden rounded-sm">
                  <img
                    src={g.image}
                    alt={`Gabinet — ${g.city}`}
                    loading="lazy"
                    width={1280}
                    height={896}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-6">
                  <p className="eyebrow">Lokalizacja 0{i + 1}</p>
                  <h2 className="mt-3 font-display text-2xl font-light md:text-3xl">{g.city}</h2>
                  <p className="mt-3 text-base text-foreground/80">{g.address}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{g.note}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Cennik */}
      <section className="bg-gradient-soft border-t border-border/60">
        <div className="container-prose py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal><p className="eyebrow">Cennik</p></Reveal>
              <Reveal delay={80}>
                <h2 className="mt-4 font-display text-3xl font-light leading-tight md:text-5xl">
                  Przejrzyste warunki współpracy.
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 text-sm text-muted-foreground">
                  Płatność gotówką, BLIK lub przelewem na koniec sesji.
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-8">
              <ul className="divide-y divide-border border-y border-border">
                {CENNIK.map((item, i) => (
                  <Reveal as="li" key={item.name} delay={i * 60}>
                    <div className="flex items-baseline justify-between gap-6 py-6">
                      <span className="font-display text-base font-medium md:text-lg">
                        {item.name}
                      </span>
                      <span className="font-display text-base text-primary md:text-lg whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gabinet;
