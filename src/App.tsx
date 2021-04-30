import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import RankingPage from './components/rankingComponents/RankingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="ranking" element={<RankingPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
