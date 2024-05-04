import React from "react";
import ReactDOM from "react-dom/client";

import { Card } from "./components/Cards.jsx";
import "./components/Cards.css";
import "./styles/main.css";
import "./styles/header.css";
import "./styles/headerIcons.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Card />
  </React.StrictMode>
);
