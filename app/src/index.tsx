import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BoilingCalculator } from "./boiling_calculator.tsx";

function App() {
    return (
        <div>
            <BoilingCalculator />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
