import PropTypes from "prop-types";

const SearchBar = ({ handleSearch, search, setSearch }) => {
  return (
    // <div className="gcse-search"></div>

    <div className="bg-[whitesmoke] p-5 w-[50%] flex justify-center items-center rounded-lg">
      <input
        className="w-[80%] p-2 rounded-lg"
        type="text"
        value={search}
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="bg-[blue] text-white p-2 rounded-lg"
        onClick={() => handleSearch(search)}
      >
        Search
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default SearchBar;
