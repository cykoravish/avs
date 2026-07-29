import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* Next sections (Project Highlights, Amenities, Location,
            Track Record, Gallery, Contact) will be added one at a time. */}
      </main>
    </>
  );
}
