import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import GameDetail from "./pages/GameDetail/GameDetail";
import Home from "./pages/Home/Home";
import "./styles/global.css";

const router = createBrowserRouter(
  [
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
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

function App() {
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
}

export default App;
