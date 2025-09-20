import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Routes from "./routes"
import ReactDOM from "react-dom/client"


ReactDOM.createRoot(document.getElementById("root")).render(<Routes />);
