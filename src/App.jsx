import Navbar from './components/Navbar';
import Contact from './sections/Contact';
import Features from './sections/Features';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Pricing from './sections/Pricing';
import Programs from './sections/Programs';
import Testimonials from './sections/Testimonials';
import Trainers from './sections/Trainers';

function App() {
  return (
    <div className='min-h-screen bg-dark-900'>
      <Navbar />
      <Hero />
      <Features />
      <Programs />
      <Trainers />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
