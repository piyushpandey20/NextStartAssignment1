import "./App.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-amber-50 to-amber-200">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
