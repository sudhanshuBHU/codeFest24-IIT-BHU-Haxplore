import React from "react";
import Main from "./Main";
import CardSection from './CardSection';
export default function MainApp() {
    return (
        <div className="App w-100">
            <div className="main w-100">
                <Main />
                <CardSection />
            </div>
        </div>
    );
}