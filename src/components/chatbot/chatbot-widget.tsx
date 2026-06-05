"use client";

import { Bot, Send } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { ChatbotLeadForm } from "./chatbot-lead-form";
import { ChatbotMessageList } from "./chatbot-message-list";
import { ChatbotQuickReplies } from "./chatbot-quick-replies";
import { ChatbotSummary } from "./chatbot-summary";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/shared/whatsapp-link";
import {
  budgetChoices,
  chatbotResponses,
  deadlineChoices,
  serviceChoices,
} from "@/data/chatbot";
import { matchIntent, recommendPackage } from "@/lib/chatbot";
import {
  clearChatbotSession,
  loadChatbotSession,
  saveChatbotSession,
} from "@/lib/storage";
import type {
  ChatIntent,
  ChatMessage,
  ChatbotLead,
  ChatbotSession,
  ChatStep,
} from "@/types/chatbot";

const emptyLead: ChatbotLead = {
  name: "",
  websiteType: "",
  packageName: "",
  budget: "",
  deadline: "",
  features: "",
};

const initialSession: ChatbotSession = {
  version: 1,
  step: "welcome",
  lead: emptyLead,
  messages: [
    {
      id: "welcome",
      role: "bot",
      text: "Halo, saya asisten WebKertasari. Saya bisa membantu memilih layanan dan paket yang sesuai.",
    },
  ],
};

function message(role: "bot" | "user", text: string): ChatMessage {
  return {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    role,
    text,
  };
}

export function ChatbotWidget({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [session, setSession] = useState<ChatbotSession>(() => {
    if (typeof window === "undefined") return initialSession;
    return loadChatbotSession() ?? initialSession;
  });
  const [question, setQuestion] = useState("");

  useEffect(() => {
    saveChatbotSession(session);
  }, [session]);

  const selectedIntent = useMemo(
    () =>
      serviceChoices.find((choice) => choice.label === session.lead.websiteType)
        ?.intent,
    [session.lead.websiteType],
  );

  function updateStep(
    step: ChatStep,
    leadChanges: Partial<ChatbotLead>,
    userText: string,
    botText: string,
  ) {
    setSession((current) => ({
      ...current,
      step,
      lead: { ...current.lead, ...leadChanges },
      messages: [
        ...current.messages,
        message("user", userText),
        message("bot", botText),
      ],
    }));
  }

  function chooseService(label: string) {
    const intent = serviceChoices.find((choice) => choice.label === label)
      ?.intent as Exclude<ChatIntent, "unknown">;
    const packageName = recommendPackage(intent);
    updateStep(
      "recommendation",
      { websiteType: label, packageName },
      label,
      `${chatbotResponses[intent]} Rekomendasi awal: paket ${packageName}.`,
    );
  }

  function askQuestion() {
    const cleaned = question.trim();
    if (!cleaned) return;
    const intent = matchIntent(cleaned);
    setQuestion("");
    setSession((current) => ({
      ...current,
      messages: [
        ...current.messages,
        message("user", cleaned),
        message(
          "bot",
          intent === "unknown"
            ? "Maaf, saya belum memahami pertanyaan itu. Pilih menu utama atau lanjutkan konsultasi melalui WhatsApp."
            : chatbotResponses[intent],
        ),
      ],
    }));
  }

  function reset() {
    clearChatbotSession();
    setSession(initialSession);
    setQuestion("");
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <div className="border-b border-slate-200 bg-slate-950 px-5 py-4 text-white">
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-full bg-emerald-500">
              <Bot className="size-5" />
            </div>
            <div>
              <DialogTitle>Asisten WebKertasari</DialogTitle>
              <DialogDescription className="text-sm text-slate-300">
                Rule-based · data tetap di browser Anda
              </DialogDescription>
            </div>
          </div>
        </div>

        <ChatbotMessageList messages={session.messages} />

        <div className="border-t border-slate-200 p-5">
          {(session.step === "welcome" || session.step === "service") && (
            <div className="grid gap-4">
              <ChatbotQuickReplies
                choices={serviceChoices.map((choice) => choice.label)}
                onChoose={chooseService}
              />
              <form
                className="flex gap-2"
                onSubmit={(event) => {
                  event.preventDefault();
                  askQuestion();
                }}
              >
                <label htmlFor="chat-question" className="sr-only">
                  Tulis pertanyaan
                </label>
                <input
                  id="chat-question"
                  value={question}
                  onChange={(event) => setQuestion(event.target.value)}
                  placeholder="Tulis pertanyaan..."
                  className="min-w-0 flex-1 rounded-xl border border-slate-300 px-3 text-sm"
                />
                <Button type="submit" size="icon" aria-label="Kirim">
                  <Send className="size-4" />
                </Button>
              </form>
              <WhatsAppLink
                label="Lanjut ke WhatsApp"
                variant="ghost"
                className="w-full"
              />
            </div>
          )}

          {session.step === "recommendation" && (
            <div className="grid gap-3">
              <p className="text-sm text-slate-600">
                Paket rekomendasi:{" "}
                <strong>{session.lead.packageName}</strong>
              </p>
              <Button
                type="button"
                onClick={() =>
                  setSession((current) => ({ ...current, step: "name" }))
                }
              >
                Mulai konsultasi
              </Button>
              <Button type="button" variant="ghost" onClick={reset}>
                Pilih layanan lain
              </Button>
            </div>
          )}

          {session.step === "name" && (
            <ChatbotLeadForm
              label="Nama Anda"
              buttonLabel="Lanjut"
              onSubmit={(value) =>
                updateStep(
                  "budget",
                  { name: value },
                  value,
                  "Berapa kisaran budget yang sudah disiapkan?",
                )
              }
            />
          )}

          {session.step === "budget" && (
            <ChatbotQuickReplies
              choices={budgetChoices}
              onChoose={(value) =>
                updateStep(
                  "deadline",
                  { budget: value },
                  value,
                  "Kapan website diharapkan selesai?",
                )
              }
            />
          )}

          {session.step === "deadline" && (
            <ChatbotQuickReplies
              choices={deadlineChoices}
              onChoose={(value) =>
                updateStep(
                  "features",
                  { deadline: value },
                  value,
                  "Tuliskan fitur utama yang dibutuhkan.",
                )
              }
            />
          )}

          {session.step === "features" && (
            <ChatbotLeadForm
              label="Kebutuhan fitur"
              buttonLabel="Lihat ringkasan"
              multiline
              onSubmit={(value) =>
                updateStep(
                  "summary",
                  { features: value },
                  value,
                  "Ringkasan konsultasi sudah siap dikirim.",
                )
              }
            />
          )}

          {session.step === "summary" && (
            <ChatbotSummary lead={session.lead} onReset={reset} />
          )}

          {selectedIntent && session.step !== "summary" ? (
            <p className="mt-3 text-center text-xs text-slate-400">
              Pilihan tersimpan sementara di browser.
            </p>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
