import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Works } from "@/components/sections/Works";
import { About } from "@/components/sections/About";
import { Stats } from "@/components/sections/Stats";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Works />
      <About />
      <Stats />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
