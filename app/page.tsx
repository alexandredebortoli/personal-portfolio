import Intro from "@/app/ui/intro";
import SectionDivider from "@/app/ui/section-divider";
import About from "@/app/ui/about";
import Projects from "@/app/ui/projects";
import Skills from "@/app/ui/skills";
import Experience from "@/app/ui/experience";
import Contact from "@/app/ui/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
