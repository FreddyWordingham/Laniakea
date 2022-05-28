import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Clock } from "./clock.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

function tick() {
    root.render(<Clock date={new Date()} />);
}
setInterval(tick, 1000);
