import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      {/* Temporary sections */}
      <section id="destinations" className="h-20" />
      <section id="packages" className="h-20" />
      <section id="about" className="h-20" />
      <section id="contact" className="h-20" />
    </main>
  );
}

export default Home;
