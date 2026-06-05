"use client";

import { useEffect, useState } from "react";
import { ChatbotWidget } from "./chatbot-widget";

export function ChatbotProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openChatbot = () => setOpen(true);
    window.addEventListener("webkertasari:open-chatbot", openChatbot);
    return () =>
      window.removeEventListener("webkertasari:open-chatbot", openChatbot);
  }, []);

  return (
    <>
      {children}
      <ChatbotWidget open={open} onOpenChange={setOpen} />
    </>
  );
}
