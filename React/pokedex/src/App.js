import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Pokemon from './Pokemon';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home />}>
        </Route>
        <Route path="/pokemon/:id" element={<Pokemon />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
