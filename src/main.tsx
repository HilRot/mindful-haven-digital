import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import favicon from "./assets/favicon.ico";

// Set favicon
const link = document.querySelector("link[rel='icon']") || document.createElement("link");
link.rel = "icon";
link.type = "image/x-icon";
link.href = favicon;
if (!document.querySelector("link[rel='icon']")) {
  document.head.appendChild(link);
}

createRoot(document.getElementById("root")!).render(<App />);
