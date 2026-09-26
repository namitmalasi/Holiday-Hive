import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destinations from "../components/Destinations";
import Packages from "../components/Packages";
import About from "../components/About";

function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Destinations />
      <Packages />
      <About />
      {/* Temporary sections */}

      <section id="contact" className="h-20" />
    </main>
  );
}

export default Home;
