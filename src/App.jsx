import GameList from "./components/GameList/GameList";
import Header from "./components/Header/Header";
import "./styles/global.css";

function App() {
  return (
    <div className="app">
      <Header />
      <GameList />
    </div>
  );
}

export default App;

