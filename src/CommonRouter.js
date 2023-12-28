import { Routes, Route } from "react-router-dom";

import "./App.css";

import NotFound from "component/error";
import MainLayout from "layout/mainLayout";
import Intro from "./page/intro";
import Project from "./page/project";
import News from "./page/news";
import Main from "page/main";

import SubLayout from "layout/subLayout";
import Privacy from "./page/privacy";
import Gwangmyeong from "./page/gwangmyeong";
import Onebiteword from "./page/onebiteword";

export default function CommonRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route exact path="/" element={<Main />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/project" element={<Project />} />
        <Route path="/news" element={<News />} />
      </Route>
      <Route element={<SubLayout />}>
        <Route path="/:path/privacy" element={<Privacy />} />
        <Route path="/findgwangmyeong" exact element={<Gwangmyeong />} />
        <Route path="/onebiteword" exact element={<Onebiteword />} />
      </Route>

      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
