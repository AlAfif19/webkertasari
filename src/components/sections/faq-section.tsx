import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/section-heading";
import { faq } from "@/data/faq";

export function FaqSection() {
  return (
    <section className="section-space section-muted">
      <div className="site-container">
        <SectionHeading
          eyebrow="FAQ"
          title="Pertanyaan Umum"
          description="Jawaban singkat sebelum Anda melanjutkan konsultasi melalui WhatsApp atau chatbot."
        />
        <Accordion
          type="single"
          collapsible
          className="mx-auto mt-10 max-w-3xl rounded-2xl border border-slate-200 bg-white px-6"
        >
          {faq.map((item, index) => (
            <AccordionItem key={item.question} value={`faq-${index + 1}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
