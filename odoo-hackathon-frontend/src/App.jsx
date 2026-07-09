import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import DashboardPreview from "./components/DashboardPreview";
import ButtonsShowcase from "./components/ButtonsShowcase";
import FormSection from "./components/FormSection";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DashboardPreview />
        <ButtonsShowcase />
        <FormSection />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
