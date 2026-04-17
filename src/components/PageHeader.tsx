interface Props {
  eyebrow?: string;
  title: string;
  intro?: string;
}

const PageHeader = ({ eyebrow, title, intro }: Props) => (
  <section className="bg-gradient-soft border-b border-border/60">
    <div className="container-prose py-24 md:py-32">
      {eyebrow && <p className="eyebrow animate-fade-in">{eyebrow}</p>}
      <h1 className="mt-4 max-w-3xl font-display text-4xl font-light leading-[1.05] tracking-tight md:text-6xl animate-fade-up">
        {title}
      </h1>
      {intro && (
        <p
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg animate-fade-up"
          style={{ animationDelay: "120ms" }}
        >
          {intro}
        </p>
      )}
    </div>
  </section>
);

export default PageHeader;
