import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Menu from "./components/Menu";
import RankingPage from "./components/rankingComponents/RankingPage";
import "./css/main.css";
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
