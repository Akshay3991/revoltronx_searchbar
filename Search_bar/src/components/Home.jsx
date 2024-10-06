import { useContext } from "react";
import { ApiListContext } from "../Store/api-list-store";

const Home = () => {
  const { YuData, AbData, ApData } = useContext(ApiListContext);
  return <div className="text-white bg-[black]">
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-white">Search Results</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {YuData && YuData.items && YuData.items.map((video) => (
          <div key={video.id.videoId} className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-white">{video.snippet.title}</h2>
              <p className="text-gray-400 mb-4">{video.snippet.description}</p>
              <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer" className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">Watch Video</a>
            </div>
          </div>
        ))}
        {AbData && AbData.items && AbData.items.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600 mb-4">{item.snippet}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read More</a>
          </div>
        ))}
        {ApData && ApData.organic_results && ApData.organic_results.map((result, index) => (
          <div key={index} className="border-b pb-4">
            <h3 className="text-xl font-semibold text-blue-600">
              <a href={result.link} target="_blank" rel="noopener noreferrer">{result.title}</a>
            </h3>
            <p className="text-green-700 text-sm">{result.displayed_link}</p>
            <p className="mt-2">{result.snippet}</p>
          </div>
        ))}
      </div>
    </div>
  </div>;
};

export default Home;
