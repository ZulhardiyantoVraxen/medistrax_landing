import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PricingIntro from "@/components/PricingIntro";
import Pricing from "@/components/Pricing";
import AddOns from "@/components/AddOns";
import Features from "@/components/Features";
import Integration from "@/components/Integration";
import Solutions from "@/components/Solutions";
import WhyChoose from "@/components/WhyChoose";
import ComparisonTable from "@/components/ComparisonTable";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PricingIntro />
        <Pricing />
        <AddOns />
        <Features />
        <Integration />
        <Solutions />
        <WhyChoose />
        <ComparisonTable />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
