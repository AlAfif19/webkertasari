import { contact } from "@/data/contact";

export type ConsultationLead = {
  name: string;
  websiteType: string;
  packageName: string;
  budget: string;
  deadline: string;
  features: string;
};

export function buildConsultationMessage(lead: ConsultationLead): string {
  return [
    "Halo WebKertasari, saya ingin konsultasi pembuatan website.",
    "",
    `Nama: ${lead.name}`,
    `Jenis website: ${lead.websiteType}`,
    `Paket yang diminati: ${lead.packageName}`,
    `Budget: ${lead.budget}`,
    `Target selesai: ${lead.deadline}`,
    `Kebutuhan fitur: ${lead.features}`,
  ].join("\n");
}

export function buildWhatsAppUrl(
  message = "Halo WebKertasari, saya ingin konsultasi pembuatan website.",
): string {
  return `https://wa.me/${contact.phoneInternational}?text=${encodeURIComponent(message)}`;
}
