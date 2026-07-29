import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectHighlights from "@/components/ProjectHighlights";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProjectHighlights />
        {/* Next sections (Amenities, Location, Track Record, Gallery, Contact)
            will be added one at a time. */}
      </main>
    </>
  );
}
