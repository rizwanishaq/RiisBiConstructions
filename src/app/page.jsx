import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
}
