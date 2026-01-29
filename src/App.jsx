import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load all pages (big performance win 🚀)
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Booking = lazy(() => import("./pages/Booking"));
const Contact = lazy(() => import("./pages/Contact"));
const Weather = lazy(() => import("./components/Weather"));

const ACrooms = lazy(() => import("./pages/RoomsType/ACRooms"));
const NonACrooms = lazy(() => import("./pages/RoomsType/NonACRooms"));

const DevgadBeach = lazy(() => import("./pages/attractions/DevgadBeach"));
const DevgadFortAndLighthouse = lazy(() =>
  import("./pages/attractions/DevgadFortAndLighthouse")
);
const VijaydurgFort = lazy(() => import("./pages/attractions/VijaydurgFort"));
const KunkeshwarTemple = lazy(() =>
  import("./pages/attractions/KunkeshwarTemple")
);
const MithmumbariBeach = lazy(() =>
  import("./pages/attractions/MithmumbariBeach")
);

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />

      <Suspense
        fallback={
          <div style={{ textAlign: "center", padding: "40px" }}>
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ac-rooms" element={<ACrooms />} />
          <Route path="/non-ac-rooms" element={<NonACrooms />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/weather" element={<Weather />} />

          <Route path="/attractions/devgad-beach" element={<DevgadBeach />} />
          <Route
            path="/attractions/devgad-fort-lighthouse"
            element={<DevgadFortAndLighthouse />}
          />
          <Route
            path="/attractions/vijaydurg-fort"
            element={<VijaydurgFort />}
          />
          <Route
            path="/attractions/kunkeshwar-temple"
            element={<KunkeshwarTemple />}
          />
          <Route
            path="/attractions/mithmumbari-beach"
            element={<MithmumbariBeach />}
          />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
