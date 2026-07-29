import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectHighlights from "@/components/ProjectHighlights";
import Amenities from "@/components/Amenities";
import Location from "@/components/Location";
import TrackRecord from "@/components/TrackRecord";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProjectHighlights />
        <Amenities />
        <Location />
        <TrackRecord />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
