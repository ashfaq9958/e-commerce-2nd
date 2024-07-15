import React from "react";
import MainNavigation from "./components/Main_Navigation/MainNavigation";
import UnAuthorized_Navigation from "./components/UnAuth_Nav/Navigation/UnAuthorized_Navigation";

const Root = () => {
  return (
    <div>
      {/* <MainNavigation /> */}
      <UnAuthorized_Navigation />
    </div>
  );
};

export default Root;