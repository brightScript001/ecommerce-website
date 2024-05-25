import React from "react";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import Benefits from "./components/Benefits";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeBanner />
      <Benefits />
      {/* Other components and content */}
    </div>
  );
}

export default App;
