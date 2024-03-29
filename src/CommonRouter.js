import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import "./App.css";

import NotFound from "component/error";
import MainLayout from "layout/mainLayout";
import Intro from "./page/intro";
import Project from "./page/project";
import News from "./page/news";
import Main from "page/main";

import SubLayout from "layout/subLayout";
import Gwangmyeong from "./page/gwangmyeong";

export default function CommonRouter() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route exact path="/" element={<Main />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/project" element={<Project />} />
          <Route path="/news" element={<News />} />
          <Route path="/*" element={<NotFound />} />
        </Route>

        <Route element={<SubLayout />}>
          <Route path="/findgwangmyeong" exact element={<Gwangmyeong />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}
