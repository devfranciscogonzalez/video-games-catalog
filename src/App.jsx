import "./styles/global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameDetail from "./components/GameDetail/GameDetail";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games/:gameId" element={<GameDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
