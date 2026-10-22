import Navbar       from "./components/Navbar";
import Hero         from "./components/Hero";
import About        from "./components/About";
import Projects     from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact      from "./components/Contact";
import Footer       from "./components/Footer";

function App() {
  return (
    <div className="bg-[#0c0513] text-ice-silver-100 min-h-screen selection:bg-marigold-500/30 selection:text-marigold-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
