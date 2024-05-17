import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import CardSection from './components/sections/CardSection';
import FeaturesSection from './components/sections/FeaturesSection';

function App() {
  return (
     <div className="rummy-wrapper">
      <Header/>
      <HeroSection />
      <AboutSection />
      <CardSection />
      <FeaturesSection />
      <Footer/>
     </div>
  );
}

export default App;
