import { useContext } from "react";
import { ApiListContext } from "../Store/api-list-store";

const BlogPosts = () => {
  const { AbData } = useContext(ApiListContext);

  return (
    <div className="container mx-auto px-4 py-8">
      {AbData && AbData.items ? (
        <>
          <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AbData.items.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600 mb-4">{item.snippet}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
          {AbData.queries && AbData.queries.nextPage && (
            <div className="flex justify-center mt-8">
              <nav className="inline-flex rounded-md shadow">
                {AbData.queries.previousPage && (
                  <a
                    href="#"
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50"
                  >
                    Previous
                  </a>
                )}
                <span className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300">
                  Page {AbData.queries.request[0].startIndex / 10 + 1}
                </span>
                <a
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50"
                >
                  Next
                </a>
              </nav>
            </div>
          )}
        </>
      ) : (
        <p className="text-center text-gray-600">No blog posts found.</p>
      )}
    </div>
  );
};

export default BlogPosts;
