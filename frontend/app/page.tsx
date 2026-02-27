import { EventsSection } from "../components/upcoming-events/EventsSection";
import { Footer } from "@/components/footer";
import { NewsletterSection } from "@/components/newsletter-section";
import Stats from "@/components/Stats";
import WWA from "@/components/WWA";
import Spotlight from "@/components/spotlight";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <div className="min-h-screen items-center justify-center">
      <main className="">
        <Stats />
        <WWA />
        <EventsSection />
        <Spotlight />
        <NewsletterSection />
        <Footer />
      </main>
    </div>
  );
}
