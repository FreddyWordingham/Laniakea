import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

function format_name(user) {
    return user.first_name + " " + user.last_name;
}

const user = {
    first_name: "f",
    last_name: "word",
};

const element = <h1>Hello, {format_name(user)}</h1>;

if (user) {
    root.render(element);
}
