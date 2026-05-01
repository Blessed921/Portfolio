import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillSection from './components/SkillSection';
import ProjectGrid from './components/ProjectGrid';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <SkillSection />
        <ProjectGrid />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
