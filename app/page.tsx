import AboutEcosoc from "@/components/agenda/AboutEcosoc";
import Agenda from "@/components/agenda/Agenda";
import KeyTerms from "@/components/agenda/KeyTerms";
import Footer from "@/components/footer/Footer";
import RegisterSection from "@/components/footer/RegisterSection";
import Resources from "@/components/footer/Resources";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Secretariat from "@/components/secretariat/Secretariat";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--neutral-white)] text-[var(--dark-text)]">
      <Navbar />
      <main id="main-content">
        <Hero />
        <AboutEcosoc />
        <Agenda />
        <KeyTerms />
        <Secretariat />
        <Resources />
        <RegisterSection />
        <Footer />
      </main>
    </div>
  );
}
