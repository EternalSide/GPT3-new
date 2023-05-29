import React from "react";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <div class="item" data-aos="fade-up" data-aos-once="false">
        <WhatGPT3 />
      </div>
      <div class="item" data-aos="fade-up" data-aos-once="true">
        <Features />
      </div>
      <div class="item" data-aos="fade-up" data-aos-once="true">
        <Possibility />
      </div>
      <div class="item" data-aos="fade-up" data-aos-once="true">
        <CTA />
      </div>
      <div class="item" data-aos="fade-up" data-aos-once="true">
        <Blog />
      </div>
      <div class="item" data-aos="fade-up" data-aos-once="true">
        <Footer />
      </div>
    </div>
  );
};

export default App;
