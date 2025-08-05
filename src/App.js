import './App.css';
import { About } from './component/about';
import ContactForm from './component/contact';
import { Footer } from './component/footer';
import { Hero } from './component/hero';
import { Mobile } from './component/Mobile';
import { NavBar } from './component/navbar';
import { Service } from './component/service';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Mobile />
      <About />
      <Service />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
