import Hero from "@/components/home/Hero";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/home/About"; 
import Skills from "@/components/home/Skills"
import Projects from "@/components/home/Projects"
import Experience from "@/components/home/Experience"
import Contact from "@/components/home/Contact"
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}