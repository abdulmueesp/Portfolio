"use client";
import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Header from "@/components/header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="min-h-screen bg-[#F3F4F6]">
        <Header />
        <Banner />
        <About />
        <Skills />
        <Projects />
        <Contact />

        {/* Additional sections */}

      </div>
    </main>
  );
}
