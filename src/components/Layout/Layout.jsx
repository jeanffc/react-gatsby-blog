import React from "react";
import Helmet from "react-helmet";

import Header from "../Header";
import Sidebar from "../Sidebar";
import Container from "../Container";
import "./Layout.css";

import favicon from "../../../static/favicon.png";
import config from "../../../data/config";

export default ({ children, title }) => (
  <div>
    <Helmet>
      <meta name="description" content={config.siteDescription} />
      <link rel="icon" href={favicon} />
    </Helmet>
    <Header title={title} />
    <main role="main">
      <Container>
        {children}
        <aside className="aside">
          <Sidebar
            title="Sobre mim"
            description="Sou um desenvolvedor apaixonado por JavaScript e amo desenvolver produtos que melhoram a vida das pessoas."
          />
          <Sidebar
            title="Sobre o blog"
            description="Neste blog incrível você encontará muito conteúdo de FrontEnd!"
          />
        </aside>
      </Container>
    </main>
  </div>
);
