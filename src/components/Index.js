import React from "react";
import Tracks from "./searchResult/tracks";
import Search from "./search/search";

export const Index = (props) => {
  return (
    <React.Fragment>
      <Search />
      <Tracks />
    </React.Fragment>
  );
};
