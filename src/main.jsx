import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BlogsContextProvider from "./contexts/blogs/BlogsContextProvider.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <BlogsContextProvider>
                <App />
            </BlogsContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);
