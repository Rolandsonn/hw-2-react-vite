import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PostsPage from "./pages/PostsPage";
import SinglePage from "./pages/SinglePage";
import Layout from "./pages/Layout";
import Error404 from "./pages/Errors";

import CreatePostPage from "./pages/CreatePostPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="posts" element={<PostsPage />} />
        <Route path="posts/:id" element={<SinglePage />} />
        <Route path="posts/create" element={<CreatePostPage />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}

export default App;
