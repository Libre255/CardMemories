import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import Menu from "./menu/Menu";
import RankingPage from "./ranking/components/RankingPage";
import "animate.css";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="ranking" element={<RankingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
