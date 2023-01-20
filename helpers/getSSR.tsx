import React from "react";
import App from "../resources/ts/App";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

const getSSR = (url: string) => {
  return renderToString(
    <StaticRouter location={url}>
      <App url={url} />
    </StaticRouter>
  );
};

export default getSSR;
