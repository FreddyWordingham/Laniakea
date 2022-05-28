import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Clock } from "./clock.tsx";
import { Toggle } from "./toggle.tsx";
import { LoginControl } from "./login_control.tsx";

function App() {
    return (
        <div>
            <Clock />
            <Toggle />
            <LoginControl />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
