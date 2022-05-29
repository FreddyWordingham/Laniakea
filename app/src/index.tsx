import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { List } from "./list.tsx";

// function App() {
//     return (
//         <div>
//             <Page />
//         </div>
//     );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

const numbers = [1, 2, 3, 4, 5];
root.render(<List numbers={numbers} />);
