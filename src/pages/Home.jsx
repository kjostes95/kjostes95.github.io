import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { HeroSection } from "../components/HeroSection";
import { NavBar } from "../components/NavBar";
import { ProjectSection } from "../components/ProjectSection";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/theme-toggle";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* // theme togle */}
      <ThemeToggle />
      {/* // background effects  */}
      <StarBackground />
      {/* //Navbar  */}
      <NavBar />
      {/* //Main content */}
      <main>
        <HeroSection></HeroSection>
        <AboutSection></AboutSection>
        <SkillsSection></SkillsSection>
        <ProjectSection></ProjectSection>
        <ContactSection></ContactSection>
      </main>
      {/* //Footer */}
    </div>
  );
};
