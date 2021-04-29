import React from "react";
import "./search.css";


export default function Search() {
  return (
    <div className="col-6 city-search">
      <form>
        <input
          type="search"
          placeholder="Search city here"
          className="search-input"
        />
        <button type="submit" class="search-button">
          <i className="fa fa-search"></i>
        </button>
        <button type="submit" class="current-button">
          <i className="fa fa-map-marker"></i>
        </button>
      </form>
    </div>
  );
}
