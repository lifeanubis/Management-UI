import React from "react";
import { NotificationsIcon } from "evergreen-ui";

function SearchBar() {
  return (
    <div>
      <header className="header">
        <div className="search-bar">
          <input placeholder="Global Search" className="search-bar" />
        </div>
        <div className="notice">
          <NotificationsIcon size="25px" />
        </div>
      </header>
    </div>
  );
}

export default SearchBar;
