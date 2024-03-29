import { ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <React.StrictMode>
        <ColorModeScript />
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
serviceWorker.unregister();
