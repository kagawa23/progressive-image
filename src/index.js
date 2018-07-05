import React from "react";
import ReactDOM from "react-dom";
import Progressive from "./img";

function App() {
  return (
    <div className="App">
      <Progressive 
      sImg="http://prod-hsm-assets-iso.oss-us-east-1.aliyuncs.com/i/803c158e-7114-4bb6-b65b-7a522e04f3af/so.jpg?x-oss-process=image/resize,l_20"
      lImg="http://prod-hsm-assets-iso.oss-us-east-1.aliyuncs.com/i/803c158e-7114-4bb6-b65b-7a522e04f3af/so.jpg?x-oss-process=image/resize,l_20"
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
