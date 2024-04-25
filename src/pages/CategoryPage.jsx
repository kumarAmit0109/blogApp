import { useContext, useEffect } from "react";
import {
    useLocation,
    useNavigate,
    useParams,
    useSearchParams,
} from "react-router-dom";
import BlogsContext from "../contexts/blogs/BlogsContext.js";
import Loading from "../components/Loading.jsx";
import Error from "../components/Error.jsx";
import NoBlogsFound from "../components/NoBlogsFound.jsx";
import BlogItem from "../components/BlogItem.jsx";
import Pagination from "../components/Pagination.jsx";
import Header from "../components/Header.jsx";

function CategoryPage() {
    const { blogs, loading, error, getBlogsData } = useContext(BlogsContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const { category } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const pageQuery = searchParams.get("page") ?? 1;
        getBlogsData(Number(pageQuery), null, category.replaceAll("-", " "));
    }, [location.search, location.pathname]);

    return (
        <div className="w-full min-h-screen overflow-x-hidden overflow-y-auto">
            <Header />
            <div className="w-11/12 md:w-10/12 max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-x-4 gap-y-3 pt-24 pb-2">
                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="text-lg tracking-wide border-2 border-gray-300 rounded-md px-2.5 py-0.5"
                >
                    Back
                </button>
                <p className="font-semibold text-2xl">
                    Blogs on {category.replaceAll("-", " ")}
                </p>
            </div>
            <div className="w-11/12 md:w-10/12 max-w-3xl mx-auto">
                {loading ? (
                    <Loading />
                ) : error ? (
                    <Error />
                ) : !blogs || blogs.length === 0 ? (
                    <NoBlogsFound />
                ) : (
                    <div className="pb-20">
                        {blogs.map((blog) => (
                            <BlogItem key={blog.id} blog={blog} />
                        ))}
                    </div>
                )}
            </div>
            {!error && blogs && <Pagination />}
        </div>
    );
}

export default CategoryPage;
