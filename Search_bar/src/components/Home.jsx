import { useContext, useState } from "react";
import { ApiListContext } from "../Store/api-list-store";

const Home = () => {
  const { YuData, AbData, ApData } = useContext(ApiListContext);
  const [currentPage, setCurrentPage] = useState(1); // Added state for current page
  const itemsPerPage = 6; // Define how many items to show per page

  // Calculate the current items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentYuData =
    YuData?.items?.slice(indexOfFirstItem, indexOfLastItem) || [];
  const currentAbData =
    AbData?.items?.slice(indexOfFirstItem, indexOfLastItem) || [];
  const currentApData =
    ApData?.organic_results?.slice(indexOfFirstItem, indexOfLastItem) || [];

  // Calculate total pages
  const totalPages = Math.ceil((YuData?.items?.length || 0) / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="text-white bg-[black]">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentYuData.map((video) => (
            <div
              key={video.id.videoId}
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-white">
                  {video.snippet.title}
                </h2>
                <p className="text-gray-400 mb-4">
                  {video.snippet.description}
                </p>
                <a
                  href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                >
                  Watch Video
                </a>
              </div>
            </div>
          ))}
          {currentAbData.map((item, index) => (
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
          {currentApData.map((result, index) => (
            <div key={index} className="border-b pb-4">
              <h3 className="text-xl font-semibold text-blue-600">
                <a href={result.link} target="_blank" rel="noopener noreferrer">
                  {result.title}
                </a>
              </h3>
              <p className="text-green-700 text-sm">{result.displayed_link}</p>
              <p className="mt-2">{result.snippet}</p>
            </div>
          ))}
        </div>
        {/* Pagination Controls */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === index + 1
                  ? "bg-red-600 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
