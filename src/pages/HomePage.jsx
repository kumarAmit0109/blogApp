import { useLocation, useSearchParams } from "react-router-dom";
import Header from "../components/Header.jsx";
import Pagination from "../components/Pagination.jsx";
import { useContext, useEffect } from "react";
import BlogsContext from "../contexts/blogs/BlogsContext.js";
import Loading from "../components/Loading.jsx";
import Error from "../components/Error.jsx";
import NoBlogsFound from "../components/NoBlogsFound.jsx";
import BlogItem from "../components/BlogItem.jsx";

function HomePage() {
    const { blogs, loading, error, getBlogsData } = useContext(BlogsContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

    useEffect(() => {
        const pageQuery = searchParams.get("page") ?? 1;
        getBlogsData(Number(pageQuery));
    }, [location.search]);

    return (
        <div className="w-full min-h-screen overflow-x-hidden overflow-y-auto">
            <Header />
            <div className="w-11/12 md:w-10/12 max-w-3xl mx-auto">
                {loading ? (
                    <Loading />
                ) : error ? (
                    <Error />
                ) : !blogs || blogs.length === 0 ? (
                    <NoBlogsFound />
                ) : (
                    <div className="py-20">
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

export default HomePage;
