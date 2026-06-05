import { MessageCircle } from "lucide-react";
import type { ComponentProps } from "react";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type Props = {
  message?: string;
  label: string;
  variant?: ComponentProps<typeof Button>["variant"];
  className?: string;
};

export function WhatsAppLink({
  message,
  label,
  variant = "default",
  className,
}: Props) {
  return (
    <Button asChild variant={variant} className={className}>
      <a href={buildWhatsAppUrl(message)} target="_blank" rel="noreferrer">
        <MessageCircle className="size-4" aria-hidden="true" />
        {label}
      </a>
    </Button>
  );
}
