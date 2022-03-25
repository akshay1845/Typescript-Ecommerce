import React from "react";
import "./App.css";
import Arrival from "./pages/Arrivals/Arrival";
import Blog from "./pages/blogs/Blog";
import Client from "./pages/clients/Client";
import Feature from "./pages/features/Feature";
import Footer from "./pages/footer/Footer";
import Header from "./pages/header/Header";
import Home from "./pages/home/Home";
import Newsletter from "./pages/newsletter/Newsletter";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Arrival />
      <Feature />
      <Blog />
      <Client />
      <Newsletter />
      <Footer /> 
    </div>
  );
}

export default App;
