import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destinations from "../components/Destinations";

function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Destinations />

      {/* Temporary sections */}

      <section id="packages" className="h-20" />
      <section id="about" className="h-20" />
      <section id="contact" className="h-20" />
    </main>
  );
}

export default Home;
