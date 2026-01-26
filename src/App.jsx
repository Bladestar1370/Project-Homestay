import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Weather from './components/Weather';
import Home from './pages/Home';
import About from './pages/About';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import ACrooms from './pages/RoomsType/ACRooms';   
import NonACrooms from './pages/RoomsType/NonACRooms';
import DevgadBeach from './pages/attractions/DevgadBeach';
import DevgadFortAndLighthouse from './pages/attractions/DevgadFortAndLighthouse';
import VijaydurgFort from './pages/attractions/VijaydurgFort';
import KunkeshwarTemple from "./pages/attractions/KunkeshwarTemple";
import MithmumbariBeach from './pages/attractions/MithmumbariBeach';
import ScrollToTop from './components/ScrollToTop';



function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ac-rooms" element={<ACrooms />} />
        <Route path="/non-ac-rooms" element={<NonACrooms />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/attractions/devgad-beach" element={<DevgadBeach />} />
        <Route path="/attractions/devgad-fort-lighthouse" element={<DevgadFortAndLighthouse />} />
        <Route path="/attractions/vijaydurg-fort" element={<VijaydurgFort />} />
        <Route path="/attractions/kunkeshwar-temple" element={<KunkeshwarTemple />} />
        <Route path="/attractions/mithmumbari-beach" element={<MithmumbariBeach />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
