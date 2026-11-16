import './App.css';
import { Header } from './Components/Header';
import { HeroSection } from './Components/HeroSection';
import { AboutSection } from './Components/AboutSection';
import { ProductSection } from './Components/ProductSection';
import { Footer } from './Components/Footer';

function App() {

  const makeAnEnquiry = () => {
    const phoneNumber = "2347038017176";

    const message = `Hello, I'm interested in what you sell. Please provide more details.`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  }


  return (
    <>

      <Header />
      <HeroSection  whatsapplink={makeAnEnquiry} />
      <AboutSection />
      <ProductSection />
      <Footer whatsapplink={makeAnEnquiry} />
    </>

  );
}

export default App
