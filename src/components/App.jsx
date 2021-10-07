import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import Slides from "./Slides";
import Contact from "./Contact";
import Pricing from "./Pricing";

function App() {
  return (
    <div>
      <Header />
      <Body />
      <Pricing />
      <Slides />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
