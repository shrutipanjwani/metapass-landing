import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <head>
        <script async defer data-website-id="b3639a29-71de-454d-b6b4-59dfc3d5e5bf" src="https://analytics.metapasshq.xyz/umami.js"
        ></script>
      </head>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
