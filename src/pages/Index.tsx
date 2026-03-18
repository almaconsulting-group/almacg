import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import CEO from "@/components/CEO";
import { Contact, Footer } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <CEO />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
