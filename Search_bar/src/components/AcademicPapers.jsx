import { useContext } from "react";
import { ApiListContext } from "../Store/api-list-store";

const AcademicPapers = () => {
  const { ApData } = useContext(ApiListContext);

  if (!ApData || Object.keys(ApData).length === 0) {
    return <div className="text-center py-8">Loading...</div>;
  }

  const {
    search_information,
    organic_results,
    pagination,
    related_questions,
    related_searches,
  } = ApData;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search Results</h1>

      {/* Search Information */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <p>
          Total Results: {search_information.total_results.toLocaleString()}
        </p>
        <p>Time Taken: {search_information.time_taken_displayed} seconds</p>
      </div>

      {/* Organic Results */}
      <div className="space-y-6 mb-8">
        <h2 className="text-2xl font-semibold">Organic Results</h2>
        {organic_results.map((result, index) => (
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

      {/* Pagination */}
      <div className="flex justify-center space-x-4 mb-8">
        {pagination.current > 1 && (
          <a
            href={pagination.previous}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Previous
          </a>
        )}
        <span className="px-4 py-2 bg-gray-200 rounded">
          Page {pagination.current}
        </span>
        {pagination.next && (
          <a
            href={pagination.next}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Next
          </a>
        )}
      </div>

      {/* Related Questions */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">People Also Ask</h2>
        <ul className="space-y-4">
          {related_questions.map((question, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold">{question.question}</h3>
              <p className="mt-2">{question.snippet}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Related Searches */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Related Searches</h2>
        <div className="flex flex-wrap gap-4">
          {related_searches.map((search, index) => (
            <a
              key={index}
              href={search.link}
              className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
            >
              {search.query}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicPapers;
