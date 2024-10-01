import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
function Permanents() {
  return (
    <div className="bg-[black] w-[100%] h-[100%]">
      <div className="flex p-10 justify-center items-center">
        <SearchBar />
      </div>
      <div className="flex  border-t-4 border-white justify-center items-center">
        <SearchResults />
      </div>
    </div>
  );
}

export default Permanents;
