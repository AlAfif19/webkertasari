import { Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { WhatsAppLink } from "@/components/shared/whatsapp-link";
import { contact } from "@/data/contact";

export function ContactSection() {
  return (
    <section id="kontak" className="section-space">
      <div className="site-container grid gap-10 rounded-3xl bg-slate-950 p-8 text-white sm:p-12 lg:grid-cols-[1fr_.8fr]">
        <div>
          <SectionHeading
            eyebrow="Konsultasi Gratis"
            title="Siap Membuat Website Anda?"
            description="Ceritakan usaha, organisasi, atau kebutuhan data Anda. Kami bantu memilih struktur dan paket yang tepat."
            align="left"
            inverse
          />
          <WhatsAppLink
            label="Chat WhatsApp Sekarang"
            className="mt-8"
          />
        </div>
        <div className="grid gap-4">
          <a
            href={`tel:${contact.phoneDisplay}`}
            className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 hover:bg-white/15"
          >
            <Phone className="size-5 text-cyan-300" />
            {contact.phoneDisplay}
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 hover:bg-white/15"
          >
            <Mail className="size-5 text-cyan-300" />
            {contact.email}
          </a>
          <div className="flex items-start gap-4 rounded-2xl bg-white/10 p-4">
            <MapPin className="mt-0.5 size-5 shrink-0 text-cyan-300" />
            <div>
              <p>{contact.location}</p>
              <p className="mt-2 text-sm text-slate-300">
                {contact.serviceAreas.join(" · ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
