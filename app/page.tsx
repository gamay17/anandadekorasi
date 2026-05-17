import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Catalog from "./components/Catalog"
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Catalog />
      <Contact />
      <Footer />
    </main>
  );
}