import React from "react";
import Navbar from "./components/Navbar";
import "./components/CSS/Navbar.css";
import Content from "./components/Content";
import "./components/CSS/Content.css";
import Footer from "./components/Footer";
import "./components/CSS/Footer.css";

export default function App() {
  return (
    <div className="ContainerLayout">
      <div className="Navbar">
        <Navbar></Navbar>
      </div>
      <div className="Content">
        <Content></Content>
      </div>
      <div className="Footer">
        <Footer></Footer>
      </div>
    </div>
  );
}
