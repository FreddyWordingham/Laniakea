import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Counter } from "./counter.tsx";

function App() {
    return (
        <div>
            <Counter />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
