import React from "react";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import Benefits from "./components/Benefits";
import ProductSection from "./components/ProductSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeBanner />
      <Benefits />
      <ProductSection />
    </div>
  );
}

export default App;
