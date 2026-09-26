import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destinations from "../components/Destinations";
import Packages from "../components/Packages";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Destinations />
      <Packages />
      <About />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default Home;
