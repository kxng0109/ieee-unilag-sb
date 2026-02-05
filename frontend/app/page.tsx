import {EventsSection} from "../components/upcoming-events/EventsSection" ;
import Stats from "@/components/Stats";
import WWA from "@/components/WWA"
import Image from "next/image";
export default function Home() {
  return (
    <div className="min-h-screen items-center justify-center">
      <main className="">
        <Stats/>
        <WWA/>
        <EventsSection />
      </main>
    </div>
  );
}
