import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import { AiFillHome } from "react-icons/ai";

const SearchResults = ({
  fetchYdata,
  fetchAbdata,
  fetchApdata,
  searchBy,
  handleCheckboxChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex bg-[whitesmoke] w-[100vw] h-[5vh]">
      <div className="w-[20%] p-2">
        <Link to="/" className="font-bold">
          <AiFillHome />
        </Link>
      </div>
      <div className="flex font-black justify-evenly w-[80%]">
        <Link to="/videos" onClick={() => fetchYdata()}>
          Videos
        </Link>
        <Link to="/articles" onClick={() => fetchAbdata()}>
          Articles
        </Link>
        <Link to="/blogposts" onClick={() => fetchAbdata()}>
          Blog Posts
        </Link>
        <Link to="/academicpapers" onClick={() => fetchApdata()}>
          Academic Papers
        </Link>
      </div>
      <div className="p-2 w-[20%] relative">
        <button
          className="w-full p-1 rounded bg-white text-left font-bold"
          onClick={() => setIsOpen(!isOpen)}
        >
          Search By ▼
        </button>
        {isOpen && (
          <div className="absolute top-full left-0 w-full p-1 rounded bg-white shadow-md">
            <div>
              <input
                type="checkbox"
                id="relevance"
                name="relevance"
                value="relevance"
                checked={searchBy.relevance}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="relevance" className="ml-1">
                Relevance
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="viewCount"
                name="viewCount"
                value="viewCount"
                checked={searchBy.viewCount}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="viewCount" className="ml-1">
                Views
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="rating"
                name="rating"
                value="rating"
                checked={searchBy.rating}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="rating" className="ml-1">
                Likes
              </label>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

SearchResults.propTypes = {
  fetchYdata: PropTypes.func.isRequired,
  fetchAbdata: PropTypes.func.isRequired,
  fetchApdata: PropTypes.func.isRequired,
  searchBy: PropTypes.string.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired, // Add this line
};

export default SearchResults;
