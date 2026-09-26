import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destinations from "../components/Destinations";
import Packages from "../components/Packages";

function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Destinations />
      <Packages />
      {/* Temporary sections */}

      <section id="about" className="h-20" />
      <section id="contact" className="h-20" />
    </main>
  );
}

export default Home;
