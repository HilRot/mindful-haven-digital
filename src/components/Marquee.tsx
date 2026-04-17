import { cn } from "@/lib/utils";

interface Props {
  items: string[];
  className?: string;
}

const Marquee = ({ items, className }: Props) => {
  const loop = [...items, ...items, ...items];
  return (
    <div
      className={cn(
        "relative flex overflow-hidden border-y border-border/60 bg-background py-8",
        className
      )}
    >
      <div className="flex shrink-0 animate-marquee items-center gap-16 pr-16">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-16">
            <span className="font-display text-3xl font-light tracking-tight text-foreground/80 md:text-5xl">
              {item}
            </span>
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
          </div>
        ))}
      </div>
      <div
        className="absolute left-0 top-0 flex h-full shrink-0 animate-marquee items-center gap-16 pr-16"
        aria-hidden
      >
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-16">
            <span className="font-display text-3xl font-light tracking-tight text-foreground/80 md:text-5xl">
              {item}
            </span>
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
