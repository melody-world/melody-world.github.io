import { Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./component/header";
import Footer from "./component/footer";
import Intro from "./page/intro";
import Proejct from "./page/project";
import Gwangmyeong from "./page/gwangmyeong";
import Onebiteword from "./page/onebiteword";
import News from "./page/news";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Gwangmyeong />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/project" element={<Proejct />} />
        <Route path="/findgwangmyeong" element={<Gwangmyeong />} />
        <Route path="/onebiteword" element={<Onebiteword />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
