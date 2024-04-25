import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import TagPage from "./pages/TagPage.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/blog/:blogId" element={<BlogPage />}></Route>
            <Route
                path="/categories/:category"
                element={<CategoryPage />}
            ></Route>
            <Route path="/tags/:tag" element={<TagPage />}></Route>
        </Routes>
    );
}

export default App;
