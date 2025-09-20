import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Routes from "./routes/Routes.jsx"
import ReactDOM from "react-dom/client"
import '@fontsource/ubuntu-mono/400.css';
import '@fontsource/ubuntu-mono/700.css';


ReactDOM.createRoot(document.getElementById("root")).render(<Routes />);
