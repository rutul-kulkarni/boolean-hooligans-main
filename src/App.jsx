import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./views/login";
import PlayerDashboard from "./views/player-dashboard";
import Game from "./views/game";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/player-dashboard" element={<PlayerDashboard />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
