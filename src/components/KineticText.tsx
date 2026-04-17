import { cn } from "@/lib/utils";

interface Props {
  text: string;
  className?: string;
  wordClassName?: string;
  delayStart?: number;
  staggerMs?: number;
  splitBy?: "word" | "char";
}

const KineticText = ({
  text,
  className,
  wordClassName,
  delayStart = 0,
  staggerMs = 90,
  splitBy = "word",
}: Props) => {
  const parts = splitBy === "word" ? text.split(/(\s+)/) : Array.from(text);
  return (
    <span className={cn("inline-block", className)} aria-label={text}>
      {parts.map((p, i) => {
        if (/^\s+$/.test(p)) return <span key={i}>{p}</span>;
        return (
          <span
            key={i}
            className={cn("inline-block animate-fade-up opacity-0", wordClassName)}
            style={{
              animationDelay: `${delayStart + i * staggerMs}ms`,
              animationFillMode: "forwards",
            }}
            aria-hidden="true"
          >
            {p}
          </span>
        );
      })}
    </span>
  );
};

export default KineticText;
