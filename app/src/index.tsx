import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Clock } from "./clock.tsx";
import { Toggle } from "./toggle.tsx";

function App() {
    return (
        <div>
            <Clock />
            <Toggle />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
