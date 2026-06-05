import { Badge } from "@/components/ui/badge";

type Props = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
  inverse?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  inverse = false,
}: Props) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      }
    >
      {eyebrow ? <Badge variant="secondary">{eyebrow}</Badge> : null}
      <h2
        className={`mt-4 text-3xl font-bold tracking-tight sm:text-4xl ${inverse ? "text-white" : "text-slate-950"}`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-base leading-7 ${inverse ? "text-slate-300" : "text-slate-600"}`}
      >
        {description}
      </p>
    </div>
  );
}
