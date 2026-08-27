import { AboutSection } from "@/components/about-section";
import { EventsSection } from "@/components/events-section";
import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SlackCta } from "@/components/slack-cta";

export const revalidate = 1800;

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <EventsSection />
        <SlackCta />
        <AboutSection />
      </main>
      <SiteFooter />
    </>
  );
}
