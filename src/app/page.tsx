import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ContactSection } from "@/components/sections/contact-section";
import { AnalyticsAiSection } from "@/components/sections/analytics-ai-section";
import { ArticlesSection } from "@/components/sections/articles-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { ServicesSection } from "@/components/sections/services-section";
import { WebsiteTypesSection } from "@/components/sections/website-types-section";

export default function HomePage() {
  return (
    <ChatbotProvider>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WebsiteTypesSection />
        <PricingSection />
        <AnalyticsAiSection />
        <PortfolioSection />
        <ArticlesSection />
        <ReviewsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingActions />
    </ChatbotProvider>
  );
}
import { ChatbotProvider } from "@/components/chatbot/chatbot-provider";
import { FloatingActions } from "@/components/floating-actions";
