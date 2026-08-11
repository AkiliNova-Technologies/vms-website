import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HighlightsBar from "@/components/HighlightsBar";
import About from "@/components/About";
import Programs from "@/components/Programs";
import AdmissionCTA from "@/components/AdmissionCTA";
import Footer from "@/components/Footer";
import Anniversary from "@/components/Anniversary";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Anniversary />
        <HighlightsBar />
        <About />
        <Programs />
        <AdmissionCTA />
      </main>
      <Footer />
    </>
  );
}
