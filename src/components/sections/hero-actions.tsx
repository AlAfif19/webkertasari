"use client";

import { Button } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/shared/whatsapp-link";

export function HeroActions() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <WhatsAppLink label="Konsultasi via WhatsApp" />
      <Button
        type="button"
        variant="outline"
        onClick={() =>
          window.dispatchEvent(new Event("webkertasari:open-chatbot"))
        }
      >
        Coba Chatbot
      </Button>
    </div>
  );
}
