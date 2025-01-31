import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./page/HomePage";
import AboutPage from "./page/AboutPage";
import MyAbout from "./page/MyAbout";
import ProjectPage from "./page/ProjectPage";
import GithubPage from "./page/GithubPage";

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="HomePage" element={<HomePage/>}/>
      <Route index element={<HomePage/>}/>
        <Route path="about" element={<AboutPage/>}/>
        <Route path="MyAbout" element={<MyAbout/>}/>
        <Route path="project" element={<ProjectPage/>}/>
        <Route path="github" element={<GithubPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>

)}
export default App;
