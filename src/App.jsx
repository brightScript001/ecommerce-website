import React from "react";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import Benefits from "./components/Benefits";
import ProductSection from "./components/ProductSection";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeBanner />
      <Benefits />
      <ProductSection />
      <Blog />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
