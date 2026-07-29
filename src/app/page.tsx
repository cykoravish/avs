import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* Next sections (About, Project Highlights, Amenities, Location,
            Track Record, Gallery, Contact) will be added one at a time. */}
      </main>
    </>
  );
}
