"use client";

import { Bot, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <button
        type="button"
        aria-label="Buka chatbot WebKertasari"
        onClick={() =>
          window.dispatchEvent(new Event("webkertasari:open-chatbot"))
        }
        className="grid size-12 place-items-center rounded-full bg-slate-900 text-white shadow-lg transition-transform hover:scale-105"
      >
        <Bot className="size-5" aria-hidden="true" />
      </button>
      <a
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat WhatsApp WebKertasari"
        className="grid size-14 place-items-center rounded-full bg-emerald-600 text-white shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="size-6" aria-hidden="true" />
      </a>
    </div>
  );
}
