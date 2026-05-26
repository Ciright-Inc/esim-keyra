import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  dark?: boolean;
  as?: "div" | "article" | "button";
  onClick?: () => void;
};

export function Card({
  children,
  className,
  hover = true,
  dark = false,
  as: Comp = "div",
  onClick,
}: CardProps) {
  return (
    <Comp
      className={cn(
        dark ? "ds-feature-card-dark" : "ds-feature-card",
        !hover && "is-static",
        onClick && "cursor-pointer text-left",
        className,
      )}
      onClick={onClick}
      type={Comp === "button" ? "button" : undefined}
    >
      {children}
    </Comp>
  );
}
