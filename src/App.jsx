import React from "react";
import Navbar from "./Component/Navbar";
import About from "./Component/About";
import Project from "./Component/Project";
import Footer from "./Component/Footer";
import SocialBar from "./Component/Socialbar";
import Landing from "./Component/Landing";

function App() {
  return (
    <>
      <Landing />
      <div className="app-layout">
        <SocialBar />
        <nav className="sidebar-container">
          <Navbar />
        </nav>
        <main className="main-content">
          <About />
          <Project />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
