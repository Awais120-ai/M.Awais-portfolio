import GlassScene from "@/components/GlassScene";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ApiPanel from "@/components/ApiPanel";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <GlassScene />
      <ScrollProgress />
      <div id="top" />
      <Navbar />
      <main>
        <Hero />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ApiPanel />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
