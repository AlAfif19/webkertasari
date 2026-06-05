import type { ChatMessage } from "@/types/chatbot";

export function ChatbotMessageList({
  messages,
}: {
  messages: ChatMessage[];
}) {
  return (
    <div
      role="log"
      aria-live="polite"
      className="flex max-h-56 flex-col gap-3 overflow-y-auto px-5 py-4"
    >
      {messages.map((message) => (
        <div
          key={message.id}
          className={
            message.role === "user"
              ? "ml-10 self-end rounded-2xl rounded-br-sm bg-emerald-600 px-4 py-3 text-sm text-white"
              : "mr-10 self-start rounded-2xl rounded-bl-sm bg-slate-100 px-4 py-3 text-sm leading-6 text-slate-700"
          }
        >
          {message.text}
        </div>
      ))}
    </div>
  );
}
