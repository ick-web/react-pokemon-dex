import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dex from "../pages/Dex";
import Home from "../pages/Home";
import { PokemonDetail } from "../pages/PokemonDetail";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dex" element={<Dex />} />
        <Route path="/PokemonDetail/:id" element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
