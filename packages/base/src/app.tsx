import "./main.module.scss";
import React from "react";
import { ButtonC } from 'shared/types/button';
const Button = React.lazy(() => import('child-mf/button')) as ButtonC;

export const App = () => {
    const onClick = () => {
        alert('Hello');
    };

    return (
        <div className="app">
            <h1>Lazy button below</h1>

            <React.Suspense fallback="Loading...">
                <Button onClick={onClick}>Works</Button>
            </React.Suspense>
        </div>
    );
};