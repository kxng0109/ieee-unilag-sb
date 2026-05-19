"use client";
import { EventsSection } from "../components/upcoming-events/EventsSection";
import { Footer } from "@/components/footer";
import { NewsletterSection } from "@/components/newsletter-section";
import Stats from "@/components/Stats";
import WWA from "@/components/WWA";
import Spotlight from "@/components/spotlight";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import  * as React  from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen items-center justify-center font-sans">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <main 
      inert = {menuOpen ? true : undefined}
      className="">
        <Hero />
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
