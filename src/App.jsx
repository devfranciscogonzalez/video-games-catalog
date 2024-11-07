import GameList from "./components/GameList/GameList";
// import Header from "./components/Header/Header";
import "./styles/global.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameDetail from "./components/GameDetail/GameDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GameList />} />
        <Route path="/games/:gameId" element={<GameDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

