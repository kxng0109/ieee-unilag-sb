import { Footer } from "@/components/footer";
import { NewsletterSection } from "@/components/newsletter-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <main className="flex-1">
        {/* Placeholder for page content; newsletter and footer sit at bottom */}
        <div className="min-h-[40vh] bg-white px-6 py-16" />
        <NewsletterSection />
        <Footer />
      </main>
    </div>
  );
}
