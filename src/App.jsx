import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./views/login";
import PlayerDashboard from "./views/player-dashboard";
import Game from "./views/game";
import Instructions from "./views/instructions";
import Leaderboard from "./views/leaderboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/player-dashboard" element={<PlayerDashboard />} />
        <Route path="/game" element={<Game />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </div>
  );
}

export default App;
