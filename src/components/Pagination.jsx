import { useContext } from "react";
import BlogsContext from "../contexts/blogs/BlogsContext.js";

function Pagination() {
    const { page, totalPages, handlePageChange } = useContext(BlogsContext);
    return (
        <div className="bg-white fixed left-0 right-0 bottom-0 border-t-2 border-gray-300 py-4">
            <div className="w-11/12 md:w-10/12 max-w-3xl mx-auto flex justify-between items-center gap-x-2">
                <div className="flex items-center gap-x-2 sm:gap-x-4">
                    {page > 1 && (
                        <button
                            type="button"
                            onClick={() => handlePageChange(page - 1)}
                            className="tracking-wide border-2 border-gray-300 rounded-md px-2.5 py-0.5"
                        >
                            Previous
                        </button>
                    )}
                    {page < totalPages && (
                        <button
                            type="button"
                            onClick={() => handlePageChange(page + 1)}
                            className="tracking-wide border-2 border-gray-300 rounded-md px-2.5 py-0.5"
                        >
                            Next
                        </button>
                    )}
                </div>
                <p className="font-medium">
                    Page {page} of {totalPages}
                </p>
            </div>
        </div>
    );
}

export default Pagination;
