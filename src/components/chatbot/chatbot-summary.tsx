import { WhatsAppLink } from "@/components/shared/whatsapp-link";
import { Button } from "@/components/ui/button";
import { buildConsultationMessage } from "@/lib/whatsapp";
import type { ChatbotLead } from "@/types/chatbot";

export function ChatbotSummary({
  lead,
  onReset,
}: {
  lead: ChatbotLead;
  onReset: () => void;
}) {
  const rows = [
    ["Nama", lead.name],
    ["Jenis website", lead.websiteType],
    ["Paket", lead.packageName],
    ["Budget", lead.budget],
    ["Target selesai", lead.deadline],
    ["Kebutuhan fitur", lead.features],
  ];

  return (
    <div className="grid gap-4">
      <dl className="grid gap-2 rounded-xl bg-slate-50 p-4 text-sm">
        {rows.map(([label, value]) => (
          <div key={label} className="grid grid-cols-[7rem_1fr] gap-2">
            <dt className="font-semibold text-slate-700">{label}</dt>
            <dd className="text-slate-600">{value}</dd>
          </div>
        ))}
      </dl>
      <WhatsAppLink
        label="Kirim Ringkasan ke WhatsApp"
        message={buildConsultationMessage(lead)}
        className="w-full"
      />
      <Button type="button" variant="ghost" onClick={onReset}>
        Mulai ulang
      </Button>
    </div>
  );
}
