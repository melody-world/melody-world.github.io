import { Routes, Route, Switch } from "react-router-dom";

import "./App.css";

import Header from "./component/header";
import Footer from "./component/footer";
import Intro from "./page/intro";
import Project from "./page/project";
import Gwangmyeong from "./page/gwangmyeong";
import Onebiteword from "./page/onebiteword";
import News from "./page/news";
import Privacy from "./page/privacy";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Gwangmyeong />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/project" element={<Project />} />
        <Route path="/findgwangmyeong" element={<Gwangmyeong />} />
        <Route path="/onebiteword" element={<Onebiteword />} />
        <Route path="/news" element={<News />} />
        <Route path="/findgwangmyeong/privacy" element={<Privacy appName="광명찾자 - 아파트 실거래가 조회" />} />
        <Route path="/onebiteword/privacy" element={<Privacy appName="한입단어" />} />
      </Routes>
      <Footer />
    </>
  );
}
