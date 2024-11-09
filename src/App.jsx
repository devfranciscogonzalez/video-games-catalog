import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import GameDetail from "./pages/GameDetail/GameDetail";
import Home from "./pages/Home/Home";
import "./styles/global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorMessage />,
  },
  {
    path: "/games/:gameId",
    element: <GameDetail />,
    errorElement: <ErrorMessage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
