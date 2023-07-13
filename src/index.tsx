import "bulmaswatch/superhero/bulmaswatch.min.css";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import CodeCell from "./components/code-cell"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const App = () => {

  return (
    <div>
      <CodeCell />  
    </div>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
