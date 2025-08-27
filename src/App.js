import './App.css';
import { AboutSection } from './component/about';
import { ClientsSection } from './component/client';
import {ContactSection} from './component/contact';
import { Footer } from './component/footer';
import { HeroSection } from './component/hero';
// import { Mobile } from './component/Mobile';
import { NavBar } from './component/navbar';
import { ServicesSection } from './component/service';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
