import { EventsSection } from "@/components/upcoming-events/EventsSection";
import { Footer } from "@/components/footer";
import { NewsletterSection } from "@/components/newsletter-section";
import Stats from "@/components/Stats";
import WWA from "@/components/WWA";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <main className="flex-1">
        <Stats />
        <WWA />
        <EventsSection />
        <NewsletterSection />
        <Footer />
      </main>
    </div>
  );
}
