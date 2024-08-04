import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Stats from "./components/Stats";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Products/>
      <Testimonials/>
      <Stats/>
      <Footer/>
    </>
  );
}

export default App;
