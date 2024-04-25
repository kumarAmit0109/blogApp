import { useState } from "react";
import BlogsContext from "./BlogsContext.js";
import { useNavigate } from "react-router-dom";

const BlogsContextProvider = ({ children }) => {
    const [blog, setBlog] = useState(null);
    const [blogs, setBlogs] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(null);
    const [totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate();

    const getBlogsData = async (pageNo = 1, tag = null, category = null) => {
        let url = `https://codehelp-apis.vercel.app/api/get-blogs?page=${pageNo}`;

        if (tag) {
            url += `&tag=${tag}`;
        }

        if (category) {
            url += `&category=${category}`;
        }

        try {
            setLoading(true);
            setError(null);
            const response = await fetch(url);
            const data = await response.json();
            setBlogs(data.posts);
            setPage(data.page);
            setTotalPages(data.totalPages);
        } catch (error) {
            setError("Something went wrong");
            setBlogs(null);
            setPage(null);
            setTotalPages(null);
        } finally {
            setLoading(false);
        }
    };

    const getBlogDataByBlogId = async (blogId) => {
        const url = `https://codehelp-apis.vercel.app/api/get-blog?blogId=${blogId}`;
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(url);
            const data = await response.json();
            setBlog(data);
        } catch (error) {
            setError("Something went wrong");
            setBlog(null);
        } finally {
            setLoading(false);
        }
    };

    const handlePageChange = (pageNo) => {
        navigate({ search: `?page=${pageNo}` });
        setPage(pageNo);
    };

    const value = {
        blog,
        blogs,
        loading,
        error,
        page,
        totalPages,
        getBlogsData,
        getBlogDataByBlogId,
        handlePageChange,
    };

    return (
        <BlogsContext.Provider value={value}>{children}</BlogsContext.Provider>
    );
};

export default BlogsContextProvider;
