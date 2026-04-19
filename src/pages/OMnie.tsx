import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { ASSETS, EDUKACJA, EDUKACJA_INTRO } from "@/data/site";

const OMnie = () => {
  return (
    <>
      <PageHeader eyebrow="O mnie" title="Słucham zanim zacznę rozumieć." index="03" />

      <section className="container-prose py-24 md:py-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="absolute -left-5 -top-5 h-full w-full rounded-sm bg-primary/10" />
              <img
                src={ASSETS.aboutPortrait}
                alt="Portret psychologa"
                loading="lazy"
                width={1024}
                height={1280}
                className="relative z-10 aspect-[4/5] w-full rounded-sm object-cover shadow-soft"
              />
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7 lg:pl-8">
            <p className="text-base leading-relaxed text-foreground/85 md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
              in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Edukacja */}
      <section className="bg-gradient-soft border-t border-border/60">
        <div className="container-prose py-20 md:py-28 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 lg:items-start">
            <div className="lg:col-span-5">
              <Reveal><p className="eyebrow">Edukacja</p></Reveal>
              <Reveal delay={80}>
                <h2 className="mt-4 font-display text-3xl font-light leading-tight sm:text-4xl lg:text-5xl">
                  Wykształcenie{" "}
                  <span className="text-primary" style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}>
                    i ciągły rozwój.
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-[15px] lg:text-base">
                  {EDUKACJA_INTRO.slice(0, 850)}
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-8 flex items-center gap-3">
                  <img src={ASSETS.leafMark} alt="" aria-hidden className="h-8 w-8 opacity-70" />
                  <span className="text-xs uppercase tracking-[0.25em] text-primary">stała superwizja</span>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:sticky lg:top-28">
              <ol className="space-y-px">
                {EDUKACJA.map((e, i) => (
                  <Reveal as="li" key={e} delay={i * 60}>
                    <div className="flex gap-4 sm:gap-6 border-t border-border py-5 sm:py-6 md:py-7 lg:py-8 last:border-b">
                      <span className="font-display text-xs font-medium tracking-[0.2em] text-primary pt-1 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-base text-foreground/85 md:text-base lg:text-lg">{e}</p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OMnie;
