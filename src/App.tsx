import React from 'react';
import './App.css';
import Home from './pages/Home.tsx';
import Jogando from './pages/Jogando.tsx';
import { Routes, Route, Link } from 'react-router-dom';
import Parabens from './pages/Parabens.tsx';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jogo/:year" element={<Jogando />} />
        <Route path="/parabens" element={<Parabens />} />
      </Routes>
    </div>
  );
}
