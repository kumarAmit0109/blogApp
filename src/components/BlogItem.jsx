import { Link } from "react-router-dom";

function BlogItem({ blog }) {
    return (
        <div className="flex flex-col gap-y-2 py-4">
            <Link
                to={`/blog/${blog.id}`}
                className="font-bold text-lg tracking-wide leading-tight hover:underline"
            >
                {blog.title}
            </Link>
            <div>
                <p className="leading-snug">
                    By <span className="italic">{blog.author}</span> on{" "}
                    <Link
                        to={`/categories/${blog.category.replaceAll(" ", "-")}`}
                        className="font-medium underline"
                    >
                        {blog.category}
                    </Link>
                </p>
                <p className="leading-snug">Posted on {blog.date}</p>
            </div>
            <p className="text-lg text-justify tracking-wide leading-tight">
                {blog.content}
            </p>
            <div className="flex flex-wrap items-center gap-x-2.5">
                {blog.tags.map((tag) => (
                    <Link
                        key={tag}
                        to={`/tags/${tag.replaceAll(" ", "-")}`}
                        className="font-medium text-blue-600 tracking-wide leading-snug underline"
                    >{`#${tag}`}</Link>
                ))}
            </div>
        </div>
    );
}

export default BlogItem;
