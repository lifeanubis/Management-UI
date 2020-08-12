import React from "react";
import SideNav from "./SideNav";
import { Pane } from "evergreen-ui";
import SearchBar from "./SearchBar";

function Deals() {
  return (
    <div className="dashboard">
      <SideNav />
      <Pane>
        <div className="deals-content">
          <SearchBar />
          <div></div>
        </div>
      </Pane>
    </div>
  );
}

export default Deals;
