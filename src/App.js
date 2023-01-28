import Header from "./Layout/Header";
import Advertisement from "./pages/Advertisement";
import Categories from "./pages/Categories";
import Finance from "./pages/Finance";
import Requests from "./pages/Requests";
import Search from "./pages/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/categories" element={<Categories />} />
        <Route path="/search" element={<Search />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/advertisement" element={<Advertisement />} />
        <Route path="/" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
