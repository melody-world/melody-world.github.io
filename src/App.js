import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";

import './App.css';

import Header from './component/header';
import Footer from './component/footer';
import Gwangmyeong from './page/gwangmyeong';
import News from './page/news';

function App() {
  return (
    <>
      <HashRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Gwangmyeong/>}/>
          <Route path="/gwangmyeong" element={<Gwangmyeong/>}/>
          <Route path="/news" element={<News/>}/>
        </Routes>
      </HashRouter>

      <Footer/>
    </>
  );
}

export default App;
