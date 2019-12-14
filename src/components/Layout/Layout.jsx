import React from "react";
import Header from "../Header";
import Container from "../Container";

import "./Layout.css";

export default ({ children, title }) => (
  <div>
    <Header title={title} />
    <main role="main">
      <Container>{children}</Container>
    </main>
  </div>
);
