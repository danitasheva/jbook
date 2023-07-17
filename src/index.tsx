import "bulmaswatch/superhero/bulmaswatch.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import { store } from "./store";

import CodeCell from "./components/code-cell";
import TextEditor from "./components/text-editor";
import CellList from "./components/cell-list";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const App = () => {

  return (
    <Provider store={store} >
    <div>
      {/* <CodeCell />   */}
      {/* <TextEditor /> */}
      <CellList />
    </div>
    </Provider>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
