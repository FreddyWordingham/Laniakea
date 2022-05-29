import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Calculator } from "./calculator.tsx";

function App() {
    return (
        <div>
            <Calculator />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
