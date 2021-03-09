import React from "react";

import "../style/objects/container.css";
import "../style/objects/row.css";

import "../style/components/header.css";

const AppHeader = () => {
  return (
    <div className="o-row ">
      <header className="o-container">
        <h1 className="c-header__welcome">hello, {"Marty"}</h1>
        <h2 className="c-header__description">There are {8} todos left.</h2>
      </header>
    </div>
  );
};

export default AppHeader;
