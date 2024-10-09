import SearchBar from "./SearchBar";
import { useState, useContext } from "react";
import SearchResults from "./SearchResults";
import { ApiListContext } from "../Store/api-list-store";

function Permanents() {
  const { addYuData, addABdata, addAcData } = useContext(ApiListContext);
  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const apiKey = "AIzaSyBhUVSglPuAa-XteurjJu1yqn2yG2i8Hcc"; //google api key
  const cseId = "421347851371144cf"; //google custom search engine id

  const [searchValue, setSearchValue] = useState("relevance");
  const [searchBy, setSearchBy] = useState({
    relevance: true,
    viewCount: false,
    rating: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked, value } = event.target;
    setSearchBy((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
    setSearchValue(value);
  };

  const rankResults = (results) => {
    // Custom ranking logic based on likes, relevance, and view count
    return results.sort((a, b) => {
      const aScore =
        (a.likes || 0) + (a.viewCount || 0) + (a.relevance ? 1 : 0);
      const bScore =
        (b.likes || 0) + (b.viewCount || 0) + (b.relevance ? 1 : 0);
      return bScore - aScore; // Descending order
    });
  };

  const fetchYdata = async () => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&q=${searchQuery}&type=video&order=${searchValue}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const rankedData = rankResults(data.items); // Assuming data.items contains the results
        addYuData(rankedData);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const fetchAbdata = async () => {
    fetch(
      `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cseId}&q=${searchQuery}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const rankedData = rankResults(data.items); // Assuming data.items contains the results
        addABdata(rankedData);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const fetchApdata = async () => {
    fetch(`http://localhost:3000/?query=${searchQuery}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const rankedData = rankResults(data.items); // Assuming data.items contains the results
        addAcData(rankedData);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const handleSearch = (value) => {
    setSearchQuery(value);
    fetchYdata();
    fetchAbdata();
    fetchApdata();
    setSearch("");
    setSearchQuery("");
  };
  return (
    <div className="bg-[black] w-[100%] h-[100%]">
      <div className="flex p-10 justify-center items-center">
        <SearchBar
          handleSearch={handleSearch}
          search={search}
          setSearch={setSearch}
        />
      </div>
      <div className="flex  border-t-4 border-white justify-center items-center">
        <SearchResults
          searchBy={searchBy}
          handleCheckboxChange={handleCheckboxChange}
          fetchYdata={fetchYdata}
          fetchAbdata={fetchAbdata}
          fetchApdata={fetchApdata}
        />
      </div>
    </div>
  );
}
export default Permanents;
