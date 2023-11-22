import { Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./component/header";
import Footer from "./component/footer";
import Intro from "./page/intro";
import Project from "./page/project";
import Gwangmyeong from "./page/gwangmyeong";
import Onebiteword from "./page/onebiteword";
import News from "./page/news";
import Privacy from "./page/privacy";

import PROJECT_LIST from "constants/projectData";

export default function App() {
  const hideHeader = PROJECT_LIST.some((item) => window.location.pathname === item.readMore);

  return (
    <>
      {!hideHeader && <Header />}
      <Routes>
        <Route exact path="/" element={<Gwangmyeong />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/project" element={<Project />} />
        <Route path="/findgwangmyeong" element={<Gwangmyeong />} />
        <Route path="/onebiteword" element={<Onebiteword />} />
        <Route path="/news" element={<News />} />

        {/*
         * 개인정보 처리방침 컴포넌트 연결
         * 프로젝트 리스트 readMore 경로 참조, privacy 컴포넌트를 재사용한다.
         */}
        {PROJECT_LIST.map((item) => (
          <Route key={item.id} path={`${item.readMore}/privacy`} element={<Privacy appName={item.projectName} />} />
        ))}
      </Routes>
      <Footer />
    </>
  );
}
