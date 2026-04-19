import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { OBSZARY } from "@/data/site";

const Obszary = () => {
  return (
    <>
      <PageHeader
        eyebrow="Obszary działania"
        title="Tematy z którymi pracuję."
        intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Każdy proces dostosowuję do indywidualnej sytuacji i potrzeb."
        index="01"
      />

      <section className="container-prose py-24 md:py-32">
        <div className="space-y-px">
          {OBSZARY.map((o, i) => (
            <Reveal key={o.title} delay={i * 60}>
              <article className="grid gap-6 border-t border-border py-10 lg:grid-cols-12 lg:gap-10 lg:py-16 last:border-b">
                <div className="lg:col-span-4">
                  <span className="font-display text-xs font-medium tracking-[0.25em] text-primary">
                    0{i + 1}
                  </span>
                  <h2 className="mt-3 font-display text-2xl font-light leading-snug md:text-3xl">
                    {o.title}
                  </h2>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                    {o.long}
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                    {o.short}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
};

export default Obszary;
