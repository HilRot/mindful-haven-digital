import { ASSETS } from "@/data/site";

interface Props {
  eyebrow?: string;
  title: string;
  intro?: string;
  index?: string; // np. "02"
}

const PageHeader = ({ eyebrow, title, intro, index }: Props) => (
  <section className="relative overflow-hidden bg-gradient-hero border-b border-border/60">
    <div className="pointer-events-none absolute -right-32 -top-20 h-[420px] w-[420px] rounded-full bg-primary/[0.08] blur-3xl animate-blob" aria-hidden />
    <div className="container-prose relative pb-24 pt-12 md:pb-32 md:pt-16">
      <div className="flex items-start justify-between gap-8">
        <div className="max-w-3xl">
          {eyebrow && (
            <div className="flex items-center gap-4 animate-fade-in">
              <span className="h-px w-10 bg-primary" />
              <p className="eyebrow !tracking-[0.3em]">{eyebrow}</p>
            </div>
          )}
          <h1 className="mt-8 font-display text-4xl font-extralight leading-[1.02] tracking-tight md:text-6xl lg:text-7xl animate-fade-up">
            {title.split(" ").slice(0, -2).join(" ")}{" "}
            <span className="text-primary" style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontWeight: 300 }}>
              {title.split(" ").slice(-2).join(" ")}
            </span>
          </h1>
          {intro && (
            <p
              className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg animate-fade-up"
              style={{ animationDelay: "120ms" }}
            >
              {intro}
            </p>
          )}
        </div>
        <div className="hidden md:flex flex-col items-end gap-4 pt-2">
          <img src={ASSETS.leafMark} alt="" aria-hidden className="h-12 w-12 opacity-70" />
        </div>
      </div>
    </div>
  </section>
);

export default PageHeader;
