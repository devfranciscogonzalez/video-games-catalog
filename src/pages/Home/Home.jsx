import GameList from "../../components/GameList/GameList";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      {/* <Header /> */}
      <GameList />;
    </>
  );
}
