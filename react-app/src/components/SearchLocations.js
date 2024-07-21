import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";
import { getOneLocation } from "../store/locations";
// import { tickerList } from './assets';
// import './Search.css';

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationsShown, setLocationsShown] = useState([]);
  const locations = useSelector((state) => state.locations);
  let history = useHistory();

  let locationsRegex = new RegExp(searchQuery, "i");

  const filterLocations = () => {
    if (searchQuery.length > 0) {
      let newData = locations.filter((location) => {
        return locationsRegex.test(newData);
      });
      if (newData.length > 9) newData.length = 9;
      setLocationsShown(newTickers);
    } else if (searchQuery.length === 0) {
      setTickersShown([]);
    }
  };

  function handleClick() {
    history.push(`/search-results/${searchQuery}`);
    setSearchQuery("");
    window.location.reload(false);
  }

  function handleClickSuggestions(location) {
    history.push(`/search-results/${location}`);
    setSearchQuery("");
    window.location.reload(false);
  }

  useEffect(() => {
    locationsRegex = new RegExp("^" + searchQuery, "i");
    filterLocations();
  }, [searchQuery]);

  return (
    <div>
      <div>
        <div>
          <input
            value={searchQuery}
            onInput={(e) => setSearchQuery(e.target.value)}
            type="search"
            id="search-form"
            class="search-bar-input"
            placeholder="Search..."
            autoComplete="off"
          />
        </div>
        {/* <button
          type="button"
          className="search-button"
          onClick={handleClick}
        >
          <i class="search-icon">search</i>
        </button> */}
      </div>
      {searchQuery && (
        <div className="suggested-search-box">
          {/* {tickersShown} */}
          {locationsShown.map((location) => (
            <span
              onClick={() => {
                handleClickSuggestions(location);
              }}
            >
              {location}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
export default Search;
