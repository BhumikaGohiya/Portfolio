import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import GetToKnowMe from "@/components/GetToKnowMe";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <GetToKnowMe />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
