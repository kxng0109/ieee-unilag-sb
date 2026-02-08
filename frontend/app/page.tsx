import { EventsSection } from "../components/upcoming-events/EventsSection";
import Stats from "@/components/Stats";
import WWA from "@/components/WWA";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
export default function Home() {
  return (
    <div className="min-h-screen items-center justify-center">
      <Navbar />
      <main className="min-h-screen items-center justify-center">
        <Hero />
        <Stats />
        <WWA />
        <EventsSection />
      </main>
    </div>
  );
}
