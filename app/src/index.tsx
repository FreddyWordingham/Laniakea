import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { File } from "./file.tsx";

function App() {
    return (
        <div>
            <File />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
