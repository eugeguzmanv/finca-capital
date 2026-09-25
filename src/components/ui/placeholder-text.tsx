import { cn } from "@/lib/utils";

type PlaceholderTextProps = {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span" | "div";
};

export function PlaceholderText({
  children,
  className,
  as: Tag = "p",
}: PlaceholderTextProps) {
  return (
    <Tag className={cn("text-pretty text-base leading-7 text-ink/75 md:text-lg", className)}>
      {children}
    </Tag>
  );
}
