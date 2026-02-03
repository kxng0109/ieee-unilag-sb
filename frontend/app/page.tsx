import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* Other sections will be added by team members */}
      </main>
    </>
  );
}
