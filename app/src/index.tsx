import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Reservation } from "./reservation.tsx";

function App() {
    return (
        <div>
            <Reservation />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
