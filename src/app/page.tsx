import Hero from "@/components/Home/Hero";
import Stats from "@/components/Home/Stats/Stats";
import Features from "@/components/Home/Features";
import Cta from "@/components/Home/Cta";
import Footer from "@/components/Home/Footer/Footer";

export default function Home() {
  return (
    <div className="font-sans min-h-screen gap-16">
      <Hero />
      <main className="flex flex-col justify-center items-center">
        <Stats />
        <Features />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
