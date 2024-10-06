import { useContext, useState, useEffect } from "react";
import { ApiListContext } from "../Store/api-list-store";

const Yvideos = () => {
  const { YuData, updateYList } = useContext(ApiListContext);
  const [pageToken, setPageToken] = useState("");
  const API_KEY = "AIzaSyBhUVSglPuAa-XteurjJu1yqn2yG2i8Hcc";

  useEffect(() => {
    if (YuData && YuData.nextPageToken) {
      setPageToken(YuData.nextPageToken);
    }
  }, [YuData]);

  const fetchNextPage = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&pageToken=${pageToken}&maxResults=10`
      );
      const data = await response.json();
      updateYList({
        items: [...YuData.items, ...data.items],
        nextPageToken: data.nextPageToken,
      });
      setPageToken(data.nextPageToken);
    } catch (error) {
      console.error("Error fetching next page:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-white">YouTube Videos</h1>
      {YuData && YuData.items && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {YuData.items.map((video) => (
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
        </div>
      )}
      {YuData && YuData.nextPageToken && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={fetchNextPage}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Yvideos;
