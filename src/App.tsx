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
import View from "./pages/Arrivals/View"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              
              <Home />
              <Arrival />
              <Feature />
              <Blog />
              <Client />
              <Newsletter />
              <Footer />
            </>
          }
        />
        <Route path="view/:id" element={<View />}/>
      </Routes>
    </div>
  );
}

export default App;
