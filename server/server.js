import React from 'react'
import express from "express";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import Comp from "jeremy-test-lib";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  return res.send(
    renderToString(
      <StaticRouter>
        <Comp/>
        <div> This should render</div>
      </StaticRouter>
    )
  );
});

app.listen(PORT, () => console.log("Listening on " + PORT));
