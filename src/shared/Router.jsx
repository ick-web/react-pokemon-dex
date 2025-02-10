import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dex from "../pages/Dex";
import Home from "../pages/Home";
import { PokemonDetail } from "../pages/PokemonDetail";
import { PokemonProvider } from "../context/PokemonContext";

export const Router = () => {
  return (
    <BrowserRouter>
    <PokemonProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dex" element={<Dex />} />
        <Route path="/PokemonDetail" element={<PokemonDetail />} />
      </Routes>
    </PokemonProvider>
    </BrowserRouter>
  );
};
export default Router;
