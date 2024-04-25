import { useContext, useEffect } from "react";
import BlogsContext from "../contexts/blogs/BlogsContext.js";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header.jsx";
import BlogItem from "../components/BlogItem";
import Loading from "../components/Loading.jsx";
import Error from "../components/Error.jsx";

function BlogPage() {
    const { blog, loading, error, getBlogDataByBlogId } =
        useContext(BlogsContext);
    const { blogId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        getBlogDataByBlogId(blogId);
    }, [location.pathname]);

    return (
        <div className="w-full min-h-screen overflow-x-hidden overflow-y-auto">
            <Header />
            <div className="w-11/12 md:w-10/12 max-w-3xl mx-auto pt-24 pb-2">
                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="text-lg tracking-wide border-2 border-gray-300 rounded-md px-2.5 py-0.5"
                >
                    Back
                </button>
            </div>
            <div className="w-11/12 md:w-10/12 max-w-3xl mx-auto">
                {loading ? (
                    <Loading />
                ) : error ? (
                    <Error />
                ) : (
                    blog && (
                        <>
                            <BlogItem blog={blog.blog} />
                            {blog.relatedBlogs.length > 0 && (
                                <>
                                    <p className="font-bold text-3xl pt-4">
                                        Related Blogs
                                    </p>
                                    {blog.relatedBlogs.map((blog) => (
                                        <BlogItem key={blog.id} blog={blog} />
                                    ))}
                                </>
                            )}
                        </>
                    )
                )}
            </div>
        </div>
    );
}

export default BlogPage;
