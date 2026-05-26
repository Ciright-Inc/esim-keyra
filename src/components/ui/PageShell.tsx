import { cn } from "@/lib/utils";

type PageShellProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export function PageShell({
  eyebrow,
  title,
  description,
  children,
  className,
}: PageShellProps) {
  return (
    <div className={cn("ds-section pt-28", className)}>
      <div className="ds-page mx-auto max-w-3xl text-center">
        {eyebrow ? <p className="ds-caption-uppercase mb-4">{eyebrow}</p> : null}
        <h1 className="ds-display-xl">{title}</h1>
        {description ? <p className="ds-body-md mx-auto mt-4 max-w-lg">{description}</p> : null}
      </div>
      <div className="ds-page mt-14">{children}</div>
    </div>
  );
}
