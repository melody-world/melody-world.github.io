import { Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./component/header";
import Footer from "./component/footer";
import Gwangmyeong from "./page/gwangmyeong";
import News from "./page/news";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Gwangmyeong />} />
        <Route path="gwangmyeong" element={<Gwangmyeong />} />
        <Route path="news" element={<News />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
