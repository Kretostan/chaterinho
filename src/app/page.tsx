import Hero from "@/components/Home/Hero";
import Stats from "@/components/Home/Stats";
import Features from "@/components/Home/Features";
import Cta from "@/components/Home/Cta";
import Footer from "@/components/Home/Footer";

export default function Home() {
  return (
    <div className="font-sans min-h-screen gap-16">
      <Hero />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Stats />
        <Features />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
