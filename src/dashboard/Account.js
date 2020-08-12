import React from "react";
import SideNav from "./SideNav";
import { Pane, Heading, Text } from "evergreen-ui";
import SearchBar from "./SearchBar";
import immage from "./11.jpg";

function Account() {
  return (
    <div>
      <Pane display="grid" gridTemplateColumns="60px auto">
        <Pane>
          <img src={immage} className="account-img" />
        </Pane>
        <Pane>
          <Heading size={400} color="ivory">
            Shreyansh Sharma
          </Heading>
          <Text color="ivory" size={300}>
            shreyanshsharma20@gmail.com
          </Text>
        </Pane>
      </Pane>
    </div>
  );
}

export default Account;
