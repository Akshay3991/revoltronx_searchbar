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
        addYuData(data);
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
        addABdata(data);
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
        addAcData(data);
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
