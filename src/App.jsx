import React from "react";
import Hero from "./components/hero/Hero";
import Header from "./components/header/Header";
import "./App.css";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="app">
      <div className="wrap">
        <Header />
        <Hero />
        <About />
        <Footer />
      </div>
    </div>
  );
};

export default App;
