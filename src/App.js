import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutSection } from './component/about';
import { ClientsSection } from './component/client';
import { ContactSection } from './component/contact';
import { Footer } from './component/footer';
import { HeroSection } from './component/hero';
import { NavBar } from './component/navbar';
import { ServicesSection } from './component/service';
import { ServicePage } from './component/service/ServicePage';
import ScrollToTop from './component/ScrollToTop';

function Home() {
  return (
    <div>
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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/:serviceId" element={<ServicePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
