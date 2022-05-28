import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function App() {
    return (
        <div>
            <Welcome name="Sara" /> <Welcome name="Cahal" />{" "}
            <Welcome name="Edite" />{" "}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
const element = <App />;
root.render(element);
