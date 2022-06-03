import ReactDOM from "react-dom";
import App from "./App";

const rootNode = document.querySelector("#root");

if (!rootNode) throw new Error("not Find Root node.");

ReactDOM.render(<App />, rootNode);
