import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/motion/FadeIn";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  band?: "default" | "soft";
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  band = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "ds-section scroll-mt-24",
        band === "soft" && "bg-[var(--ds-canvas-soft)]",
        className,
      )}
    >
      <div className="ds-page">
        <FadeIn className="ds-section-header">
          {eyebrow ? <p className="ds-caption-uppercase mb-4">{eyebrow}</p> : null}
          <h2 className="ds-display-lg">{title}</h2>
          {description ? <p className="ds-body-md mt-5 max-w-2xl">{description}</p> : null}
        </FadeIn>
        <div>{children}</div>
      </div>
    </section>
  );
}
