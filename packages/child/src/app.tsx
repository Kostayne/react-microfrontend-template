import Button from "./components/button";
import React from "react";
import "./main.module.scss";

export const App = () => {
    return (
        <div className="app">
            <h2>Child component!</h2>
            <Button>Where the styles!</Button>
        </div>
    );
};